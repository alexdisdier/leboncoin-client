const buildFilters = (title, priceMin, priceMax) => {
  const filter = {};

  if (
    (priceMin !== undefined && priceMin !== '') ||
    (priceMax !== undefined && priceMax !== '')
  ) {
    filter.price = {};
    if (priceMin) {
      filter.price.$gte = priceMin;
    }

    if (priceMax) {
      filter.price.$lte = priceMax;
    }
  }

  if (title) {
    filter.title = {
      $regex: title,
      $options: 'i',
    };
  }

  return filter;
};

const buildSortOrder = (sort) => {
  const sortOrder = {};

  if (sort === 'price-asc') {
    sortOrder.price = 1;
  } else if (sort === 'price-desc') {
    sortOrder.price = -1;
  }

  if (sort === 'date-asc') {
    sortOrder.created = 1;
  } else if (sort === 'date-desc') {
    sortOrder.created = -1;
  }

  return sortOrder;
};

module.exports = { buildFilters, buildSortOrder };
