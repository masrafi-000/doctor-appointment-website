const express = require('express');
const cors = require('cors');
const connectDB = require('./config/mongodb');
const connectCloudinary = require('./config/cloudinary');
const adminRouter = require('./routes/adminRoute');

const port = process.env.PORT || 4000;

// app config
const app = express();
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoint
app.use('/api/admin', adminRouter);

app.get('/', (req, res) => {
    res.send('API WORKING');
});

app.listen(port, () => {
    console.log('Server Started', port);
});
