const AppError = require('../utils/appError');
const { Product } = require('../models');

exports.getProductList = async (req, res, next) => {
  try {
    const product = await Product.findAll({
      order: [['createdAt', 'ASC']]
    });
    res.status(200).json({ data: product });
  } catch (err) {
    next(err);
  }
};
