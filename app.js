const express = require('express');
const routerLogin = require('./routers/routerLogin');

const app = express();

//Middleware's 
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static('public'));

//Routers
app.use('/',routerLogin);

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
  console.log(`Server on port ${PORT}`);
});