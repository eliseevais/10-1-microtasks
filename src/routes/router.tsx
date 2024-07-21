import * as React from 'react';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject
} from 'react-router-dom';
import App from '../App';
import {Error404} from '../components/pages/Error404';
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Prices} from "../components/pages/Prices";
import {Abibas} from "../components/pages/Abibas";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {Model} from "../components/pages/Model";
import {Login} from "../components/pages/Login";

const PATH = {
  Adidas: '/adidas',
  Puma: '/puma',
  Abibas: '/abibas',
  Prices: '/prices',
  ProtectedPage: '/protectedPage',
  Error: '/error',
  Model: '/:model/:id/',
  Login: '/login'
} as const

const publicRoutes: RouteObject[] = [
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
  {
    path: PATH.Error,
    element: <Error404/>
  },
  {
    path: PATH.Model,
    element: <Model/>,
  },
  {
    path: PATH.Login,
    element: <Login/>,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: PATH.ProtectedPage,
    element: <ProtectedPage/>
  }
]

const PrivateRoute = () => {
  const isAuth = false;
  return (
    <div>
      {
        isAuth ? <Outlet/> : <Navigate to={PATH.Login}/>
      }
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Navigate to={PATH.Error}/>,
    children: [
      {
        element: <PrivateRoute/>,
        children: privateRoutes
      },
      ...publicRoutes,
    ]
  },
])

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement: <Navigate to={PATH.Error}/>,
//     children: [
//       {
//         path: PATH.Adidas,
//         element: <Adidas/>,
//       },
//       {
//         path: PATH.Puma,
//         element: <Puma/>
//       },
//       {
//         path: PATH.Abibas,
//         element: <Abibas/>
//       },
//       {
//         path: PATH.Prices,
//         element: <Prices/>
//       },
//       {
//         path: PATH.ProtectedPage,
//         element: (
//           <ProtectedRoute>
//             <ProtectedPage/>
//           </ProtectedRoute>
//         )
//       },
//       {
//         path: PATH.Error,
//         element: <Error404/>
//       },
//       {
//         path: PATH.Model,
//         element: <Model/>,
//       },
//       {
//         path: PATH.Login,
//         element: <Login/>,
//       },
//     ]
//   },
// ])