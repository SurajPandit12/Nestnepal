import Image from 'next/image'

function who() {
  return (
    <div  className='container'>
        
            <div className=' grid-cols-1 grid md:grid-cols-2  mb-16 gap-16 mt-6'>
              <div className='mx-6'>
              <p className='font-bold font-poppins text-4xl  py-14 '>
                What is WHOIs?
                </p>
               <p className='font-dmsans text-lg tracking-[1%] max-w-xl text-justify'> WHOIS is the acronym for "who is" but is actually a protocol doing database queries regarding records of internet resources, such as IP addresses and domain names. The output of this protocol is in plain text. It was first described in a draft by the Internet Society, as its current version appears in RFC 3912. For those who wish a more direct functionality, most UNIX systems have a command-line utility that issues queries directly—the "whois" command.RWhois, or Referral WHOIS, enhances this protocol for further functionality.At Nest Nepal, we ensure seamless domain registration and management, leveraging tools like WHOIS to provide complete transparency.

                </p>
              </div>
            <div className='flex justify-start'>
              <Image width={628} height={522} alt='sdf' src="/earth.png"/>
              </div>
              <div className='bg-white shadow-2xl px-8 mr-10  rounded-lg'>
                <div className='flex items-center py-8 '>
                  <Image height={54} width={54} alt='eye' src="/eye.png"/>
                  <h1 className='pl-5 font-dmsans font-medium text-sm text-[#1818B3]'>Why is WHOIS Important, and Who Can Use It?
                  </h1>
                </div>
                <p className='py-8 text-justify font-dmsans font-light text-sm max-w-xl tracking-[2%]'>WHOIS is a very important method by which one can get details about domain ownership and registration status. It could be a businessman checking out a domain or a buyer intending to buy a website, even someone who has to resolve legal issues regarding trademarks: WHOIS always provides transparency. This will also play a very critical part in making smooth transactions between domain buyers and sellers, respectively. A very simple WHOIS lookup service has been provided for you at Nest Nepal to collect the right and timely details about any domain.</p>

              </div>
              <div className='bg-white shadow-2xl px-8 mr-10  rounded-lg'>
                <div className='flex items-center py-8 '>
                  <Image height={54} width={54} alt='eye' src="/search.png"/>
                  <h1 className='pl-5 font-dmsans font-medium text-sm text-[#1818B3]'>How to Use WHOIS Lookup Tool at Nest Nepal?

                  </h1>
                </div>
                <p className='py-8 text-justify font-dmsans font-light text-sm max-w-xl tracking-[2%]'>Using the WHOIS lookup tool at Nest Nepal is simple and efficient. You only need to enter the name of your desired domain into the search bar, and you will instantly get answers to the common questions like whether the domain is registered, who the current owner is, and when the domain registration will expire. This tool will also help you to identify whether the domain is transferable or renewable. At Nest Nepal, we aim to simplify the process of gathering domain-related information to support your goals.</p>

              </div>
       
           
              <div className='bg-white shadow-2xl px-8 mr-10  rounded-lg'>
                <div className='flex items-center py-8 '>
                  <Image height={54} width={54} alt='eye' src="/tick.png"/>
                  <h1 className='pl-5 font-dmsans font-medium text-sm text-[#1818B3]'>How Does WHOIS Help Protect Your Online Presence?

                  </h1>
                </div>
                <p className='py-8 text-justify font-dmsans font-light text-sm max-w-xl tracking-[2%]'>WHOIS doesn’t just provide transparency; it, in fact, highlights the importance of safeguarding your sensitive information. If you register a domain without privacy, your contact details such as your name, email, and phone number may become publicly available. Nest Nepal offers domain privacy protection services to make sure your personal information remains secure. These privacy protection services not only save you from unwanted spam and fraud but also provide an extra layer of protection for your online presence.</p>

              </div>
       
           
              <div className='bg-white shadow-2xl px-8 mr-10  rounded-lg'>
                <div className='flex items-center py-8 '>
                  <Image height={54} width={54} alt='eye' src="/pen.png"/>
                  <h1 className='pl-5 font-dmsans font-medium text-sm text-[#1818B3]'>What Can I Do If My Desired Domain Is Already Taken?
                  </h1>
                </div>
                <p className='py-8 text-justify font-dmsans font-light text-sm max-w-xl tracking-[2%]'>If the domain you like has already been taken, don't worry. Nest Nepal offers practical solutions, such as helping you  to contact the current domain owner for a possible sale or be suggested with alternate domain names for your brand. Our experts can also guide and assist in getting a new domain name, whether it is through the transfer process or just by suggesting creative new domain extensions that will give you your desired online identity. With Nest Nepal, you’ll always have options to secure the perfect domain for your website.</p>

              </div>
       
           
       
           
          
              
                


            </div>
        
    </div>
  )
}

export default who