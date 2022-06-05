import React from 'react'
import './Nolan.css'
function Nolan() {
  return (
    <>
    <div className="bg-dark">
        <div className=' container'>
        <h1 className='text-white text-start ' style={{
          fontSize:'50px',
          paddingTop:'230px'
        }}>Nolan & Co is a digital product </h1>
        <h1 className='text-white  ' style={{
          fontSize:'50px'
        }}> agency that focuses on strategy</h1>
        <h1 className='text-white' style={{
          fontSize:'50px'
        }}>and design.</h1>
        </div>
        <div className="container" style={{
          paddingTop:'150px'
        }}>
            <img src="board.jpg" className='w-100' alt="" />
        </div>
    
`    <div className="row container ms-3 mt-3" >
`        <div className="col-md-6">
            <h3 className='text-white ms-3 abc' style={{
              marginLeft:'30px'
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
            </h3>
            <button type="button" class="btn  btn-lg rounded-pill ms-3 mt-3 mb-3" style={{
                width:'9rem',
                height:'4rem',
                backgroundColor:'white'
            }}>Our Services</button>
            <br /><br /><br />
        </div>
    </div>
    </div>
    </>
  )
}

export default Nolan