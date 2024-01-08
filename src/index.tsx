import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './router/Home';
import Detail from './router/Detail';

const router = createBrowserRouter([
  {
    path:
      process.env.NODE_ENV === 'development'
        ? '/'
        : process.env.PUBLIC_URL + '/',
    element: <Home />,
  },
  {
    path:
      process.env.NODE_ENV === 'development'
        ? '/movies/:id'
        : process.env.PUBLIC_URL + '/movies/:id',
    element: <Detail />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);
