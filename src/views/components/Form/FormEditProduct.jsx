import React from 'react';
import { useForm } from 'react-hook-form';
import useProduct from '../../../models/hooks/products/useProduct';
import Button from '../Atom/Button/Button';
import { XSquare } from '@phosphor-icons/react';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditProduct = () => {
  const { id } = useParams();
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const { editProduct, getProdcutId } = useProduct();

  const { data } = getProdcutId(id);

  const onSubmit = (data) => {
    editProduct.mutate({ id, data });
    navigate('/dashboard');
  };

  const handleClose = () => {
    navigate('/dashboard');
  };

  console.log('id?', id);
  console.log('data?', data);
  return (
    <>
      <div className="flex flex-col w-full h-screen justify-center items-center font-montserrat lg:gap-10 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
        <div className="border lg:w-[900px] lg:h-[500px] bg-white/20 border-white/30 rounded-[20px] p-8 backdrop-blur-lg shadow-lg items-center justify-between gap-2">
          <form className="flex flex-col gap-2 w-full " onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center w-full">
              <p className="w-full rounded-md  px-2 py-1 tracking-wide text-[22px]">Edit Product</p>
              <Button textButton={<XSquare size={32} />} classNameButton={'flex justify-end items-center w-full hover:cursor-pointer'} onClickButton={handleClose}></Button>
            </div>

            {/* NAME */}
            <div className="flex flex-col">
              <label className="w-fit rounded-md  px-2 py-1">Name Product</label>
              <input className="rounded-md w-full px-2 py-1  focus:outline-none" {...register('name')} />
            </div>

            {/* PRICE */}
            <div className="relative flex flex-col ">
              <label className="w-fit rounded-md  px-2 py-1">Price Product</label>
              <input className="rounded-md w-full px-2 py-1  focus:outline-none" {...register('price')} />
            </div>

            {/* DESC */}
            <div className="flex flex-col ">
              <label className="w-fit rounded-md  px-2 py-1">Description Product</label>
              <input className="rounded-md w-full px-2 py-1  focus:outline-none" {...register('description')} />
            </div>

            <div className="w-full flex justify-center items-center ">
              <input className="px-2 py-1 rounded-md w-fit bg-white/70 hover:bg-white/40" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormEditProduct;
