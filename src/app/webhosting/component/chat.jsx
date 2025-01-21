
export default function saleschat() {
    return (
      <div className="mt-4 bg-[#F5F8FF] " >
        <div className='grid lg:grid-cols-3 sm:grid-cols-2  py-10 justify-center items-center md:max-w-screen-lg md:mx-auto gap-16 font-dmsans container'>
           
          <div className=" border-b-2 md:border-b-0 md:border-r-2">
  <img className="h-[46px] w-[46px]" src="chat.png"></img>
  <h1 className="font-bold font-dmsans ">Sales Chat</h1>
  <p className="text-[14px]">Instant response</p>
          </div>
          <div className="   border-b-2 md:border-b-0 md:border-r-2">
  <img className="h-[46px] w-[46px]" src="email.png"></img>
  <h1 className="font-bold">Email</h1>
  <p className="text-[14px] font-dmsans">sales@nestnepal.com</p>
          </div>
          <div>
  <img className="h-[46px] w-[46px]" src="buld.png"></img>
  <h1 className="font-bold font-dmsans max-w-[200px]">Click here for a custom
  solution</h1>
          </div>
        </div>
      </div>
    )
  }
  