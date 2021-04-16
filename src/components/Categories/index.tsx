import { useEffect, useState } from 'react';
import { dragDesktop } from '../../util/dragDesktop';
import { Container } from './styles';

import { api } from '../../services/api';

interface Themes {
  'id': string;
  'name': string;
}

const Categories = (): JSX.Element => {
  const [themes, setThemes] = useState<Themes[]>([]);

  useEffect(() => {
    async function loadProjectsThemes() {
      api.get('projectservice/themes?api_key=e2051e82-d596-408f-b6da-c1deefcdc07b')
        .then(res => setThemes(res.data.themes.theme))
    }

    loadProjectsThemes();
  }, [])
  
  dragDesktop('scroll-container');

  return (
    <Container>
      <div className="head">
        <h1>categories</h1>
        <div className="input">
          <input type="text"placeholder="search" />
          <div className="search-icon"></div>
        </div>
      </div>
      <div id="scroll-container" className="theme-list">
        {themes.map(theme => (
          <div className="card">
            <div className={"img " + theme.name}></div>
            <p>{theme.name}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Categories;