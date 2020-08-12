import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

const LocationSchema = new Schema({
  name: String,
  department: String,
  address: {
    street: String,
    houseNumber: String,
    city: String
  }
});


export default mongoose.model<Location & mongoose.Document>('location', LocationSchema, 'location');
