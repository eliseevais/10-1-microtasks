import React from 'react';
import {useParams} from "react-router-dom";
import {pumaArr} from "./Puma";

export const ModelPuma = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div style={{
      display: 'flex', justifyContent: 'center',
      flexDirection: 'column', alignItems: 'center'
    }}>
      <h2>{pumaArr[Number(params.id)].model}</h2>
      <img
        src={pumaArr[Number(params.id)].picture}
        style={{width: '400px', height: '400', justifyContent: 'center'}}
      />
      <h3>{pumaArr[Number(params.id)].price}</h3>
      <h4>{pumaArr[Number(params.id)].collection}</h4>
    </div>
  )
}