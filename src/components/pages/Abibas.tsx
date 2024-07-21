import React from 'react';
import abibas01 from "../../assets/abibas1.jpg";
import abibas02 from "../../assets/abibas2.jpg";
import abibas03 from "../../assets/abibas3.jpg";
import {Link} from "react-router-dom";

export type AbibasItem = {
  id: number
  model: string;
  collection: string;
  price: string;
  picture: string;
}

export const abibasArr: AbibasItem[] = [
  {
    id: 1,
    model: 'ABIBAS 2024',
    collection: 'collection 2024',
    price: '210$',
    picture: abibas01
  },
  {
    id: 2,
    model: 'ABIBAS CLASSIC',
    collection: 'collection 2020',
    price: '140$',
    picture: abibas02
  },
  {
    id: 3,
    model: 'ABIBAS SUMMER 2025',
    collection: 'NEW collection 2025',
    price: '380$',
    picture: abibas03
  }
]

export const Abibas = () => {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>ABIBAS</h2>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {abibasArr.map((abibas, index) => (
          <Link key={index} to={`/abibas/${abibas.id}`}>
            <img
              src={abibas.picture}
              alt={abibas.model}
              style={{width: '200px', height: '200', marginRight: '10px'}}
            />
          </Link>
        ))}
      </div>
      <p>
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.

        Why do we use it?
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here,
        content here', making it look like readable English. Many desktop
        publishing packages and web page editors now use Lorem Ipsum
        as their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions
        have evolved over the years, sometimes by accident, sometimes on purpose
        (injected humour and the like).


        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the
        more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
        going through the cites of the word in classical literature,
        discovered the undoubtable source. Lorem Ipsum comes from sections
        1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book
        is a treatise on the theory of ethics, very popular during the
        Renaissance.
        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
        from a line in section 1.10.32.
      </p>
    </div>
  );
};

