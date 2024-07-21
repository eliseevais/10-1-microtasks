import React from 'react';
import {useParams} from 'react-router-dom';
import {adidasArr, AdidasItem} from './Adidas';
import {pumaArr, PumaItem} from "./Puma";
import {abibasArr} from "./Abibas";

type CrossModelsType = {
  [key: string]: AdidasItem[] | PumaItem[]
};

const crossModels: CrossModelsType = {
  adidas: adidasArr,
  puma: pumaArr,
  abibas: abibasArr
};

export const Model = () => {
  const {model, id} = useParams();

  console.log('model', model)
  console.log('id', id)

  // мой рабочий код
  // const currentModel = crossModels[`${model}`].find(el => el.id === Number(id));

  // код преподавателя
  const currentModel = model
    ? crossModels[model].find(el => el.id === Number(id))
    : null

  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        {currentModel
          ? <>
            <h2>{currentModel.model}</h2>
            <h3>{currentModel.price}</h3>
            <h3>{currentModel.collection}</h3>

            <img src={currentModel.picture}
                 alt={currentModel.model}
                 style={{
                   width: '400px', height: 'auto',
                   justifyContent: 'center', marginBottom: '20px'
                 }}/>
          </>
          : <h2>Модель отсутствует</h2>
        }
      </div>
    </>
  )
}