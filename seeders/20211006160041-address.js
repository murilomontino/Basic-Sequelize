'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('address', [
    {
      id: 1,
      rua: 'Travessa ACM',
      numero: '51',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      rua: 'Vila Cristina',
      numero: '1051',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
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
