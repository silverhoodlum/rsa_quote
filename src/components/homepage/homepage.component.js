import React from 'react';
import Navbar from '../navbar/navbar.component';
import QuotePage from '../quote-summary-page/quote-page';

import './homepage.styles.scss'

const Homepage = () => {
    return (<div>
        <Navbar />
        <QuotePage />
    </div>)
}

export default Homepage;