import React from 'react'

function Navbar() {
  return (
    <>
  {/* <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">

    <a class="navbar-brand fw-bold" href="#">Nolan & Co</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
<nav class="navbar navbar-expand-md navbar-light bg-dark">
    <a class="navbar-brand mt-3" href="#" style={{
        color:'white',
        marginLeft:'4rem',
        fontSize:'30px',
        fontWeight:'bold'
    }}>Nolan & Co
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-3">
            
            <li class="nav-item me-3 mt-3">
                <a class="nav-link" href="#" style={{
                color:'white',
                fontSize:'20px'
            }}>Our Work</a>
            </li>
            <li class="nav-item me-3 mt-3">
                <a class="nav-link" href="#" style={{
                color:'white',
                fontSize:'20px'
            }}>Our Services</a>
            </li>
            <li class="nav-item me-3 mt-3">
                <a class="nav-link" href="#" style={{
                color:'white',
                fontSize:'20px'
            }}>Company</a>
            </li>
            <li class="nav-item me-3 mt-3">
                <a class="nav-link" href="#" style={{
                color:'white',
                fontSize:'20px'
            }}>Contact</a>
            </li>
           
        </ul>
        {/* <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#" style={{
                color:'white'
            }}>Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" style={{
                color:'white'
            }}>Register</a>
            </li>
        </ul> */}
    </div>
</nav>
    </>
  )
}

export default Navbar