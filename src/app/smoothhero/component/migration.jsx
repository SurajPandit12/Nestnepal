import React from 'react'
import Image from 'next/image'
function migration() {
  return (
    <div className='container'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-14 mt-7'>
            <div className='max-w-96 p-4 mt-6'>
                <p className='font-dmsans text-lg tracking-[1%]'>What we Do</p>
                <h1 className='font-montserrat text-black text-4xl font-extrabold tracking-[2%]] py-2 '>Your <span className='text-blue-800'>Website,<br/> </span >Moved with <span className='text-blue-800'> Care !</span></h1>
                <p className='font-dmsans text-lg tracking-[1%] text-[#707070]'>Expert Solutions for Smooth and Hassle-Free Transfers</p>
            </div>


            <div className='bg-white shadow-2xl  px-8'>
                <div className='flex gap-4 py-8'>
                    <Image height={60} width={60} alt='migration' src="/migration.png"/>
                    <h1 className='font-dmsans font-semibold text-2xl max-w-28 '>Server
                    Migration</h1>
                </div>
                <p className='font-dmsans text-lg max-w-96 pb-10 text-[#707070]'>Move your website to a new server without any downtime or data loss. This includes all files, databases, and configurations.</p>
            </div>

            <div className='bg-white shadow-2xl  px-8'>
                <div className='flex gap-4 py-8'>
                    <Image height={60} width={60} alt='migration' src="/database.png"/>
                    <h1 className='font-dmsans font-semibold text-2xl max-w-28 '>Database
                    Migration</h1>
                </div>
                <p className='font-dmsans text-lg max-w-96 pb-10 text-[#707070]'>Safely transfer your website’s database to a new system, ensuring data integrity, minimal disruption &
                Top-notch Security..</p>
            </div>

            <div className='bg-white shadow-2xl  px-8'>
                <div className='flex gap-4 py-8'>
                    <Image height={60} width={60} alt='migration' src="/cpanel.png"/>
                    <h1 className='font-dmsans font-semibold text-2xl max-w-28 '>cPanel
                    Migration</h1>
                </div>
                <p className='font-dmsans text-lg max-w-96 pb-10 text-[#707070]'>Move your website from one cPanel account to another, ensuring all files, databases, emails, and configurations are transferred seamlessly.</p>
            </div>

            <div className='bg-white shadow-2xl  px-8'>
                <div className='flex gap-4 py-8'>
                    <Image height={60} width={60} alt='migration' src="/vps.png"/>
                    <h1 className='font-dmsans font-semibold text-2xl max-w-28 '>VPS
                    Migration</h1>
                </div>
                <p className='font-dmsans text-lg max-w-96 pb-10 text-[#707070]'>Migrate your website to a new Virtual Private Server (VPS) to improve performance and scalability, ensuring minimal downtime.</p>
            </div>

            <div className='bg-white shadow-2xl  px-8'>
                <div className='flex gap-4 py-8'>
                    <Image height={60} width={60} alt='migration' src="/cms.png"/>
                    <h1 className='font-dmsans font-semibold text-2xl max-w-28 '>CMS
                    Migration</h1>
                </div>
                <p className='font-dmsans text-lg max-w-96 pb-10 text-[#707070]'>Perform a full migration including platform, server, design, and domain, essentially rebuilding your website on a new foundation.</p>
            </div>

            <div className='bg-white shadow-2xl  px-8'>
                <div className='flex gap-4 py-8'>
                    <Image height={60} width={60} alt='migration' src="/platform.png"/>
                    <h1 className='font-dmsans font-semibold text-2xl max-w-28 '>Platform 
                    Migration</h1>
                </div>
                <p className='font-dmsans text-lg max-w-96 pb-10 text-[#707070]'>Transition your website seamlessly from one platform to another, ensuring all your data, content, and functionality are preserved.</p>
            </div>

            <div className='bg-white shadow-2xl  px-8'>
                <div className='flex gap-4 py-8'>
                    <Image height={60} width={60} alt='migration' src="/domain.png"/>
                    <h1 className='font-dmsans font-semibold text-2xl max-w-28 '>Domain
                    Migration</h1>
                </div>
                <p className='font-dmsans text-lg max-w-96 pb-10 text-[#707070]'>Change your website's domain name and ensure that all links, SEO rankings, and traffic are properly redirected to the new domain.</p>
            </div>

            <div className='bg-white shadow-2xl  px-8'>
                <div className='flex gap-4 py-8'>
                    <Image height={60} width={60} alt='migration' src="/wordpress.png"/>
                    <h1 className='font-dmsans font-semibold text-2xl max-w-28 '>WordPress
                    Migration</h1>
                </div>
                <p className='font-dmsans text-lg max-w-96 pb-10 text-[#707070]'>Transfer your WordPress site to a new host, domain, or server, ensuring all themes, plugins, and settings are retained.</p>
            </div>

        </div>
    </div>
  )
}

export default migration