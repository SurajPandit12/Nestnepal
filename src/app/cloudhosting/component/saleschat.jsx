
export default function saleschat() {
  return (
    <div className="mt-8 bg-[#F5F8FF]" >
      <div className='grid lg:grid-cols-3 sm:grid-cols-2  py-10 justify-center items-center md:max-w-screen-lg md:mx-auto gap-16'>
         
        <div className="  border-b-2 md:border-b-0 md:border-r-2">
<img className="h-[46px] w-[46px]" src="chat.png"></img>
<h1>Sales Chat</h1>
<p>Instant response</p>
        </div>
        <div className="   border-b-2 md:border-b-0 md:border-r-2">
<img className="h-[46px] w-[46px]" src="email.png"></img>
<h1>Email</h1>
<p>sales@nestnepal.com</p>
        </div>
        <div>
<img className="h-[46px] w-[46px]" src="buld.png"></img>
<h1>Click here for a custom
solution</h1>
        </div>
      </div>
    </div>
  )
}
