import React from 'react'
import Title from './Title'
import { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'

function Bestseller() {
    let {products} = useContext(shopDataContext)
    let [bestSeller, setBestSeller] = useState([])

    useEffect(()=>{
        let filterProducts = products.filter((item) => item.bestseller)
        
        setBestSeller(filterProducts.slice(0, 4))  // to Show only 4 products
        
    },[products])
    
  return (
     <div>
        <div className='w-[100%] h-[8%] text-center  mt-[50px]'>
            <Title text1={"BEST"} text2={"SELLER"} />
            <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100'>Tried, Tested, Loved Discover Our All-Time Best Seller.</p>
        </div>
        <div className='w-[100%] h-[50%] mt-[30px] px-2 flex items-center justify-center flex-wrap gap-[50px]'>
            {
                bestSeller.map((item, index)=>(
                    <Card key={index} name={item.name} image={item.image1} id={item._id} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default Bestseller