import axios from "axios";

const apiProducts = async () => {
  const response = await axios.get(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC",
  );
  return response.data.products;
};

export default apiProducts;
