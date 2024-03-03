const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const path = require("path");


const errorMiddleware = require("./middleware/error");

//config 
if(process.env.NODE_ENV!=="PRODUCTION"){
  require("dotenv").config({ path: "config/config.env" });
}

// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());

// CORS middleware
// const allowCrossDomain = (req, res, next) => {
//     res.header(`Access-Control-Allow-Origin`, `*`);
//     res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
//     res.header(`Access-Control-Allow-Headers`, `Content-Type`);
//     next();
//   };
// app.use(allowCrossDomain);
  
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000","https://decor-life.netlify.app","https://main--decor-life.netlify.app/","http://localhost:5000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// const cors = require("cors");

// // Enable CORS for all origins
// app.use(cors());

//Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);

app.use(express.static(path.join(__dirname,"../Client/build")));

app.get("*",(req,res) => {
  res.sendFile(path.resolve(__dirname,"../Client/build/index.html"));
})

//Middleware for errors
app.use(errorMiddleware);

module.exports = app