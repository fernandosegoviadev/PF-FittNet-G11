const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routeLogin = require('./login');
const routeLogout = require('./logout');
const routeHome = require('./home');
const routeRegister = require('./register');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/api', routeLogin);
router.use('/api', routeLogout);
router.use('/api', routeRegister);
router.use('/', routeHome); // -->  /home  (es barra home)



router.get('/', (req, res) => {
    console.log('recibo el get del test')
    res.status(200).send("estoy en get de api (mi home)")
});







module.exports = router;
