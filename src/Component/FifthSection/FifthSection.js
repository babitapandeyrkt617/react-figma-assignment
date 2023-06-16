import React from 'react'
import './FifthSection.css';

const FifthSection = () => {
  return (
    <>

   <div className='container6' style={{ 
      backgroundImage: `url("./image/image 74.png")`,backgroundPosition:"center",objectFit:"cover",height:"400px"
    }}>
    <div className='list-item'>
    <h4 className='text9'>Discover</h4>
    <h4 className='text10'>Graphic Design Ideas </h4>
    <h4 className='text11'>and services</h4>
    <p className='para6'>From branding to marketing</p>
    <div className='box'>
    <div className='search-box'>
      <input type='text' placeholder='Search service, blog and many more…' className='search-input1'/><button className='sumbit'>Search</button>
    </div>
    </div>
    </div>
    <div className='imgs'>
    <div>
    <div className='vartical-border'></div>
    <img src='./image/image 24.png'/>
    </div>
   <div>
   <div className='vartical-border1'></div>
   <img className='pic-pic1'src='./image/image 32.png'/>

   </div>
   <div>
   <div className='vartical-border'></div>

   <img className='pic-pic2' src='./image/image 49.png'/>

   </div>
   <div>
   <div className='vartical-border1'></div>
   <img className='pic-pic3' src='./image/Rectangle 166.png'/>
    
   </div>
    </div>
    
    </div>
    <p className='para-8' style={{textAlign:"center"}}>
    <span style={{fontSize:"35px",fontWeight:"700"}}>Popular:</span> 
     <span className='fifthsecSpan'>Website  Design</span>  <span className='fifthsecSpan'>Logo Design </span> <span className='fifthsecSpan'>Brochure</span>     <span className='fifthsecSpan'>Label Design</span></p>
    <hr></hr>
    </>

  
  )
}

export default FifthSection