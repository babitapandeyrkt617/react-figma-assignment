import React from 'react'
import './Card4.css';

const Card4 = ({backpic,title,title1,title2,title3}) => {
  return (
    <div className='main-container'>
    <div className='card4' style={{ 
        backgroundImage: `url("./image/image 77.png")`,backgroundPosition:"center" ,  backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover' ,marginTop:"-27px"
      }}>
      <h4 style={{textAlign:"center",fontSize:"20px",color: "#FFFFFF" ,position:"relative",top:"31px"}}>{title}</h4>
      <h4 style={{textAlign:"center",fontSize:"20px",color: "#FFFFFF",position:"relative",top:"10px"}}>{title1} </h4>
      <h4 style={{textAlign:"center",fontSize:"24px",color: "#FFFFFF",position:"relative",top:"31px",left:"-64px"}}>{title2}</h4>
      <img src='./image/Images50-removebg-preview 2.png'/>
      <h1 style={{textAlign:"center",fontSize:"18px",color: "#000000",marginTop:"61px"}}>{title3}</h1>

  </div>
  </div>
  )
}

export default Card4