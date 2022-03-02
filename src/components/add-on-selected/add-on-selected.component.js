import React from 'react';

import './add-on-selected.styles.scss'

const AddOnsSelected = ({addOnsSelected, title}) => {
    return (
        <React.Fragment>
            <h4>{title}</h4>
            <div className='addon-list'>
                {addOnsSelected.map( (addOn, index) => {
                return(
                <div className='addon-list-item' key={'addon-list-item_' + index}> 
                    <span>{addOn.addOn_name}</span> <span className='addon-price'>£{addOn.addOn_price}</span>
                    </div>)
                })}
            </div>
        </React.Fragment>
    )
}

export default AddOnsSelected;