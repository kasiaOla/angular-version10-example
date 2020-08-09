import User from '../models/user';
import { Request, Response, NextFunction } from 'express';

export class UserRoute {
  userRoute(app: any): void {
    app.route('/register').post((req: Request, res: Response, next: NextFunction) => {

      const userName = req.body.username;
      const password = req.body.password;
      const email = req.body.email;
      const type = req.body.type;

      if (!userName || !password) {
        return res.status(422).json({
          success: false,
          message: 'Posted data is not correct or incomplete.'
        });
      }
      User.findOne({
        username: userName
      }, (err, existingUser) => {
        if (err) {
          res.status(400).json({
            success: false,
            message: 'Error processing request ' + err
          });
        } else if (existingUser) {
          return res.status(201).json({
            success: false,
            message: 'User name already exists.'
          });

        } else {
          let newUser = new User({
            username: userName,
            password: password,
            description: '',
            email: email,
            type: type,
            address: {
              street: '',
              houseNumber: 0,
              city: ''
            }
          });

          const data = new User(newUser);
          data.save();
          res.status(201).json({
            success: true,
            message: 'User created successfully, please login to access your account.'
          });
        }
      });
    });

    app.route('/login').post((req: Request, res: Response, next: NextFunction) => {
      User.findOne({
        username: req.body.username, password: req.body.password
      }, (err, user) => {
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
