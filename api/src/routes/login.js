const { Router } = require('express');
const express = require('express');
const morgan = require('morgan');
const cookieparser = require('cookie-parser');

const routeRegister = require('./register');

// const register = require('./register')
// console.log(register, ' lo que me traje')

// Acá se guardan los usuarios registrados
// Luego lo voy a usar para consulta

const router = Router();

router.use(cookieparser()); // veremos

router.use(morgan('dev'));

router.use(express.urlencoded({ extended: true }));


const users = [ // Esto sería la base de datos
    {id: 1, name: 'Franco', email: 'Franco@mail.com', password: '1234'},
    {id: 2, name: 'Toni', email: 'Toni@mail.com', password: '1234'}
]

// ESTO ES DEL FRONT PARA LA PROTECCIÓN DE RUTAS
//---------------------------------------------------------------------------------
const isNotAuthenticated = (req, res, next) => { // Hay que ver si es del front

  // Si hay un usuario logueado redirigir a /home de lo contrario llamar a next()

  if ( req.cookies.userId ) {
    res.redirect('/home'); 
  
  } else {
    next();
  }

}

router.get('/login', isNotAuthenticated, (req, res) => {
    res.send('No hay sesión iniciada, puede continuar con el post')
});

//----------------------------------------------------------------------------------

router.post('/login', async (req, res, next) => {
    console.log('está entrando un post mierda!')

    const { email , password } = req.body

    console.log(req.body);
  
    let user = [];

    if (!email || !password) {
        return res.send('campos incompletos')
    }

    if (email &&  password) {

        user = await routeRegister.findByUsername(email); // voy a buscar el email
        // Pude ser que el error venga de atrás
        if (!user) return res.send('Email inexistente')

        
        if (user) {
          // {id: 1, name: 'Franco', email: 'Franco@mail.com', password: '1234'}
          console.log(user, 'será que logré el cometido');
          // Y luego debería verificar el password
          console.log(password, ' esto es password')

          console.log(user, 'esto es lo que comparo');// undefined

          if (user.password !== password) {
            return res.send('La contraseña no es correcta')
                    
          }

          console.log(user, 'será que logré el cometido, luego del filter');            
          // veo el pass
        }

        // user = users.filter(u => u.email === email && u.password === password)
        // Acá iría a buscar el user y la password a la base de datos
        // La pass debería estar hasheada duarante todo el proceso

    }

    if (user) { // Si encuentro el user en la db
    
      console.log('tu user fue validado y vas a home')
      res.status(200).json(user);
      // res.cookie('userId', user[0].id); // Hay que ver si esto es del front
      // res.redirect('/home'); // Hay que ver si esto es del front
      // res.send('tu user fue validado y vas a home');

    } else {

      res.status(200).json(user);

      // console.log('tu user no fue validado y volves a login')
      // res.redirect('/api/login'); // Hay que ver si esto es del front
      // res.send('tu user no fue validado y volves a login');
    }
})



module.exports = router;