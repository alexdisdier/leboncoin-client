const mongoose = require('mongoose');
require('../model/Offer');
require('../model/User');

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/leboncoin`, {
  useNewUrlParser: true,
});

const handler = async () => {
  try {
    // const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    // const collection = database.collection(process.env.MONGODB_COLLECTION);
    // Function logic here ...
    return;
    // eslint-disable-next-line no-unreachable
  } catch (error) {
    // eslint-disable-next-line consistent-return
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
