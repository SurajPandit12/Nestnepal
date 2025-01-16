import React from 'react'
import Hero from "./component/hero"
import Migration from './component/migration'
import Optimize from './component/optimize'
import Choice from "./component/choice"
import Switch from "./component/switches"
import Guarantee from './component/guarantee'
import Faq from './component/Faq'
function page() {
  return (
    <div>
        <Hero/>
        <Migration/>
        <Optimize/>
        <Choice/>
        <Guarantee/>
        <Switch/>
        <Faq/>

    </div>
  )
}

export default page