import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
    return(
        <Container className="footer-container">
            <div className="video">
                <i class="fab fa-vimeo-v"></i>
                <i class="fab fa-youtube"></i>
            </div>
            <div>hello@yay.com</div>
            <div>Copyright 2020</div>
        </Container>
    )
}

export default Footer 