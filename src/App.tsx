import React from 'react';
import styles from './components/Site.module.css';
import {NavLink, Outlet} from 'react-router-dom';
import {Styles} from './components/pages/styles';

const PATH = {
  Adidas: '/adidas',
  Puma: '/puma',
  Abibas: '/abibas',
  Prices: '/prices',
  ProtectedPage: '/protectedPage'
} as const

function App() {
  return (
    <div>
      <div className={styles.header}><h1>CHOOSE YOUR BEST SNEAKERS</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>

          <Styles.NavWrapper><NavLink
            to={PATH.Adidas}>Adidas</NavLink></Styles.NavWrapper>
          <Styles.NavWrapper><NavLink
            to={PATH.Puma}>Puma</NavLink></Styles.NavWrapper>
          <Styles.NavWrapper><NavLink
            to={PATH.Abibas}>Abibas</NavLink></Styles.NavWrapper>
          <Styles.NavWrapper><NavLink to={PATH.Prices}>Цены для
            оптовиков</NavLink></Styles.NavWrapper>
          <Styles.NavWrapper><NavLink to={PATH.ProtectedPage}>Protected
            Page</NavLink></Styles.NavWrapper>

        </div>

        <div className={styles.content}>
          <Outlet/>
        </div>
      </div>
      <div className={styles.footer}>Your sneakers, 2024</div>
    </div>
  );
}

export default App;
