const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config({path: './config.env'});
const authJwt = require('./helpers/jwt');
const AppError = require('./helpers/appErrors');
const globalErrorHandler = require('./helpers/error-handler');

const connectDB = require('./config/db');

connectDB();

const PORT = process.env.PORT || 3000;

// 1. Middel ware
app.use(express.json());
app.use(morgan('tiny'));
//app.use(authJwt());

// 2. Route
const doctorRoute = require('./routes/doctorRoute');
const specializationRoute = require('./routes/specializationRoute');
const appointmentRoute = require('./routes/appointmentRoute');
const patientRoute = require('./routes/patientRoute');
const followUpRoute = require('./routes/followUpRoute');

const api = process.env.API_URL;
app.use(`${api}/doctor`, doctorRoute);
app.use(`${api}/specialization`, specializationRoute);
app.use(`${api}/appointment`, appointmentRoute);
app.use(`${api}/patient`, patientRoute);
app.use(`${api}/followUp`, followUpRoute);

app.get(`${api}`, (req, res) => {
  res.send('Api is running');
});
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorHandler);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
