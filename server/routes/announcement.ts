import Announcement from '../../server/models/announcement';
import { Request, Response, NextFunction } from 'express';


export class AnnouncementRoute {

  announcementRoute(app: any): void {
    app.route('/category/:id_category/type/:id_type').post((req: Request, res: Response, next: NextFunction) => {
      Announcement.create(null, (error, doc) => {
        if (error) {
          res.status(400).json({
            success: false,
            message: 'Error processing request ' + error
          });
        } else {
          const announcementData = {
            userid: req.body.userid,
            title: req.body.title,
            price: req.body.price,
            surface: req.body.surface,
            pricePerM: req.body.pricePerM,
            numberOfRooms: req.body.numberOfRooms,
            address: {
              street: req.body.address.street,
              houseNumber: req.body.address.houseNumber,
              postCode: req.body.address.postCode,
              city: req.body.address.city
            },
            announcementsCategories: req.body.announcementsCategories,
            announcementType: req.body.announcementType,
            multimedia: req.body.multimedia,
            description: req.body.description,
            floor: req.body.floor
          };

          const data = new Announcement(announcementData);
          data.save();
          res.status(201).json({
            success: true,
            message: 'Announcement created successfully.',
            respons: JSON.stringify(data)
          });
        }
      });
    });
    app.route('/api/get-announcements').get((req: Request, res: Response, next: NextFunction) => {
      Announcement.find((error, data) => {
        if (error) {
          return res.status(400).json({
            success: false,
            message: 'Error processing request ' + error
          });
        } else {
          return res.status(200).json(data);
        }
      });
    });

    app.route('/api/get-announcements-user/:id_user').get((req: Request, res: Response, next: NextFunction) => {
      Announcement.find({
        userid: req.params.id_user
      }, (error, data) => {
        if (error) {
          return res.status(400).json({
            success: false,
            message: 'Error processing request ' + error
          });
        } else {
          return res.status(200).json(data);
        }
      });
    });
  }
}
