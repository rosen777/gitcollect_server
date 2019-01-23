'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */

    return queryInterface.bulkInsert('Users', [{
      username: 'johndavidson',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'joeclark',
      password: 'abc',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
