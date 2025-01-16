import Image from 'next/image';

function Switches() {
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
    },
  ];

  return (
    <div className="container flex flex-col lg:flex-row bg-[#F5F5F5] py-12 px-8 mt-6">
     
      <div className="flex flex-col my-6 lg:w-1/3">
        <h1 className="font-montserrat font-semibold text-2xl mb-4 lg:max-w-56">
          Ready To Make Switch?
        </h1>
        <p className="font-dmsans text-sm text-[#707070] mb-6 leading-relaxed text-center lg:text-left w-full md:max-w-3xl">
          Join the NEST Nepal family and experience top-tier web hosting. With
          our seamless migration process, superior performance, and dedicated
          support, we're the perfect choice for your hosting needs. Contact us
          today to elevate your online presence with NEST Nepal.
        </p>
        <p className="text-blue-600 font-dmsans text-lg hover:underline">Contact Us</p>
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:ml-12 w-full">
        {features.map((data, index) => (
          <div
            key={index}
            className="rounded-lg p-6 flex flex-col"
          >
            <Image
              src={data.imgSrc}
              height={180}
              width={240}
              alt={data.title}
              className="mb-4"
            />
            <h2 className="font-dmsans font-bold text-lg mb-2">
              {data.title}
            </h2>
            <p className="font-dmsans text-sm text-[#707070] mb-4">
              {data.description}
            </p>
            <a
              href="#"
              className="text-blue-700 font-dmsans text-lg hover:underline"
            >
              Get Started &#8599;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Switches;
