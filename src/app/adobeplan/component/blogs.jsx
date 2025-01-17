import Image from 'next/image'
import React from 'react'

function blogs() {
    const data=[
        { 
            img:'blog.png',
            data:'How to host a website? Beginner’sguide!',
            description:'Know the essential steps required for web hosting, right from domain name to server settings.',
        },
        { 
            img:'blog.png',
            data:'How to host a website? Beginner’sguide!',
            description:'Know the essential steps required for web hosting, right from domain name to server settings.',
        },
        { 
            img:'blog.png',
            data:'How to host a website? Beginner’sguide!',
            description:'Know the essential steps required for web hosting, right from domain name to server settings.',
        },
    ]
  return (
    <div className='container'>
        <div className='grid grid-cols-2 lg:grid-cols-3'>
            {data.map((data, index)=>(
                <div key={index}>
                    <div className='flex justify-center'>
                        <Image height={253} width={407} src={data.blog} alt='hi'/>
                    </div>
                    <div className=''>
                        <h1 className='font-dmsans text-lg font-medium'>{data.data}</h1>
                        <p className='font-dmsans text-sm text-[#707070]'>{data.description}</p>
                        <button className='text-white px-3 py-2 bg-black'>Read full blog</button>
                    
                        </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default blogs