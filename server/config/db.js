const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/chatapp", {})
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error", err));

module.exports = mongoose;
