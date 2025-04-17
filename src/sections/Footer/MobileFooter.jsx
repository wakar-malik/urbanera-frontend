import React from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const refs = React.useRef([]);

  const sections = [
    {
      title: "CONTACT US",
      links: [
        'Call us 1 888 320 9162',
        'Contact via WhatsApp',
        'Email us',
        'Store locator',
        'Book an appointment',
      ]
    },
    {
      title: "CLIENT SERVICES",
      links: [
        'All services',
        'FAQS',
        'Order management',
        'Shopping & product advice',
        'Boutique services',
        'Product aftercare',
        'Product Code Verification',
      ]
    },
    {
      title: "CORPORATE",
      links: [
        'Investor relations',
        'Governance',
        'Sustainability',
        'Careers',
        'Moncler Materials',
        'Accessibility Statement'
      ]
    },
    {
      title: "LEGAL",
      links: [
        'Cookie Policy',
        'Privacy Policy',
        'Cookie Settings',
        'Legal Area'
      ]
    },
    {
      title: "DOWNLOAD URBANERA APP",
      links: [
        'iOS users',
        'Android users',
        ' Discover more'
      ]
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {sections.map((section, index) => {
        const isOpen = openIndex === index;
        const height = isOpen && refs.current[index] ? refs.current[index].scrollHeight : 0;

        return (
          <div key={index} className="border-b border-gray-200">
            <h6
              onClick={() => toggle(index)}
              className="w-full text-left py-2 px-3 font-light cursor-pointer bg-[#F5F5F5] flex items-center justify-between"
            >
              {section.title}
              <span className='text-xl'>{isOpen ? '-' : '+'}</span>
            </h6>

            <div
              ref={(el) => (refs.current[index] = el)}
              style={{
                maxHeight: `${height}px`,
                transition: "max-height 0.3s ease",
                overflow: "hidden",
                backgroundColor: "#F5F5F5"
              }}
            >
              <ul className="pl-4 pb-2 space-y-1 text-sm text-gray-600">
                {section.links.map((link, i) => (
                  <li className='cursor-pointer' key={i}>{link}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
      <div className='bg-[#F5F5F5] w-full flex justify-between py-2 px-3 font-light cursor-pointer'>
        <h6 >LANGUAGE</h6>
        <span>English</span>
      </div>
      <div className='bg-[#F5F5F5] w-full flex justify-between py-2 px-3 font-light cursor-pointer'>
        <h6 >COUNTRY/REGION</h6>
        <span>India</span>
      </div>
    </div>
  );
};

export default Accordion;
