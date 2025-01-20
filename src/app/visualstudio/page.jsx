import React from 'react'
import Hero from "./component/hero"
import Blogs from "./component/blogs"
import Chat from "./component/chat"
import Faq from "./component/faq"
import Features from "./component/features"
import Guarantee from "./component/guarantee"
import Plan from "./component/plan"
import Star from "./component/star"
import Tec from "./component/tec"
import Work from "./component/workspace"
import Why from "./component/why"

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
<Work/>
<Blogs/>
<Why/>
<Faq/>
    </div>
  )
}

export default page