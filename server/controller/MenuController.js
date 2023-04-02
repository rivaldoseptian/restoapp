const { User, Menu, Order } = require("../models");

class Controller {
  static async createMenu(req, res, next) {
    try {
      const { name, imgUrl, harga } = req.body;
      const menu = await Menu.create({
        name,
        imgUrl,
        harga,
        status: "Available",
      });
      res.status(201).json(menu);
    } catch (error) {
      next(error);
    }
  }

  static async showMenu(req, res, next) {
    try {
      const menu = await Menu.findAll();
      res.status(200).json(menu);
    } catch (error) {
      next(error);
    }
  }

  static async updateMenu(req, res, next) {
    try {
      const id = req.params.MenuId;
      if (!id) throw { name: "Not Found" };
      const { name, imgUrl, harga } = req.body;
      const menu = await Menu.update(
        { name, imgUrl, harga },
        {
          where: {
            id,
          },
        }
      );
      if (!menu) throw { name: "Not Found" };
      res.status(201).json("Succes Update Menu");
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async updateStatus(req, res, next) {
    try {
      const id = req.params.MenuId;
      if (!id) throw { name: "Not Found" };
      const { status } = req.body;
      const menu = await Menu.update({ status }, { where: { id } });
      if (!menu) throw { name: "Not Found" };
      res.status(201).json({ message: "Succes Update Status" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getMenubyId(req, res, next) {
    try {
      const id = req.params.MenuId;
      if (!id) throw { name: "Not Found" };
      const menu = await Menu.findByPk(id);
      if (!menu) throw { name: "Not Found" };
      res.status(200).json(menu);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
