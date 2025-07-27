import { useState } from 'react';
import './Contact.css'; // Import the CSS file

function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        organization: '',
        message: '',
        agreeToTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to a backend or log it)
        console.log('Form Data:', formData);
    };

    return (
        <div className="contact-section">
            <div className="intro-text">
                <h2>Contact Us</h2>
                <p>Want to get a free demo of our product? </p>
                <p>Fill out the form below, and we will contact you shortly.</p>
            </div>

            <div className="contact-details">
                    <h3><img src="./final logo.jpg" alt="Location" className="icon" />Code Tracker</h3>
                    <p><strong><img src="https://th.bing.com/th/id/OIP.ZbZxdCrtalJVB3OIWp31MQHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Email" className="icon" /> Email</strong></p>
                    <p>Request proctoring: <a href="mailto:code@tracker24.com">code@tracker24.com</a></p>
                    <p>Marketing and SEO cooperation: <a href="mailto:info@tracker24.com">code@tracker24.com</a></p>

                    <p><strong><img src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png" alt="Location" className="icon" />Location</strong></p>
                    <p> Nagpur, Maharashtra-440023</p>

                </div>

            <div className="contact-content">
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mobile">Mobile</label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                placeholder="Enter your mobile number"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="organization">Organization Name</label>
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder="Enter your organization name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message/Comment</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Enter your message"
                                required
                            ></textarea>
                        </div>

                        <div className="form-group terms">
                            <input
                                type="checkbox"
                                id="terms"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="terms">
                                I agree to the <a href="#">terms of service</a>
                            </label>
                        </div>

                        <button type="submit" className="submit-btn">Send</button>
                    </form>
                </div>

               
            </div>
        </div>
    );
}

export default Contacts;
