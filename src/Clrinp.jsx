import React from 'react'

const Clrinp = ({color,colordis}) => {
    
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
        <input type="color" value={color} onChange={(e)=>colordis(e.target.value)}/>
    </div>
  )
}

export default Clrinp