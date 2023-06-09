// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRouter = require("./routes/auth.routes");       //  <== IMPORT
app.use("/auth", authRouter);                             //  <== ADD
 
const taskRouter = require ("./routes/toDo.routes");
app.use("/task", taskRouter)

const gratefulRouter = require ("./routes/grateful.route");
app.use("/name", gratefulRouter)

const weeklyRouter = require ("./routes/weekly.routes");
app.use("/", weeklyRouter)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
