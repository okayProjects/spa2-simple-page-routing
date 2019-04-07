import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <label htmlFor='' style={{ margin: '40px' }}>Enter your login<input type='text' style={{ marginLeft: 20 }}></input></label>
            <label htmlFor=''>Enter your password<input type='password' style={{ marginLeft: 20 }}></input></label>
            <button style={{ display: 'block', margin: 40, padding: '10px 15px' }}>ZALOGUJ</button>
        </div>
    );
}

export default LoginPage;