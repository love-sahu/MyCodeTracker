import { Link } from 'react-router-dom';
//import { useState, useEffect } from 'react';
//import { auth } from "./firebase-config"; // Adjust path as needed
//import { onAuthStateChanged, signOut } from 'firebase/auth';

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          position: 'sticky',
          top: '0',
          zIndex: '1000',
          backgroundColor: '#fff',
          boxShadow: '0 4px 2px -2px gray',
          padding: '0.5rem 1rem',
          height: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        <div className="container-fluid" style={{ display: 'flex', alignItems: 'center' }}>
          <Link className="navbar-brand" to="/home" style={{ marginLeft: '2rem' }}>
            <img
              src="./src/assets/component/About/final logo.jpg"
              alt="Logo"
              style={{
                height: '53px',
                width: '53px',
                borderRadius: '50%',
                border: '4px solid #f6e57aF',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll" style={{ marginLeft: 'auto' }}>
            <ul
              className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ marginRight: '2rem' }}
            >
              <li
                className="nav-item"
                style={{
                  marginRight: '1.9rem',
                  fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                  fontWeight: 'bold',
                  fontSize: 'medium',
                }}
              >
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                style={{
                  marginRight: '1.5rem',
                  fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                  fontWeight: 'bold',
                  fontSize: 'medium',
                }}
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              {/* Add Online Test Section Here */}
              <li
                className="nav-item"
                style={{
                  marginRight: '1.5rem',
                  fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                  fontWeight: 'bold',
                  fontSize: 'medium',
                }}
              >
                <Link className="nav-link" to="/online-test">
                  Online Test
                </Link>
              </li>

              <li
                className="nav-item"
                style={{
                  marginRight: '1.5rem',
                  fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                  fontWeight: 'bold',
                  fontSize: 'medium',
                }}
              >
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>

              <li
                className="nav-item"
                style={{
                  marginRight: '1.5rem',
                  fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                  fontWeight: 'bold',
                  fontSize: 'medium',
                }}
              >
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>

              {/* Conditional rendering for authentication 
                            {!isAuthenticated ? (
                                <li className="nav-item" style={{ marginRight: '1.5rem', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontWeight: 'bold', fontSize: 'medium' }}>
                                    <Link className="nav-link" to="/user">User</Link>
                                </li>
                            ) :
                          
                            (
                                <>
                                    <li className="nav-item" style={{ marginRight: '1.5rem', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontWeight: 'bold', fontSize: 'medium' }}>
                                        <Link className="nav-link" to="/profile">Profile</Link>
                                    </li>
                                    <li className="nav-item" style={{ marginRight: '1.5rem', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', fontWeight: 'bold', fontSize: 'medium' }}>
                                        <button className="nav-link" onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem 0', fontSize: 'medium' }}>Logout</button>
                                    </li>
                                </>
                            )

                              */}

              {/*
                            }
                            */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;