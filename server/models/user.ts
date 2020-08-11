import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';
import { User } from '../../src/app/modules/users/user';

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


export default mongoose.model<User & mongoose.Document>('users', UserSchema, 'users');
