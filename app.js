const express = require('express');
const PORT = 3000;
const app = express();

const blog = { id: 1, title: "Blog title", description: "Blog description" };

app.get("/",(req,res)=>{
    res.send(blog);
})

app.listen(PORT,console.log(`listening on ${PORT}`));