const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Student = require('./Student');
const Batch = require('./Batch');

const Registration = sequelize.define('Registration', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  studentId: {
    type: DataTypes.INTEGER,
    references: { model: Student, key: 'id' },
    allowNull: false,
  },
  batchId: {
    type: DataTypes.INTEGER,
    references: { model: Batch, key: 'id' },
    allowNull: false,
  },
  paymentStatus: { type: DataTypes.STRING, defaultValue: 'Unpaid' },
}, { timestamps: true });

module.exports = Registration;
