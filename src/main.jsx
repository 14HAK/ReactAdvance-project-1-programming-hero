import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Public/Home';
import Login from './components/Public/Login';
import Resister from './components/Public/Resister';
import Context from './context/Context.jsx';
import PrivateRoute from './components/Private/PrivateRoute.jsx';
import Orders from './components/Private/Orders.jsx';
import Personal from './components/Private/Personal.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/resister',
        element: <Resister></Resister>,
      },
      {
        path: '/orders',
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: '/personal',
        element:(
        <PrivateRoute>
          <Personal></Personal>
        </PrivateRoute>
         ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router}></RouterProvider>
    </Context>
  </React.StrictMode>
);
