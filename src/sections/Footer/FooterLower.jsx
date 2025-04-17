import React, { useState } from 'react'
import ICONS from '../../utils/icons'
const Footer2 = () => {

  const contact = [
    {
      title: 'Call us 1 888 320 9162',
      icon: ICONS.BlackPhone,
    }
    ,
    {
      title: 'Contact via WhatsApp',
      icon: ICONS.WhatsApp,
    }
    ,
    {
      title: 'Email us',
      icon: ICONS.Email,
    },
    {
      title: 'Store locator',
      icon: ICONS.Location,
    },
    {
      title: 'Book an appointment',
      icon: ICONS.Event,
    }
  ]


  // const footerItems = [
  //   {
  //     title: 'CLIENT SERVICES',
  //     list: [
  //       'All services',
  //       'FAQS',
  //       'Order management',
  //       'Shopping & product advice',
  //       'Boutique services',
  //       'Product aftercare',
  //       'Product Code Verification',
  //     ]
  //   },
  //   {
  //     title: 'CORPORATE',
  //     list: [
  //       'Investor relations',
  //       'Governance',
  //       'Sustainability',
  //       'Careers',
  //       'Moncler Materials',
  //       'Accessibility Statement'
  //     ]
  //   },
  //   {
  //     title: 'LEGAL',
  //     list: [
  //       'Cookie Policy',
  //       'Privacy Policy',
  //       'Cookie Settings',
  //       'Legal Area'
  //     ]
  //   },
  //   {
  //     title: 'DOWNLOAD URBANERA APP',
  //     list: [
  //       'iOS users',
  //       'Android users',
  //       'Discover more'
  //     ]
  //   },
  //   {
  //     title: 'COUNTRY/REGION',
  //     list: [
  //       'india'
  //     ]
  //   }

  // ]

  const services = [
    'All services',
    'FAQS',
    'Order management',
    'Shopping & product advice',
    'Boutique services',
    'Product aftercare',
    'Product Code Verification',
  ]

  const corporate = [
    'Investor relations',
    'Governance',
    'Sustainability',
    'Careers',
    'Moncler Materials',
    'Accessibility Statement'
  ]

  const legal = [
    'Cookie Policy',
    'Privacy Policy',
    'Cookie Settings',
    'Legal Area'
  ]

  const app = [
    'iOS users',
    'Android users',
    ' Discover more'

  ]

  const country = [
    'India'
  ]

  const language = [
    'English',
  ]

  return (
    <div className='flex flex-col justify-between gap-8 lg:flex-row py-16 px-8 max-h-[476px] bg-[#F5F5F5]'>
      <div className='flex gap-4 flex-col list-none basis-[12%]'>
        <h6 className='text-sm lg:text-[18px]'>CONTACT US</h6>
        {
          contact.map((item, index) => (
            <div className={`flex items-center gap-2 overflow-hidden mb-2 transition-all duration-700 ease-in-out`} key={index}>
              <img src={item.icon} alt="icon" />
              <li className='cursor-pointer text-sm'>{item.title}</li>
            </div>
          ))
        }
      </div>

      {/* <div className='basis-[80%] flex justify-between'>
        {
          footerItems.map((elm, idx) => (
            <div className='flex h-full gap-4 flex-col list-none'>
              <h6 className='text-sm lg:text-[18px]'>{elm.title}</h6>
              <div className={`flex flex-col gap-2 items-start`} key={idx}>
                {elm.list.map((link, i) => (
                  <li className='cursor-pointer text-sm' key={i}>{link}</li>
                ))}
              </div>
            </div>
          ))
        }
        
      <div className='flex gap-4  flex-col'>
            <h6 className='text-sm lg:text-[18px]'>LANGUAGE</h6>
                <li className='cursor-pointer text-sm list-none'>english</li>
          </div>
      </div> */}

      <div className='flex flex-col gap-4 text-sm list-none'>
        <h6 className='text-sm lg:text-[18px]'>CLIENT SERVICES</h6>
        {
          services.map((item, index) => (
            <li className='cursor-pointer text-sm' key={index}>{item}</li>
          ))
        }
      </div>
        <div className='flex flex-col gap-4  list-none'>
          <h6 className='text-sm lg:text-[18px]'>CORPORATE</h6>
          {
            corporate.map((item, index) => (
              <li className='cursor-pointer text-sm' key={index}>{item}</li>
            ))
          }
        </div>
        <div className='flex flex-col gap-4  list-none'>
          <h6 className='text-sm lg:text-[18px]'>LEGAL</h6>
          {
            legal.map((item, index) => (
              <li className='cursor-pointer text-sm' key={index}>{item}</li>
            ))
          }
        </div>
        <div className='flex flex-col gap-4  list-none'>
          <h6 className='text-sm lg:text-[18px]'>DOWNLOAD <br /> URBANERA APP</h6>
          {
            app.map((item, index) => (
              <li className='cursor-pointer text-sm' key={index}>{item}</li>
            ))
          }
        </div>
        <div className='flex flex-col gap-4  list-none'>
          <h6 className='text-sm lg:text-[18px]'>COUNTRY/REGION</h6>
          {
            country.map((item, index) => (
              <li className='cursor-pointer text-sm' key={index}>{item}</li>
            ))
          }
          <div className='flex gap-4  flex-col'>
            <h6 className='text-sm lg:text-[18px]'>LANGUAGE</h6>
            {
              language.map((item, index) => (
                <li className='cursor-pointer text-sm' key={index}>{item}</li>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Footer2;