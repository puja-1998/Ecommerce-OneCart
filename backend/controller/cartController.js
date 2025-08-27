import User from "../model/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const { itemId, size } = req.body;

    const userData = await User.findById(req.userId);

    //check if user exist
    if (!userData) {
      return res.status(404).json({ mesage: "User Not Found" });
    }

    //Ensure CartData is Initialize
    let cartData = userData.cartData || {};
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

    await User.findByIdAndUpdate(req.userId, {cartData});
    return res.status(201).json({message:"Added to Cart"});

  } catch (error) {
    console.log("Error occured when yoy try to add cart", error);
    return res.status(500).json({message:"Add to Cart bError"});
  }
};

export const updateCart = async (req, res) => {
  try {
    const {itemId, size, Quantity} = req.body;
    const userData = await User.findById(req.userId);
    let cartData = await userData.cartData;

     cartData[itemId][size] = Quantity;

     await User.findByIdAndUpdate(req.userId, {cartData});
     return res.status(201).json({message:" Cart Updated "});

  } catch (error) {
    console.log("Error occured when yoy try to Update cart", error);
    return res.status(500).json({message:"Update Cart bError"});
  }
};

export const getUserCart = async (req, res) => {
  try {
     const userData = await User.findById(req.userId);
    let cartData = await userData.cartData;
    return res.status(201).json(cartData);
  } catch (error) {
    console.log("Error occured from getUsercart", error);
    return res.status(500).json({message:"Get User Cart Error"});
  }
};
