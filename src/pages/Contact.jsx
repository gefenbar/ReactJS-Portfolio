import React, { useState } from 'react';
import '../styles/Contact.css';
import PageEffect from '../Components/PageEffect';
export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Reset the form fields
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <PageEffect>
            <div className="page-container">
                <div className="page-top-bar">
                    <img src="mail-logo.webp" alt="Windows Icon" />
                    <h1>Email</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter email address" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea type="text" id="message" name="message" placeholder='Insert your message' value={formData.message} onChange={handleInputChange} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </PageEffect>);
}
