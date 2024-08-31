import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-0 border-t'>
        <Title text1={'Contact'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]  ' />
        <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>512 Lorem, ipsum<br/>Lorem ipsum dolor sit. </p>
            <p className='text-gray-500'>Tel:(123) 555-0123<br/>zemail:admin@contact.com</p>
            <p className='font-semibold text-xl text-gray-600'>Careers at Here</p>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur. </p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact