import Image from 'next/image';

const features = [
  {
    title: 'Priority Support',
    description:
      'Our Agents are always up for you. No matter whether the issue is on our end or your end, we take it seriously and prioritize your issue.',
    imgSrc: '/handman.png',
    
  },
  {
    title: 'Light-Speed Web Server',
    description:
      'A web server designed for speed, efficiency, and optimized performance, enhancing website loading times and user experience.',
    imgSrc: '/kite.png',
   
  },
  {
    title: 'Free SSL Certificate',
    description:
      'Secure Socket Layer certificates provided at no additional cost, encrypting website data and enhancing security.',
    imgSrc: '/ssl.png',

  },
  {
    title: 'Scalable Solutions',
    description:
      'Whether youre a small startup or a large enterprise, our hosting solutions would be scalable to accommodate your growing.',
    imgSrc: '/bulb.png',
   
  },
  {
    title: 'Competitive Pricing',
    description:
      'While offering premium hosting services, I would strive to maintain competitive pricing to provide value for money.',
    imgSrc: '/divide.png',
  
  },
  {
    title: 'Daily Backup',
    description:
      'We offer Automated daily backups to safeguard website data and ensure quick recovery in case of emergencies.',
    imgSrc: '/updown.png',

  },
];

function Choice() {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center w-full text-center my-12">
        <h1 className="text-4xl font-montserrat font-bold max-w-xl">
          What makes Nest Nepal the <span className='text-blue-800'>#1</span> Choice for <span className='text-blue-800'>You</span>?
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center mx-36 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-xl border border-[#E3E3E3] flex items-center py-6 px-6 "
          >
            <div className="flex items-center px-6 ">
              <Image
                height={52}
                width={52}
                src={feature.imgSrc}
                alt="s"
                
              />
            </div>
            <div className="font-semibold font-dmsans px-4">
              <h1 className="text-lg text-black tracking-[1%] py-3">
                {feature.title}
              </h1>
              <p className="text-[#707070] text-lg max-w-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Choice;
