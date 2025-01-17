import Image from 'next/image'
import React from 'react'

function plan() {

    const features=[
        {
            title: 'Google Drive',
            description:
              'With this PC only app, precisely layout and style pictures, text, calendars, and border.',
            imgSrc: '/drive.png',
          },
        {
            title: 'Google Docs',
            description:
              'Every Nest Nepal account comes with a free 24/7 chat and a phone support.',
            imgSrc: '/docs.png',
        },
        {
            title: 'Google Calendar',
            description:
              'Schedule your Meetings & Manage your time.',
            imgSrc: '/calendar.png',
        },
        {
            title: 'Google Sheets',
            description:
            'Build, edit & Share Spreadsheets Online or Offline.',    
                  imgSrc: '/sheet.png',
        },
        {
            title: 'Google slides',
            description:
            'Present your ideas with google slides and stay on top in business',
            imgSrc: '/slides.png',
        },
        {
            title: 'Google Chat',
            description:
              'Real time, Real Conversation with Chat.',
            imgSrc: '/chatting.png',
        },

    ]
  return (
    <div className='container mt-8'>
        <div className='grid grid-cols-3  gap-y-4'>
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