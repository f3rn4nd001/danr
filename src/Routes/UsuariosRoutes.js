const express =require('express');
const router = express.Router();
const usuarioController=require('../Controllers/UsuariosController');

router.get('/',usuarioController.usuariosGet);
router.post('/d',usuarioController.createUsuario);
module.exports = router;