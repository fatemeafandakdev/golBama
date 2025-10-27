import React from 'react'


import banner from "../assests/img/banner.png"
import SortFlower from '../feature/SortFlower'
import ApartmentSortSection from '../feature/ApartmentSlider'
import BoxSlider from '../feature/BoxSlider'

import AraiSlider from '../feature/AraiSlider'
import SabadSlider from '../feature/SabadSlider'
import BlogList from '../feature/BlogList'

import LayOut from '../layout/LayOut'
function Home() {
  return (

    <div className='w-full '>

<LayOut>
<img src={banner} className='w-[100%]' alt=''/>
<SortFlower/>
<ApartmentSortSection/>
<BoxSlider/>
<SabadSlider/>
<AraiSlider/>
<BlogList/>

</LayOut>
    </div>
  )
}

export default Home
