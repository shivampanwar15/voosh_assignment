import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from "./db.js";
import addUser from "./routes/add-user.js"
import addOrder from "./routes/add-order.js"
import getOrder from "./routes/get-order.js"
import loginUser from "./routes/login-user.js"



dotenv.config({
    path: './.env'
})

connectDB();

const app = express()

app.use(cookieParser())

app.use(express.json())
app.use(cors({ 
  origin: 'http://localhost:3000',
  credentials: true, 
}));

app.use('/api', addUser);
app.use('/api', loginUser);
app.use('/api', getOrder);
app.use('/api', addOrder);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  }) 