const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User, Menu, Order } = require("../models");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const { OAuth2Client } = require("google-auth-library");

class UserController {
  static async Register(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.create({ email, password, role: "Customer" });
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async Login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) throw { name: "Email/Password Required" };
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) throw { name: "Invalid Email/Password" };
      const isPassword = comparePassword(password, user.password);
      if (!isPassword) throw { name: "Invalid Email/Password" };
      const payload = {
        id: user.id,
      };

      const access_token = signToken(payload);
      res.status(201).json({ access_token: access_token });
    } catch (error) {
      next(error);
    }
  }
  static async RegisterStaff(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.create({ email, password, role: "Staff" });
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async registerGoole(req, res, next) {
    try {
      const { token_google } = req.headers;

      const client = new OAuth2Client();
      const ticket = await client.verifyIdToken({
        idToken: token_google,
        audience: process.env.GOOGLE_CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();

      const [user, created] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          email: payload.email,
          password: "hallowak",
          role: "Customer",
        },
        hooks: false,
      });

      const access_token = signToken({
        id: user.id,
      });

      let config = {
        service: "gmail",
        auth: {
          user: "ibel.hebat123@gmail.com",
          pass: "kdfxwxraavfqfntv",
        },
      };

      let transporter = nodemailer.createTransport(config);
      let MailGenerator = new Mailgen({
        theme: "default",
        product: {
          name: "Mailgen",
          link: "https://mailgen.js",
        },
      });

      let response = {
        body: {
          name: payload.name,
          intro: "Terimakasih Telah menggunakan website kami.",
        },
      };

      let mail = MailGenerator.generate(response);

      let message = {
        from: "ibel.hebat123@gmail.com",
        to: payload.email,
        subject: "-",
        html: mail,
      };

      transporter
        .sendMail(message)
        .then(() => {
          return res.status(201).json({ access_token });
        })
        .catch((error) => {
          res.status(500).json({ message: "Internal Server Error" });
        });
    } catch (error) {
      console.log(error);
      next();
      // console.log(error);
      //   res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = UserController;
