import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom/dist';
import './onboarding.css'
import { AuthState } from '../../types';
import logo from "../../assets/logo.png";


const Onboarding: React.FC<React.PropsWithChildren> = ({ children }) => {
    const location = useLocation();
    const user = useSelector((state: AuthState) => {
        return state.isValid
    })
    return (
        <>
            {!user ?
                <div className='onboarding'>
                    <span className="navbar-brand flex-column logo-login">
                        <img alt="Woxsen Logo" src={logo} width="100" height="60" />
                    </span>
                    <div className='contain'>
                        <div className='welcome-img'>
                            <h1>Welcome To The League</h1>
                        </div>
                        {children}
                    </div>
                </div> : <Navigate to={'/'} state={{ from: location }} replace />
            }
        </>
    );
}
export default Onboarding