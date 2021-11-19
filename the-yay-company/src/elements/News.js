import React from 'react'
import PageHeader from '../components/PageHeader';
import NewsPagination from '../components/NewsPagination';
import NewsGrid from '../components/NewsGrid';

function News() {
    return(
        <div>
            <PageHeader>News</PageHeader>
            <NewsPagination/>
            <NewsGrid/>
            <NewsPagination/>
        </div>
    )
}

export default News 