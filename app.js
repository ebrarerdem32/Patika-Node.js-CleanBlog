const express = require('express');
const app = express();

const blog = { id: 1, title: "Blog title", description: "Blog description" };

app.get("/",(req,res)=>{
    res.send(blog);
})

const PORT = 5500;

app.listen(PORT,console.log(`listening on ${PORT}`));