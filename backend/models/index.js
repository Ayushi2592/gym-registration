const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Database configuration

// Import models
const Student = require('./Student')(sequelize, Sequelize.DataTypes);
const Batch = require('./Batch')(sequelize, Sequelize.DataTypes);
const Registration = require('./Registration')(sequelize, Sequelize.DataTypes);

// Relationships
Student.belongsToMany(Batch, { through: Registration });
Batch.belongsToMany(Student, { through: Registration });

module.exports = {
  sequelize,
  Student,
  Batch,
  Registration,
};

/*var express = require("express");
var app = express();
var connection = require('./database');

app.get('/',function(req,res){
  res.send('Hey');
});

app.listen(3000,function(){
  console.log('App Listening on port 3000');
});*/