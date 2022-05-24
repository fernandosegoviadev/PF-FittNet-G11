const { Router } = require('express');

const cookieparser = require('cookie-parser');
const router = Router();
router.use(cookieparser()); // veremos


const users = [
    {id: 1, name: 'Franco', email: 'Franco@mail.com', password: '1234'},
    {id: 2, name: 'Toni', email: 'Toni@mail.com', password: '1234'}
]


router.findByUsername = function(email, cb) {
  //function findByUsername(email, cb) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = users.length; i < len; i++) {
        var user = users[i];
        if (user.email === email) {
          return resolve(user);
        }
      }
      return reject(null);
    });
}

router.get('/register', (req, res, next) => {
    res.send('El email ya se encuentra registrado en la db y fue redirigido a /register')
})

router.post('/register', (req, res, next) => {
    
    const { name, email, password } = req.body;

    console.log(name, email, password, 'lo que llega por body')
  
    if ( !name || !email || !password ) {
        return res.send('campos incompletos');

    }

    if ( name && email && password ) {
      let findUser = users.find(u => u.email === email)
      // Acá iría a buscar el email del user en la db
  
      let id = users.length + 1 ;

      if (findUser ) {
        console.log('El email ya está registrado en la db y vas a /register');
        return res.redirect('/api/register');
        // res.send('El email ya está registrado en la db y vas a /register');

      } else {
        users.push({id, name, email, password}); // Acá debería crear el user en la db
        console.log(users, 'luego de agregar el nuevo user')
        console.log('Se creo el registro y volves a barra');
        res.redirect('/');
        // res.send('Se creo el registro y volver a barra')   
      }
        
  
    } else {
      console.log('Datos incompletos, no se creo el registro y vas a /register'); 
      res.redirect('/api/register');
      // res.send('Datos incompletos, no se creo el registro y vas a /register');
  
    }

})

module.exports = router;

