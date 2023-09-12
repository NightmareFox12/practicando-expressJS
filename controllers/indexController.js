'use strict';

const fs = require('fs');
const path = require('path');

const indexController = {};

indexController.seeVideoNormalGET = (req,res) => {
  return res.render('videoNormal.ejs');
};

indexController.seeVideoBinaryGET = (req,res) => {
  return res.render('videoBinary.ejs');
};

indexController.seeVideoBinaryPOST = (req,res) => {

  if(req.body.key === 'no') return res.json({msg: 'permiso no válido'})

  const file = `${__dirname}/../media/dorime.mp4`
  if( fs.existsSync(file) ) {
    const leido =  fs.readFileSync(file);
    const binary = new Buffer.from(leido);

    return res.send(binary)

  } else console.log('no se encontro el archjivo');


};

module.exports = indexController;