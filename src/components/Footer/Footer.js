import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-dark" style={{
          marginTop:'93px'
      }}>
          <div style={{
              width:'100%',
              height:'10vw'
          }}>

          </div>
        <h1
          className="text-center fw-bold"
          style={{
            color: "white",
            
          }}
        >
          We’d love to work with you.
        </h1>
        <div
          className="d-flex"
          style={{
            justifyContent: "center",
          }}
        >
          <button
            type="button"
            class="btn  btn-lg rounded-pill ms-3 mt-3 mb-3 fw-bold"
            style={{
              width: "9rem",
              height: "4rem",
              backgroundColor: "white",
            }}
          >
            Contact us
          </button>
        </div>
        <div className="row " style={{
          marginTop:'140px'
        }}>
          <div className="col-md-4 d-flex">
            <ul
              style={{
                marginLeft: "2rem",
                listStyleType: "none",
              }}
            >
              <li
                style={{
                  color: "white",
                  fontSize: "40px",
                }}
              >
                <a
                  href="#"
                  style={{
                    color: "white",
                  }}
                >
                  Our Work
                </a>
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginTop: "30px",
                }}
              >
                <a
                  href="#"
                  style={{
                    color: "white",
                  }}
                >
                  Our Services
                </a>
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginTop: "20px",
                }}
              >
                <a
                  href="#"
                  style={{
                    color: "white",
                  }}
                >
                  Company
                </a>
              </li>
              <li
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginTop: "20px",
                }}
              >
                <a
                  href="#"
                  style={{
                    color: "white",
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-5 d-flex" ></div>
          <div className="col-md-3 d-flex">
            <ul
              style={{
                marginLeft: "2rem",
                listStyleType: "none",
              }}
            >
              <h6 style={{
                    color:'white'
              }}>Made with </h6>
              <li
                style={{
                  color: "white",
                  fontSize: "20px",
                }}
              >
                <a
                  href="#"
                  style={{
                    color: "white",
                  }}
                >
                  Squarespace
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
