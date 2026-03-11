const express = require("express")
const app = express();
let PORT = process.env.PORT || 1000
let path = require("path");
require("dotenv").config({path:".env"});
const dbFunc = require("../db/conn");
let staticPath = path.join(__dirname, "../static")
let tempPath = path.join(__dirname, "../template/views");
const fs = require("fs");
const contactModel = require("../models/Contact");
app.use("/static", express.static(staticPath));
app.set("view engine", "html");
app.set("views", tempPath);
app.use(express.static(staticPath))
app.use(express.urlencoded({extended:false}));
app.engine("html", function (path, option, cb) {
    fs.readFile(path, (err, data) => {
        if (err) {
            cb(err);
            // return err
        }
        let htmlData = data.toString()
        cb(null, htmlData)
    })
});
app.get("/", (req, res) => {
    try {
        res.status(200).render("index");
    } catch (err) {
        return err
    }
});
app.get("/about", (req, res) => {
    try {
        res.status(200).render('about');
    } catch (err) {
        return err;
    }
});
app.get("/services", (req, res) => {
    try {
        res.status(200).render("services");
    } catch (err) {
        return err
    }

});
app.get("/contacts", (req, res) => {
    try {
        res.status(200).render("contact");
        
    } catch (err) {
        return err
        
    }

});
app.post("/contact", async (req, res) => {
    try {
        await contactModel.create(req.body)
        res.status(201).json({ msg: "Thank You for Contact form Us" })

    } catch (err) {
        // console.log('The Err',err)
        return err

    }
});
app.get("/project", (req, res) => {
    res.status(200).render("project");

});
app.get("/reviews", (req, res) => {
    res.status(200).render("review");
});
app.get("/error", (req, res) => {
    try {
        res.status(404).redirect('/')
   
    } catch (error) {
        console.log('Th Err', error)
    }
})
dbFunc().then(() => {
    app.listen(PORT, () => {
        console.log('I am live to the port ' + PORT)
    });
});