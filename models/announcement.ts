import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';

const AnnouncementSchema = new Schema({

  id: Number,
  title: String,
  price: String,
  surface: String,
  pricePerM: String,
  numberOfRooms: Number,
  address: {
    street: String,
    houseNumber: String,
    postCode: String,
    city: String
  },
  announcementsCategories: ['Mieszkania', 'Domy', 'Działki', 'Garaże'],
  announcementType: ['Sprzedam', 'Wynajmę'],
  multimedia: String,
  description: String,
  floor: Number,
});


export default mongoose.model('announcement', AnnouncementSchema, 'announcement');
