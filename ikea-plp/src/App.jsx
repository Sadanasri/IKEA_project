import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PLP from './components/PLP';
import Login from './components/Login';
import './styles/plp.css'; // Global CSS

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('ikeaCart') || '[]');
    setCartCount(savedCart.length);
  }, []);

  const addToCart = (product) => {
    if (!isLoggedIn) {
      alert("Please login to add items to your cart.");
      navigate('/login');
      return;
    }
    const currentCart = JSON.parse(localStorage.getItem('ikeaCart') || '[]');
    currentCart.push(product);
    localStorage.setItem('ikeaCart', JSON.stringify(currentCart));
    setCartCount(currentCart.length);
  };

  const MainLayout = () => (
    <>
      {/* Header from the HTML */}
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <button className="menu-btn" aria-label="Menu"><i className='bx bx-menu'></i></button>
            <a href="#" style={{ display: 'flex' }} onClick={(e) => { e.preventDefault(); navigate('/'); }}>
              <svg width="90" height="36" viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo">
                <rect width="90" height="36" fill="#0058A3" />
                <ellipse cx="45" cy="18" rx="42" ry="15" fill="#FFCC00" />
                <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="#0058A3" letterSpacing="1">IKEA</text>
              </svg>
            </a>
          </div>

          <div className="header-search">
            <i className='bx bx-search search-icon'></i>
            <input type="text" placeholder="What are you looking for?" className="search-input" />
            <button className="camera-btn" aria-label="Visual Search"><i className='bx bx-camera'></i></button>
          </div>

          <div className="header-right">
            <div className="header-icon-group">
              {isLoggedIn ? (
                <button className="icon-btn" onClick={() => {
                  localStorage.removeItem('isLoggedIn');
                  setIsLoggedIn(false);
                }}>
                  <i className='bx bx-log-out'></i><span>Logout</span>
                </button>
              ) : (
                <button className="icon-btn" onClick={() => navigate('/login')}>
                  <i className='bx bx-user'></i><span>Hej! Log in or sign up</span>
                </button>
              )}
              <button className="icon-btn icon-only"><i className='bx bx-heart'></i></button>
              <button className="icon-btn icon-only cart-btn" style={{ position: 'relative' }}>
                <i className='bx bx-shopping-bag'></i>
                {cartCount > 0 && (
                  <span style={{
                    position: 'absolute', top: 0, right: 0, background: 'var(--ikea-blue)', color: 'white',
                    borderRadius: '50%', fontSize: '10px', width: '16px', height: '16px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
                  }}>
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* The main PLP view */}
      <PLP addToCart={addToCart} />
    </>
  );

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  )
}

export default App;
