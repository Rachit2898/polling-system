const mongoose = require("mongoose");

const connectWithDb = () => {
  mongoose
    .connect("mongodb+srv://rachit:1234@cluster0.qkhsycr.mongodb.net/polling", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log(`DB connected successfully`))
    .catch((error) => {
      console.log(`DB connection failed`);
      console.log(error);
      process.exit(1);
    });
};

module.exports = connectWithDb;
