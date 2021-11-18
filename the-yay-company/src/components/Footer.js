import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer() {
    return(
        <div className="footer-container">
            <Container>
                <div className="video">
                    <i class="fab fa-vimeo-v"></i>
                    <i class="fab fa-youtube"></i>
                </div>
                <div className="email">hello@yay.com</div>
                <div className="copyright">Copyright 2020</div>
            </Container>
        </div>
    )
}

export default Footer 