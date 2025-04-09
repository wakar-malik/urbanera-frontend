import React from 'react'

const List = () => {

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
    <ul className='flex items-center gap-3 capitalize text-xl font-normal font-josefin'>
      {listOfItem.map((item, index) => (
        <li className='cursor-pointer' key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default List