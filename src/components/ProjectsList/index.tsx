import react, { useEffect, useState } from 'react';
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