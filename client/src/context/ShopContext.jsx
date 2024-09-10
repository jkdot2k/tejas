import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext()



const ShopContextProvider = (props) =>{

    const currency = '$';
    const delivery_fee = 10
    const [search,setSearch] =useState('')
    const [showSearch, setShowSearch] = useState(false)

    const [wishlist, setWishlist] = useState([]);

    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
          // Avoid adding duplicates
          if (!prevWishlist.some(item => item._id === product._id)) {
            return [...prevWishlist, product];
          }
          return prevWishlist;
        });
      };
    
      // Remove product from wishlist (optional feature)
      const removeFromWishlist = (productId) => {
        setWishlist((prevWishlist) => prevWishlist.filter(item => item._id !== productId));
      };




    const value = {
        products , currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        wishlist,
        addToWishlist,
        removeFromWishlist,
    }

    return (
        <ShopContext.Provider value = {value}>
            {props.children }
        </ShopContext.Provider>
    )
}

export default ShopContextProvider