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

    const handleSocialLogin = () => {
        // Simulate auth success for UI demo
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

                        <button type="button" className="btn-secondary outline-btn" onClick={() => navigate('/signup-personal')}>
                            I'm buying for my home
                        </button>

                        <button type="button" className="btn-secondary outline-btn" style={{ marginTop: '1rem' }} onClick={() => navigate('/signup-business')}>
                            I'm buying for my company
                        </button>
                    </div>

                    {/* Social Login Section */}
                    <div className="social-login-section">
                        <div className="divider-container">
                            <hr className="divider-line" />
                            <span className="divider-text">or sign up with</span>
                            <hr className="divider-line" />
                        </div>

                        <div className="social-buttons-container">
                            <button className="social-btn" aria-label="Sign up with Facebook" onClick={handleSocialLogin}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 16.9913 5.65684 21.1283 10.4375 21.881V14.8906H7.89844V12H10.4375V9.79688C10.4375 7.29063 11.9305 5.90625 14.2146 5.90625C15.3088 5.90625 16.4531 6.10156 16.4531 6.10156V8.5625H15.1921C13.95 8.5625 13.5625 9.33334 13.5625 10.1242V12H16.3359L15.8926 14.8906H13.5625V21.881C18.3432 21.1283 22 16.9913 22 12Z" fill="#1877F2" />
                                    <path d="M15.8926 14.8906L16.3359 12H13.5625V10.1242C13.5625 9.33334 13.95 8.5625 15.1921 8.5625H16.4531V6.10156C16.4531 6.10156 15.3088 5.90625 14.2146 5.90625C11.9305 5.90625 10.4375 7.29063 10.4375 9.79688V12H7.89844V14.8906H10.4375V21.881C10.9532 21.9599 11.4754 22 12 22C12.5246 22 13.0468 21.9599 13.5625 21.881V14.8906H15.8926Z" fill="white" />
                                </svg>
                            </button>
                            <button className="social-btn" aria-label="Sign up with Google" onClick={handleSocialLogin}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.78 15.68 17.58V20.34H19.25C21.33 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4" />
                                    <path d="M12 23C14.97 23 17.46 22.02 19.25 20.34L15.68 17.58C14.71 18.23 13.46 18.63 12 18.63C9.17 18.63 6.77 16.72 5.9 14.16H2.22V17.02C4.02 20.59 7.71 23 12 23Z" fill="#34A853" />
                                    <path d="M5.9 14.16C5.68 13.5 5.56 12.77 5.56 12C5.56 11.23 5.68 10.5 5.9 9.84V6.98H2.22C1.48 8.46 1.05 10.16 1.05 12C1.05 13.84 1.48 15.54 2.22 17.02L5.9 14.16Z" fill="#FBBC05" />
                                    <path d="M12 5.38C13.62 5.38 15.07 5.93 16.21 7.02L19.33 3.9C17.45 2.15 14.97 1.05 12 1.05C7.71 1.05 4.02 3.41 2.22 6.98L5.9 9.84C6.77 7.28 9.17 5.38 12 5.38Z" fill="#EA4335" />
                                </svg>
                            </button>
                            <button className="social-btn" aria-label="Sign up with Apple" onClick={handleSocialLogin}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9868 6.55135C12.9868 4.60623 14.1751 2.87229 15.9392 2C15.5186 1.01802 14.6296 0.288288 13.5284 0.0810811C11.9507 -0.222973 10.2926 0.778829 9.47514 0.778829C8.65766 0.778829 7.31932 0.00405405 6.04022 0.0382883C4.26419 0.0765766 2.65653 0.985135 1.74567 2.45721C-0.123518 5.51712 -0.480094 10.1477 1.34144 13.1203C2.23594 14.5779 3.32833 16.2158 4.96576 16.1437C6.54405 16.0716 7.15937 15.1743 8.97144 15.1743C10.7766 15.1743 11.3323 16.1437 13.0113 16.1077C14.7171 16.0716 15.6416 14.5617 16.5162 13.1023C17.5199 11.4554 17.9234 9.8518 17.9545 9.77162C17.8834 9.74369 14.9255 8.70676 14.9655 5.55676C14.9966 3.01622 17.202 1.83874 17.2731 1.7964C16.1437 0.281532 14.3642 0.0382883 13.7951 0.00945946L13.7462 0C13.2384 0 12.9868 6.53333 12.9868 6.55135Z" fill="black" transform="translate(3,4)" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
