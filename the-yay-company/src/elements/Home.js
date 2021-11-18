import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HomeTabs from '../components/HomeTabs';
import Paragraph from '../components/Paragraph';
import HomeAccordion from '../components/HomeAccordion';
import PageHeader from '../components/PageHeader';


function Home() {
    return(
        <div>
            <HomeCarousel/>
            <PageHeader>We do YAY things</PageHeader>
            <Paragraph>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</Paragraph>
            <HomeAccordion/>
            <HomeTabs/>
        </div>
    )
}

export default Home 