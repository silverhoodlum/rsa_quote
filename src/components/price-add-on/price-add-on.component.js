import React from 'react';

import './price-add-on.styles.scss'

const PriceAddOn = ({currentPlanPrice, pricePlanType}) => {
    return (
        <div className="addOn-price-wrap">
            <span className='addOn-price'>£{currentPlanPrice}</span>
            <span className='addOn-pricePlan'>{pricePlanType === "monthly" ? " per month" : " per year"} </span>
        </div>
    )
}

export default PriceAddOn;
