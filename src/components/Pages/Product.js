import React from 'react';
import '../../styles/product.css';

const Product = (props) => {

    return (
        <div className='product'>
            {props.id}
        </div>
    );
}

export default Product;