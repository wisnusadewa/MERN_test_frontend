import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import productService from './productService';

const useProduct = () => {
  const queryClient = useQueryClient();
  const { getAllProductService, addProductService, editProductService, getProductIdService, deleteProductService } = productService();

  // get all product query
  const getAllProduct = () => {
    return useQuery({
      queryKey: ['products'],
      queryFn: getAllProductService,
      retry: false,
    });
  };

  const createProduct = useMutation({
    mutationKey: ['products'],
    mutationFn: addProductService,
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries(['products']);
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
  });

  const editProduct = useMutation({
    mutationKey: ['products'],
    mutationFn: editProductService,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['products']);
      console.log(data);
    },
  });

  const getProdcutId = (id) => {
    return useQuery({
      queryKey: ['products', id],
      queryFn: () => getProductIdService(id),
      retry: false,
      enabled: !!id,
    });
  };

  // delete product
  const deleteProduct = useMutation({
    mutationKey: ['products'],
    mutationFn: deleteProductService,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['products']);
      console.log(data);
    },
  });

  return { getAllProduct, createProduct, editProduct, getProdcutId, deleteProduct };
};

export default useProduct;
