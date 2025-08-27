import React, { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";

export const adminDataContext = createContext();
function AdminContext({ children }) {
  let { serverUrl } = useContext(authDataContext);
  const [adminData, setAdminData] = useState(null);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  const getAdmin = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/getadmin", {
        withCredentials: true,
      });
      setAdminData(result.data);
      console.log(result.data);
    } catch (error) {
      setAdminData(null);
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      let res = await axios.get(serverUrl + "/api/product/list", {
        withCredentials: true,
      });
      console.log("Products API response:", res.data); // 👈 check this
      setTotalProducts(res.data.length);
    } catch (error) {
      console.log("Product fetch error:", error);
    }
  };

  const getOrders = async () => {
    try {
      let res = await axios.get(serverUrl + "/api/order/list", {
        withCredentials: true,
      });
      console.log("Orders API response:", res.data); // 👈 check this
      setTotalOrders(res.data.length);
    } catch (error) {
      console.log("Order fetch error:", error);
    }
  };

  let value = {
    serverUrl,
    adminData,
    setAdminData,
    getAdmin,
    totalProducts,
    totalOrders,
  };

  useEffect(() => {
    getAdmin();
    getProducts();
    getOrders();
  }, []);

  return (
    <adminDataContext.Provider value={value}>
      {children}
    </adminDataContext.Provider>
  );
}

export default AdminContext;
