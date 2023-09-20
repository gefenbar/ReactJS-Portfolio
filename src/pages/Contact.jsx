import React, { useState } from 'react';
import '../styles/Contact.css';
import { motion } from 'framer-motion';

function Contact() {
    const initialFormData = {
        name: '',
        email: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Reset the form fields
        setFormData(initialFormData);
    };

    return (
        <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1 }}>
            <section id="contact_section" className="hidden">
                <div id="contact">
                    <h1>Contact Me</h1>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </motion.div>
    );
}

export default Contact;
