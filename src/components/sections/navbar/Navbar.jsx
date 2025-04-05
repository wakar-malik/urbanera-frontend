import React from 'react'
import images from '../../../utils/image.js'
import {RiPhoneLine} from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiShoppingBagLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='flex justify-between bg-amber- mx-8 my-8 fixed top-0 right-0 left-0 z-1 text-white'>
         <img className='w-[220px] cursor-pointer bg-white' src={images.logo} alt="logo" />
        <ul className='flex items-center gap-3 capitalize text-xl'>
          <li><a href='#'>latest</a></li>
          <li><a href='#'>men</a></li>
          <li><a href='#'>women</a></li>
          <li><a href='#'>children</a></li>
          <li><a href='#'>shoes</a></li>
          <li><a href='#'>genius</a></li>
          <li><a href='#'>collection</a></li>
        </ul>
        <div id="order-profile-section" className='flex items-center gap-4 cursor-pointer'>
          <RiPhoneLine className='text-2xl'/>
          <RiSearchLine  className='text-2xl'/>
          <RiHeartLine  className='text-2xl'/>
          <RiUserLine  className='text-2xl'/>
          <RiShoppingBagLine  className='text-2xl'/>
        </div>
    </div>
  )
}

export default Navbar