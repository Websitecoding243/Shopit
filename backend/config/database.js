const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((con) => {
      console.log(`DB CONNECTED`);
    });
};

module.exports = connectDatabase;
