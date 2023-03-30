import React, { useState } from 'react';
import Secondwatch from '../secondWatch/Secondwatch';

const Watch = () => {
    const [count,setCount]=useState(0)
    const startWalk=()=>{
        setCount(count+1)
    }
    return (
        <div>
            <h4>your step:{count}</h4>
            <button onClick={startWalk}>walk</button>
            <Secondwatch steps={count}></Secondwatch>
        </div>
    );
};

export default Watch;