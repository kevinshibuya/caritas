import { useEffect, useState } from 'react';
import { dragDesktop } from '../../util/dragDesktop';
import { Container } from './styles';
import searchIcon from '../../assets/search.svg';

import { api } from '../../services/api';

interface Themes {
  id: string;
  name: string;
  replace: any;
}

const Categories = (): JSX.Element => {
  const [themes, setThemes] = useState<Themes[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function loadProjectsThemes() {
      await api.get('projectservice/themes?api_key=e2051e82-d596-408f-b6da-c1deefcdc07b')
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
          <input
            type="text"
            placeholder="search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <img
            src={searchIcon}
            className="search-icon"
            alt="search icon"
          />
        </div>
      </div>
      <div id="scroll-container" className="theme-list">
        {themes.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map(theme => (
          <div className="card">
            <div className={"img " + theme.name}></div>
            <p>{theme.name.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Categories;