'use strict';

module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define(
    'Komik',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'komik',
      timestamps: false,
    }
  );

  return Komik;
};