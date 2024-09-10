import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import {  products } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Chair = () => {
    const { Products, search, showSearch } = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState([])
    const [sortType, setSortType] = useState('relavent')


    const applyFilter = ()=>{
        let productsCopy = products.filter((item)=>(item.category==="Tables and Chairs"))
        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category))
        }

        setFilterProducts(productsCopy)
    } 

    const sortProduct = ()=>{
        let fpCopy = filterProducts.slice()
        switch (sortType){
            case 'low-high':
                setFilterProducts(fpCopy.sort((a,b)=>(a.price -b.price)))
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
                break;
            default:
                applyFilter();
                break;  
        }
    }

    useEffect(()=>{
        applyFilter()
    },[category, search,showSearch])

    useEffect(()=>{
        sortProduct()
    },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        

{/* Right Side */}

    <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'CHAIR'} />
{/* Product sort */}
            <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                <option value="relavent">Sort by: Relavent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>

            </select>
        </div>
{/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
                filterProducts.map((item,index)=>(
                    <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                ))
            }
        </div>
    </div>

    </div>
  )
}

export default Chair