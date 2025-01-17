import Hero from './component/hero'
import Plan from './component/plan'
import Features from './component/features'
import Blogs from './component/blogs'
import Workspace from './component/workspace'
function page() {
  return (
    <div>
        <Hero/>
        <Features/>
        <Plan/>
        <Blogs/>
        <Workspace/>


    </div>
  )
}

export default page