import React from 'react'
import Hero from './component/hero'
import Star from './component/star'
import Features from './component/features'
import Plan from './component/plan'
import Chat from './component/chat'
import Tec from './component/tec'
import Guarantee from './component/guarantee'
import Workspace from './component/workspace'
import Blogs from './component/blogs'
import Why from './component/why'
import Faq  from './component/faq'
function page() {
  return (
    <div>
        <Hero/>
        <Star/>
        <Features/>
        <Plan/> 
        <Chat/>
        <Tec/>
        <Guarantee/>
        <Workspace/>
        <Blogs/>
        <Why/>
        <Faq/>



    </div>
  )
}

export default page