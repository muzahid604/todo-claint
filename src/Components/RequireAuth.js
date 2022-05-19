import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    if (loading || sending) {
        return <div className='d-flex align-items-center justify-content-center mx-auto m-5'>
            <h4 className='fs-1 text-success' >Loading...</h4>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5'>
            <h3 className='text-danger'>Please Verify your email!!</h3>
            <button
                className='btn btn-warning mb-5 m-2 fw-bold'
                onClick={async () => {
                    await sendEmailVerification();
                }}
            >
                Send Verification Email Again
            </button>
        </div>
    }
    return children;
};

export default RequireAuth;