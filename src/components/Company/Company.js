import React from 'react'
import './Company.css'
function Company() {
  return (
    <>
    <h1 className='text-center' style={{
      marginTop:'100px',
      
    }}>Who we’ve worked with.</h1>
    <div>
      <div className='d-flex comp-logo' style={{
          justifyContent:'space-evenly',
          marginTop:'74px',
         
      }}>
        <div className='comp-img'>
             <img src="first.png" alt=""  style={{
               width:'300px'
             }}/>
        </div>
        <div className='comp-img'>
        <img src="secod.png" alt=""  style={{
               width:'300px'
             }}/>
        </div>
        <div className='comp-img'>
        <img src="third.png" alt=""  style={{
               width:'300px'
             }}/>

        </div>
      </div>
    </div>

    </>
  )
}

export default Company