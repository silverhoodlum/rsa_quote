import React from 'react';
import Grid from '@mui/material/Grid';
import Tick from './../../static/images/tick.png'
import AddOn from '../add-on/add-on.component';

import './add-on-list.styles.scss';

const AddOnList = ({addOns}) => {
    return(
        <React.Fragment>
            <Grid item xs={12} sx={{ my: 4 }} className='title-addons-wrap'>
                <span className='title-addons'>Tailor your cover with our optional extra</span>
                <div className='verified-wrap'>
                    <img src={Tick} alt="Tick icon"/>
                    <span className='verified-txt'>Verified by RSA</span>
                </div>
            </Grid>
                
            {addOns.map( (addOn, index) => {
                return( <AddOn addOn={addOn} index={index} key={'add0n_' + index}/>)
            })}
       </React.Fragment>
    )
}

export default AddOnList;