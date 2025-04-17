import React from 'react'

const Footer1 = () => {
  const socialLinks = [
    {
      title: 'Join Moncler Peaks',
      img: 'https://azure-eu-images.contentstack.com/v3/assets/blt18e8db99a28228f2/blt31f7bf073d60f006/66a2910ee7318d1a96ab7b7a/Custom_Wallpaper.svg?branch=prod_2'
    },
    {
      title: 'Enjoy Complimentary Shipping',
      img: 'https://azure-eu-images.contentstack.com/v3/assets/blt18e8db99a28228f2/blt4bede7c072e53dcb/66a2910ea060afeb2d94ef98/Secure_home_delivery.svg?branch=prod_2'
    },
    {
      title: 'Discover the Moncler App',
      img: 'https://azure-eu-images.contentstack.com/v3/assets/blt18e8db99a28228f2/bltfbf2f82196adc3ef/67166d6eb7fb6734eaea55fd/Moncler-App-1.svg?branch=prod_2'
    },
    {
      title: 'Free Exchanges & Returns',
      img: 'https://azure-eu-images.contentstack.com/v3/assets/blt18e8db99a28228f2/blt8e33113de085b914/66a2910e336dfbd4954dba39/Returns.svg?branch=prod_2'
    },
    {
      title: 'Book a Live Boutique Appointment',
      img: 'https://azure-eu-images.contentstack.com/v3/assets/blt18e8db99a28228f2/blt432e79153572d4ec/66a2910e69b991c68c515fc6/Personal_Appointment.svg?branch=prod_2'
    },
  ];

  return (
    <div className="py-4 mt-8 w-full overflow-hidden border-y border-gray-200 whitespace-nowrap">
      <div className="flex 2xl:animate-none xss:animate-marquee  gap-10">
        {/* Repeat the content twice for seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center justify-center shrink-0 gap-10 min-w-full">
            {socialLinks.map((link, index) => (
              <div key={index} className="flex items-center gap-3 px-5">
                <img src={link.img} alt="" className="w-6 h-6 object-contain" />
                <a className="text-sm font-light whitespace-nowrap uppercase">{link.title}</a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer1;
