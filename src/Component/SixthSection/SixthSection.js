import React from 'react'
import './SixthSection.css';
import Card3 from '../Card3/Card3';
import Card3Data from '../Card3Data';

const SixthSection = () => {
    return(
    <div className='container8'>
      <div>
            <h1 style={{color: "#4C696D", marginTop:"54",marginLeft:"12px"}}>Real Wedding</h1>
            <p style={{color: "#4C696D", marginTop:"-17px",marginLeft:"12px"}}>List your wedding and browse portfolio</p>
        </div>
    <div style={{display:"flex",gap:"64px"}}>
    {Card3Data.map((val)=>{
        return (
            <Card3 pic={val.pic}
                pic1={val.pic1}
                pic2={val.pic2}
                pic3={val.pic3}
                title1={val.title1}
                title2={val.title2}
            />
        )
    })}
</div>
<button className='btn-btn1'>View more weddings<img className='arrow' src='./image/Arrow 1.png'/></button>
<hr style={{marginLeft:"20px", marginRight:"20px" ,marginTop:"20px"}}></hr>
  </div>

    )
}

export default SixthSection