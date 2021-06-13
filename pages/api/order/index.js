import { getSession } from 'next-auth/client'
import dbConnect from 'utils/dbConnect'
import Order from 'models/Order'
import Client from 'models/Client'

/**
 * Return Client if exits if not create and return
 * @param {Object} client
 * @returns Client
 */
const manageClient = async (client) => {
  let clientDB = await Client.find({ email: client.email }).exec()
  if (clientDB.length === 0) {
    clientDB = await Client.create({
      ...client,
      openOrder: false,
      totalSpend: 0
    }).catch((e) => {
      console.log('ERROR. Saving user:', client.email, '\n----', e)
    })
  }
  return clientDB[0]
}

export default async function handler (req, res) {
  const { method } = req
  const session = await getSession({ req })
  if (session) {
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
          console.log('POST', { dd: req.body })
          const client = await manageClient(session.user)
          const { items } = req.body
          const order = await Order.create({
            client: client._id,
            items
          }) /* create a new model in the database */
          res.status(201).json({ success: true, data: order })
        } catch (error) {
          console.log('ERROR | POST order =>', error)
          res.status(400).json({ success: false, error })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  } else res.status(400).json({ success: false, msg: 'Not logged' })
}
