import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import userService from './userService';
import { loginSuccess } from '../../redux/users/userSlice';
import { toast, Bounce } from 'react-toastify';

const useUser = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  //   pemanggilan user service api
  const { login, register, getUserByIdService } = userService();

  // REGISTER
  const registerUser = useMutation({
    mutationFn: register,
    mutationKey: ['users'],
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries(['users']);
        navigate('/login');
        toast(data.message, {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const loginUser = useMutation({
    mutationKey: ['users'],
    mutationFn: login,
    onSuccess: (data) => {
      if (data.user) {
        // validasi agar user tidak undefined
        dispatch(loginSuccess(data));
        queryClient.invalidateQueries(['users']);
        navigate('/dashboard');
        toast(data.message, {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    },
    onError: (err) => {
      // menghapus nilai user pada localstorage menjadi null
      dispatch(loginSuccess(null));
    },
  });

  const getUserById = (id) => {
    return useQuery({
      queryKey: ['user', id],
      queryFn: () => getUserByIdService(id),
      retry: false,
      enabled: !!id,
    });
  };

  return { loginUser, registerUser, getUserById };
};

export default useUser;
