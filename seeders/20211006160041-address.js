'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('address', [
    {
      rua: 'Travessa ACM',
      numero: '51',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      rua: 'Vila Cristina',
      numero: '1051',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      rua: 'Elpídio Batista Neri',
      numero: '95',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('People', null, {});
  }
};
