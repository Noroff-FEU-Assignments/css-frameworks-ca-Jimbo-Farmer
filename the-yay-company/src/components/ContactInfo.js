import React from 'react'
import Container from 'react-bootstrap/Container'


function ContactInfo() {
    return(
        <Container className="contact-container">
            <table className="contact-details">
                <tr>
                    <td><i class="fas fa-envelope"></i></td>
                    <td>hello@yay.com</td>
                </tr>
                <tr>
                    <td><i class="fas fa-phone"></i></td>
                    <td>123 456 7890</td>
                </tr>
                <tr>
                    <td><i class="fas fa-map-marker-alt"></i></td>
                    <td>123 Some Street 
                        <br />Somewhere
                        <br />Some City
                        <br />10000</td>
                </tr>
            </table>
        </Container>
    )
}

export default ContactInfo 