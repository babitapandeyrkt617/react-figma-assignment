import React from 'react'
import './FourSection.css';
import Card1 from '../Card1/Card1';
import Card1Data from '../Card1Data';

const FourSection = () => {
  return (
    <div className='main1'>
        <h1 className='text7'>Our Featured Services </h1>
        <h2 className='text8'>Discover the range of services provided by FliqaIndia</h2>
        <div className='container4'>
        {Card1Data.map((val)=>{
            return(
                <Card1 
                    imgsrc={val.imgsrc}
                    title3={val.title3}
                    title4={val.title4}
                    text={val.text}
                />
            )
        })}
       
    </div>
    </div>
  )
}

export default FourSection