import React from 'react';
import '../../../styles/header.css';
import { Route, Switch } from 'react-router-dom';
import img1 from '../../../images/head1.jpg';
import img2 from '../../../images/head2.jpg';
import img3 from '../../../images/head3.jpg';
import img4 from '../../../images/head4.jpg';
import img5 from '../../../images/head5.jpg';
import img6 from '../../../images/head6.jpg';



const Header = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact render={() => (<img src={img1} alt='city1' />)} />
                <Route path='/products' render={() => (<img src={img2} alt='city2' />)} />
                <Route path='/contacts' render={() => (<img src={img6} alt='city3' />)} />
                <Route path='/admin' render={() => (<img src={img4} alt='city4' />)} />
                <Route path='/login' render={() => (<img src={img3} alt='city4' />)} />
                <Route render={() => (<img src={img5} alt='error' />)} />
            </Switch>
        </>
    );
}

export default Header;