import react, { useEffect, useState } from 'react';
import { dragDesktop } from '../../util/dragDesktop';
import { Container } from './styles';

import { api } from '../../services/api';

interface Themes {
  'id': string;
  'name': string;
}

dragDesktop('scroll-container');

const Categories = (): JSX.Element => {
  const [themes, setThemes] = useState<Themes[]>([]);

  useEffect(() => {
    async function loadProjectsThemes() {
      api.get('projectservice/themes?api_key=e2051e82-d596-408f-b6da-c1deefcdc07b')
        .then(res => setThemes(res.data.themes.theme))
    }

    console.log(themes);
    loadProjectsThemes();
  }, [])

  return (
    <Container id="scroll-container">
      {themes.map(theme => (
        <div className="card">
          <div className="img"></div>
          <p>{theme.name}</p>
        </div>
      ))}
    </Container>
  )
}

export default Categories;