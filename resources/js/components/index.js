import Login from './Login';
import Register from './Register';
import * as ReactRouter from 'react-router-dom';

/**
 * Componente para la aplicación
 * 
 * @param {object: ReactProps} props
 * @returns {object: ReactComponent}
 */
export default function App(props){
 return (
  <ReactRouter.Switch>
   <ReactRouter.Route path='/' exact component={Login}/>
   <ReactRouter.Route path='/register' component={Register}/>
  </ReactRouter.Switch>
 );
}