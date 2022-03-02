import React from 'react';

import './quote-summary-text.styles.scss'
import ButtonRSA from '../button/button.component';


const QuoteSummaryText = props => {
    const {firstName, address1, address2, quoteRef, startDate} = props.user;

    const handleClick =(e) => {
        e.preventDefault()
      }
    
    return (
    <div className='quote-summary-container'>
        <h1 className='quote-summary-title'>Hey {firstName}</h1>
        <p className='quote-summary-description'>Here is your quote for Royal  Sun Alliance, {address1}, {address2}</p>
        <div className='quote-summary-reference'>Quote reference: {quoteRef}</div>
        <div  className='quote-summary-reference'>Covers starts on: {startDate.substring(0, startDate.indexOf("T"))}</div>
        <ButtonRSA handleClick={handleClick} addOnState={false} buttonText={"Download Quote"} addOnButton={false} className='download-btn'/>
        <div  className='quote-summary-details'>RSA is a leading international general insurer operating in the UK, Ireland, continental Europe and the Middle East.</div>
    </div>
    )
}

export default QuoteSummaryText;