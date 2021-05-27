import mongoose from 'mongoose'

/* This Schema must correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    /* The name of this pet */

    type: String,
    unique: true,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [20, 'Name cannot be more than 60 characters']
  },
  age: {
    /* User's age, if applicable */

    type: Number
  },
  admin: {
    /* Boolean admin value, if applicable */

    type: Boolean
  },
  roles: {
    /* List of user roles, if applicable */

    type: Array
  }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
