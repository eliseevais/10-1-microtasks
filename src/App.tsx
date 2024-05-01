import React from 'react';
import styles from './components/Site.module.css';
import {Adidas} from './components/pages/Adidas';
import {Puma} from './components/pages/Puma';
import {Abibas} from './components/pages/Abibas';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from './components/pages/Error404';
import {Styles} from './components/pages/styles';
import {Model} from './components/pages/Model';

const PATH = {
  Adidas: '/adidas',
  Puma: '/puma',
  Abibas: '/abibas'
} as const

function App() {
  return (
    <div>
      <div className={styles.header}><h1>CHOOSE YOUR BEST SNEAKERS</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>

          <Styles.NavWrapper><NavLink to={PATH.Adidas}>ADIDAS</NavLink></Styles.NavWrapper>
          <Styles.NavWrapper><NavLink to={PATH.Puma}>PUMA</NavLink></Styles.NavWrapper>
          <Styles.NavWrapper><NavLink to={PATH.Abibas}>ABIBAS</NavLink></Styles.NavWrapper>

        </div>

        <div className={styles.content}>
          <Routes>
            <Route path={'/'} element={<Navigate to={PATH.Adidas}/>}/>

            <Route path={PATH.Adidas} element={<Adidas/>}/>
            <Route path={PATH.Puma} element={<Puma/>}/>
            <Route path={PATH.Abibas} element={<Abibas/>}/>
            <Route path={'/:model/:id/'} element={<Model/>}/>

            <Route path={'/*'} element={<Error404/>}/>
            <Route path={PATH.Adidas + '/*'} element={<Error404/>}/>

          </Routes>
        </div>
      </div>
      <div className={styles.footer}>Your sneakers, 2024</div>
    </div>
  );
}

export default App;
