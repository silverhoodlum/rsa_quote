import React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import './button.styles.scss'

const ButtonRSA = ({addOnState, handleClick, buttonText, addOnButton, className}) => {
    return (  <Button variant="contained" style={{backgroundColor: addOnState ? "red" : ""}} 
    onClick={handleClick} className={className || "button-rsa"}>{addOnButton ? (addOnState ? "" : <AddIcon />) : null}{buttonText}</Button>)
}

export default ButtonRSA;