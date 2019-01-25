module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
      details: DataTypes.STRING,
      image: DataTypes.STRING,
      genre: DataTypes.STRING
    }
  );

  // Game.associate = (models) => {
  //   Game.belongsTo(models.User);
  // };

  return Game;
}
