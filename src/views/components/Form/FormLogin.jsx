import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import Button from '../Atom/Button/Button';
import useUser from '../../../models/hooks/users/useUser';

const FormLogin = ({ title }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleEye = () => {
    setShowPassword(!showPassword);
    console.log('showPassword', !showPassword);
  };

  const schema = yup
    .object({
      email: yup.string().required(),
      password: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //    TANSTACK
  const { loginUser } = useUser();

  //   ONSUBMIT
  const onSubmit = (data) => {
    loginUser.mutate(data);
  };

  //   NAVIGATE
  const handleButton = () => {
    navigate('/register');
  };

  return (
    <>
      <div className="flex flex-col w-full h-full justify-center items-center font-montserrat lg:gap-10 ">
        <form className="flex flex-col gap-2 w-full " onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center w-full">
            <p className="w-fit rounded-md px-2 py-1 tracking-wide text-[22px]">{title}</p>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col ">
            <label className="w-fit rounded-md  px-2 py-1">Email</label>
            <input className="rounded-md w-full px-2 py-1  focus:outline-none" {...register('email')} />
            {errors.email && <span className="font-thin italic text-sm text-red-500">{errors.email?.message}</span>}
          </div>

          {/* PASSWORD */}
          <div className="relative flex flex-col ">
            <label className="w-fit rounded-md  px-2 py-1">Password</label>
            <input type={showPassword ? 'text' : 'password'} className="rounded-md w-full px-2 py-1  focus:outline-none" {...register('password')} />
            <span className="absolute right-1 bottom-1" onClick={handleEye}>
              {showPassword ? <Eye size={25} /> : <EyeSlash size={25} />}{' '}
            </span>
            {errors.password && <span className="font-thin italic text-sm text-red-500">{errors.password?.message}</span>}
          </div>

          <div className="w-full flex justify-center items-center ">
            <input className="px-2 py-1 rounded-md w-fit bg-white/70 hover:bg-white/40" type="submit" />
          </div>
        </form>

        <div className="flex justify-center items-center gap-3">
          <p>Belum memiliki account ?</p>
          <Button textButton={'Register'} onClickButton={handleButton} classNameButton={'w-fit px-2 py-1 rounded-lg bg-white/70 hover:bg-white/40'} />
        </div>
      </div>
    </>
  );
};

export default FormLogin;
