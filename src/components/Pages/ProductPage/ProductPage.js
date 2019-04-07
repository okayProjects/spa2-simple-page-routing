import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product';

const ProductPage = (props) => {

    return (

        <div>
            <h1 style={{ textTransform: 'capitalize' }}>{props.match.params.id} Product Page</h1>
            <Product id={props.match.params.id} />
            <Link to='/products'>Back to products</Link>
        </div>
    );
}

export default ProductPage;