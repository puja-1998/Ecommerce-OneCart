import Order from "../model/orderModel.js";
import User from "../model/userModel.js";


// for User
export const placeOrder = async (req, res) => {
    try {
        const {items, amount, address} = req.body;
        const userId = req.userId;
        const orderData = {
            items, amount, userId, address, paymentMethod:'COD',payment:false,date:Date.now()
        }

        const newOrder = new Order(orderData);
        await newOrder.save();

        await User.findByIdAndUpdate(userId,{cartData:{}});
        return res.status(201).json({message:"Order Place"})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Order Place error"})
    }
}


export const userOrders = async (req, res) => {
    try {
        const userId = req.userId;
        const orders = await Order.find({userId});
        return res.status(201).json(orders);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"userOrders error"});
    }
}


// for User

export const allOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(201).json(orders)

    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Admin allOrders error"});
    }
}

export const updateStatus = async (req, res) => {
    try {
        const {orderId, status} = req.body;

         await Order.findByIdAndUpdate(orderId,{status});
        res.status(201).json({message:"Status Updated"})

    } catch (error) {
        console.log(error);
        return res.status(500).json({message:error.message});
    }
}