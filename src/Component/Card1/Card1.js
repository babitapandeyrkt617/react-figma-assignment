import React from 'react'
import './Card1.css';

const Card1 = (props) => {
  return (
  <div className='card-card'>
    <img className='pic4' src={props.imgsrc}/>
    <h4 className='text5'>{props.title3}</h4>
<p className='para5'>{props.title4}</p>
<button className='btn-btn'>{ props.text}</button>
  </div>
  )
}

export default Card1
{/* <div className='card-card'>
<img className='pic4' src='./image/image 64.png'/>
<h4 className='text5'>Pre Wedding Photoshoot</h4>
<p className='para5'>Starting at 25,000 (One Day)</p>
<button className='btn-btn'>Know more</button>
</div> */}