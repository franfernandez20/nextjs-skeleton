import mongoose from 'mongoose'

/* This Schema must correspond to a collection in your MongoDB database. */
const OrderSchema = new mongoose.Schema({
  date: {
    /* Date of the order */

    type: Date,
    default: Date.now,
    required: [true, 'Date is required']
  },
  /* list with the items in the order */
  items: [{ name: String, prize: Number, total: Number }],
  total: {
    /* The total sum of items prize */

    type: Number
  }
})

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)
