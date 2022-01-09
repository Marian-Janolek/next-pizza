import dbConenct from '../../../utils/mongo';
import Order from '../../../models/Order';

const handler = async function (req, res) {
  const {
    method,
    query: { id },
  } = req;

  await dbConenct();

  if (method === 'GET') {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === 'POST') {
  }
  if (method === 'DELETE') {
  }
};

export default handler;