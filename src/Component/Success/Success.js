import React from 'react'
import "./Success.css"
import { SuccessCard } from '../SuccessCard/SuccessCard'
export const Success = () => {
  return (
    <>
    <div className='success-container'>
<h1 className='success-h1'>Our Success</h1>
<p className='success-p'>Journey of our success.</p>
<div style={{display:"flex",gap:"35px"}}>
<div>
<SuccessCard image="./image/image-removebg-preview - 2022-07-23T230415 1.png"/>
<p className='success-p'>Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>
</div>
   
   <div>
<SuccessCard image="./image/image-removebg-preview - 2022-07-23T230425.png"/>
<p className='success-p'>Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>

</div><div>
<SuccessCard image="./image/image-removebg-preview - 2022-07-23T230432.png"/>
<p className='success-p'>Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>

</div><div>
<SuccessCard image="./image/image-removebg-preview - 2022-07-23T230437.png"/>
<p className='success-p'>Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>

</div><div>
<SuccessCard image="./image/image 184.png"/>
<p className='success-p'>Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India.</p>

</div>

</div>
    </div>
    </>
  )
}
