import dbConnect from 'utils/dbConnect'
import Order from 'models/Order'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const orders = await Order.find(
          {}
        ) /* find all the data in our database */
        res.status(200).json({ success: true, data: orders })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break
    case 'POST':
      try {
        const order = await Order.create(
          req.body
        ) /* create a new model in the database */
        res.status(201).json({ success: true, data: order })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
