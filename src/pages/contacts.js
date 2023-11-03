import React from 'react';
import Layout from '../component/layout/layout';
import styles from './styles/contacts.module.css';

function Contacts() {
    return (
        <>
            <Layout>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1>Contact Us</h1>
                        <p>We are here to assist you. Feel free to get in touch with us.</p>
                    </div>
                    
                    <div className={styles.about_us}>
                        <h2 className={styles.h2_c}>Meet Our Crew</h2>
                        <p>We take pride in our dedicated and hardworking team who ensure the best service for our customers. Get to know us!</p>
                    </div>
                    
                    <div className={styles.form}>
                        <form method="post">
                            <div className={styles.contact}>
                                <div className={styles.contact_name}>
                                    <label for="name">Name:</label>
                                    <input type="text" id="name" name="name" required/>
                                </div>
                                <div className={styles.contact_email}>
                                    <label for="email">Email:</label>
                                    <input type="email" id="email" name="email" required/>
                                </div>
                            </div>
                            <div className={styles.text_box}>
                                <label for="message">Message:</label>
                                <textarea id="message" name="message" rows="6" required></textarea>
                            </div>
                        </form>
                        <button className={styles.button} type="submit">Let's Talk</button>
                    </div>
                    
                </div>
            </Layout>
        </>
    );
}

export default Contacts;