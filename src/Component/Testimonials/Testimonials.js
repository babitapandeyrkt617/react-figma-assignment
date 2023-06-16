import React from 'react'
import { TestimonialsCard } from '../TestimonialsCard/TestimonialsCard'
import "./Testimonials.css"
export const Testimonials = () => {
  return (
    <div >
    <div className='testimonials-container'>
    <div style={{justifyContent:"space-around",alignItems:"center",display:"flex"}}>
    <div style={{marginLeft:"410px" }}>
    <h1 className='testimonials-h1'>Testimonials</h1>
<p>Words from our clients</p>
    </div>
<div style={{display:"flex",gap:"20px"}}>
  <button className='google-btn'>Google</button>
  <button className='google-btn1'>Facebook</button>
  <button className='google-btn1'>Weddingwire</button>
  <button className='google-btn1'>WedmeGood</button>

</div>
    </div>

<div style={{display:"flex",marginTop:"40px"}}>
  <div>
    <img style={{width:"300px",height:"285px"}} src='./image/Capture.PNG'/>
  </div>
  <div style={{display:"flex",gap:"40px",position:"relative"}}>
<TestimonialsCard className="test-round-card" image="./image/Ellipse 1 - Copy.png" title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
" title1="~Ramdom Name"/>
<TestimonialsCard className="test-round-card1" image="./image/Ellipse 1 - Copy.png" title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
" title1="~Ramdom Name"/>
<TestimonialsCard className="test-round-card2" image="./image/Ellipse 1 - Copy.png" title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
" title1="~Ramdom Name"/>
<TestimonialsCard className="test-round-card3" image="./image/Ellipse 1 - Copy.png" title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
" title1="~Ramdom Name"/>


</div>
</div>

    </div>
    <hr style={{marginTop:"20px"}}></hr>
    </div>
  )
}
