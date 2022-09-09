'use strict';

const { Resolver } = require('dns');
const readline = require('readline');

// conectar a la base de datos
const connection = require('./lib/connectMongoose');

// cargar los modelos
const Product = require('./models/Products');

async function main() {

  const verify = await question('Are you sure you want to delete the database and load the initial data?');

  if (!verify) {
    process.exit();
  }

  // inicializar la colección de agentes
  await initProducts();

  connection.close();

}

main().catch(err => console.log('Something went wrong:', err));

async function initProducts() {

  // Deletes data from database

  const deleted = await Product.deleteMany();
  console.log(`${deleted.deletedCount} products deleted.`);

  // Initial data

  const inserted = await Product.insertMany([
   {
      name: 'Nikon Camera',
      sale: true,
      price: 950.00,
      photo: 'camera_niko.jpg',
      tags:['technology', 'work']
  },
  {
      name: 'Ray-Ban Sunglasses ',
      sale: false,
      price: 250.00,
      photo: 'sunglasses_black.jpg',
      tags:['fashion']
   }
  ]);
  console.log(`${inserted.length} adverts created.`);
}

function question(text) {
  return new Promise((resolve, reject) => {

    const ifc = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    ifc.question(text, answer => {
      answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes' ? resolve(true) : resolve(false);
      ifc.close()
      

      /* ifc.close();
      if (answer.toLowerCase() === 'yes' ||'y') {
        resolve(true);
        return;
      }
      resolve(false);
    }) */});

   })
}
