import React from 'react'
import './SecondSection.css';
import Reviews from '../Reviews/Reviews';
import ReviewsData from '../ReviewsData';

const SecondSection = () => {
  return (
    <>
         <div className='container-1' style={{ 
      backgroundImage: `url("./image/image .png")`,backgroundPosition:"center",objectFit:"cover",height:"400px"
    }}>
    </div>
    <div className='text'>
   <h2>India’s Leading Creative Platform</h2>
   </div>
   <div className='para'>
   <p>Experience hassle free bookings. Trusted by 2500+ Customers
</p>
</div>
    <div className='box'>
    <div className='search-box'>
      <input type='text' placeholder='Search service, blog and many more…' className='search-input'/><button className='submitButton'>Submit</button>
    </div>
    </div>
    <div className='container2'>
      {ReviewsData.map((val)=>{
        return(
          <Reviews 
          Img={val.Img}
          Title={val.Title}
          Title1={val.Title1} />
        )
      })}
    </div>
    <hr className='hr-line'></hr>
    </>

 
  )
}

export default SecondSection
