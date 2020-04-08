import React from 'react'
import ReactDOM from 'react-DOM'
import useTools from '../tools'
const Register = (props) => {
    const { inputs, handleInputChange } = useTools('', '');
    /**
     * realiza un request http para guardar el nuevo usuario
     * @param {evento} e 
     */
    const  registrarUsuario = async (e) => 
    {
        e.preventDefault();
        if( inputs.password !== inputs.password_confirmation )
        {
            alert( "El password no coincide, vuelva a intentarlo" );
            return;
        }
        const  data = inputs;
        try 
        {
            const response = await fetch( 'registerUser', 
            {
                    method : "POST",
                    headers : {
                        Accept : 'application/json',
                        "Content-type" :  'application/json',
                        'X-CSRF-TOKEN' : csrf_token
                    },
                    body : JSON.stringify( data )
            })
            .then( response => {
                console.log(response);
                if ( response.ok )
                {
                    return response.json();
                }
                throw new Error('A ocurrido un error: '+ response.message);
                
            } )
            .then( response=> {
                console.log(response);
                if( response.error )
                {
                    alert( "A ocurrido un error de validacion, por favor verifique sus datos" );
                        return;
                }
                window.location = 'login';
                return response;
            },error => {
                console.log(error);
            });
        } catch (error) {
            alert(error);
        }
    }
    return ( 
    <div className="card-body register-card-body">
      <p className="login-box-msg">Registro de usuario</p>
      <form onSubmit={ registrarUsuario }>
        <div className="input-group mb-3">
          <input type="text" className="form-control" name="nombre" placeholder="Full name" value={ inputs.nombre? inputs.nombre : '' } onChange={(e) => handleInputChange(e) } required/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" name="email" placeholder="Email" value={ inputs.email? inputs.email : '' } onChange={(e) => handleInputChange(e) } required/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" name="password"  placeholder="Password" value={ inputs.password? inputs.password : '' } onChange={(e) => handleInputChange(e) } required/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" name="password_confirmation" placeholder="Retype password" value={ inputs.password_confirmation? inputs.password_confirmation : '' } onChange={(e) => handleInputChange(e) } required/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row">
         
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </div>
        </div>
      </form>

     

      <a href="login" className="text-center">Ya tengo una cuenta </a>
    </div>
    );
}
export default Register;
if(document.getElementById( 'react-login' ))
{
    ReactDOM.render(<Register />, document.getElementById('react-login'));
}
