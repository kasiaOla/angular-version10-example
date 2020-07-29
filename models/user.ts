import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';

const UserSchema = new Schema({

  username: String,
  password:  String,
  description: { type: String, required: false },
  email:  String,
  type:  String,
  address: {
    street: String,
    houseNumber: String,
    city: String
  }
});


export default mongoose.model('users', UserSchema, 'users');
