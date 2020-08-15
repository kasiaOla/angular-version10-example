import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

const AnnouncementSchema: Schema = new Schema({

  id: Number,
  userid: String,
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
