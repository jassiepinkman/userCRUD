const mongoose = require("mongoose");
require('dotenv/config');

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true, useFindAndModify : false },
  (error) => {
    if (!error) {
      console.log(`Mongodb Connected Successfully`);
    } else {
      console.log(`err ` + error);
    }
  }
);

require('../Model/User');
