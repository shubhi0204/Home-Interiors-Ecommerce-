const app = require("./app");

const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");


// CORS middleware
// const allowCrossDomain = (req, res, next) => {
//   res.header(`Access-Control-Allow-Origin`, `*`);
//   res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
//   res.header(`Access-Control-Allow-Headers`, `Content-Type`);
//   next();
// };
// app.use(allowCrossDomain);

// const cors = require("cors");

// //Handling Uncaught Exception
// process.on("uncaughtException", (err) => {
//   console.log(`Error:${err.message}`);
//   console.log(`Shutting down the server due to Uncaught Exception`);

//   process.exit(1);
// });

// const cors = require("cors");

// // Enable CORS for all origins
// app.use(cors());

//config
if(process.env.NODE_ENV!=="PRODUCTION"){
  require("dotenv").config({ path: "config/config.env" });
}

//connectingconnectDatabase to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const server = httpServer.listen(process.env.PORT,()=>{
//     console.log("Server is working on : ", process.env.PORT);
// })

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
