const AppError = require('../utils/appError');
const { Orders, OrderItems, Product } = require('../models');

exports.buyOrder = async (req, res, next) => {
  try {
    const { order: orderList } = req.body;
    // const data = { userId: req.user.id };
    if (!Array.isArray(orderList)) {
      throw new AppError('order is invalid', 400);
    }

    // create property type id
    const orderRes = await Orders.create({
      userId: req.user.id
    });

    const dataList = orderList.map((product) => {
      return {
        productId: product.id,
        ordersId: orderRes.id,
        price: product.price,
        amount: product.amount
      };
    });
    const resList = await OrderItems.bulkCreate(dataList);

    res.status(201).json({
      message: `Update OrderItems Success by ordersId:${orderRes.id}`,
      data: resList
    });
  } catch (err) {
    next(err);
  }
};

exports.getOrderList = async (req, res, next) => {
  try {
    const order = await Orders.findAll({
      where: { userId: req.user.id },
      order: [['createdAt', 'ASC']],
      include: [
        {
          model: OrderItems
        }
      ]
      //
    });
    res.status(200).json({ data: order });
  } catch (err) {
    next(err);
  }
};

exports.getOrderAdminList = async (req, res, next) => {
  try {
    const order = await Orders.findAll({
      order: [['createdAt', 'ASC']],
      include: [
        {
          model: OrderItems
        }
      ]
      //
    });
    res.status(200).json({ data: order });
  } catch (err) {
    next(err);
  }
};

exports.updateOrderStatus = async (req, res, next) => {
  try {
    const { orderId, orderStatus } = req.body;
    const data = {
      orderStatus
    };
    const updateStatus = await Orders.update(data, {
      where: {
        id: orderId
      }
    });

    if (!updateStatus[0]) {
      throw new AppError(`Cannot found orderId:${orderId}`, 403);
    }

    res.status(201).json({
      message: `Update Order Status by orderId:${orderId}`
    });
  } catch (err) {
    next(err);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Orders.findOne({
      where: { id: id },
      order: [['createdAt', 'ASC']],
      include: [
        {
          model: OrderItems,
          include: [
            {
              model: Product,
              attributes: ['name', 'image']
            }
          ]
        }
      ]
      //
    });
    res.status(200).json({ data: order });
  } catch (err) {
    next(err);
  }
};
