'use strict';
module.exports = (sequelize, DataTypes) => {
  const User2 = sequelize.define('User2', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User2.associate = function(models) {
    // associations can be defined here
  };
  return User2;
};