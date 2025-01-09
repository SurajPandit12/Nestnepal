import Features from "./component/features.jsx"
import Guarantee from "./component/guarantee.jsx"
import Hero from "./component/hero.jsx"
import Nest from "./component/neststandard.jsx"
import OPtimize from "./component/optimize.jsx"
import Plan from "./component/plan.jsx"
import Sales from "./component/saleschat.jsx"
import Scroll from "./component/scroll.jsx"
import Star from "./component/star.jsx"
import Faq from "./component/Faq.jsx"
import Tec from "./component/tec.jsx"
function page() {
  return (
<div>
 <Hero/>
<Star />
<Plan/>
<Sales />
<Scroll/>
<Tec />
<Features/>
<Nest/>
<OPtimize/>
<Guarantee/>
<Faq />
</div>  
  )
}

export default page