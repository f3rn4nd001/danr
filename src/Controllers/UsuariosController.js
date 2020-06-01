var Employee = require('../model/UsuarioM');
var Role = require('../model/Role');
var sequelize = require('../model/database');
const usuarioController ={}

usuarioController.createUsuario = async ( req, res) => { 
    const {name,email,address,phone}=req.body;
    const errors = [];
    if (!name) {
        errors.push({ text: 'El campo Nombre no puede estar vacio' });
    }else{
    await Employee.create( {name,email,address,phone});   
            console.log( {name,email,address,phone});
            res.json( {name,email,address,phone});
        
    }
    console.log(errors);
const response = await sequelize.sync().then(function() {
        const usuarios =  Employee.findAll()
        return usuarios;
    })
    .catch(err => {
    return err;
    });
    res.json(response)
   
}



usuarioController.usuariosGet= async(req,res)=>{
    const data = await Employee.findAll();
    res.json(data);
}
module.exports=usuarioController;