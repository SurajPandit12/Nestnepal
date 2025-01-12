
function neststandard() {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-[#FAFDFF] to-[#F5F5FF] pl-16 container'>
            <div className="flex flex-col justify-center">
                <p className="font-dmsans text-[13.5px] pb-3">Lorem Ipsum Ditsum</p>
                <p className="text-[63px] font-semibold leading-[63px] tracking-wider font-montserrat max-w-[100px] pb-3 ">The<span className="text-[#1818B3]">Nest </span>Standard</p>
                <p className="pb-6 font-dmsans text-[13.5px]"> Your data is automatically  lorem ipsum ditsum sitsum mitsum.</p>
                <div>
                <button className='bg-black text-white px-8 py-3 font-dmsans text-[16.2px] rounded-lg'>Contact Now</button>
                </div>

            </div>
            <div className='mb-4 py-10  font-dmsans text-[13.5px] pr-6 divide-y-2 max-w-[500px]'>
                <div className='pt-4 pb-2 flex '>
                  
                    <img className="h-[13.5px] w-[13.5px] mr-3 flex mt-1 items-center" src="man.png"></img>
                    Automatic Data Protection -  Advanced security and regular backups keep your data safe.</div>
                <div className='pt-4 pb-2 flex'>
                    <img className="h-[13.5px] w-[13.5px] mr-3 flex mt-1" src="time.png"></img>Blazing fast performance -  Optimized server ensures fast load times, enhancing customer experience</div>
                <div className='pt-4 pb-2 flex'>
                    <img className="h-[13.5px] w-[13.5px] mr-3 flex mt-1" src="nine.png"></img>Optimized for High Traffic -  Handle spikes in traffic effortlessly without compromising performance.</div>
                <div className='pt-4 pb-2 flex'>
                    <img  className="h-[13.5px] w-[13.5px] mr-3 flex mt-1" src="man.png"></img> Fast and Reliable Support -  Get quick assistance from our expert team whenever you need it.</div>

            </div>

        </div>
    </div>
  )
}

export default neststandard