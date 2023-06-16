import React from 'react'
import "./Blog.css"
export const Blog = () => {
  return (
    <>
<div className='blog-container'>
<div>
    <h1 className='blog-heading'>Our Blogs</h1>
    <p className='blog-p'>Check out our Latest Blog</p>
</div>
<div style={{display:"flex",marginTop:"-34px"}}>
<div className='img-img'>
<div className='img-1' style={{ 
      backgroundImage: `url("./image/FliqaIndia wedding.png")`,backgroundPosition:"center" ,  backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover' ,height:"317px",width: "357px"
    }}>
    <div className='sub-con'>
        <span className='span-1'>Featured on: Sep 15,2021 </span><br></br>
        <span className='span-2'>Wedding</span><br></br>
        <span className='span-2'>Photography</span><br></br>
        <span className='span-2'>at Goa</span>
    </div>

</div>
<div className='img-2' style={{ 
      backgroundImage: `url("./image/Wedding Trailer.png")`,backgroundPosition:"center" ,  backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover' ,height: "317px",    width: "357px"
    }}>
 <div className='sub-con'>
        <span  className='span-1'>Featured on: Sep 15, 2021 </span><br></br>
        <span className='span-2'>Photography:</span><br></br>
        <span className='span-2'>Expectations </span><br></br>
        <span className='span-2'>vs. Reality</span>
    </div>
</div>
</div>
<div>
<div style={{display:"flex",justifyContent:"space-between",marginTop:"-22px"}}>
<p style={{color: "#354547", marginLeft:"47px"}}>Trending Now</p>
<p style={{marginRight:"59px",color: "#354547"}}>View All</p>
</div>

<div className='sections'>
<div style={{display:"flex"}}>
<div className='left-bar'>
        <img src='./image/FliqaIndia wedding.png'/>
    </div>
    <div className='right-bar'>
        <h4 style={{marginBottom:"-14px"}}>Creative Industries are on the verge of<br></br> depletion due to COVID-19</h4>
        <p>In a period where many industries remain highly<br></br> unclear, others want to grasp how<br></br> COVID-19 impact</p>

    </div>
</div>
    
    <hr></hr>
    <div style={{display:"flex"}}>
    <div className='left-bar'>
        <img src='./image/Wedding Trailer.png'/>
    </div>
    <div className='right-bar'>
        <h4 style={{marginBottom:"-14px"}}>Photography: Expectations vs. Reality</h4>
<p>Most of the time without any hands-on experience in photography,<br></br> professional and advanced<br></br> photography actually</p>
    </div>
    </div>
   
<hr></hr>
<div style={{display:"flex"}}>
<div className='left-bar'>
        <img src='./image/FliqaIndia wedding.png'/>
    </div>
    <div className='right-bar'>
<h4 style={{marginBottom:"-14px"}}>Wedding Photography at Goa Wedding</h4>
<p>Photography in Goa If not, every couple when they make their list of Pre-<br></br>wedding shoot </p>
</div>
</div>
  
</div>
</div>
</div>


</div>



    </>
  )
}
export default Blog;

