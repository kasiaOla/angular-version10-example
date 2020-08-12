import Location from '../models/location';
import { Request, Response, NextFunction } from 'express';

export class LocationRoute {
  locationRoute(app: any): void {
    app.route('/api/get-location').get((req: Request, res: Response, next: NextFunction) => {
      Location.find((error, data) => {
        if (error) {
          return res.status(400).json({
            success: false,
            message: 'Error processing request ' + error
          });
        } else {
          return res.status(200).json({
            success: true,
            message: 'Get location was successful.',
            respons: data
          });
        }
      });
    });
  }
}

