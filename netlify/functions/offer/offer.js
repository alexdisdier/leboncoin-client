const mongoose = require('mongoose');
const Offer = require('../model/Offer');
require('../model/User');

// netlify env:set MONGODB_URI YOUR_URI_HERE
// netlify env:set MONGODB_DATABASE sample_mflix
// netlify env:set MONGODB_COLLECTION movies

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});

// https://www.npmjs.com/package/cachegoose

const handler = async (event) => {
  try {
    const offers = await Offer.find();
    const offerId = event.queryStringParameters.id;

    let singleOffer;

    if (offerId) {
      singleOffer = await Offer.findById(offerId).populate({
        path: 'creator',
        model: 'User',
        select: { account: 1 },
      });
    }

    if (singleOffer) {
      return {
        statusCode: 200,
        body: JSON.stringify(singleOffer),
      };
    }

    if (offers.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify({ offers }),
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
