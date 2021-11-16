import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import HomeTabs from '../components/HomeTabs';
import Paragraph from '../components/Paragraph';

function Home() {
    return(
        <div>
            <HomeCarousel/>
            <h1>We do YAY things</h1>
            <Paragraph>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</Paragraph>
            <HomeTabs/>
        </div>
    )
}

export default Home 