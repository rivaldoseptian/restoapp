const app = require("../app");

const request = require("supertest");
const { sequelize } = require("../models");
const { hashPassword } = require("../helpers/bcrypt");

describe("POST/Register - User Reister", () => {
  test("201 Success Register", async () => {
    const user = {
      email: "Budi@gmail.com",
      password: hashPassword("123456"),
    };
    const response = await request(app).post("/pub/register").send(user);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(expect.any(Object));
  });
});
