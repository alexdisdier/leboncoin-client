const mongoose = require('mongoose');
const { buildFilters, buildSortOrder } = require('./utils');
const Offer = require('../model/Offer');
require('../model/User');

const DEFAULT_OFFERS_LIMIT = 100;

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/leboncoin`, {
  useNewUrlParser: true,
});

const handler = async (event) => {
  try {
    const {
      queryStringParameters: { priceMin, priceMax, title, sort },
      skip,
      limit,
    } = event;

    const filter = buildFilters(title, priceMin, priceMax);
    const sortOrder = buildSortOrder(sort);
    const count = await Offer.countDocuments(filter);

    // if (skip) {
    //   query.skip(parseInt(skip, 10));
    // }
    // if (limit) {
    //   query.limit(parseInt(limit, 10));
    // } else {
    //   // valeur par défaut de la limite
    //   query.limit(DEFAULT_OFFERS_LIMIT);
    // }

    if (count === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: 'no offers in database',
        }),
      };
    }

    const offers = await Offer.find(filter)
      .sort(sortOrder)
      .then((res) => res)
      .catch((err) => err);

    return {
      statusCode: 200,
      body: JSON.stringify({
        offers,
        count,
      }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
