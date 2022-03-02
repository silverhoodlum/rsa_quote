import React, { useContext, useEffect } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import './quote-plan.styles.scss'

import { PricePlanContext } from '../quote-summary-page/quote-page';
import AddOnsSelected from '../add-on-selected/add-on-selected.component';
import ButtonRSA from '../button/button.component';
import SmallTitle from '../small-title/small-title.component';

const QuotePlanType = props => {
    const {user, pricePlanType, setPricePlanType, finalPrice, setFinalPrice, addOnsCost, setAddOnsCost, addOnsSelected} = useContext(PricePlanContext);
    
    /* calculate sum of addOn cost */
    useEffect(() => {
      if(addOnsSelected.length === 1){
        setAddOnsCost(addOnsSelected[0].addOn_price);
      }else if(addOnsSelected.length > 1){
        setAddOnsCost( addOnsSelected.reduce(function (acc, b) { const sum = parseFloat(Number(acc) + Number(b.addOn_price))
        return Number(sum).toFixed(2)}, 0));
      }
    }, [addOnsSelected])
    
    /* function to handle checkout */
    const handleCheckout =(e) => {
      e.preventDefault()
    }
    
    /* if user changes plan type */
    const handleChange = (event, newPricePlan) => {
      /* change plan type (monthly or annual) */
      setPricePlanType(newPricePlan);
      const newPrice = newPricePlan === "monthly" ? user.monthlyPrice : user.annualPrice;
      /* change final price & recalculate addOn cost */
      setFinalPrice(newPrice)
      setAddOnsCost(0);

    };
    return ( 
      <div className='quote-plan-block'>
          <div className='quote-plan-container'>
            <ToggleButtonGroup
            color="primary"
            value={pricePlanType}
            exclusive
            onChange={handleChange}
            className="toggle-plan-btn">
                  <ToggleButton value="monthly" id="toggle_plan_monthly">Monthly</ToggleButton>
                  <ToggleButton value="annual" id="toggle_plan_annual">Annual</ToggleButton>
            </ToggleButtonGroup>
            <div className='bill-summary-container'>
              <SmallTitle titleText={"Bill Summary"} />
              <p className='quote-plan-description'>This price includes Premium Tax at the current rate. No charge for paying monthly</p>
              <AddOnsSelected addOnsSelected={addOnsSelected} title={"Add Ons"}/>
            </div>
            <div className='quote-plan-price-container'>
              <div>Total per month</div>
              <div className='quote-plan-price'>£{(Number(finalPrice) + Number(addOnsCost)).toFixed(2)}</div>

              <ButtonRSA  handleClick={handleCheckout} addOnState={false} buttonText={"Proceed to checkout"} addOnButton={false} />
            </div>
          </div>
      </div>)
}

export default QuotePlanType;