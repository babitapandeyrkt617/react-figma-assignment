import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <>
    <div className='footer' style={{ 
        backgroundImage: `url("./image/image 110.png")`,backgroundPosition:"center",objectFit:"cover",marginTop:"10px"
      }}>
      <div className='top-list'>
      <div className='sub-list'>
        <span style={{color:"#FFFFFF",fontSize:"31px"}}>Grow your freelancing</span><br></br>
        <span style={{color:"#FFFFFF",fontSize:"31px"}}>career with Fliqa Associate</span><br></br>
        <p style={{color:"#FFFFFF",fontSize:"20px"}}>Register yourself<br></br> Verification & Quality Check <br></br>Verified Associate at FliqaIndia</p>
        </div>
        <div className='btn2'>
        <button>Join Now</button>
        </div>
      </div>
   
      </div>
      <div className='dark'>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <div style={{marginLeft:"20px"}}>
        <p style={{color: "#FFFFFF", fontSize:"20px"}}>Never miss a thing.</p>
        <div className='box'>
    <div className='search-box'>
      <input style={{marginLeft:"0px",width:"270px"}} type='text' placeholder='Search service, blog and many more…' className='search-input'/>
      <button style={{backgroundColor:"#E0E0E0",marginLeft:"70px"}} className='submitButton'>subscribe</button>
    </div>
    </div>
    <p style={{color:"white"}}> Be in touch </p>

    <div style={{display:"flex",gap:"5px"}}>
    <img src='./image/Vector.png'/>
    <img src='./image/Vector (1).png'/>
    <img src='./image/Vector (2).png'/>
    <img src='./image/Vector.png'/>
    <img src='./image/Vector (1).png'/>
      </div>
      </div>
      <div>
      <p style={{color: "#FFFFFF", fontSize:"27px"}}>Never miss a thing.</p>
      <div style={{display:"flex",gap:"70px"}}>
        <div>
        <p style={{color: "#FFFFFF", fontSize:"20px"}}>Services</p>
<p style={{color: "#FFFFFF", fontSize:"20px"}}>Blog</p>
<p style={{color: "#FFFFFF", fontSize:"20px"}}>Portfolio</p>
        </div>
        <div>
    <p style={{color: "#FFFFFF", fontSize:"20px"}}>Tutorial </p>
    <p style={{color: "#FFFFFF", fontSize:"20px"}}>Careers </p>
    <p style={{color: "#FFFFFF", fontSize:"20px"}}>Film</p>
</div>
      </div>
      </div>
      <div>
      <div>
        <p style={{color: "#FFFFFF", fontSize:"20px"}}>Never miss a thing.</p>
        <p style={{color: "#FFFFFF", fontSize:"20px"}}>Contact us </p>
        <p style={{color: "#FFFFFF", fontSize:"20px"}}>Feedback</p>
        <p style={{color: "#FFFFFF", fontSize:"20px"}}>FAQ</p>
        <p style={{color: "#FFFFFF", fontSize:"20px"}}> Terms and conditions</p>
        <p style={{color: "#FFFFFF", fontSize:"20px"}}>Privacy Policy</p>
        <p style={{color: "#FFFFFF", fontSize:"20px"}}>Data Deletion Protocol</p>
      </div>
      </div>
      </div>
      <div style={{textAlign:"center",justifyContent:"center",display:"flex"}}>
      <p style={{textAlign:"center",color:"white",width:"250px"}}>2019-2021, FliqaIndia Pvt Ltd.        -ALL RIGHT RESERVED
POWERED BY FLIQAINDIA PVT. LTD.
VERSION 5.1.5</p>
      </div>
     
      {/* <div>
      
        <div>
        
</div>

      </div>
      <div>
        <p style={{color: "#FFFFFF", fontSize:"20px"}}>Never miss a thing.</p>
        <span style={{color: "#FFFFFF", fontSize:"20px"}}>Contact us </span>
        <span style={{color: "#FFFFFF", fontSize:"20px"}}>Feedback</span>
        <span style={{color: "#FFFFFF", fontSize:"20px"}}>FAQ</span>
        <span style={{color: "#FFFFFF", fontSize:"20px"}}> Terms and conditions</span>
        <span style={{color: "#FFFFFF", fontSize:"20px"}}>Privacy Policy</span>
        <span style={{color: "#FFFFFF", fontSize:"20px"}}>Data Deletion Protocol</span>
      </div>
      <div>
        <span style={{color: "#FFFFFF", fontSize:"20px"}}>2019-2021, FliqaIndia Pvt Ltd. -ALL RIGHT RESERVED</span>
        <span style={{color: "#FFFFFF", fontSize:"20px"}}>POWERED BY FLIQAINDIA PVT. LTD.</span>
        <span style={{color: "#FFFFFF", fontSize:"20px"}}>VERSION 5.1.5</span>
      </div> */}
     
      </div>


</>
  )
}

export default Footer
