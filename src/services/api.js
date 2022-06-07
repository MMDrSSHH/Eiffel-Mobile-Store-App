import axios from "axios";

const URL_API = 'https://fakestoreapi.com/products';

const getProducts = async () => {
    const response = await axios(URL_API);
    return response.data;
}

const getSingleProduct = async (id) => {
    console.log(`${URL_API}/${id}`);
    const response = await axios(`${URL_API}/${id}`);
    return response.data;
}

export { getProducts, getSingleProduct };