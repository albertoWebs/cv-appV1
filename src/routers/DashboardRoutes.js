import React from 'react';
import { NavbarPersonalizada } from '../components/ui/NavbarPersonalizada';
import { Redirect, Switch } from 'react-router';
import { FormacionScreen } from '../components/formacion/FormacionScreen';
import { ExperienciaScreen } from '../components/experiencia/ExperienciaScreen';
import { InicialScreen } from '../components/inicial/InicialScreen';
import { ElementoScreen } from '../components/ElementoScreen/ElementoScreen';
import { SearchScreen } from '../components/search/SearchSceen';
import {
  Route
} from "react-router-dom";
import Footer from '../components/ui/Footer'

export const DashboardRoutes = () => {
    return (
        <>
     <div className=" width: 100%;">
              <NavbarPersonalizada />
            <div className="container mt-2 divCentro">
              
                <Switch>
                    <Route exact path="/formacion" component={FormacionScreen} />
                    <Route exact  path="/buscador" component={SearchScreen} />
                    <Route exact  path="/experiencias" component={ExperienciaScreen} />
                    <Route exact  path="/initial" component={InicialScreen}  />
                    <Route exact path="/elemento/:elementoId" component={ElementoScreen} />
                  <Redirect to={InicialScreen}/>
                  
                </Switch>
              
            </div>
            <Footer />
     </div>
        </>
    )
}
