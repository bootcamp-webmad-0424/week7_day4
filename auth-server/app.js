require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

require("./config")(app);

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRouter = require("./routes/auth.routes");
app.use("/api/auth", authRouter);

require("./error-handling")(app);

module.exports = app