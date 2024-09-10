import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {

  const { productId } = useParams()
  const {products, currency,addToWishlist,wishlist,removeFromWishlist }= useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [selectedImage, setSelectedImage] = useState('');

  const isInWishlist = wishlist.some((item) => item._id === productId);

  const fetchProductData = async () =>{
      products.map((item)=>{
        if (item._id === productId) {
          setProductData(item)
          setSelectedImage(item.image[0]);
          return null;
        }
      })
  }

  useEffect(()=>{
      fetchProductData()
  },[productId, products])

  const handleAddToWishlist = () => {
    if (productData) {
      addToWishlist(productData)
    }
  }
  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image */}
        <div className="flex-1 flex-col-reverse gap-3 py-3 sm:flex-row">
          <div className="w-full py-4 sm:w-[80%]">
            <img src={selectedImage} alt="Selected Product" className="w-full h-auto" />
          </div>
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((img, index) => (
              <img
                onClick={() => setSelectedImage(img)} // Set the selected image
                src={img}
                key={index}
                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ${
                  img === selectedImage ? 'border-2 ' : ''
                }`}
                alt={`Product ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* --------Product Info---------- */}
        <div className='flex-1 mt-28'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <NavLink to='/callback'>
              <button className='bg-black text-white mt-5 mr-5 px-8 py-3 text-sm active:bg-gray-700 rounded-3xl'>Call back</button>
          </NavLink>

            <button className='bg-green-600 text-white px-8 py-3 text-sm active:bg-green-500 rounded-3xl'>Whatsapp</button>

            <div className="mt-5">
            {/* Toggle Wishlist Button */}
            {!isInWishlist ? (
              <button
                onClick={() => addToWishlist(productData)}
                className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
              >
                Add to Wishlist
              </button>
            ) : (
              <button
                onClick={() => removeFromWishlist(productData._id)}
                className="bg-red-600 text-white px-8 py-3 text-sm active:bg-red-500"
              >
                Remove from Wishlist
              </button>
            )}
            </div>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchage policy within 7 days.</p>
          </div>
        </div>

      </div>
      {/* -Description & Review */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat quas deserunt corrupti rerum.Unde nesciunt magni voluptates sunt quos exercitationem, eveniet illum voluptas, alias possimus, natus voluptatem pariatur fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam vel accusantium velit saepe sunt pariatur incidunt, maiores error consequatur nihil qui ut ratione totam consectetur doloribus at aliquid laudantium. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptas commodi hic qui reprehenderit animi sint modi ex labore magnam unde! Impedit qui nulla exercitationem saepe earum delectus harum totam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat quas deserunt corrupti rerum.Unde nesciunt magni voluptates sunt quos exercitationem, eveniet illum voluptas, alias possimus, natus voluptatem pariatur fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam vel accusantium velit saepe sunt pariatur incidunt, maiores error consequatur nihil qui ut ratione totam consectetur doloribus at aliquid laudantium. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptas commodi hic qui reprehenderit animi sint modi ex labore magnam unde! Impedit qui nulla exercitationem saepe earum delectus harum totam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat quas deserunt corrupti rerum.Unde nesciunt magni voluptates sunt quos exercitationem, eveniet illum voluptas, alias possimus, natus voluptatem pariatur fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam vel accusantium velit saepe sunt pariatur incidunt, maiores error consequatur nihil qui ut ratione totam consectetur doloribus at aliquid laudantium. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptas commodi hic qui reprehenderit animi sint modi ex labore magnam unde! Impedit qui nulla exercitationem saepe earum delectus harum totam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat quas deserunt corrupti rerum.Unde nesciunt magni voluptates sunt quos exercitationem, eveniet illum voluptas, alias possimus, natus voluptatem pariatur fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam vel accusantium velit saepe sunt pariatur incidunt, maiores error consequatur nihil qui ut ratione totam consectetur doloribus at aliquid laudantium. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptas commodi hic qui reprehenderit animi sint modi ex labore magnam unde! Impedit qui nulla exercitationem saepe earum delectus harum totam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quaerat quas deserunt corrupti rerum.Unde nesciunt magni voluptates sunt quos exercitationem, eveniet illum voluptas, alias possimus, natus voluptatem pariatur fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam vel accusantium velit saepe sunt pariatur incidunt, maiores error consequatur nihil qui ut ratione totam consectetur doloribus at aliquid laudantium. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, voluptas commodi hic qui reprehenderit animi sint modi ex labore magnam unde! Impedit qui nulla exercitationem saepe earum delectus harum totam.</p>
        </div>
      </div>
      {/* ----display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}  />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product