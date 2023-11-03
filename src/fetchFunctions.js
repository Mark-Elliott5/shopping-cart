import axios from 'axios';
import { useQuery, useQueries } from '@tanstack/react-query';

async function getAllProducts() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

async function getAllCategories() {
  try {
    const response = await axios.get(
      'https://fakestoreapi.com/products/categories'
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

async function getInCategory(category) {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

const useAllProducts = () =>
  useQuery({
    queryKey: ['allProducts'],
    queryFn: getAllProducts,
    staleTime: 100 * 1000,
  });
const useAllCategories = () =>
  useQuery({
    queryKey: ['allCategories'],
    queryFn: getAllCategories,
    staleTime: 100 * 1000,
  });
const useInCategory = (categories) =>
  useQueries({
    queries: categories.map((category) => ({
      queryKey: ['get', `${category}Products`],
      queryFn: getInCategory(category),
      staleTime: 100 * 1000,
    })),
  });

export { useAllProducts, useAllCategories, useInCategory };
