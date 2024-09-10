import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { NavLink } from 'react-router-dom'
import Title from '../components/Title'

const Wishlist = () => {
  const { wishlist, currency,removeFromWishlist } = useContext(ShopContext)

  return (
    <div >
      <Title text1={'Your'} text2={'Wishlist'} />
    <div className="p-10">
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg">
              <img src={item.image[0]} alt={item.name} className="w-full h-40 object-cover mb-4" />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">{currency}{item.price}</p>
              <div className="flex justify-between mt-3">
                {/* View Product Button */}
                <NavLink to={`/product/${item._id}`}>
                  <button className="bg-black text-white px-4 py-2 rounded">View Product</button>
                </NavLink>
                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => removeFromWishlist(item._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Your wishlist is empty.</p>
      )}
    </div>
    </div>
  )
}

export default Wishlist
