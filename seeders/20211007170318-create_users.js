'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await  queryInterface.bulkInsert('users', [{
         login: 'murilomontino',
         password: 'admin',
         endereco: 1,
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
        login: 'microsoft',
        password: 'admin',
        endereco: 1,
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
      login: 'adel',
      password: 'admin',
      endereco: 1,
      createdAt: new Date(),
      updatedAt: new Date()
   }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
