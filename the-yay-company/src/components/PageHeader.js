import React from 'react'
import Container from 'react-bootstrap/Container'
import { propTypes } from 'react-bootstrap/esm/Image'

function PageHeader(props) {
    return(
        <Container>
            <h1>{props.children}</h1>
        </Container>
    )
}

export default PageHeader 