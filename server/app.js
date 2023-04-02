if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");
const errorhandler = require("./middleware/errorhandler");

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.use(errorhandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
