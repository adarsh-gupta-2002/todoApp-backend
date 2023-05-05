import express from 'express'
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import {config} from 'dotenv'
import cookieParser from 'cookie-parser';
import {errorMiddleware} from './middlewares/error.js'
import cors from 'cors'


export const app = express();


config({
    path:"./data/config.env",
})

// midlewares
app.use(express.json()) // this should be always place upper than others app.use(''')
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods : ["GET" , "POST" , 'PUT' , 'DELETE'],
    credentials: true,

}))

// using routes
app.use('/api/v1/users',userRouter)
app.use('/api/v1/task' , taskRouter)


app.get("/" , (req , res) =>{
    res.send("Be more Productive")
})

app.use(errorMiddleware)