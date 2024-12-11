import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useUser from '../../../models/hooks/users/useUser';
import { useSelector } from 'react-redux';
import Button from '../../components/Atom/Button/Button';

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getUserById } = useUser();

  const { data } = getUserById(id);

  const handleBack = () => {
    navigate('/dashboard');
  };

  return (
    <section>
      <div className="w-full h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 flex justify-center items-center">
        <div className="lg:w-[900px] lg:h-[500px] w-[400px] h-[300px] bg-white/20 border-white/30 rounded-[20px] p-8 backdrop-blur-lg shadow-lg items-center justify-between grid lg:grid-rows-4 grid-cols-1 gap-2">
          <div className=" w-full h-14 flex justify-center items-center text-[30px] tracking-widest bg-white/40 rounded-[10px]">
            <p>Profile</p>
          </div>
          <div className="w-full h-full grid row-span-3">
            <div className="h-full flex flex-col justify-between">
              <p>Nama : {data?.data.user.name}</p>
              <p>Email: {data?.data.user.email}</p>
              <p>Gender : {data?.data.user.jenisKelamin}</p>
              <div className="w-full flex justify-center items-center">
                <Button onClickButton={handleBack} classNameButton={'w-fit border px-4 py-1 rounded-[5px] bg-white/40 hover:bg-white/30'} textButton={'Back'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
