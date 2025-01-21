import Image from 'next/image'

function plan() {

    const features=[
        {
            title: 'Customizable Dashboards',
            description:
              'Track key metrics with personalized and easy-to-read dashboards.',
            imgSrc: '/drive.png',
          },
        {
            title: 'Automation Tools',
            description:
              'Streamline tasks and increase efficiency with automated workflows.',
            imgSrc: '/docs.png',
        },
        {
            title: 'Omni-Channel Communication',
            description:
              'Engage customers across email, social media, and more.',
            imgSrc: '/calendar.png',
        },
        {
            title: 'Advanced Analytics',
            description:
            'Gain insights with detailed reports and performance metrics.',    
                  imgSrc: '/sheet.png',
        },
        {
            title: 'Lead Management',
            description:
            'PTrack, nurture, and convert leads into long-term customers.',
            imgSrc: '/slides.png',
        },
        {
            title: 'Collaboration Tools',
            description:
              'Collaborate seamlessly with your team on customer accounts.',
            imgSrc: '/chatting.png',
        },

    ]
  return (
    <div className='container my-16'>
     <div className='text-center py-6'>
     <h1 className='font-montserrat font-bold text-4xl py-2' >All Zoho CRM plans consist of</h1>
     <p className='font-poppins text-sm text-[#393939]'>Get all these features with our web hosting plans.</p>
     </div>
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4'>
           {features.map((data, index)=>
        (
            <div key={index} className='bg-[#FBFBFB] px-4 py-6 mx-6 place-items-center hover:shadow-lg duration-300 transition-all hover:scale-105'>
                <div className='flex justify-center items-center  py-3'>
                    <Image height={32} width={32} src={data.imgSrc} alt='drive' className=''/>

                    </div>
                    <div className='flex flex-col justify-center items-center '>
                        <h1 className='font-dmsans font-medium text-xl py-2'>{data.title}</h1>
                        <p className='text-center max-w-96 font-dmsans text-sm font-light text-[#393939] mb-4'>{data.description}</p>
                    </div>


                     </div>
        ))}
        </div>
    </div>
  )
}

export default plan