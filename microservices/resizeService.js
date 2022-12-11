'use strict';

const { Responder } = require('cote');
const Jimp = require ('jimp')

// microservice's logic

const responder = new Responder({ name: 're-size-Service' });

responder.on('re-size-photo', (req, done) => {

  const { photo } = req;

  async function thumbnail() {
    const image = await Jimp.read('../public/' + photo);

    image.resize(100, 100)
    .write('../public/thumbnails/' + photo);
    
}
    
    done(thumbnail());
    

})