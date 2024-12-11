import React from 'react';
import FormRegister from '../Form/FormRegister';

const RegisterPage = () => {
  return (
    <section>
      <div className="w-full h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 flex justify-center items-center">
        <div className="w-[900px] h-[500px] bg-white/20 border-white/30 rounded-[20px] p-8 backdrop-blur-lg shadow-lg items-center justify-between grid lg:grid-rows-4 grid-cols-1 gap-2">
          <div className=" w-full h-full flex justify-center items-center text-[30px] tracking-widest bg-white/50 rounded-[10px]">
            <p>APP MERN CRUD</p>
          </div>
          <div className="w-full h-full grid row-span-3">
            <FormRegister title={'Register Form'} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
