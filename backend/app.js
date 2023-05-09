const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
const cors=require('cors');
const errorMiddleware=require('./middlewares/error')
const bodyParser=require('body-parser');
const dotenv=require('dotenv')
const fileupload=require('express-fileupload')

//Config 
dotenv.config({path:"backend/config/config.env"});
const corsOption={
    origin:['http://localhost:3000','https://coder-house-app.onrender.com'],
 credentials: true, 
  optionSuccessStatus: 200,
  Headers: true,
  exposedHeaders: 'Set-Cookie',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Access-Control-Allow-Origin',
    'Content-Type',
    'Authorization'
  ]
}
  app.use(cors(corsOption))

//Json setup for backend
app.use(express.json({limit:'8mb'}))
app.use(cookieParser())




app.use(bodyParser.urlencoded({extended:true}))
app.use(fileupload())
//Route imports
const product=require('./routes/productRoute');
const user=require('./routes/userRoute')
const order=require('./routes/orderRoute');
const payment=require('./routes/paymentRoute');

app.use('/api/v1',product);
app.use('/api/v1',user);
app.use('/api/v1',order)
app.use('/api/v1',payment)


//Middleware for error
app.use(errorMiddleware)

module.exports=app
