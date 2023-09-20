import React, { useState } from 'react';
import '../styles/Contact.css'
import { motion } from 'framer-motion';

function Contact() {
    // Define state variables to store form input values
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here to send the form data (formData) to the server
        // You can use fetch, Axios, or any other method to send the data
        console.log('Form data:', formData);
        // Reset the form fields if needed
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
        >
            <section id="contact_section" className="hidden">
                <div id="contact">
                    <h1>Contact Me</h1>
                    <br></br>
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
                                type="text"

                                required
                            // maxLength="100"
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
