const mongoose = require("mongoose");
const username = "salman";
const password = "salmankhan";
const dbname = "myDB";
const connectionDB = () => {
    mongoose.connect(
        `mongodb+srv://${username}:${password}@cluster0.yjhed.mongodb.net/${dbname}?retryWrites=true&w=majority`
      );
      const db = mongoose.connection
      db.once("open", ()=> console.log("Database connected"))
      db.on("error", ()=> console.log("Connection failed"))

}

module.exports = connectionDB;
