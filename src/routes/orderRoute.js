const express = require('express');

const orderController = require('../controllers/orderController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.post('/buy', authenticate, orderController.buyOrder);

router.get('/list', authenticate, orderController.getOrderList);
router.get('/list-admin', authenticate, orderController.getOrderAdminList);
router.get('/detail/:id', authenticate, orderController.getOrder);

router.post('/update-status', authenticate, orderController.updateOrderStatus);

module.exports = router;
