import React, { useContext, useState } from 'react'
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import razorpay from '../assets/razorpay.png'
import { shopDataContext } from '../context/ShopContext';
import { authDataContext } from '../context/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {
    let [method, setMethod] = useState("cod");
    const {cartItem, setCartItem, getCartAmount, delivery_fee, products} = useContext(shopDataContext);
    const {serverUrl} = useContext(authDataContext);
    let navigate = useNavigate();
    let [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        street:'',
        city:'',
        state:'',
        pincode:'',
        country:'',
        phone:'',

    });

    const onChangeHandler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
       setFormData(data => ({...data, [name]:value}))
    }

    const onSubmitHandler = async (e)=>{
        e.preventDefault();
        try {
            let orderItems = [];
            for(const items in cartItem){
                for(const item in cartItem[items]){
                    if(cartItem[items][item] > 0){
                        const itemInfo = structuredClone(products.find(product => product._id === items))

                        if(itemInfo){
                            itemInfo.size= item;
                            itemInfo.quantity = cartItem[items][item];
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }
            let orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee
            }

            switch (method) {
                case 'cod':
                    const result = await axios.post(serverUrl + "/api/order/placeorder", orderData, {withCredentials:true})
                    console.log(result.data);
                    if(result.data){
                    setCartItem({});
                    navigate("/order")
                    }
                    else{
                        console.log(result.data.message)
                    }
                    
                    break;
            
                default:
                    break;
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='w-full min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col md:flex-row gap-[50px] relative'>
        <div className='lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center lg-mt-[0px] mt-[90px]'>
            <form action=""  onSubmit={onSubmitHandler}  className='lg:w-[70%] w-[95%] lg:h-[70%] h-[100%]'>
                <div className='py-[10px]'>
                    <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
                </div>

                {/* First name last name */}
                <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                    <input onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" placeholder='First Name' required className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' />
                     <input onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" placeholder='Last Name' required className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' />
                </div>
                    {/* Email */}
                <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                    <input onChange={onChangeHandler} name='email' value={formData.email} type="email" placeholder='Email address' required className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' />   
                </div>

                {/* Street */}
                <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                    <input onChange={onChangeHandler} name='street' value={formData.street} type="text" placeholder='Street' required className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' />   
                </div>

                {/* City And State */}
                <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                    <input onChange={onChangeHandler} name='city' value={formData.city} type="text" placeholder='City' required className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' />
                     <input onChange={onChangeHandler} name='state' value={formData.state} type="text" placeholder='State' required className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' />
                </div>

                {/* Pincode and country */}
                <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                    <input onChange={onChangeHandler} name='pincode' value={formData.pincode} type="text" placeholder='Pincode' required className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' />
                     <input onChange={onChangeHandler} name='country' value={formData.country} type="text" placeholder='Country' required className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' />
                </div>

                {/* Phone    */}
                <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>
                    <input onChange={onChangeHandler} name='phone' value={formData.phone} type="text" placeholder='Phone' required className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-white text-[18px] px-[20px] shadow-sm shadow-[#343434] ' />   
                </div>

                {/* Submit button */}
                <div>
                    <button type='submit' className='text-[18px] active:bg-slate-500 cursor-pointer bg-[#3bcee848] py-[10px] px-[50px] rounded-2xl text-white flex items-center justify-center gap-[20px] absolute lg:right-[20%] bottom-[10%] right-[35%] border-[1px] border-[#8080809] ml-[30px] mt-[20px]'>
                        Place Order
                    </button>
                </div>
            </form>
        </div>
        <div className='lg:w-[50%] w-[100%] min-h-[100%] flex items-center justify-center gap-[30px]'>
                <div className='lg:w-[70%] w-[90%] lg:h-[70%] h-[100%] flex flex-col items-center justify-center gap-[10px]'>
                    <CartTotal/>
                    <div className='py-[10px]'>
                    <Title text1={"PAYMENT"} text2={"METHOD"}/>
                </div>
                <div className='w-[100%] h-[30vh] lg:h-[100px] flex items-start mt-[20px] lg:mt-0 justify-center gap-[50px]'>
                    <button onClick={()=>setMethod("razorpay")} className={`w-[150px] h-[50px] rounded-sm ${method === 'razorpay' ? 'border-[5px] border-blue-900 rounded-sm ' : ''}`}>
                        <img src={razorpay} alt="" className='w-[100%] h-[100%] object-fill rounded-sm' />
                    </button>

                    <button onClick={()=>setMethod("cod")} className={`w-[200px] h-[50px] bg-gradient-to-t from-[#95b3f8] to-white text-[14px] text-[#332f6f] font-bold px-[20px] rounded-sm ${method === 'cod' ? 'border-[5px] border-blue-900 rounded-sm ' : ''}`}>
                        CASH ON DELIVERY
                    </button>
                </div>
                </div>
            </div>
    </div>
  )
}

export default PlaceOrder