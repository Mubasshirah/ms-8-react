import React from 'react';
import Devicedetails from '../deviceDetails/Devicedetails';

const Device = (props) => {
    console.log(props);
    
    return (
        <div>
            <h1>this is my device:{props.name}</h1>
            <Devicedetails price={props.price}></Devicedetails>
        </div>
    );
};

export default Device;