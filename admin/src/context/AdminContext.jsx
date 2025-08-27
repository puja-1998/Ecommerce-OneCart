import React, { createContext, useContext, useEffect, useState } from 'react';
import { authDataContext } from './AuthContext';
import axios from 'axios';

export const adminDataContext = createContext();
function AdminContext({children}) {
     let {serverUrl} = useContext(authDataContext);
     const [adminData, setAdminData] = useState(null);
     const [totalProducts, setTotalProducts] = useState(0);
     const [totalOrders, setTotalOrders] = useState(0);

    const getAdmin = async () => {
      try {
        let result = await axios.get(serverUrl + "/api/user/getadmin", {withCredentials:true});
        setAdminData(result.data)
        console.log(result.data)
      } catch (error) {
        setAdminData(null)
        console.log(error)
      }
    }

    const getProducts = async () => {
    try {
      let res = await axios.get(serverUrl + "/api/product/list", { withCredentials: true });
      setTotalProducts(res.data.length); // assuming res.data = array of products
    } catch (error) {
      console.log(error);
    }
  };


   const getOrders = async () => {
    try {
      let res = await axios.get(serverUrl + "/api/order/list", { withCredentials: true });
      setTotalOrders(res.data.length); // assuming res.data = array of orders
    } catch (error) {
      console.log(error);
    }
  };
    let value = {
      serverUrl,adminData,setAdminData, getAdmin,totalProducts, totalOrders
    }

    useEffect(()=>{
      getAdmin();
      getProducts();
      getOrders();
    },[])

    
  return (
  
        <adminDataContext.Provider value={value}>
            {children}
        </adminDataContext.Provider>
 
  )
}

export default AdminContext