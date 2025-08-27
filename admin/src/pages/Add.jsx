import React, { useContext, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import upload from "../assets/upload.png";
import axios from 'axios';
import { authDataContext } from "../context/AuthContext";

function Add() {
  let [image1, setImage1] = useState(false);
  let [image2, setImage2] = useState(false);
  let [image3, setImage3] = useState(false);
  let [image4, setImage4] = useState(false);
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [category, setCategory] = useState("Men");
  let [price, setPrice] = useState("");
  let [subCategory, setSubCategory] = useState("TopWear");
  let [bestseller, setBestseller] = useState(false);
  let [sizes, setSizes] = useState([]);

  let {serverUrl} = useContext(authDataContext)
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("name",name);
      formData.append("description",description);
      formData.append("category",category);
      formData.append("price",price);
      formData.append("subCategory",subCategory);
      formData.append("bestseller",bestseller);
      formData.append("sizes",JSON.stringify(sizes));
      formData.append("image1",image1);
      formData.append("image2",image2);
      formData.append("image3",image3);
      formData.append("image4",image4);

      let result = await axios.post(serverUrl + "/api/product/addproduct", formData, {withCredentials:true});
      console.log(result.data);

      if(result.data){
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice("")
        setBestseller(true)
        setCategory("Men")
        setSubCategory("TopWear")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] min-h-[100vh]  text-white bg-gradient-to-l from-[#141414] to-[#0c2025] relative ">
      <Nav />
      <Sidebar />

      <div className="w-[82%] h-[100%] bottom-[5%] flex items-center justify-start overflow-x-hidden absolute right-0">
        <form
          action=""
          onSubmit={handleAddProduct}
          className="w-[100%] md:w-[90%] h-[100%]  mt-[70px] flex flex-col gap-[30px] px-[30px] py-[60px] md:px-[60px]"
        >
          <div className="w-[400px] h-[50px] text-[25px] md:text-[40px] text-white">
            Add Product Page
          </div>
          {/* upload Images */}
          <div className="w-[80%] h-[130px] flex flex-col items-start justify-center gap-[10px] mt-[20px]">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Upload Images
            </p>
            <div className="w-[100%] h-[100%] flex items-center justify-start">
              <label
                htmlFor="image1"
                className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={!image1 ? upload : URL.createObjectURL(image1)}
                  alt="upload Image"
                  className="w-[80%]  h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]"
                />
                <input
                  required
                  type="file"
                  id="image1"
                  hidden
                  onChange={(e) => setImage1(e.target.files[0])}
                />
              </label>

              <label
                htmlFor="image2"
                className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={!image2 ? upload : URL.createObjectURL(image2)}
                  alt="upload Image"
                  className="w-[80%]  h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]"
                />
                <input
                  required
                  type="file"
                  id="image2"
                  hidden
                  onChange={(e) => setImage2(e.target.files[0])}
                />
              </label>

              <label
                htmlFor="image3"
                className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={!image3 ? upload : URL.createObjectURL(image3)}
                  alt="upload Image"
                  className="w-[80%]  h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]"
                />
                <input
                  required
                  type="file"
                  id="image3"
                  hidden
                  onChange={(e) => setImage3(e.target.files[0])}
                />
              </label>

              <label
                htmlFor="image4"
                className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]"
              >
                <img
                  src={!image4 ? upload : URL.createObjectURL(image4)}
                  alt="upload Image"
                  className="w-[80%]  h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]"
                />
                <input
                  required
                  type="file"
                  id="image4"
                  hidden
                  onChange={(e) => setImage4(e.target.files[0])}
                />
              </label>
            </div>
          </div>

          {/*  Product Name */}
          <div className="w-[80%] h-[100px] flex flex-col items-start justify-center gap-[10px] ">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Product Name
            </p>
            <input
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Type Here..."
              className="w-[600px] max-w-[90%] h-[40px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#ffffffc2]"
            />
          </div>

          {/* Product Description */}
          <div className="w-[80%] flex flex-col items-start justify-center gap-[10px] ">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Product Description
            </p>
            <textarea
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="text"
              placeholder="Type Here..."
              className="w-[600px] h-[100px] max-w-[90%] py-[10px]  rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#ffffffc2]"
            />
          </div>

          {/* Product Category */}
          <div className="w-[80%] flex items-center gap-[10px] flex-wrap">
            <div className="md:w-[30%] w-[100%] flex flex-col items-start sm:justify-center gap-[10px]">
              <p className="text-[20px] md:text-[25px] font-semibold w-[100%]">
                Product Category
              </p>
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                name=""
                id=""
                className="bg-slate-600 w-[60%] px-[10px] py-[7px] cursor-pointer rounded-lg hover:border-[#46d1f7] border-[2px]"
              >
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            {/*   Sub-Category*/}
            <div className="md:w-[30%] w-[100%] flex flex-col items-start sm:justify-center gap-[10px]">
              <p className="text-[20px] md:text-[25px] font-semibold w-[100%]">
                Sub-Category
              </p>
              <select
                onChange={(e) => setSubCategory(e.target.value)}
                value={subCategory}
                name=""
                id=""
                className="bg-slate-600 w-[60%] px-[10px] py-[7px] rounded-lg cursor-pointer hover:border-[#46d1f7] border-[2px]"
              >
                <option value="TopWear">TopWear</option>
                <option value="BottomWear">BottomWear</option>
                <option value="WinterWear">WinterWear</option>
              </select>
            </div>
          </div>

          {/* Product Price */}
          <div className="w-[80%] h-[100px] flex flex-col items-start justify-center gap-[10px] ">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Product Price
            </p>
            <input
              required
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              placeholder="₹ 2000"
              className="w-[600px] max-w-[90%] h-[40px] rounded-lg hover:border-[#46d1f7] border-[2px] cursor-pointer bg-slate-600 px-[20px] text-[18px] placeholder:text-[#ffffffc2]"
            />
          </div>

          {/*  Product Sizes */}
          <div className="w-[80%] h-[220px] md:h-[100px] flex flex-col items-start justify-center gap-[10px] py-[10px] md:py-0">
            <p className="text-[20px] md:text-[25px] font-semibold">
              Product Size
            </p>
            <div className="flex flex-wrap  items-center justify-start gap-[15px]">
              <div
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("S")
                      ? prev.filter((item) => item !== "S")
                      : [...prev, "S"]
                  )
                }
                className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] border-[2px] cursor-pointer hover:border-[#46d1f7] ${sizes.includes("S") ? "bg-green-400 text-black border-[#46d1f7]" :""} `}
              >
                S
              </div>

              <div onClick={() =>
                  setSizes((prev) =>
                    prev.includes("M")
                      ? prev.filter((item) => item !== "M")
                      : [...prev, "M"]
                  )
                }
                className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] border-[2px] cursor-pointer hover:border-[#46d1f7] ${sizes.includes("M") ? "bg-green-400 text-black border-[#46d1f7]" :""} `}>
                M
              </div>

              <div
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("L")
                      ? prev.filter((item) => item !== "L")
                      : [...prev, "L"]
                  )
                }
                className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] border-[2px] cursor-pointer hover:border-[#46d1f7] ${sizes.includes("L") ? "bg-green-400 text-black border-[#46d1f7]" :""} `}
              >
                L
              </div>

              <div
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("XL")
                      ? prev.filter((item) => item !== "XL")
                      : [...prev, "XL"]
                  )
                }
                className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] border-[2px] cursor-pointer hover:border-[#46d1f7] ${sizes.includes("XL") ? "bg-green-400 text-black border-[#46d1f7]" :""} `}
              >
                XL
              </div>

              <div
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes("XXL")
                      ? prev.filter((item) => item !== "XXL")
                      : [...prev, "XXL"]
                  )
                }
                className={`px-[20px] py-[7px] rounded-lg bg-slate-600 text-[18px] border-[2px] cursor-pointer hover:border-[#46d1f7] ${sizes.includes("XXL") ? "bg-green-400 text-black border-[#46d1f7]" :""} `}
              >
                XXL
              </div>
            </div>
          </div>

          {/* Bestseller */}
          <div className="w-[80%] flex items-center justify-start gap-[10px] mt-[20px]"> 
                <input 
              onChange={(e) => setBestseller(e.target.checked)}
              value={bestseller} type="checkbox" name="" id="checkbox" className="w-[25px] h-[25px] cursor-pointer" />
                <label htmlFor="checkbox" className="text-[18px] md:text-[22px] font-semibold">Add To Bestseller</label>
          </div>

          <button className="w-[140px] cursor-pointer px-[20px]  py-[20px] rounded-xl bg-[#65d8f7] flex items-center justify-center text-black active:bg-slate-700 active:text-white active:border-[2px] border-white gap-[10px]">
                  Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
