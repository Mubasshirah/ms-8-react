import React from 'react';
import Thirdwatch from '../thirdWatch/Thirdwatch';

const Secondwatch = (props) => {
    return (
        <div>
            <h4>this is second watch:{props.steps}</h4>
            <Thirdwatch steps={props.steps}></Thirdwatch>
        </div>
    );
};

export default Secondwatch;