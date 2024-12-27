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