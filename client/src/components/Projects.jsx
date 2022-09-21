import { useQuery } from '@apollo/client';

// GRAPHQL
import { GET_PROJECTS } from '../queries/projectQeuries';

// COMPONENTS
import Spinner from './Spinner';
import ProjectCard from './ProjectCard';

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong...</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className='row mt-5'>
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects!</p>
      )}
    </>
  );
}

export default Projects;
