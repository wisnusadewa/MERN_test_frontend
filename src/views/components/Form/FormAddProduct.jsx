import React from 'react';
import { useForm } from 'react-hook-form';
import useProduct from '../../../models/hooks/products/useProduct';

const FormAddProduct = ({ title }) => {
  const { handleSubmit, register } = useForm();

  const { createProduct } = useProduct();

  const onSubmit = (data) => {
    createProduct.mutate(data);
    window.location.reload();
  };

  return (
    <>
      <form className="flex flex-col gap-2 w-full " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center w-full">
          <p className="w-fit rounded-md  px-2 py-1 tracking-wide text-[22px]">{title}</p>
        </div>

        {/* NAME */}
        <div className="flex flex-col ">
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
    </>
  );
};

export default FormAddProduct;
