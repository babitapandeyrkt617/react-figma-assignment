import React from 'react'
import './Reviews.css';

const Reviews = (props) => {
  return (
    <div className='card-con'>
     <div className='left'>
        <img src={props.Img}/>
     </div>
     <div className='right'>
        <h4 className='text1'>{props.Title}</h4>
        <p className='para1'>{props.Title1}</p>
     </div>
    </div>
  )
}

export default Reviews
// {/* <div className='card-con'>
//      <div className='left'>
//         <img src='./image/Group 156.png'/>
//      </div>
//      <div className='right'>
//         <h4>Verified Reviews</h4>
//         <p>For verified reviewers</p>
//      </div>
//     </div> */}