import React, { useState } from 'react';
import '../styles/Contact.css';
import { motion } from 'framer-motion';

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
        <motion.div initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ duration: 1 }}>
            <div id="contact" className='section'>
                {/* Gmail logo and "New Message" text */}
                <div className="gmail-logo">
                    <img src="gmail-logo.png" alt="Gmail Logo" />
                    <span>New Message</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    {/* Change the "Message" textarea to a regular input field */}
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <input type="text" id="message" name="message" value={formData.message} onChange={handleInputChange} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </motion.div>
    );
}
