require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const multer = require("multer");
const indexRouter = require("./routes/index");
const mediaRouter = require("./routes/media");

const app = express();
const multerMid = multer({
  storage: multer.memoryStorage(),
  limit: {
    // no larger than 5mb
    fileSize: 5 * 1024 * 1204,
  },
});

app.disable("x-powered-by");
app.use(multerMid.single("file"));
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/media", mediaRouter);

module.exports = app;
