const mongoose=require('mongoose');

const orderSchema=new mongoose.Schema({
    cartItems: Array,
    amount: String,
    status:String,
    createdOn:Date
})

const orderModel=mongoose.model('Order',orderSchema);

module.exports = orderModel;