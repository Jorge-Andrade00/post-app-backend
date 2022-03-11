require("dotenv").config();
const express = require("express");
const app = express();

//Middlewares
app.use(express.json());
//app.use(express.urlencoded({extended:false}))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Rutas
app.use('/api/entries',require('./Routes/index'))

//Run server
app.listen(process.env.SERVER_PORT, () => {
  console.log(`server on port${process.env.SERVER_PORT}`);
});
