import Login from './LoginUser';
import Register from './Register';
import * as ReactRouter from 'react-router-dom';
import React from 'react';

/**
 * Componente para la aplicación
 * 
 * @param {object: ReactProps} props
 * @returns {object: ReactComponent}
 */
export default function App(props){
 return (
  <ReactRouter.Switch>
   <ReactRouter.Route path='/:path(login)?' exact component={Login}/>
   <ReactRouter.Route path='/register' component={Register}/>
  </ReactRouter.Switch>
 );
}