import dbConenct from '../../../utils/mongo';
import Order from '../../../models/Order';

const handler = async function (req, res) {
  const { method } = req;

  await dbConenct();

  if (method === 'GET') {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === 'POST') {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler;
