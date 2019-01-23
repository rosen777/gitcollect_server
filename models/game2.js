'use strict';
module.exports = (sequelize, DataTypes) => {
  const Game2 = sequelize.define('Game2', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    details: DataTypes.STRING,
    image: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {});
  Game2.associate = function(models) {
    // associations can be defined here
  };
  return Game2;
};