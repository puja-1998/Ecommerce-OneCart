import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../context/ShopContext';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from '../components/RelatedProduct';

function ProductDetails() {

        let {productId} = useParams();
        let {products, currency, addToCart} = useContext(shopDataContext);
        let [productData, setProductData] = useState(false);

        const [image, setImage] = useState('');
        const [image1, setImage1] = useState('');
        const [image2, setImage2] = useState('');
        const [image3, setImage3] = useState('');
        const [image4, setImage4] = useState('');
        const [size, setSize] = useState('');

        const fetchProductData = async () => {
            try {
                products.map((item)=>{
                    if(item._id === productId){
                        setProductData(item);
                        console.log(productData);
                        setImage1(item.image1);
                        setImage2(item.image2);
                        setImage3(item.image3);
                        setImage4(item.image4);
                        setImage(item.image1);

                        return null
                    }
                })

            } catch (error) {
                console.log("Error occured during the fetchProductData fromProductDetails", error)
            }
        }

        useEffect(()=>{
            fetchProductData()
        },[productId, products])

  return productData ?( 
    <div>
        <div className='w-full min-h-screen   bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start flex-col gap-[20px] lg:flex-row'>
            <div className=' lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh]  flex items-center justify-center gap-[30px] md:gap-[10px] flex-col-reverse mt-[70px] lg:flex-row'> 
                <div className=' lg:w-[20%] md:w-[80%] lg:h-[80%] h-[10%]  flex items-center justify-center gap-[50px] lg:gap-[20px] lg:flex-col flex-wrap'> 
                    <div className='w-[50px] md:w-[100px] md:h-[110px] h-[50px] bg-slate-300 border-[1px] border-[#80808049] rounded-md'>
                        <img src={image1} alt="image1" onClick={()=>setImage(image1)}  className='w-[100%] h-[100%] cursor-pointer rounded-md'/>
                    </div>

                    <div className='w-[50px] md:w-[100px] md:h-[110px] h-[50px] bg-slate-300 border-[1px] border-[#80808049] rounded-md'>
                        <img src={image2} alt="image2" onClick={()=>setImage(image2)}  className='w-[100%] h-[100%] cursor-pointer rounded-md'/>
                    </div>

                    <div className='w-[50px] md:w-[100px] md:h-[110px] h-[50px] bg-slate-300 border-[1px] border-[#80808049] rounded-md'>
                        <img src={image3} alt="image3" onClick={()=>setImage(image3)}  className='w-[100%] h-[100%] cursor-pointer rounded-md'/>
                    </div>

                    <div className='w-[50px] md:w-[100px] md:h-[110px] h-[50px] bg-slate-300 border-[1px] border-[#80808049] rounded-md'>
                        <img src={image4} alt="image4" onClick={()=>setImage(image4)}  className='w-[100%] h-[100%] cursor-pointer rounded-md'/>
                    </div>
                </div>
                <div className='lg:w-[60%] w-[80%] lg:h-[78%] h-[70%]  border-[1px] border-[#80808049] rounded-md overflow-hidden'>
                    <img src={image} alt="image"  className='w-[100%] h-[100%] lg:h-[100%] text-[30px] text-white text-center object-fill rounded-md'/>
                </div>
            </div>

            <div className='lg:w-[50vw] w-[ 100vw] lg:h-[75vh] h-[40vh] lg:mt-[80px]  flex items-start justify-start flex-col py-[20px] px-[30px] lg:py-[0px] lg:pl-[0px] lg:px-[0px] md:pb-[20px] md:pl-[20px] ga-[10px]'>
                <h1 className='text-[40px] font-semibold text-[aliceblue]'>
                    {productData.name.toUpperCase()}
                </h1>
                <div className='flex items-center gap-1'>
                    <FaStar className='text-[20px] fill-[#FFD700]'/>
                    <FaStar className='text-[20px] fill-[#FFD700]'/>
                    <FaStar className='text-[20px] fill-[#FFD700]'/>
                    <FaStar className='text-[20px] fill-[#FFD700]'/>
                    <FaStarHalfAlt className='text-[20px] fill-[#FFD700]'/>

                    <p className='text-[18px] font-semibold pl-[5px] text-white'>(123)</p>
                </div>
                <p className='text-[30px] font-semibold pl-[5px] text-white'>{currency} {productData.price} </p>
                <p className='w-[80%] md:w-[60%] text-[20px] font-semibold pl-[5px] text-white'>{productData.description} and  Stylish, breathable cotton. Easy to Wash. Super comfortable. and designed for effortless style.</p>
                <div className='flex flex-col gap-[10px] my-[10px]'>
                    <p className='text-[25px] font-semibold pl-[5px] text-white'>Select Size</p>

                    <div className='flex gap-2'>
                        {
                            productData.sizes.map((item, index)=>(
                                <button key={index} onClick={()=>{setSize(item)}} className={`border py-2 px-4 bg-slate-300 rounded-md ${item === size ? 'bg-black text-[20px]  text-[#4f9adb] ': ''}`}>
                                    {item}
                                </button>
                            ))
                        }
                    </div>
                    <button onClick={()=>addToCart(productData._id, size)} className='text-[16px] active:bg-slate-500 cursor-pointer bg-[#495b61c9] py-[10px] px-[20px] rounded-2xl mt-[10px] border-[1px] border-[#80808049] text-white shadow-md shadow-black'>
                        Add To Cart 
                    </button>
                </div>
                <div className='w-[90%] h-[1px] bg-slate-700'></div>
                    <div className='w-[80%] text-[16px] text-white'>
                        <p>100% Original Product</p>
                        <p>Cash on delivery is available on this product</p>
                        <p>Easy return and exchange policy whithin 7 days</p>
                    </div>
                </div>
            </div> 
            <div className='w-full min-h-[70vh] md:h-[100vh]  bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-start justify-start flex-col overflow-hidden'>
                 <div className='flex px-[20px] mt-[90px] lg:ml-[80px] ml-0 lg:mt-0'>
                     <p className='border px-5 py-3  text-sm text-white'>Description</p>
                     <p className='border px-5 py-3  text-sm text-white'>Reviews (123)</p>   
                </div>

                <div className='w-[80%] md:h-[150px] h-[220px] bg-[#3336397c] border text-white text-[13px] md:text-[15px] lg:text-[20px] px-[10px] md:px-[30px] lg:ml-[100px] ml-[20px]'>
                    <p className='w-[95%] h-[90%] flex items-center justify-center'>
                        Upgrade your wardrobe with stylish slim fit cotton Shirt, available now on OneCart. Crafted from breathable, high quality fabric, it offers all-day confort  and effortless style. Easy to maintain and perfect foe any setting, This shirt is a must have essentials for those who value   both fashion and function.
                    </p>
                </div>
                <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id}/>
            </div> 
    </div>
  ): <div className='opacity-0'></div>
}

export default ProductDetails