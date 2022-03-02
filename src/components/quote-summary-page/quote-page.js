import React, { useEffect, useState, createContext } from 'react';
import QuoteSummaryText from '../quote-summary-text/quote-summary-text.component';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import QuotePlanType from '../quote-plan/quote-plan.component';

import './quote-page.styles.scss'
import AddOnList from '../add-on-list/add-on-list.component';

export const PricePlanContext = createContext();

const QuotePage = () => {
    const initialStateUser = {
      "firstName": "",
      "lastName": "",
      "address1": "",
      "address2": "",
      "address3": "",
      "town": "",
      "postcode": "",
      "quoteRef": "",
      "startDate": "",
      "monthlyPrice": 0,
      "annualPrice": 0
    };
    const [user, setUser] = useState(initialStateUser);
    const [addOns, setAddOns] = useState([]);
    const [pricePlanType, setPricePlanType] = useState("monthly");
    const [finalPrice, setFinalPrice] = useState(0);
    const [addOnsCost, setAddOnsCost] = useState(0);
    const [addOnsSelected, setAddOnsSelected] = useState([]);

     /* fetch data from api */
    useEffect(() => {
        fetch("http://localhost:8000/quote")
          .then(res => res.json())
          .then(data => {setUser(data[0]); setFinalPrice(data[0].monthlyPrice)})

        fetch("http://localhost:8000/addons")
          .then(res => res.json())
          .then(data => {setAddOns(data)})  
    }, [])
    return ( 
      <Container sx={{ flexGrow: 1 }} className="container-main">
        <PricePlanContext.Provider value ={{user, setUser, pricePlanType, setPricePlanType, finalPrice, setFinalPrice, addOnsCost, setAddOnsCost, addOnsSelected, setAddOnsSelected}} >
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} sx={{ mb: 2 }}>
              <QuoteSummaryText user={user} />
            </Grid>
            <Grid item xs={12} md={4} sx={{ mt:4, mb: 2 }} className="checkout-grid">
              <QuotePlanType />
            </Grid>
            <AddOnList addOns={addOns}/>
          </Grid>
        </PricePlanContext.Provider>
      </Container>
        
)
}

export default QuotePage;