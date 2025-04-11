import React from 'react'

const List = ({className, icon}) => {

  const listOfItem = [
    " latest",
    "men ",
    " women",
    "children",
    "shoes",
    " genius",
    "collection"
  ]

  return (
    <ul className={` items-center gap-3 capitalize font-normal font-josefin ${className} lg:flex`}>
      {listOfItem.map((item, index) => (
        <li className='cursor-pointer flex justify-between' key={index}>{item}{icon}</li>
      ))}
    </ul>
  )
}

export default List