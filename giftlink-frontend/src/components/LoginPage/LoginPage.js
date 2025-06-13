import React, { useEffect, useState } from 'react';
//Task 1: Import urlConfig from `giftlink-frontend/src/config.js`
import { urlConfig } from '../../config';

//Task 2: Import useAppContext `giftlink-frontend/context/AuthContext.js`
import { useAppContext } from '../../context/AuthContext';

//Task 3: Import useNavigate from `react-router-dom` to handle navigation after successful registration.
import { useNavigate } from 'react-router-dom';

import './LoginPage.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //Task 4: Include a state for incorrect password.
    const [incorrectPass, setIncorrectPass] = useState('');

    //Task 5: Create a local variable for `navigate`,`bearerToken`   and `setIsLoggedIn`.
    const navigate = useNavigate();
    const bearerToken = sessionStorage.getItem('bearer-token');
    const { setIsLoggedIn} = useAppContext();

    //Task 6. If the bearerToken has a value (user already logged in), navigate to MainPage
    useEffect(() => {
        if (sessionStorage.getItem('auth-token')) {
            navigate('/app');
        }
    }, [navigate]);

    const handleLogin = async function(e) {
        try{
            //first task
            const response = await fetch(`${urlConfig.backendUrl}/api/auth/login`, {
                //Task 7: Set method
                method: 'POST',
                //Task 8: Set headers
                headers: {
                    'content-type': 'application/json',
                    'Authorization': bearerToken ? `Bearer ${bearerToken}`: '',
                },
                //Task 9: Set body to send user details
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            });

            const json = await response.json();
            if (json.authtoken) {
                sessionStorage.setItem('auth-token', json.authtoken);
                sessionStorage.setItem('name', json.userName);
                sessionStorage.setItem('email', json.userEmail);
                setIsLoggedIn(true);
                navigate('/app');
            } else {
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
                setIncorrectPass('Incorrect password. Try again.');
                setTimeout(() => {
                    setIncorrectPass('');
                }, 2000);
            }
        }catch (e) {
            console.log("Error fetching details: " + e.message);
        }
    }

    return (
    <div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
        <div className="login-card p-4 border rounded">
            <h2 className="text-center mb-4 font-weight-bold">Login</h2>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value); setIncorrectPass('');}}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    id="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value); setIncorrectPass('');}}
                />
                <span style={{color:'red',height:'.5cm',display:'block',fontStyle:'italic',fontSize:'12px'}}>{incorrectPass}</span>
            </div>

            <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Login</button>
            <p className="mt-4 text-center">
                New here? <a href="/app/register" className="text-primary">Register Here</a>
            </p>

        </div>
        </div>
    </div>
    </div>
)
}

export default LoginPage;