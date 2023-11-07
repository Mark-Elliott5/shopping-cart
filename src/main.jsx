import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ProductDetails from './components/ProductDetails.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductsPane from './components/ProductsPane.jsx';
import { ProductsContextProvider } from './context/ProductsContextProvider.jsx';
import CategoryPane from './components/CategoryPane.jsx';
import SearchPane from './components/SearchPane.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <ProductsPane />,
      },
      {
        path: '/products/:id',
        element: <ProductDetails />,
      },
      {
        path: '/category/:name',
        element: <CategoryPane />,
      },
      {
        path: '/query/:query',
        element: <SearchPane />,
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
