import React from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Category = () => {
  return (
    <div>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'POPULAR'} text2={'CATEGORIES'} />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-10 gap-y-14 '>
                <Link to='/sofa' className='   flex flex-col justify-center items-center'  >
                    <img src={assets.sofa} alt=""  />
                    <p className='font-bold hover:text-red-900 '>SOFA</p>
                </Link>
                <Link to='/bed' className='  flex flex-col justify-center items-center py-' >
                    <img src={assets.bed} alt=""  />
                    <p className='font-bold hover:text-red-900 '>BED</p>
                </Link>
                <Link to='/bookshelves' className='  flex flex-col justify-center items-center' >
                    <img src={assets.bookself} alt=""  />
                    <p className='font-bold hover:text-red-900 '>BOOK SHELVES</p>
                </Link>
                <Link to='/centertable' className='  flex flex-col justify-center items-center' >
                    <img src={assets.center_table} alt=""  />
                    <p className='font-bold hover:text-red-900 '>CENTER TABLE</p>
                </Link>
                <Link to='/dining' className='  flex flex-col justify-center items-center' >
                    <img src={assets.dining} alt=""  />
                    <p className='font-bold hover:text-red-900 '>DINING</p>
                </Link>
                <Link to='/dressingtable' className='  flex flex-col justify-center items-center' >
                    <img src={assets.dressing_table} alt=""  />
                    <p className='font-bold hover:text-red-900 '>DRESSING TABLE</p>
                </Link>
                <Link to='/homedecor' className='  flex flex-col justify-center items-center' >
                    <img src={assets.home_decor} alt=""  />
                    <p className='font-bold hover:text-red-900 '>HOME DECOR</p>
                </Link>
                <Link to='/matters' className='  flex flex-col justify-center items-center' >
                    <img src={assets.matters} alt=""  />
                    <p className='font-bold hover:text-red-900 '>MATTERS</p>
                </Link>
                <Link to='/ofc' className='  flex flex-col justify-center items-center' >
                    <img src={assets.ofc} alt=""  />
                    <p className='font-bold hover:text-red-900 '>OFFICE & STUDY TABLE</p>
                </Link>
                <Link to='/outdoor' className='  flex flex-col justify-center items-center' >
                    <img src={assets.outdoor} alt=""  />
                    <p className='font-bold hover:text-red-900 '>OUTDOOR</p>
                </Link>
                <Link to='/recliner' className='  flex flex-col justify-center items-center' >
                    <img src={assets.recliner} alt=""  />
                    <p className='font-bold hover:text-red-900 '>RECLINER</p>
                </Link>
                <Link to='/shoerack' className='  flex flex-col justify-center items-center' >
                    <img src={assets.shoe_rack} alt=""  />
                    <p className='font-bold hover:text-red-900 '>SHOE RACK</p>
                </Link>
                <Link to='/wardrobe' className='  flex flex-col justify-center items-center' >
                    <img src={assets.waredrob} alt=""  />
                    <p className='font-bold hover:text-red-900 '>WARDROBES</p>
                </Link>
                <Link to='/chair' className='  flex flex-col justify-center items-center' >
                    <img src={assets.chair} alt=""  />
                    <p className='font-bold  hover:text-red-900 '>CHAIR</p>
                </Link>
            </div>
    </div>
  )
}

export default Category