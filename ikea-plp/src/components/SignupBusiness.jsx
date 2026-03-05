import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css';

export default function SignupBusiness() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        businessName: '', gstin: '', industry: '', address: '',
        postCode: '', firstName: '', surname: '', email: '', password: ''
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

                    <h1 className="signup-title" style={{ fontSize: '1.75rem' }}>Create a IKEA Business<br />Network account for free and<br />get:</h1>

                    <ul className="perks-list">
                        <li>Online access to your invoices and purchase history</li>
                        <li>Access to IKEA Family offers</li>
                        <li>Interior design advice</li>
                        <li>Perks for you and your colleagues</li>
                        <li>Free online training</li>
                    </ul>
                    <p className="signup-subtitle" style={{ marginBottom: '0' }}>...and a whole lot more!</p>

                    <div className="image-collage" style={{ marginTop: '1.5rem' }}>
                        <div className="image-cell tall" style={{ backgroundImage: 'url("https://www.ikea.com/images/three-people-in-an-office-two-of-them-are-standing-by-a-coff-8f1eafd3c45731ed0e23812738d2a13e.jpg")' }}></div>
                        <div className="image-cell" style={{ backgroundImage: 'url("https://www.ikea.com/images/a-person-sitting-in-an-office-chair-at-a-desk-with-a-laptop--2b202c6b412e690fca7d52a2f8fc771f.jpg")' }}></div>
                        <div className="image-cell tall" style={{ backgroundImage: 'url("https://www.ikea.com/images/two-people-standing-in-an-office-with-a-clothes-rack-in-the--3743ecac23b10b7cd80a068ac59baabc.jpg")' }}></div>
                        <div className="image-cell" style={{ backgroundImage: 'url("https://www.ikea.com/images/a-woman-standing-in-an-office-with-a-laptop-b3c7d6fc2cfc9cd18cbfa495679589d8.jpg")' }}></div>
                    </div>
                </div>

                {/* Right side: Form Details */}
                <div className="signup-right-col">
                    <p style={{ fontSize: '0.875rem', marginBottom: '2rem' }}>
                        Already have an IKEA Business Network account? <a href="#" style={{ textDecoration: 'underline' }} onClick={(e) => { e.preventDefault(); navigate('/login'); }}>Log in here</a>
                    </p>

                    <form onSubmit={(e) => { e.preventDefault(); navigate('/'); }}>
                        <h3 style={{ fontSize: '1rem', marginBottom: '1rem', fontWeight: 'bold' }}>Business information</h3>

                        <div className="signup-form-group">
                            <label>Legal business name</label>
                            <input type="text" name="businessName" className="signup-input" value={formData.businessName} onChange={handleChange} required />
                        </div>

                        <div className="signup-form-group">
                            <label>GSTIN</label>
                            <input type="text" name="gstin" className="signup-input" value={formData.gstin} onChange={handleChange} required />
                            <span className="signup-helper-text">Add another address line</span>
                        </div>

                        <div className="signup-form-group">
                            <label>Industry segment (Optional)</label>
                            <select name="industry" className="signup-select" value={formData.industry} onChange={handleChange}>
                                <option value="" disabled></option>
                                <option value="retail">Retail</option>
                                <option value="hospitality">Hospitality</option>
                                <option value="office">Office/Corporate</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="signup-form-group">
                            <label>Address line 1</label>
                            <input type="text" name="address" className="signup-input" value={formData.address} onChange={handleChange} required />
                            <span className="signup-helper-text"><a href="#">Add another address line</a></span>
                        </div>

                        <div className="signup-form-group">
                            <label>Post code</label>
                            <input type="text" name="postCode" className="signup-input" value={formData.postCode} onChange={handleChange} required />
                        </div>

                        <h3 style={{ fontSize: '1rem', margin: '2rem 0 1rem', fontWeight: 'bold' }}>Personal information</h3>

                        {/* Name fields */}
                        <div className="signup-form-group">
                            <label>First name</label>
                            <input type="text" name="firstName" className="signup-input" value={formData.firstName} onChange={handleChange} required />
                        </div>
                        <div className="signup-form-group">
                            <label>Surname</label>
                            <input type="text" name="surname" className="signup-input" value={formData.surname} onChange={handleChange} required />
                        </div>

                        <div className="signup-form-group">
                            <label>Email (username)</label>
                            <input type="email" name="email" className="signup-input" value={formData.email} onChange={handleChange} required />
                            <span className="signup-helper-text">Generic email addresses, such as info@email.com, might not receive communications</span>
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
                                <input type="checkbox" />
                                <span className="checkmark" style={{ top: '4px' }}></span>
                            </label>
                            <p className="signup-checkbox-text">
                                Yes, I want to receive inspiration, business advice, tips and offers via email. I understand my profile will be assessed based on my browsing behavior. <a href="#">Read more about marketing communications.</a>
                            </p>
                        </div>

                        <div className="signup-checkbox-block">
                            <label className="custom-checkbox">
                                <input type="checkbox" required />
                                <span className="checkmark" style={{ top: '4px' }}></span>
                            </label>
                            <p className="signup-checkbox-text">
                                I confirm I am authorized to bind the company. I represent and accept the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>.
                            </p>
                        </div>

                        <button type="submit" className="signup-btn-primary">
                            Continue to email verification
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}
