import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';

// GRAPHQL
import { GET_PROJECTS } from '../queries/projectQeuries';
import { DELETE_PROJECT } from '../mutations/projectMutation';

function DeleteProjectButton({ projectId }) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={deleteProject}>
        Delete Project
        <FaTrash className='ms-2' />
      </button>
    </div>
  );
}

export default DeleteProjectButton;
