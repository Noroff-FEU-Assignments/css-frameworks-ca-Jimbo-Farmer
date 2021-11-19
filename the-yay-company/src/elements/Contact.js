import React from 'react'
import PageHeader from '../components/PageHeader'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'

function Contact() {
    return(
        <div className="contact-wrapper container">
            <div className="contact-details-wrapper">
                <ContactInfo/>
            </div>
            <div className="contact-header-wrapper">
                <PageHeader>Submit your details</PageHeader>
            </div>
            <div className="contact-form-wrapper">
                <ContactForm/>
            </div>
        </div>
    )
}

export default Contact 