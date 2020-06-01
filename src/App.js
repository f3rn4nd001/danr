const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
//ROUTES
app.use('/api/Usuarios' ,require('./Routes/UsuariosRoutes'));


app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})