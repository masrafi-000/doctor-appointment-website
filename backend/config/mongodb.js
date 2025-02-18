const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose
        .connect('mongodb+srv://masrafi-000:Masrafi6585@cluster0.qsjiv.mongodb.net/prescripto')
        .then(() => console.log('Database Connected'))
        .catch((err) => console.log(err));
};

module.exports = connectDB;
