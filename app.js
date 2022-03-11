const express = require('express');

const app = express();
//Use ejs engine
app.set('view engine', 'ejs');


// It is middleware for explain where it is
app.use(express.static('public'));  

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/add_post',(req,res)=>{
    res.render('add_post');
})
app.get('/post',(req,res)=>{
    res.render('post');
})

const PORT = 3000;

app.listen(PORT,console.log(`listening on ${PORT}`));