module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING
    }

  );

  // User.associate = (models) => {
  //   User.hasMany(models.Game);
  // };

  return User;
}
