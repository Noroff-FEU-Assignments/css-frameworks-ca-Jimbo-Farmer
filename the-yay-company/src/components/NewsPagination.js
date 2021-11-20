import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Container from 'react-bootstrap/Container';

function NewsPagination() {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 4; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
    };

    return(
        <Container>
            <Pagination total-items="8" items-per-page="4">{items}</Pagination>   
        </Container> 
    )
}

export default NewsPagination 