const express = require('express');
const app = express();
const port = 3000; // You can use any port number you prefer

const blogs = [];

app.use(express.json());

app.get('/health', (req, res) => {
  res.send('ok');
});

app.post("/blog", (req,res) =>{

    const { body } = req;
    const {author, content} = body;

    if(author && content){
        blogs.push({author,content});
        res.send("ok");
        return;
    }
    res.status(400).send("!ok");
})

app.get("/blog", (req,res)=>{
    res.json(blogs).send();
})

app.get("/blog/:blogId", (req,res)=>{
    let  {blogId} = req.params;
    console.log(blogId);

blogId -= 1;

if(blogId > 0 && blogId <= blogs.length){
    const blogToReturn =  blogs[blogId];
    return res.status(200).json(blogToReturn).send();
}
    res.json(blogs).send();
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
