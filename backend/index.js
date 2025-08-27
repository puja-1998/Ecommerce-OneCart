import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser';
import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoutes.js';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';



dotenv.config();

const port = process.env.PORT || 6000;
const app = express();
 //middleware
 app.use(express.json());
 app.use(cookieParser());
 app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    credentials:true
 }))
 app.use('/api/auth', authRoute);
 app.use('/api/user', userRoute)
 app.use('/api/product',productRoutes);
 app.use('/api/cart', cartRoutes);
 app.use('/api/order', orderRoutes)
 
app.get('/', (req , res)=>{
    res.send('Hello Pooja!');
});

app.listen(port, (err)=>{
   if(err){
        console.log("error while connected to the server");  
    }
    console.log(`server is running at the http://localhost:${port}`);
    connectDb();
})