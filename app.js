require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.Routes');
const contactRoutes = require('./routes/contact.routes');
const bookingRoutes = require('./routes/booking.routes.js');

const app = express();

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
};

app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(express.json());

app.use('/user', userRoutes);
app.use('/contact', contactRoutes);
app.use('/book', bookingRoutes);

app.get('/', (req, res)=>{
    res.send('API is up and running...');
});

mongoose.set('strictQuery', false);

mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((res) => console.log('Connected to MongoDB...'))
    .catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is listning on port ${port}...`);
});