import Location from '../models/location';
import { Request, Response, NextFunction } from 'express';

export class LocationRoute {
  locationRoute(app: any): void {
    app.route('/api/get-locations').get((req: Request, res: Response, next: NextFunction) => {

      Location.find((error, data) => {
        if (error) {
          return res.status(400).json(error);
        } else {
          return res.status(200).json(data);
        }
      });
    });
  }
}

