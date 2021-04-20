import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

const ProjectsList = (): JSX.Element => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      await api.get('projectservice/themes/edu/projects/active?api_key=e2051e82-d596-408f-b6da-c1deefcdc07b')
        .then(res => setProjects(res.data.projects));
    }

    loadProjects();
  }, [])

  console.log(projects);

  return (
    <Container>
      <h1>general</h1>
      <div className="projects-list">
        <div className="card">
          <img src="https://www.globalgiving.org/pfil/354/pict_large.jpg" alt="project iamage"></img>
          <p>afghanistan</p>
          <p>Learning Centers for Rural Afghan Women in Herat</p>
          <p>This project supports rural Learning Centers for Afghan Women in Herat Province, Afghanistan. The centers provide educational classes and income generating skills instruction, as well as giving students information on topics such as health, democracy, elections, self- care both physical and mental and leadership skills. The centers also provide opportunities to attend workshops on such things as children's rights and violence against women.</p>
        </div>
        {/* {projects.project.map(project => (
          <div className="card">
            <div className={"img " + project.name}></div>
            <p>{project.name.toLowerCase()}</p>
          </div>
        ))} */}
      </div>
    </Container>
  )
}

export default ProjectsList;