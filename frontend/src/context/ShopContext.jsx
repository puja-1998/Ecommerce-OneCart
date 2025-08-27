import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";
import { useEffect } from "react";
import { userDataContext } from "./UserContext";
import toast from "react-hot-toast";

export const shopDataContext = createContext();
function ShopContext({ children }) {
  let [products, setProducts] = useState([]);
  let { userData } = useContext(userDataContext);
  let { serverUrl } = useContext(authDataContext);
  let [search, setSearch] = useState("");
  let [cartItem, setCartItem] = useState({});
  let [showSearch, setShowSearch] = useState(false);
  let currency = "₹";
  let delivery_fee = 40;

  // get Products
  const getProducts = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/product/list");
      setProducts(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Add to Cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Please select a product size");
      return;
    }

    let cartData = structuredClone(cartItem); // Clone the Product

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData);
    toast.success("Product added to cart 🛒");

    if (userData) {
      try {
        let result = await axios.post(
          serverUrl + "/api/cart/add",
          { itemId, size },
          { withCredentials: true }
        );
        console.log(result.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to sync cart with server ❌");
      }
    }
  };

  const getUserCart = async () => {
    try {
      let result = await axios.post(
        serverUrl + "/api/cart/get",
        {},
        { withCredentials: true }
      );
      setCartItem(result.data);
      toast.success("Cart loaded successfully ✅");
    } catch (error) {
      console.log(error);
      toast.error("Failed to load cart ❌");
    }
  };
 // Update Quantity

 const UpdateQuantity = async (itemId, size, Quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = Quantity;
    setCartItem(cartData);

    if(userData){
        try {
            await axios.post(
        serverUrl + "/api/cart/update",
        {itemId, size, Quantity},
        { withCredentials: true }
      );
       toast.success("Quantity updated ✅");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    
 }
  // Get Cart Count
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {
          console.log("Error Occured from getCartCount", error);
        }
      }
    }
    
    return totalCount;
  };

  const getCartAmount =  () => {
    let totalAmount = 0;
    for(const items in cartItem){
        let ItemInfo = products.find((product)=> product._id === items);
         for(const item in cartItem[items]){
            try {
                if(cartItem[items][item] > 0){
                    totalAmount += ItemInfo.price * cartItem[items][item];
                }
            } catch (error) {
                
            }
         }
    }
    return totalAmount;
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getUserCart();
  }, []);

  let value = {
    serverUrl,
    getProducts,
    currency,
    delivery_fee,
    products,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    getCartCount,
    setCartItem,
    UpdateQuantity,
    getCartAmount,
  };

  return (
    <div>
      <shopDataContext.Provider value={value}>
        {children}
      </shopDataContext.Provider>
    </div>
  );
}

export default ShopContext;
