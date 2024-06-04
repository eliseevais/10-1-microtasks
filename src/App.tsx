import React from 'react';
import styles from './components/Site.module.css';
import {NavLink} from 'react-router-dom';
import {Styles} from './components/pages/styles';
import {Outlet} from "react-router-dom";

const PATH = {
  Adidas: '/adidas',
  Puma: '/puma',
  Abibas: '/abibas',
  Prices: '/prices'
} as const

function App() {
  return (
    <div>
      <div className={styles.header}><h1>CHOOSE YOUR BEST SNEAKERS</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>

          <Styles.NavWrapper><NavLink to={PATH.Adidas}>Adidas</NavLink></Styles.NavWrapper>
          <Styles.NavWrapper><NavLink to={PATH.Puma}>Puma</NavLink></Styles.NavWrapper>
          <Styles.NavWrapper><NavLink to={PATH.Abibas}>Abibas</NavLink></Styles.NavWrapper>
          <Styles.NavWrapper><NavLink to={PATH.Prices}>Цены для оптовиков</NavLink></Styles.NavWrapper>

        </div>

        <div className={styles.content}>
          <Outlet />

          {/*<Routes>*/}
          {/*  <Route path={'/'} element={<Navigate to={PATH.Adidas}/>}/>*/}

          {/*  <Route path={PATH.Adidas} element={<Adidas/>}/>*/}
          {/*  <Route path={PATH.Puma} element={<Puma/>}/>*/}
          {/*  <Route path={PATH.Abibas} element={<Abibas/>}/>*/}
          {/*  <Route path={PATH.Prices} element={<Prices/>}/>*/}

          {/*  <Route path={'/:model/:id/'} element={<Model/>}/>*/}

          {/*  <Route path={'/*'} element={<Error404/>}/>*/}
          {/*  <Route path={PATH.Adidas + '/*'} element={<Error404/>}/>*/}

          {/*</Routes>*/}
        </div>
      </div>
      <div className={styles.footer}>Your sneakers, 2024</div>
    </div>
  );
}

export default App;
