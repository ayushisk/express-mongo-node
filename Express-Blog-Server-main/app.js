const express = require("express");
const { blogRouter } = require("./routers/blog");
const { healthRouter } = require("./routers/Heath");
const port = 8000;
const app = express();

app.use(express.json());
app.use("/blog",blogRouter)
app.use("/health",healthRouter)

app.listen(port, () => {
  console.log(`Server running on PORT:${port}`);
});

