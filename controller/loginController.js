'use strict';
const jwt = require('jsonwebtoken');
const { User } = require('../models');

class LoginController {

  index(req, res, next) {
    res.locals.error = '';
    res.locals.email = '';
    res.render('login');
  }

  async post(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user ||  !(await user.comparePassword(password))) {
        res.locals.error = res.__('Wrong email or password');
        res.locals.email = email;
        res.render('login');
        return;
      }

      res.redirect('/');

    } catch(err) {
      next(err);
    }
  }

  async postAPI(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user || !(await user.comparePassword(password))) {
        res.status(401);
        res.json({ error: 'Invalid credentials' })
        return;
      }

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '2d'
      });

      res.json({ token })
    } catch(err) {
      next(err);
    }
  }

}

module.exports = LoginController;