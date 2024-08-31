import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laudantium quis numquam sequi, dolores unde doloribus ad adipisci optio nemo delectus explicabo, labore omnis harum, voluptate et accusantium odit incidunt!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam debitis ducimus, voluptatem suscipit earum cupiditate aut praesentium cum a voluptas magni atque, ipsum possimus. Accusantium quaerat alias tenetur velit.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, quas mollitia porro quod nobis explicabo, vero earum, fugiat magni ad placeat voluptate? Porro autem corporis cumque ad voluptatum dicta nemo!</p>
          </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'Why'} text2={'Choose us'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia repudiandae nobis unde mollitia dolorum blanditiis, harum praesentium magnam ipsa labore error porro, tenetur consequatur temporibus odio officia ab.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia repudiandae nobis unde mollitia dolorum blanditiis, harum praesentium magnam ipsa labore error porro, tenetur consequatur temporibus odio officia ab.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur quia repudiandae nobis unde mollitia dolorum blanditiis, harum praesentium magnam ipsa labore error porro, tenetur consequatur temporibus odio officia ab.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About