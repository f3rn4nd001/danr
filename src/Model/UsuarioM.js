var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('./database');
// import model for FK roleID
var Role = require('./Role');

var Usuario = sequelize.define('usuario', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.BIGINT,
  roleId: {
    type: Sequelize.INTEGER,
    // This is a reference to another model
    references: {
      model: Role,
      key: 'id'
    }
  }
},
{
	 timestamps: false,
});

Usuario.belongsTo(Role)

module.exports = Usuario