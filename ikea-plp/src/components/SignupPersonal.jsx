import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';
import img1 from '../assets/images/per1.jpg';
import img2 from '../assets/images/per2.jpg';
import img3 from '../assets/images/per3.jpg';
import img4 from '../assets/images/per4.jpg';
import img5 from '../assets/images/per5.jpg';
import img6 from '../assets/images/per6.jpg';
import img7 from '../assets/images/per7.jpg';
import img8 from '../assets/images/per8.jpg';

export default function SignupPersonal() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '', surname: '', birthdate: '', gender: '',
        postCode: '', mobile: '', email: '', password: ''
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="signup-page">
            <header className="signup-header">
                <button className="back-button" onClick={() => navigate('/login')} aria-label="Back">
                    <i className='bx bx-arrow-back'></i>
                </button>
            </header>

            <div className="signup-container">
                {/* Left side: Images & Titles */}
                <div className="signup-left-col">
                    <svg width="80" height="32" viewBox="0 0 90 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="signup-logo" onClick={() => navigate('/')}>
                        <rect width="90" height="36" fill="#0058A3" />
                        <ellipse cx="45" cy="18" rx="42" ry="15" fill="#FFCC00" />
                        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="20" fill="#0058A3" letterSpacing="1">IKEA</text>
                    </svg>

                    <h1 className="signup-title">Create an IKEA Family<br />Profile</h1>
                    <p className="signup-subtitle">Already have an account? <a href="#" onClick={(e) => { e.preventDefault(); navigate('/login'); }}>Login</a></p>

                    <div className="image-collage">
                        <div className="image-cell tall" style={{ backgroundImage: `url(${img1})` }}></div>
                        <div className="image-cell" style={{ backgroundImage: `url(${img2})` }}></div>
                        <div className="image-cell" style={{ backgroundImage: `url(${img3})` }}></div>
                        <div className="image-cell" style={{ backgroundImage: `url(${img4})` }}></div>
                        <div className="image-cell" style={{ backgroundImage: `url(${img5})` }}></div>
                        <div className="image-cell" style={{ backgroundImage: `url(${img6})` }}></div>
                        <div className="image-cell tall" style={{ backgroundImage: `url(${img7})` }}></div>
                        <div className="image-cell" style={{ backgroundImage: `url(${img8})` }}></div>
                    </div>

                    <div className="signup-footer-info">
                        <p>IKEA.in - <a href="#">Cookie Policy</a> and <a href="#">Privacy Policy</a></p>
                        <p>© Inter IKEA Systems B.V. 1999-2026</p>
                    </div>
                </div>

                {/* Right side: Form Details */}
                <div className="signup-right-col">
                    {step === 1 ? (
                        <>
                            <p style={{ fontSize: '0.875rem', marginBottom: '2rem' }}>
                                Become a member of IKEA Family today. Did we mention it's free to join? <a href="#" style={{ textDecoration: 'underline' }}>Find out details</a>
                            </p>

                            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                                {/* Name fields */}
                                <div className="signup-form-group">
                                    <label>First name</label>
                                    <input type="text" name="firstName" className="signup-input" value={formData.firstName} onChange={handleChange} required />
                                </div>
                                <div className="signup-form-group">
                                    <label>Surname</label>
                                    <input type="text" name="surname" className="signup-input" value={formData.surname} onChange={handleChange} required />
                                </div>

                                {/* Birthdate & Gender */}
                                <div className="signup-form-group">
                                    <label>Birthdate</label>
                                    <div className="signup-input-wrapper">
                                        <input type="date" name="birthdate" className="signup-input" style={{ paddingRight: '2.5rem', color: '#484848' }} value={formData.birthdate} onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className="signup-form-group">
                                    <label>Gender <span>(Optional)</span></label>
                                    <select name="gender" className="signup-select" value={formData.gender} onChange={handleChange}>
                                        <option value="" disabled></option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Prefer not to say</option>
                                    </select>
                                    <span className="signup-helper-text">We require this field in order to best personalise communication & marketing material and understand our users views.</span>
                                </div>

                                {/* Contact details */}
                                <div className="signup-form-group">
                                    <label>Post code</label>
                                    <input type="text" name="postCode" className="signup-input" value={formData.postCode} onChange={handleChange} required />
                                </div>

                                <div className="signup-form-group">
                                    <label>Mobile</label>
                                    <div style={{ display: 'flex', border: '1px solid #dfdfdf', borderRadius: '4px' }}>
                                        <span style={{ padding: '0.875rem', backgroundColor: '#f1f1f1', borderRight: '1px solid #dfdfdf' }}>IN (+91)</span>
                                        <input type="tel" name="mobile" style={{ flex: 1, border: 'none', padding: '0.875rem', outline: 'none' }} value={formData.mobile} onChange={handleChange} required />
                                    </div>
                                </div>

                                <div className="signup-form-group">
                                    <label>Email (username)</label>
                                    <input type="email" name="email" className="signup-input" value={formData.email} onChange={handleChange} required />
                                </div>

                                {/* Password Logic */}
                                <div className="signup-form-group">
                                    <label>Password</label>
                                    <div className="signup-input-wrapper">
                                        <input type="password" name="password" className="signup-input" value={formData.password} onChange={handleChange} required />
                                        <i className="bx bx-show signup-input-icon"></i>
                                    </div>
                                    <div className="password-constraints">
                                        <p>Make sure your password contains:</p>
                                        <ul>
                                            <li>• Minimum of 8 characters</li>
                                            <li>• One UPPERCASE letter</li>
                                            <li>• One lowercase letter</li>
                                            <li>• At least one number or one special character</li>
                                        </ul>
                                        <p style={{ marginTop: '0.5rem' }}>You've used no unexpected characters in a row</p>
                                    </div>
                                </div>

                                {/* Checkboxes */}
                                <div className="signup-checkbox-block" style={{ marginTop: '2.5rem' }}>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" required />
                                        <span className="checkmark" style={{ top: '2px' }}></span>
                                    </label>
                                    <p className="signup-checkbox-text">
                                        I have read and understood the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                                    </p>
                                </div>

                                <div className="signup-checkbox-block" style={{ marginBottom: '1rem' }}>
                                    <div style={{ paddingTop: '2px' }}><i className='bx bx-check-square' style={{ color: '#0058a3', fontSize: '20px' }}></i></div>
                                    <div>
                                        <p className="signup-checkbox-text" style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Want to get more out of your IKEA Family membership?</p>
                                        <p className="signup-checkbox-text">Sign up to receive personalised IKEA marketing communications and find out about special offers, news and tips via:</p>
                                    </div>
                                </div>

                                <div className="signup-checkbox-nested">
                                    <label className="custom-checkbox">
                                        <input type="checkbox" defaultChecked />
                                        <span className="checkmark"></span>
                                        <span style={{ fontSize: '0.875rem' }}>ALL COMMUNICATION METHODS</span>
                                    </label>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" defaultChecked />
                                        <span className="checkmark"></span>
                                        <span style={{ fontSize: '0.875rem' }}>Email</span>
                                    </label>
                                    <label className="custom-checkbox">
                                        <input type="checkbox" defaultChecked />
                                        <span className="checkmark"></span>
                                        <span style={{ fontSize: '0.875rem' }}>SMS</span>
                                    </label>
                                </div>

                                <button type="submit" className="signup-btn-primary">
                                    Continue to phone verification
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="otp-verification-container" style={{ position: 'relative' }}>
                            <i className='bx bx-x' style={{ position: 'absolute', top: '-1rem', right: '0', fontSize: '24px', cursor: 'pointer' }} onClick={() => setStep(1)}></i>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>To create an IKEA account you need to verify your mobile number</h2>
                            <p style={{ fontSize: '0.875rem', marginBottom: '2rem', color: '#484848', lineHeight: '1.5' }}>
                                Please enter the six digit one time code you received on below phone number.
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', fontSize: '0.875rem' }}>
                                <span style={{ marginRight: '1rem', color: '#111' }}>+91{formData.mobile || '9346744494'}</span>
                                <button type="button" onClick={() => setStep(1)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                    <i className='bx bx-pencil'></i> Edit
                                </button>
                            </div>

                            <div className="signup-form-group">
                                <label>One-time code</label>
                                <input type="text" className="signup-input" placeholder="" />
                                <div style={{ textAlign: 'right', marginTop: '0.5rem' }}>
                                    <a href="#" style={{ fontSize: '0.875rem', color: '#111', fontWeight: 'bold', textDecoration: 'underline' }}>Send new code</a>
                                </div>
                            </div>

                            {/* Bottom submit button matching the snapshot */}
                            <button type="button" className="signup-btn-primary" style={{ backgroundColor: '#0058a3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', padding: '1.25rem 1.5rem' }} onClick={() => {
                                localStorage.setItem('isLoggedIn', 'true');
                                navigate('/');
                            }}>
                                <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>Complete Sign up</span>
                                <div style={{ backgroundColor: 'white', color: '#0058a3', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className='bx bx-right-arrow-alt' style={{ fontSize: '20px' }}></i>
                                </div>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
