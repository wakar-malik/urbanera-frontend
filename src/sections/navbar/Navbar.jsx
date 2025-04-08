import React from 'react'
import images from '../../utils/image.js'
import ICONS from '../../utils/icons'
import List from '../../components/List/List.jsx';
import Icon from '../../components/icon/Icon.jsx';

const Navbar = () => {
  return (
    <div className='flex justify-between bg-amber- mx-8 my-8 fixed top-0 right-0 left-0 z-1 text-white'>
      <img className='w-[220px] cursor-pointer bg-white' src={images.logo} alt="logo" />
      <List />
      <div id="order-profile-section" className='flex items-center gap-4 cursor-pointer'>
        <Icon ReactIcon={<ICONS.RiPhoneLine className='text-2xl' />} />
        <Icon ReactIcon={<ICONS.RiSearchLine className='text-2xl' />} />
        <Icon ReactIcon={<ICONS.RiHeartLine className='text-2xl' />} />
        <Icon ReactIcon={<ICONS.RiUserLine className='text-2xl' />} />
        <Icon ReactIcon={<ICONS.RiShoppingBagLine className='text-2xl' />} />
      </div>
    </div>
  )
}

export default Navbar