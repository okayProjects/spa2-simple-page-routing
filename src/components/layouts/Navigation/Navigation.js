import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/Navigation.css';

const menuList = [
    { name: 'home', path: '/', exact: true },
    { name: 'products', path: '/products' },
    { name: 'contacts', path: '/contacts' },
    { name: 'admin', path: '/admin' }
]

const Navigation = () => {
    const menu = menuList.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))
    return (
        <nav className='main'>
            <ul>{menu}</ul>
        </nav>
    );
}

export default Navigation;