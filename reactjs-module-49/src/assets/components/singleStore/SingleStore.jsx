import React from 'react';
import { addToCartItem, removeFromDb } from '../utilities/Utilities';

const SingleStore = (props) => {
    const {name,price,_id}=props.store;
    const addToCart=(_id)=>{
        addToCartItem(_id)
        console.log('item added',_id);
    }
    return (
        <div>
            <h3>store name:{name}</h3>
            <h3>store price:{price}</h3>
            <button onClick={()=>addToCart(_id)}>Add to cart</button>
            <button onClick={()=>removeFromDb(_id)}>Remove from cart</button>
        </div>
    );
};

export default SingleStore;