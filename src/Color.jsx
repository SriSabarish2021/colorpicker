import React from 'react'

const Color = ({color}) => {
  
  return (
    <div>
        <div style={{height:'200px',width:'200px',border:'1px solid black',backgroundColor:color,borderRadius:'10px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',fontSize:'26px',color:'black'}}>
            {color}
        </div>
    </div>
  )
}

export default Color