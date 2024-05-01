import React from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {Styles} from "./components/pages/styles";
import {Model} from "./components/pages/Model";
import {NoModel} from "./components/pages/NoModel";
import {ModelPuma} from "./components/pages/ModelPuma";

const PATH = {
  Adidas: '/adidas',
  Puma: '/puma',
  Abibas: '/abibas',
} as const

function App() {
  return (
    <div>
      <div className={styles.header}><h1>HEADER</h1></div>
      <div className={styles.body}>
        <div className={styles.nav}>

          <Styles.NavWrapper><NavLink to={PATH.Adidas}>Adidas</NavLink></Styles.NavWrapper>
          <Styles.NavWrapper><NavLink to={PATH.Puma}>Puma</NavLink></Styles.NavWrapper>
          <Styles.NavWrapper><NavLink to={PATH.Abibas}>Abibas</NavLink></Styles.NavWrapper>

        </div>

        <div className={styles.content}>
          <Routes>
            <Route path={'/'} element={<Navigate to={PATH.Adidas}/>}/>

            <Route path={PATH.Adidas} element={<Adidas/>}/>
            <Route path={PATH.Puma} element={<Puma/>}/>
            <Route path={PATH.Abibas} element={<Abibas/>}/>
            <Route path={'model'} element={<Model/>}/>
            <Route path={'adidas/:id'} element={<Model/>}/>
            <Route path={'puma/:id'} element={<ModelPuma/>}/>

            <Route path={'/*'} element={<Error404/>}/>
            {/*<Route path={'adidas/:id/*'} element={<NoModel/>}/>*/}

          </Routes>
        </div>
      </div>
      <div className={styles.footer}>abibas 2023</div>
    </div>
  );
}

export default App;
