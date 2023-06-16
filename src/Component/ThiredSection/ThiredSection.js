import React from 'react'
import Card from '../Card/Card'
import CardData from '../CardData'
import './ThiredSection.css';

const ThiredSection = () => {
  return(
    <>
    <div className='main'>
    <h1 className='text3'>Find Trusted Associate</h1>
    <h4 className='text4'>Find the best Fliqa Associate for your special day.</h4>
    <p className='para1'>See More</p>
  <div className='container3'>
  {CardData.map((val)=>{
  return (
  <Card Imgsrc= {val.Imgsrc}
   Text1= {val.Text1}
   Text2= {val.Text2}
    Img2={val.Img2}
  />
  )
})}
</div>
</div>
  
</>
  )
  
 
}

export default ThiredSection