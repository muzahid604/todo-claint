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
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>

                    </div>
                </div>
                <div class="navbar-center">
                    <Link to='/' class="btn btn-ghost normal-case text-xl">Home</Link>
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