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

     await queryInterface.bulkInsert('tickets', [
       {
      trip_id: 1,
      user_id: 1,
      createdAt: "2021-05-13 8:30:00",  
    updateAt: "2021-05-14 8:30:00"
     },

     {
      trip_id: 2,
      user_id: 1,
      createdAt: "2021-05-13 8:30:00",  
    updateAt: "2021-05-14 8:30:00"
     },

     {
      trip_id: 3,
      user_id: 2,
      createdAt: "2021-05-13 8:30:00",  
    updateAt: "2021-05-14 8:30:00"
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
  }
};
