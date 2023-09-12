const express = require('express');
const routerLogin = express.Router();

const indexController = require('../controllers/indexController.js');

routerLogin.get('/',(req,res)=> {
  res.redirect('/video-normal');
});

routerLogin.get('/video-normal',indexController.seeVideoNormalGET);

routerLogin.get('/video-binary',indexController.seeVideoBinaryGET);
routerLogin.post('/video-binary',indexController.seeVideoBinaryPOST);

routerLogin.use(express.static('media'));

module.exports = routerLogin;