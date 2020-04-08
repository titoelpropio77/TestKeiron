import React from 'react';
import ReactDOM from 'react-DOM'
import useTools from '../tools'
import config from '../config'
import Register from './Register'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory  ,
    Link,
    createMemorySource, createHistory
  } from "react-router-dom"
const LoginUser = () => {
 
    const { inputs, handleInputChange } = useTools('', '');
   
    /**
     * Realiza la peticion http para validar usuario y contraseña
     */
    const login = async (e) =>
    {
        e.preventDefault();
        
        var email = inputs.email;
        var password = inputs.password;
        const  response  = await fetch( 'oauth/token', {
        method: 'POST',
        body: JSON.stringify( { username: email, password: password, client_secret : config.client_secret, client_id : config.client_id, grant_type : config.grant_type } ),
        headers : {
            Accept : 'application/json',
            "Content-Type" : "application/json"
        }
       }).then( response =>  response.json() ).then( res => {
            if( res.error != undefined )
            {
                alert( 'Usuario y Contraseña invalidos' );
            }else{
                localStorage.setItem( 'access_token', res.access_token );
                localStorage.setItem( 'refresh_token', res.refresh_token );
                alert( 'Acaba de iniciar sesion' );
                window.location = 'ticket'
            }
        },error => {
            console.log(error);
        }
       );
    //    console.log( response );
    }
   function handleClick(){
       history.push( "/Register" );
   }
    return (
        <div className="card-body login-card-body">
          <p className="login-box-msg">Inicia sesión para comenzar</p>
            <form onSubmit={login}>
                <div className="input-group mb-3">
                    <input id="email" type="text" className="form-control" name="email"  value={ inputs.email ? inputs.email : '' }  onChange={ (e) => handleInputChange(e) } required/>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                        </div>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input id="password" type="password" className="form-control" name="password" value={ inputs.password? inputs.password : '' } required onChange={(e) => handleInputChange(e) } required/>
                    <div className="input-group-append">
                        <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                     <div className="col-7">
                        <div className="icheck-primary">
                            <input type="checkbox" id="remember" />
                            <label >
                                Recuerdame
                            </label>
                        </div>
                    </div>
                    <div className="col-5">
                      {/* <Button type="submit" className="btn btn-primary" style="width: 80%;"></Button> */}
                      {/* onClick={() =>login()} */}
                      <button className="btn btn-primary" type="submit" style={{ width: "100%"}} >Iniciar Sesion</button>
                    </div>
                </div>
            </form>
            <p className="mb-0">
                <a href="Register" class="text-center">Register Nuevo Usuario</a>
                {/* <button onClick={ handleClick }>Registrame</button> */}
                {/* <Router>
                  <Link to="/Register">Registrar Nuevo Usuario</Link>
                <Switch>
                <Route  path="/Register">
                    <Register />
                </Route>
                </Switch>
            </Router> */}

                
            </p>
        </div>
    )
}

export default LoginUser ;
if(document.getElementById( 'react-login' ))
{
    ReactDOM.render(<LoginUser />, document.getElementById('react-login'));
}
