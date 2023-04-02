const { User, Menu, Order } = require("../models");
const midtransClient = require("midtrans-client");

class CustomerController {
  static async showMenu(req, res, next) {
    try {
      const { page, total } = req.query;
      console.log(req.query);
      let option = {};

      option.limit = !total ? 8 : +total;
      option.offset = !page ? 0 : +page * option.limit;
      option.where = { status: "Available" };
      const menu = await Menu.findAll(option);
      res.status(200).json(menu);
    } catch (error) {
      next(error);
    }
  }

  static async createOrder(req, res, next) {
    try {
      const MenuId = req.params.MenuId;
      const UserId = req.user.id;

      const order = await Order.create({ MenuId, UserId });
      res.status(201).json(order);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async deleteOrder(req, res, next) {
    try {
      const id = req.params.orderId;
      if (!id) throw { name: "Not Found" };
      const order = await Order.destroy({ where: { id } });
      res.status(200).json({ message: "Success Delete Menu" });
    } catch (error) {
      next(error);
    }
  }
  static async UpdateOrder(req, res, next) {
    try {
      const id = req.params.MenuId;
      if (!id) throw { name: "Not Found" };
      const { order, keterangan } = req.body;
      const orders = await Order.update(
        { order, keterangan },
        { where: { MenuId: id } }
      );
      res.status(201).json({ message: "Succes Update Order" });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async generateMidtransToken(req, res, next) {
    try {
      const findUser = await User.findByPk(req.user.id);

      let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction: false,
        serverKey: "SB-Mid-server-6m5qOiZY8Sau53hw0fyaFg-f",
      });
      let parameter = {
        transaction_details: {
          order_id: "ORDERID_" + Math.floor(100000 + Math.random() * 900000),
          gross_amount: 100000,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          email: findUser.email,
        },
      };

      const midtransToken = await snap.createTransaction(parameter);
      res.status(201).json(midtransToken);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getOrder(req, res, next) {
    try {
      const id = req.user.id;
      if (!id) throw { name: "Not Found" };
      const order = await Order.findAll({
        where: { UserId: id },
        include: [Menu],
      });
      res.status(200).json(order);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async bulkDeleteOrder(req, res, next) {
    try {
      const UserId = req.user.id;
      const order = await Order.destroy({ where: { UserId } });
    } catch (error) {
      next(error);
    }
  }

  static async bulkDeleteOrderCheckout(req, res, next) {
    try {
      const UserId = req.user.id;
      const order = await Order.destroy({ where: { UserId } });
    } catch (error) {
      next(error);
    }
  }

  static async detailMenu(req, res, next) {
    try {
      const id = req.params.menuId;
      if (!id) throw { name: "Not Found" };
      const menu = await Menu.findByPk(id);
      if (!menu) throw { name: "Not Found" };
      res.status(200).json(menu);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CustomerController;
