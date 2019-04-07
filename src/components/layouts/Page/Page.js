import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import ProductPage from '../../Pages/ProductPage/ProductPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';
import AdminPage from '../../Pages/AdminPage/AdminPage';
import LoginPage from '../../Pages/LoginPage';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import ProductListPage from '../../Pages/ProductListPage/ProductListPage';


const Page = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/products' component={ProductListPage} />
                <Route path='/product/:id' component={ProductPage} />
                <Route path='/contacts' component={ContactPage} />
                <Route path='/admin' component={AdminPage} />
                <Route path='/login' component={LoginPage} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;