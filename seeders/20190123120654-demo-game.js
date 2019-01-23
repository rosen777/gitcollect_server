'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Games', [{
      title: 'Call of Duty',
      price: 50,
      details: 'Call of Duty: Black Ops 4 is the first entry in the first-person shooter series to contain only a multiplayer mode, and a new battle royale mode called Blackout.',
      image: 'https://s3.dexerto.com/thumbnails/_thumbnailLarge/when-does-black-ops-4-and-blackout-release.jpg',
      genre: 'FPS',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Counter-Strike',
      price: 15,
      details: 'A first person shooter game depicting death matches between terrorists and counter-terrorists.',
      image: 'https://3.bp.blogspot.com/-SEhJrUlNRDA/UcCArYqYPjI/AAAAAAAAACc/C9s3pZzEKic/s1600/Counter_Strike__Global_Offensive_(2012)_CUSTOM-%5Bfront%5D-%5Bwww.FreeCovers.net%5D.jpg',
      genre: 'FPS',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'FIFA 19',
      price: 60,
      details: 'FIFA 19 brings you a conclusion to The Journey and all new game modes and features to enjoy on and offline. Fifa 19 allows you to take control in your very own footballing world.',
      image: 'https://cdn.gearnuke.com/wp-content/uploads/2018/06/fifa-19-cover-star.jpg',
      genre: 'Sports',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Sniper Elite',
      price: 8,
      details: 'Sniper Elite sets you in the midst of the end of World War II. As an OSS-trained sniper you must disguise yourself as a German soldier and stop the Russians from stealing nuclear secrets from Berlin.',
      image: 'https://cdn11.bigcommerce.com/s-m4soz87148/images/stencil/1280x1280/products/147/411/ps4-sniper4e-01-1__88232.1514317574.jpg?c=2&imbypass=on',
      genre: 'Tactical Shooter',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Mario Kart 8',
      price: 40,
      details: 'Mario and the rest race against each other for the gold cup again. Underwater and air gliding returns. Mario Kart 8 introduces zero gravity, and has a total of 48 race tracks.',
      image: 'https://cdn.geekaygames.com/media/catalog/product/1/4/1487568962_main_Mario_Kart_8_Deluxe.jpg',
      genre: 'Racing',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Metal Gear Survive',
      price: 30,
      details: 'When the nations of the world rely upon private military companies to fight their battles for them, renegade Liquid Ocelot emerges as the head of a potent coalition of mercenary powers. Solid Snake returns to save the world once again.',
      image: 'https://pbs.twimg.com/media/DNF7_BLUQAAHgqb.jpg',
      genre: 'Survival action',
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
