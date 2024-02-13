import User from "../Models/UserModels.js";
import { errorHandelar } from "../Utilits/error.js";

import bcrypt from 'bcrypt'
export const test = (req, res) => {
    res.json({
      message: 'Api route is working!',
    });
  };
  
  export const updateUserInfo = async (req, res, next) => {
    //  console.log(req.user,"req")
    if (req.user.id !== req.params.id)
      return next(errorHandelar(401, 'You can only update your own account!'));
    try {
      if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
          },
        },
        { new: true }
      );
  
      const { password, ...rest } = updatedUser._doc;
  
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteUser = async (req, res, next) => {
    console.log(req)
    if (req.user.id !== req.params.id)
      return next(errorHandelar(401, 'You can only delete your own account!'));
    try {
      await User.findByIdAndDelete(req.params.id);
      res.clearCookie('access_token');
      res.status(200).json('User has been deleted!');
    } catch (error) {
      next(error);
    }
  };
  
  
  
  export const getUser = async (req, res, next) => {
    try {
      
      const user = await User.findById(req.params.id);
    
      if (!user) return next(errorHandelar(404, 'User not found!'));
    
      const { password: pass, ...rest } = user._doc;
    
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };