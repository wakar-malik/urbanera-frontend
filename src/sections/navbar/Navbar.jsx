import React, { useEffect, useState } from 'react'
import images from '../../utils/image.js'
import ICONS from '../../utils/icons.js'
import List from '../../components/List/List.jsx';
import Icon from '../../components/icon/Icon.jsx';


const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 30 ? setSticky(true) : setSticky(false)
    })
  }, [])

  return (
    <div className={`flex justify-between fixed top-0 right-0 left-0 px-8 py-3 z-10 group hover:bg-white hover:text-black transition duration-400 ${sticky ? 'text-black bg-white' : 'text-white'}`}>
      <div className={`absolute top-3 w-2xs h-14 group-hover:opacity-100 ${sticky ? 'opacity-100' : 'opacity-0'}`}><img className='-ml-1.5 w-[190px] lg:w-[220px]' src={images.logo} alt="logo" /></div>
      <img className='w-[190px] cursor-pointer lg:w-[220px]' src={images.lightLogo} alt="logo" />
      <List className={'hidden'} />
      <div className='flex items-center gap-4 lg:hidden cursor-pointer'>
        <Icon ReactIcon={<img src={ICONS.search} alt="menu" className='w-6' />} />
        <Icon ReactIcon={<img src={ICONS.shoppingBag} alt="menu" className='w-6' />} />
        <Icon ReactIcon={<img src={ICONS.menu} alt="menu" className='w-6' onClick={() => setMenu(true)} />} />
      </div>
      <div className={`flex items-center gap-4 cursor-pointer absolute right-8 top-4 lg:hidden opacity-0 group-hover:opacity-100  ${sticky ? 'opacity-100' : 'opacity-0'}`}>
        <Icon ReactIcon={<img src={ICONS.BlackSearch} alt="menu" className='w-6' />} />
        <Icon ReactIcon={<img src={ICONS.BlackShoppingBag} alt="menu" className='w-6' />} />
        <Icon ReactIcon={<img src={ICONS.BlackMenu} alt="menu" className='w-6' onClick={() => setMenu(true)} />} />
      </div>
      <div className='hidden items-center gap-4 cursor-pointer lg:flex'>
        <Icon ReactIcon={<img src={ICONS.Phone} alt="phone" />} />
        <Icon ReactIcon={<img src={ICONS.search} alt="search" />} />
        <Icon ReactIcon={<img src={ICONS.heart} alt="heart" />} />
        <Icon ReactIcon={<img src={ICONS.user} alt="user" />} />
        <Icon ReactIcon={<img src={ICONS.shoppingBag} alt="shopping bag" />} />
      </div>
      <div className={`items-center gap-4 cursor-pointer hidden lg:flex group-hover:opacity-100 absolute right-8 top-4  ${sticky ? 'opacity-100' : 'opacity-0'}`}>
        <Icon ReactIcon={<img src={ICONS.BlackPhone} alt="phone" />} />
        <Icon ReactIcon={<img src={ICONS.BlackSearch} alt="search" />} />
        <Icon ReactIcon={<img src={ICONS.BlackHeart} alt="heart" />} />
        <Icon ReactIcon={<img src={ICONS.BlackUser} alt="user" />} />
        <Icon ReactIcon={<img src={ICONS.BlackShoppingBag} alt="shopping-bag" />} />
      </div>
      <div className={`bg-white flex flex-col text-gray-600 gap-10 p-4 lg:p-3 text-base w-sm h-screen absolute right-0 top-0 z-1 transition-transform duration-300 ${menu ? 'translate-x-0' : 'translate-x-125'}`}>
        <img src={ICONS.close} onClick={() => setMenu(false)} alt="close" className='self-end cursor-pointer w-6' />
        <List icon={<img src={ICONS.rightArrow} alt="menu" className='w-6' />} />
      </div>
      <div className={`bg-black opacity-25 w-full h-screen absolute top-0 left-0 ${menu ? 'translate-x-0' : 'translate-x-500'}`} onClick={() => setMenu(false)}>
      </div>
    </div>
  )
}

export default Navbar;