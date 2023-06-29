const express = require('express');

const app = express();

//Middleware's 
app.use(express.urlencoded({extended : false}));
app.use(express.static('public'));

app.get('/login',(req,res)=>{
  res.render('login.ejs');
});

app.get('/',(req,res)=>{
  res.render('main.ejs');
});

app.post('/login',(req,res)=>{
  if(req.body.name && req.body.email && req.body.password){
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  res.send('datos recibidos correctamente');
  } 

  res.send('datos fallaron exitosamente');
  
});


app.listen(4000,()=>{
  console.log('server on port 4000');
})