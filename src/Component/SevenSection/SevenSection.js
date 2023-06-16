import React from 'react'
import Card4 from '../Card4/Card4';
import './SevenSection.css';
import Card4Data from '../Card4Data';

const SevenSection = () => {
  console.log(Card4Data)
  return(
  <div style={{background: "#BADCDC"}}>
    <div>
      <h1 style={{color: "#4C696D",textAlign:"center",fontSize:"20px"}}>Best Offers</h1>
      <p style={{color: "#000000",textAlign:"center",fontSize:"20px",marginTop:"-8px"}}>Discover the best offers on our services</p>
    </div>
  <div style={{display:"flex",justifyContent:"space-between"}}>
  {Card4Data.map((val)=>{
  return(
    <Card4 
      backpic={val.backpic}
      title={val.title}
      title1={val.title1}
      title2={val.title2}
      title3={val.title3}
    />
  )
  })}
  </div>
  <hr style={{marginLeft:"20px",marginRight:"23px",marginTop:"26px"}}></hr>

</div>
  )
}

export default SevenSection;