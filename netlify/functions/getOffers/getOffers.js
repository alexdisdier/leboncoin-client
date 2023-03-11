const { MongoClient } = require('mongodb');

const mongoClient = new MongoClient(
  process.env.MONGODB_URI || 'mongodb://localhost/leboncoin'
);

const clientPromise = mongoClient.connect();

const handler = async (_event) => {
  // event.body or event.path or event.queryStringParameters
  // console.log({event})
  try {
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = await database.collection('offers');
    // const offers = await collection.find({}).limit(10).toArray();
    const offers = await collection.find({}).toArray();

    console.log({ offers });

    if (offers.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify(offers),
      };
    }

    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'no offers in database',
      }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
