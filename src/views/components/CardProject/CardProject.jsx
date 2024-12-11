import React, { useState } from 'react';
import Button from '../Atom/Button/Button';
import FormEditProduct from '../Form/FormEditProduct';
import useProduct from '../../../models/hooks/products/useProduct';
import { useNavigate } from 'react-router-dom';

const CardProject = ({ item }) => {
  const navigate = useNavigate();

  const { editProduct, deleteProduct } = useProduct();

  const handleClick = () => {
    navigate(`/edit/${item._id}`);
  };

  const handleDelete = () => {
    deleteProduct.mutate(item._id);
  };

  return (
    <div className="flex z-0 flex-col w-full h-full md:w-[200px] md:h-[250px] bg-white/20 border-white/30 rounded-[20px] backdrop-blur-lg shadow-lg py-2 justify-between items-center gap-4">
      <div className="flex h-full w-full  flex-col gap-2">
        <div className="flex w-full justify-center items-center md:text-[20px] tracking-wider ">
          <p className="w-fit px-2 py-1">{item.name}</p>
        </div>
        <div className="w-full h-full flex flex-col gap-2 px-4">
          <div>
            <p>Rp {item.price}</p>
          </div>
          <div className="w-full h-full ">
            <p className="text-[12px] flex flex-wrap w-full">{item.description}</p>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between text-[14px] px-4 ">
        <Button onClickButton={handleClick} textButton={'Edit'} />

        <Button onClickButton={handleDelete} textButton={'Delete'} />
      </div>
    </div>
  );
};

export default CardProject;
