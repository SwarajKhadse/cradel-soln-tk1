import React from 'react'

function Text() {
  return (
  <>
   <h1 className='text-center ' style={{
     marginTop:'120px'
   }}>
   Amazing clients have allowed 
   </h1>
   <h1 className='text-center'>us to produce work we are </h1>
   <h1 className='text-center'>proud of.</h1>
   <div className='d-flex mt-3' style={{
       justifyContent:"center"
   }}>

 
   <button type="button" class="btn  btn-lg rounded-pill ms-3 " style={{
                width:'11rem',
                height:'4rem',
                backgroundColor:'black',
                color:"white",
                marginTop:'20px',
                marginBottom:'39px'
                
            }}>View Our Work</button>
          <br /><br /><br /><br />
              </div>
            
  </>
  )
}

export default Text