import axiosInstance from '../../api/axiosInstance';

const productService = () => {
  // add product
  const addProductService = async (data) => {
    try {
      const response = await axiosInstance.post('/products', data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  //   get Product
  const getAllProductService = async () => {
    try {
      const response = await axiosInstance.get('/products');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  //   get Product Id
  const getProductIdService = async (id) => {
    try {
      const response = await axiosInstance.get(`/product/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  //   edit Product
  const editProductService = async ({ id, data }) => {
    try {
      const response = await axiosInstance.put(`/edit/${id}`, data);
      console.log('data product?', response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProductService = async (id) => {
    try {
      const response = await axiosInstance.delete(`/delete/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { addProductService, getAllProductService, editProductService, getProductIdService, deleteProductService };
};

export default productService;
