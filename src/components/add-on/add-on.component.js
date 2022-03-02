import React, { useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';

import './add-on.styles.scss';

import { PricePlanContext } from '../quote-summary-page/quote-page';
import PriceAddOn from '../price-add-on/price-add-on.component';
import ButtonRSA from '../button/button.component';
import SmallTitle from '../small-title/small-title.component';

const AddOn = ({addOn, index}) => {
    const { pricePlanType, addOnsCost, setAddOnsCost, addOnsSelected, setAddOnsSelected}= useContext(PricePlanContext);
    const [addOnState, setAddOnState] = useState(false);
    let currentPlanPrice;

    /* set plan type */
    if(pricePlanType === "monthly"){
        currentPlanPrice = addOn.monthlyPrice;
    } else{
            currentPlanPrice = addOn.annualPrice;
    }

   
   useEffect(() => {
       /* if plan changes update price on addon */
    if(addOnsCost === 0 && addOnState){
        setAddOnsSelected(prevAddOnsSelected => {
            return [...prevAddOnsSelected].map(addOnStored => addOnStored.addOn_name === addOn.title 
                ? {...addOnStored, addOn_price: currentPlanPrice } : addOnStored);
        })
        }
    }, [addOnsCost])

   const handleClick = (event) => {
       /* update addOn state if selected */
        const newAddOnState = !addOnState ? true : false;
        setAddOnState(newAddOnState);

         /* if selected add to selected addons list otherwise remove*/
        if(newAddOnState){
            setAddOnsSelected([...addOnsSelected, {addOn_name: addOn.title, addOn_price: currentPlanPrice}])
        }else{
            const newAddOnList = [...addOnsSelected].filter( addOnStored => addOnStored.addOn_name !== addOn.title);
            setAddOnsSelected(newAddOnList)
        }
        /* calculate new addon cost */
        const newAddOnCost = newAddOnState ? currentPlanPrice : -currentPlanPrice;

        setAddOnsCost(prevAddOnsCost => {
            const sum = parseFloat(prevAddOnsCost + newAddOnCost);
            return Number(sum.toFixed(2));
        });
  };
    const buttonText = addOnState ? "Remove" : "Add to Plan";
    return (<Grid item xs={12} md={index>1 ? 4 : 6} >
        <div className={'addOn-block' + (addOnState ? " selected" : "") + (index>1 ? " small-addOn" : "")}>
            <div className={"addOn-title-wrap" }>
                <SmallTitle titleText={addOn.title} className="addOn-title"/>
                <PriceAddOn currentPlanPrice={currentPlanPrice} pricePlanType={pricePlanType}/>
            </div>
            <p className="addOn-description">{addOn.text}</p>
            <ButtonRSA handleClick={handleClick} addOnState={addOnState} buttonText={buttonText} addOnButton={true}/>
        </div>
      </Grid>)
}

export default AddOn;