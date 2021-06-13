import mongoose from 'mongoose'

/* This Schema must correspond to a collection in your MongoDB database. */
const ClientSchema = new mongoose.Schema({
  creationDate: {
    /* Date when is registered */

    type: Date,
    default: Date.now
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  image: {
    type: String
  },
  openOrder: {
    type: Boolean
  },
  totalSpend: {
    type: Number
  }
})

export default mongoose.models.Client || mongoose.model('Client', ClientSchema)
