const express = require('express');
const ejs = require('ejs');
const app = express();
// It is middleware for explain where it is
app.use(express.static('public'));  

//Use ejs engine
app.set('view engine', 'ejs');

const blog = { id: 1, title: "Blog title", description: "Blog description" };

app.get("/",(req,res)=>{
    res.send(blog);
})

const PORT = 3000;

app.listen(PORT,console.log(`listening on ${PORT}`));