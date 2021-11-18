import React from 'react';
import Container from 'react-bootstrap/Container';

function Paragraph(props) {
    return(
        <Container>
            <p className="main-paragraph">{props.children}</p>
        </Container>
    )
}

export default Paragraph 