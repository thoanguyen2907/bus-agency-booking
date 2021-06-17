'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Users', [
        {
       name: 'John Doe',
       email: 'johndoe@gmail.com', 
       password: '123123',
      numberPhone: '123123',
      avatar: 'https://cdn.halloota.com/2020/04/husky-koomiset-kuvat.jpg', 
      type: 'ADMIN',
      createdAt: "2021-05-13 8:30:00",  
      updatedAt: "2021-05-14 8:30:00"
     },

     {
      name: 'Thoa',
      email: 'thoang@gmail.com', 
      password: '123123',
      numberPhone: '123123',
     avatar: 'https://cdn.halloota.com/2020/04/husky-koomiset-kuvat.jpg', 
     type: 'ADMIN',
     createdAt: "2021-05-13 8:30:00",  
     updatedAt: "2021-05-14 8:30:00"
    }, 
    {
      name: 'Tâm',
      email: 'tamng@gmail.com', 
      password: '123123',
      numberPhone: '123123',
     avatar: 'https://cdn.halloota.com/2020/04/husky-koomiset-kuvat.jpg', 
     type: 'ADMIN',
     createdAt: "2021-05-13 8:30:00",  
     updatedAt: "2021-05-14 8:30:00"
    },
    {
      name: 'Trúc',
      email: 'trucng@gmail.com', 
      password: '123123',
      numberPhone: '123123',
     avatar: 'https://cdn.halloota.com/2020/04/husky-koomiset-kuvat.jpg', 
     type: 'ADMIN',
     createdAt: "2021-05-13 8:30:00",  
     updatedAt: "2021-05-14 8:30:00"
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

     await queryInterface.bulkDelete('Users', null, {});
  }
};
