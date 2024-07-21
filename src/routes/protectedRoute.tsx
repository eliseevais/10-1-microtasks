import React, {ReactNode} from "react";
import {Navigate} from "react-router-dom";

type Props = {
  children: ReactNode
};
export const ProtectedRoute = ({children}: Props) => {

  const isLogged = false

  return (
    <div>
      {
        isLogged
          ? children
          : <Navigate to={'/error'}/>
      }
    </div>
  );
};