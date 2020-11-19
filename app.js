//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
const d = new Date();

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/about-us", function (req, res) {
  res.render("about-us");
});
app.get("/portfolio", function (req, res) {
  res.render("portfolio");
});
app.get("/contact", function (req, res) {
  res.render("contact-us");
});
app.get("/residential", function (req, res) {
  res.render("residential");
});
app.get("/commercial", function (req, res) {
  res.render("commercial");
});
app.get("/construction", function (req, res) {
  res.render("construction");
});
app.get("/residential/page1", function (req, res) {
  res.render("page-1");
});
app.get("/residential/page2", function (req, res) {
  res.render("page-2");
});
app.get("/residential/page3", function (req, res) {
  res.render("page-3");
});
app.get("/commercial/page1", function (req, res) {
  res.render("page-4");
});
app.get("/commercial/page2", function (req, res) {
  res.render("page-5");
});
app.get("/construction/page1", function (req, res) {
  res.render("page-6");
});
app.get("/construction/page2", function (req, res) {
  res.render("page-7");
});
app.get("/construction/page3", function (req, res) {
  res.render("page-8");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
  const e = date.getTime(d);
  console.log("mideol server started successfully " + e);
});
