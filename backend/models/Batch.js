const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Batch = sequelize.define('Batch', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  monthlyFee: { type: DataTypes.FLOAT, allowNull: false },
}, { timestamps: true });

module.exports = Batch;
