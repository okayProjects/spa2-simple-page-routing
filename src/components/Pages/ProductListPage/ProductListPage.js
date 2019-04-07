import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/ProductListPage.css';

const products = ['car', 'motocycle', 'bike'];

const ProductListPage = () => {

    const productsList = products.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))

    return (
        <div className='products'>
            <h3>Choose from products below</h3>
            <ul>
                {productsList}
            </ul>
        </div>
    );
}

export default ProductListPage;
