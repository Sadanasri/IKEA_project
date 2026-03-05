import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

export default function Login({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            setError('Please enter a valid email/phone and password.');
            return;
        }
        setError('');

        // Simulate auth success
        localStorage.setItem('isLoggedIn', 'true');
        if (setIsLoggedIn) setIsLoggedIn(true);
        navigate('/');
    };

    return (
        <div className="login-page">
            {/* Left Blue Sidebar Area */}
            <div className="login-sidebar">
                <button className="back-btn" onClick={() => navigate('/')} aria-label="Go back">
                    <i className='bx bx-arrow-back'></i>
                </button>

                <div className="sidebar-content">
                    <div className="login-logo">
                        <svg width="90" height="36" viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                            <rect width="90" height="36" fill="#0058A3" />
                            <ellipse cx="45" cy="18" rx="42" ry="15" fill="#FFCC00" />
                            <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="20" fill="#0058A3" letterSpacing="1">IKEA</text>
                        </svg>
                    </div>

                    <h1 className="login-title">
                        <span style={{ color: '#FFCC00' }}>Login</span> to your IKEA account.
                    </h1>

                    <div className="login-description">
                        <p>Too many passwords?<br />You can now login with an OTP we will send on your email address or verified mobile number.</p>
                        <p style={{ marginTop: '2rem' }}>Access your IKEA account using your email address to add and verify your mobile number.</p>
                    </div>

                    <div className="login-footer">
                        <p>IKEA.in - <a href="#">Cookie Policy</a> and <a href="#">Privacy Policy</a></p>
                        <p>© Inter IKEA Systems B.V. 1999-2026</p>
                    </div>
                </div>
            </div>

            {/* Right White Form Area */}
            <div className="login-form-container">
                <div className="form-wrapper">
                    <form className="ikea-form" onSubmit={handleLogin}>

                        <div className="form-group">
                            <label htmlFor="email">Email or Verified Mobile Number</label>
                            <input
                                type="text"
                                id="email"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="input-assist">Login <a href="#" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>with an OTP</a></div>
                        </div>

                        <div className="form-group" style={{ marginTop: '2rem' }}>
                            <label htmlFor="password">Password</label>
                            <div className="password-wrapper">
                                <input
                                    type="password"
                                    id="password"
                                    className="form-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="button" className="eye-btn"><i className='bx bx-show'></i></button>
                            </div>
                            <div className="input-assist"><a href="#" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Forgot your password?</a></div>
                        </div>

                        {error && <div className="error-message" style={{ color: '#d93e30', fontSize: '0.875rem', marginBottom: '1rem', fontWeight: 'bold' }}>{error}</div>}

                        <div className="checkbox-group">
                            <label className="custom-checkbox">
                                <input type="checkbox" defaultChecked />
                                <span className="checkmark"></span>
                                <span className="checkbox-label">Stay signed in until you sign out</span>
                            </label>
                            <button type="button" className="info-btn">i</button>
                        </div>

                        <button type="submit" className="btn-primary black-btn">
                            Continue
                        </button>
                    </form>

                    <div className="create-account-section">
                        <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '14px', margin: '2rem 0 1rem' }}>
                            Do not have an IKEA account yet? Create one now:
                        </p>

                        <button type="button" className="btn-secondary outline-btn">
                            I'm buying for my home
                        </button>

                        <button type="button" className="btn-secondary outline-btn" style={{ marginTop: '1rem' }}>
                            I'm buying for my company
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
