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

      await queryInterface.bulkInsert('trips', [
        {
       fromStation:1,
       toStation: 2, 
       price: 30,
       startTime: "2021-06-13 8:30:00", 
      createdAt: "2021-05-13 8:30:00",  
      updateAt: "2021-05-14 8:30:00"
     },
     {
      fromStation:2,
      toStation: 3, 
      price: 40,
      startTime: "2021-06-13 8:30:00", 
     createdAt: "2021-05-13 8:30:00",  
     updateAt: "2021-05-14 8:30:00"
    },
    {
      fromStation:3,
      toStation: 4, 
      price: 20,
      startTime: "2021-06-13 8:30:00", 
     createdAt: "2021-05-13 8:30:00",  
     updateAt: "2021-05-14 8:30:00"
    },
    {
      fromStation:1,
      toStation: 3, 
      price: 10,
      startTime: "2021-06-13 8:30:00", 
     createdAt: "2021-05-13 8:30:00",  
     updateAt: "2021-05-14 8:30:00"
    },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('trips', null, {});
  }
};
