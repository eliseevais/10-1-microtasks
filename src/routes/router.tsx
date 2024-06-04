import * as React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import {Error404} from '../components/pages/Error404';
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {Abibas} from "../components/pages/Abibas";
import {Crosses} from "../components/pages/Crosses";

const PATH = {
  Adidas: '/adidas',
  Puma: '/puma',
  Abibas: '/abibas',
  Prices: '/prices'
} as const

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error404/>,
    children: [
      {
        path: PATH.Adidas,
        element: <Adidas/>,
      },
      {
        path: PATH.Puma,
        element: <Puma/>
      },
      {
        path: PATH.Abibas,
        element: <Abibas/>
      },
      {
        path: PATH.Prices,
        element: <Prices/>
      },
      // {
      //   path: '/:model/:id/',
      //   element: <Model/>
      // }
    ]
  },
]);
