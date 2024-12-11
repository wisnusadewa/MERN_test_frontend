import React from 'react';
import Button from '../Atom/Button/Button';
import { logoutUser } from '../../../models/redux/users/userSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  console.log('user?', user);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  const handleProfile = () => {
    navigate(`/dashboard/profile/${user.user._id}`);
  };
  return (
    <div className="w-full h-20 flex justify-end items-center font-montserrat gap-4">
      <Button textButton={'Profile'} onClickButton={handleProfile} classNameButton={'px-2 py-1 rounded-[10px] bg-white/40 hover:bg-white/30'} />
      <Button onClickButton={handleLogout} textButton={'Logout'} classNameButton={'px-2 py-1 rounded-[10px] bg-white/40 hover:bg-white/30'} />
    </div>
  );
};

export default Navbar;
