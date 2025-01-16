import Image from 'next/image'
function switches() {

  const features = [
    {
      title: 'VPS Hosting',
      description:
        'For growing businesses that need more power and flexibility, our VPS hosting provides dedicated resources and greater control over your hosting environment.',
      imgSrc: '/glassman.png',
      
    },
    {
      title: 'Dedicated Hosting',
      description:
        'For high-traffic websites and mission-critical applications, our dedicated hosting offers unmatched performance, security, and customization options.',
      imgSrc: '/noglass.png',
     
    },
    {
      title: 'Cloud Hosting',
      description:
        'Take advantage of the scalability and reliability of the cloud with our cloud hosting solutions, designed to handle varying traffic loads with ease.',
      imgSrc: '/yesman.png',
  
    },]
  return (
    <div className='container flex'>
      <div className='flex flex-col '>
        <h1>
        Ready To Make Switch ?
        </h1>
        <p className='max-w-xl'>Join the NEST Nepal family and experience top-tier web hosting. With our seamless migration process, superior performance, and dedicated support, we're the perfect choice for your hosting needs. Contact us today to elevate your online presence with NEST Nepal.</p>
        <p>Contact Us</p>

      </div>

      <div className='grid grid-cols-3'>
        {features.map(( data, index)=>(
          <div key={index} >
             <div className=" px-6  ">
                          <Image
                            src={data.imgSrc}
                            height={180}
                            width={240}
                            alt="s"
                          />
                        </div>

           <h1> {data.title}</h1>
            <p>{data.description}</p>
            <h1 className='text-blue-700'>Get Started&#8599;</h1>

          </div>
        ))}


      </div>
    </div>
  )
}

export default switches