import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
        <img className='pic1' src={props.Imgsrc}/>
        <div className='item'>
            <h2 className='text'>{props.Text1}</h2>
            <h4 className='text1'>{props.Text2}</h4>
            <img className='pic' src={props.Img2}/>
        </div>
    </div>
  )
}

export default Card
{/* <div className='card'>
<img className='pic1' src='./image/Rectangle 171 (1).png'/>
<div className='item'>
    <h2 className='text'>Name Title</h2>
    <h4 className='text1'>Location : </h4>
    <img className='pic' src='./image/logos.png'/>
</div>
</div> */}