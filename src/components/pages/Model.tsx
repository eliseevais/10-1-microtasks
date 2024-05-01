import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr} from "./Adidas";

export const Model = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div style={{
      display: 'flex', justifyContent: 'center',
      flexDirection: 'column', alignItems: 'center'
    }}>
      <h2>{adidasArr[Number(params.id)].model}</h2>
      <img
        src={adidasArr[Number(params.id)].picture}
        style={{width: '400px', height: '400', justifyContent: 'center'}}
      />
      <h3>{adidasArr[Number(params.id)].price}</h3>
      <h4>{adidasArr[Number(params.id)].collection}</h4>
    </div>
  )
}