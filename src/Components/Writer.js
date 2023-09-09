import React from 'react'
import persion from "../logo/man.png"
const Writer = () => {
  return (
    <div className='smallCard-containeer'>
    <div className='smallcard-parent'>
     <div>
     <div className='smallcard-persion-img bg' style={{backgroundImage:`url(${persion})`}}>

</div>
     </div>
     <div className='smallcard-userdata write-data '>
     <div className='write-name'>WRITTEN BY </div>
      <div className='h5'>Dinesh kumar</div>
    <div>5 August 2023</div>
    
     </div>
    </div>
  
  </div>
  )
}

export default Writer
