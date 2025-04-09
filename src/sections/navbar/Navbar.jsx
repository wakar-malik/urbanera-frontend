import React, { act, useEffect, useState } from 'react'
import images from '../../utils/image.js'
import ICONS from '../../utils/icons'
import List from '../../components/List/List.jsx';
import Icon from '../../components/icon/Icon.jsx';


const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 30 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <div className={`flex justify-between fixed top-0 right-0 left-0 px-8 py-3 z-10 group hover:bg-white hover:text-black transition duration-400 ${sticky ? 'text-black bg-white' : 'text-white'}`}>
      <div className={`absolute top-3 w-2xs h-14 group-hover:opacity-100 ${sticky ? 'opacity-100' : 'opacity-0'}`}><img className='-ml-1.5' src={images.logo} alt="" /></div>
      <img className='w-[220px] cursor-pointer' src={images.lightLogo} alt="logo" />
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