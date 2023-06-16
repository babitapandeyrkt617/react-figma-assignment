import React from 'react'
import "./Section9.css"
import { Sec9Card } from './Sec9Card'
export const Section9 = () => {
  return (
    <div>
        <div className='sec9-container'>
<div style={{display:"flex",gap:"30px"}}>
    <div className='sec9-inner-container'>
<div style={{display:"flex",gap:"27px",justifyContent:"center",alignItems:"center"}}>
    <img style={{width:"250px"}} src='./image/Rectangle 208.png'/>
    <img style={{width:"250px"}} src='./image/Rectangle 209.png'/>

</div>
    </div>
    <div style={{display:"flex",gap:"30px"}}>
        <div className='sec9-small-card'>
            <Sec9Card img="./image/image 149.png" text="4.9/5"/>
            <Sec9Card img="./image/image 152.png" text="4.9/5"/>
            <Sec9Card img="./image/image 151.png" text="5.0/5"/>

        </div>
        <div className='sec9-small-card'>
            <Sec9Card img="./image/image-removebg-preview - 2022-07-23T185243 1.png" text="4.9/5"/>
            <Sec9Card img="./image/image-removebg-preview - 2022-07-23T185023 1.png" text="4.9/5"/>
            <Sec9Card img="./image/image 154.png" text="4.9/5"/>

        </div>
    </div>
</div>
        </div>
    </div>
  )
}
