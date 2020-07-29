import User from '../models/user';
import { Request, Response, NextFunction } from 'express';

export class UserRoute {
  userRoute(app: any): void {
    app.route('/register').post((req: Request, res: Response, next: NextFunction) => {
      User.create(req.body, (Error: any, data: any) => {
        if (Error) {
        //  return next(Error);
          return res.status(400).json({
            success: false,
            message: 'Error processing request ' + Error
          });
        } else {
        //  res.json(data);
          return res.status(200).json({
            success: true,
            message: 'Register was successful.',
            respons: data
          });
        }
      });
    });

    app.route('/login').post((req: Request, res: Response, next: NextFunction) => {

      User.findOne({
        username: req.body.username, password: req.body.password
      }, (err, user) => {
        console.log('req.body', req.body);
        if (err) {
          return res.status(400).json({
            success: false,
            message: 'Error processing request ' + err
          });
        }

        if (!user) {
          return res.status(201).json({
            success: false,
            message: 'Incorrect login credentials.'
          });
        } else if (user) {
          return res.status(200).json({
            success: true,
            message: 'Login was successful.'
          });
        }
      });
    });
  }
}
