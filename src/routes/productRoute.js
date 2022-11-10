const express = require('express');

const productController = require('../controllers/productController');
// const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.get('/', productController.getProductList);

module.exports = router;
