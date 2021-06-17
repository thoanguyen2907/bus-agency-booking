'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
      await queryInterface.bulkInsert('Stations', [{
      name: "Bến Xe Miền Tây", 
      address: "395 Kinh Dương Vương, An Lạc, Bình Tân",
      province: "Sài Gòn",
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14"

     },
     {
      name: "Bến Xe Chợ Lớn", 
      address: "Lê Quang Sung, P.2, Q.6",
      province: "Sài Gòn",
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14"

     }, 
     {
      name: "Bến Xe An Thới", 
      address: "Lê Quang Sung, P.2, Q.6",
      province: "Vĩnh Long",
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14"

     }, 
     {
      name: "Bến Xe Xuân Lộc", 
      address: "Lê Quang Sung, P.2, Q.6",
      province: "Đồng Nai",
      createdAt: "2021-03-26 07:06:14",
      updatedAt: "2021-03-26 07:06:14"

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
     await queryInterface.bulkDelete('Stations', null, {});
     
  }
};
