import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface ProjectsProps {
  country: string;
  image: {
    imagelink: string[3]
  };
  projectLink: string;
  title: string;
  id: number;
}

const ProjectsList = (): JSX.Element => {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);

  useEffect(() => {
    async function loadProjects() {
      await api.get('projectservice/themes/edu/projects/active?api_key=e2051e82-d596-408f-b6da-c1deefcdc07b')
        .then(res => setProjects(res.data.projects.project));
    }

    loadProjects();
  }, [])

  console.log(projects);

  return (
    <Container>
      <h1>general</h1>
      <div className="projects-list">
        {projects.map(project => (
          <a className="card" href={project.projectLink} key={project.id} target="_blank" rel="noreferrer">
            <img src="https://www.globalgiving.org/pfil/354/pict_large.jpg" alt="project iamage"></img>
            <p className="origin">{project.country}</p>
            <p className="title">{project.title}</p>
          </a>
        ))}
      </div>
    </Container>
  )
}

export default ProjectsList;