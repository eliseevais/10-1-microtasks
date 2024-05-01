import React from 'react';
import {useParams} from 'react-router-dom';
import {adidasArr} from './Adidas';

export const Model = () => {
  const params = useParams();
  const currentModel = adidasArr.find( el => el.id === Number(params.id));

  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        {currentModel
          ? <>
            <h2>{currentModel.model}</h2>
            <h3>{currentModel.price}</h3>
            <h4>{currentModel.collection}</h4>

            <img src={currentModel.picture}
                 alt={currentModel.model}
                 style={{
                   width: '600px', height: 'auto',
                   justifyContent: 'center', marginBottom: '50px'
                 }}/>
          </>
          : <h2>Модель отсутствует</h2>
        }
      </div>
    </>
  )
}