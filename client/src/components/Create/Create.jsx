
export function Create () {
    return (        
        
        <div>
            <div> Entraste en / Create </div>
            <div> Quiero ver el formulario de create </div>
            <div>
                <h1>Registrarse</h1>
                <form method='post' action='/register'>
                  <input name='name' placeholder='Nombre' required />
                  <input type='email' name='email' placeholder='Email' required />
                  <input type='password' name='password' placeholder='Contraseña' required />
                  <input type='submit' value='Registrarse' />
                </form>
                <a href='/login'>Iniciar sesión</a>
                <br />
                <a href='/'>Volver</a>
            </div>
            
        </div>

    )
}
