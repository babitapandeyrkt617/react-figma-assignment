import React from 'react'
import "./TestimonialsCard.css"
export const TestimonialsCard = (props) => {
  return (
    <div className='test-card'>
        <div className= {props.className}>
<img src={props.image} style={{borderRadius:"50%",width:"114.87px",height:"115.74px"}}/>
        </div>
        <p className='testimonials-p1'>{props.title}</p>
        <h2 className='testimonials-h2'>{props.title1}</h2>
    </div>
  )
}
   