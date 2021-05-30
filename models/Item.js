import mongoose from 'mongoose'

/* This Schema must correspond to a collection in your MongoDB database. */
const ItemSchema = new mongoose.Schema({
  name: {
    type: String
  },
  prize: {
    type: Number
  },
  total: {
    type: Number
  }
})

export default mongoose.models.Item || mongoose.model('Item', ItemSchema)
