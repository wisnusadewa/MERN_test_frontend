import React, { useState } from 'react';
import FormAddProduct from '../Form/FormAddProduct';
import Button from '../Atom/Button/Button';
import { XSquare } from '@phosphor-icons/react';
import useProduct from '../../../models/hooks/products/useProduct';
import CardProject from '../CardProject/CardProject';
import { useNavigate } from 'react-router-dom';

const DashboardComp = () => {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  const { getAllProduct, getProdcutId } = useProduct();

  const { data } = getAllProduct();
  console.log('data product dashboard', data);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <div className="w-full flex flex-col gap-5">
      {/* FORM ADD PRODUCT */}
      <div>
        <div className="flex flex-col gap-2">
          <Button onClickButton={handleModal} textButton={isModal ? <XSquare size={32} /> : 'Add Product'} classNameButton={isModal ? 'text-red-700' : 'text-[12px] px-2 py-1 rounded-[5px] bg-white/40 hover:bg-white/30 lg:text-[16px]'} />
          {/* form add product */}
          {isModal ? <FormAddProduct title={'Add New Product'} /> : ''}
        </div>
      </div>

      {/* TAMPILAN PRODUCT */}
      <div>
        {/* card product */}
        <div className="w-full h-full flex flex-wrap gap-10 font-montserrat ">
          {data?.map((item, i) => {
            return (
              <div key={i} className="flex w-full h-full justify-center items-center md:w-[300px]">
                <CardProject item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
