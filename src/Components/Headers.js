import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Headers = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">

                </div>
                <div class="navbar-center">
                    <Link to='/' class="btn btn-ghost normal-case text-xl">Home</Link>
                    <Link to='/completed' class="btn btn-ghost normal-case text-xl">Completed Tasks</Link>
                    <Link to='/calendar' class="btn btn-ghost normal-case text-xl">Today</Link>
                </div>
                <div class="navbar-end">

                    {user ? <Link to='/login' onClick={logout} className='mx-2 text-dark p-2 btn btn-ghost rounded'>LOG OUT</Link>
                        : <Link to="/login" className='mx-2 text-dark p-2 btn btn-ghost rounded'>LOG IN</Link>}


                    {
                        user ? <p></p> : <Link to="/register" className='mx-2 text-dark p-2 btn btn-ghost rounded'>SIGN UP</Link>

                    }

                </div>
            </div>
        </div>
    );
};

export default Headers;