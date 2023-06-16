import React from 'react'
import './Card3.css';

const Card3 = (props) => {
  return (
        <div className='sub-card'>
            <img style={{width:"245px"}} src={props.pic}/>
            <div className='last-card'>
                <img style={{width:"81px"}} src={props.pic1}/>
                <img style={{width:"81px"}} src={props.pic2}/>
                <img style={{width:"81px"}} src={props.pic3}/>
            </div>
            <h4 style={{color: "#000000",marginLeft:"20px"}}>{props.title1}</h4>
            <p style={{color: "#000000",marginLeft:"20px",marginTop:"-15px"}}>{props.title2}</p>
        </div>
   
  )
}

export default Card3
{/* <div className='container8'>
<div>
    <h1>Real Wedding</h1>
    <p>List your wedding and browse portfolio</p>
</div>
<div className='sub-card'>
    <img src='./image/image 59.png'/>
    <div className='last-card'>
        <img src='./image/image 56.png'/>
        <img src='./image/image 57.png'/>
        <img src='./image/image 57.png'/>
    </div>
    <h4 style={{color: "#000000",marginLeft:"20px"}}>Danielle & Ronnie</h4>
    <p style={{color: "#000000",marginLeft:"20px",marginTop:"-15px"}}>38 photos. Kittery,Polland</p>
</div>
</div> */}