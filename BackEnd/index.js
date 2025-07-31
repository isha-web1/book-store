const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const app = express()
const port = process.env.PORT || 5000

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book Store Server is running!");
  });
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

// yaP2IHXH2rf6BKk7
// ishaweb1
app.listen(port, () => {
  console.log(`Book store server running on port ${port}`)
})
