const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { getPort } = require("./src/functions/start");
require("ejs")

const app = express();

//settings
app.set("port", getPort());
app.set("views", path.join(__dirname, "src/views"))
app.set("view engine", "ejs")

//middlewares
app.use(morgan("dev"));

//paths
app.use("/public", express.static(path.join(__dirname, "src/public")));

//routes
const principalRoutes = require("./src/routes/principal")
app.use(principalRoutes)


app.listen(app.get("port"));
