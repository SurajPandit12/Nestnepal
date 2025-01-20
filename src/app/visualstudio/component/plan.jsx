import Image from 'next/image'

function plan() {

    const features=[
        {
            title: 'Customizable Workspaces',
            description:
              'Tailor your workspace to suit your development needs. border.',
            imgSrc: '/drive.png',
          },
        {
            title: 'Intelligent Code Completion',
            description:
              'Speed up coding with smart code suggestions.',
            imgSrc: '/docs.png',
        },
        {
            title: 'Version Control Integration',
            description:
              'Easily manage and track project versions.',
            imgSrc: '/calendar.png',
        },
        {
            title: 'Advanced Debugging Tools',
            description:
            'Find and fix bugs faster with advanced debugging.',    
                  imgSrc: '/sheet.png',
        },
        {
            title: 'Cross-Platform Development',
            description:
            'Build apps for multiple platforms seamlessly.',
            imgSrc: '/slides.png',
        },
        {
            title: 'Team Collaboration Features',
            description:
              'Work efficiently with your team using integrated tools.',
            imgSrc: '/chatting.png',
        },

    ]
  return (
    <div className='container my-12'>
     <div className='text-center py-6'>
     <h1 className='font-montserrat font-bold text-4xl py-2' >All Visual Studio plans consist off</h1>
     <p className='font-poppins  text-sm text-[#393939]'>Get all these features with our web hosting plans.</p>
     </div>
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-4'>
           {features.map((data, index)=>
        (
            <div key={index} className='bg-[#FBFBFB] px-4 py-6 mx-6 place-items-center hover:shadow-lg duration-300 transition-all hover:scale-105'>
                <div className='flex justify-center items-center  py-3'>
                    <Image height={32} width={32} src={data.imgSrc} alt='drive' className=''/>

                    </div>
                    <div className='flex flex-col justify-center items-center '>
                        <h1 className='font-dmsans font-medium text-xl py-2'>{data.title}</h1>
                        <p className='text-center  font-dmsans text-sm font-light text-[#393939] mb-4 tracking-[1%] max-w-56'>{data.description}</p>
                    </div>


                     </div>
        ))}
        </div>
    </div>
  )
}

export default plan