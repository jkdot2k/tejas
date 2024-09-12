import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='border-t p-2 mt-5 '>

    <div className='px-4 sm:px-[5vw] md:px-[7vw]  lg:px-[9vw] '>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-22 text-sm '>
            <div>
                <img src={assets.logo} className='mb-5 w-20' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatem voluptas iure.<br/> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-1 text-gray-600 '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div >
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+985487564213</li>
                    <li>contact1234@gmail.com</li>

                </ul>
            </div>
            

        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ tejs.com- All Rights Reserved. </p>
        </div>

    </div>
    </div>
  )
}

export default Footer