import axiosInstance from '../../api/axiosInstance';
import { toast, Bounce } from 'react-toastify';

const userService = () => {
  const register = async (data) => {
    try {
      const response = await axiosInstance.post('/register', data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
      console.log(error);
    }
  };

  const login = async (data) => {
    try {
      const response = await axiosInstance.post('/login', data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        transition: Bounce,
      });
      console.log(error);
    }
  };

  const getUserByIdService = async (id) => {
    try {
      const response = await axiosInstance.get(`/user/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { register, login, getUserByIdService };
};

export default userService;
