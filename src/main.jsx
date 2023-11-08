import './index.css';
import CategoriesAndPane from './components/CategoriesAndPane.jsx';
import CategoryPane from './components/CategoryPane.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import ProductsPane from './components/ProductsPane.jsx';
import SearchPane from './components/SearchPane.jsx';
import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsContextProvider } from './context/ProductsContextProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <CategoriesAndPane />,
        children: [
          {
            path: '/',
            element: <ProductsPane />,
          },
          {
            path: '/category/:name',
            element: <CategoryPane />,
          },
          {
            path: '/search/:search',
            element: <SearchPane />,
          },
        ],
      },
      {
        path: '/products/:id',
        element: <ProductDetails />,
      },
      {
        path: '/cart',
        element: <ShoppingCart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <ProductsContextProvider>
        <RouterProvider router={router} />
      </ProductsContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
