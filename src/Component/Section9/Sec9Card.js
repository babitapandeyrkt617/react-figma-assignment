import React from 'react'

export const Sec9Card = (props) => {
  return (
    <div className='sec9-card'>
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <div>
<img className='small-card-img' src={props.img}/>
        </div>
        <div>
<p className='sec9-p'>{props.text}</p>
        </div>
    </div>
    </div>
  )
}
