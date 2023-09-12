const express = require('express');
const routerLogin = require('./routers/routerLogin');

const app = express();

//Middleware's 
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static('public'));

//Routers
app.use('/',routerLogin);

app.listen(4000,()=>{
  console.log('server on port 4000');
});