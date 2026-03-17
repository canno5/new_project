const mongoose = require("mongoose");
// let URL = "mongodb://localhost:27017/developData" || process.env.MONGO_URI
let URL = process.env.MONGO_URI
const dbFunc = async () => {
    try {
        let conns = await mongoose.connect(URL);
        if (!conns) {
            console.log("Connention Failed")
            // return conns;
            process.exit(0);
        } else {
            console.log("Connention Sucessed")
        }
    } catch (error) {
        return error
    }
}
module.exports = dbFunc
