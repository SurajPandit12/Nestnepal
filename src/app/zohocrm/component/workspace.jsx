import Image from "next/image"

function optimize() {
    return (
      <div className="container mt-8">
      

       <div className="my-16">
       <div className=" flex justify-center" > <h2 className="px-3 py-1 text-[#E42527] border border-[#E42527]">Navigating The Perks</h2></div>

       <h1 className="font-montserrat font-bold text-4xl py-4 text-center text-[#E42527] ">Zoho Workplace<span className="text-black"> offering</span>  with Nest Nepal</h1>
        <p className="font-poppins text-sm text-center text-[#393939] max-w-[905px] mx-auto tracking-[1%]">Efficiency Boost: Seamlessly integrate Microsoft 365 with Nest Nepal's services to empower teams and enhance productivity with streamlined operations.</p>
           
       </div>
          <div className='grid grid-cols-1 md:grid-cols-2  items-center mb-12 '>
         
             <div className="ml-10 container">
             <p className="font-dmsans font-light  text-xl text-[#6A6A6A]  ">Hassle-Free Transfers</p>
             <h1 className='text-4xl  font-poppins tracking-[1%] pb-8 max-w-lg font-[700] py-6'> Boost Efficiency and Customer Engagement with Zoho CRM
              </h1>
              <p className="max-w-xl font-dmsans text-sm tracking-[1%] py-4 ">Zoho CRM enables smooth business operations and strong customer relations. Key features of this robust tool include task automation, interaction tracking, and lead management. At Nest Nepal, we provide Zoho CRM, customized by our developers to perform at its best for your business.</p>
              <ul className='list-disc text-sm ml-8 font-poppins grid gap-4 text-[#000000] max-w-xl'>
              <li>Track key business metrics in real-time with tailored dashboards.</li>
                  <li>
                  Reduce manual work and improve efficiency with task automation.</li>
                  <li>
                  Engage with customers across email, social media, and other channels.</li>
                  <li>
                  Access insights to drive decisions and improve outcomes.</li>
              </ul>
              <div className="mt-4">
                    <button className='border-2 border-black px-16 py-2 ml-4 font-dmsans'>Get Started</button>
               </div>
             </div>
             <div className="hidden lg:flex">
             
              <Image width={697.95} height={580.14} src="/gwork.png" alt="" />
             </div>
            
          </div>  
          <div className='grid grid-cols-1 md:grid-cols-2 items-center '>
              <div className="rounded-3lg hidden lg:flex">
             
              <Image width={697.95} height={580.14} src="/videocall.png" alt="" />
  
              </div>
              <div className="ml-10 font-dmsans">
                <p className="font-dmsans font-light text-xl text-[#6A6A6A] ">Performance-Driven Hosting</p>
                  <h1 className="text-4xl  font-poppins py-6 font-[700] max-w-[500px]">Powerful Tools for Smarter Business Management</h1>
                  <p className="text-sm font-dmsans font-light max-w-xl">With Zoho CRM features, managing customer data, tracking interactions, and analyzing performance becomes easier. From customizable dashboards to real-time analytics, Zoho CRM gives you the power to make smarter decisions and increase customer satisfaction.</p>
                  <ul className='list-disc py-8 text-sm ml-8 font-poppins grid gap-4 max-w-xl text-[#000000]'>
                  <li>Effectively manage and analyze leads to improve conversion rates.</li>
                  <li>
                  Collaborate seamlessly with your team on customer accounts.</li>
                  <li>
                  Manage your CRM anytime, anywhere, with mobile app support.</li>
                  <li>Keep customer data safe with industry-leading security features.</li>
              </ul>
                  <div className="mt-4">
                    <button className='border-2 border-black px-16 py-2 ml-4 font-dmsans'>Get Started</button>
               </div>
               
  
              </div>
          </div>
  
  
      </div>
    )
  }
  
  export default optimize