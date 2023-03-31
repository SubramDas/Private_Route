import React, { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
    // const navigate = useNavigate();
    // const authenticated = false;
    console.log("Private Route Works")
    const authenticated=false;
    // if (!authenticated){

    //     useEffect(() => {
    //         {
    //             navigate('/login');
    //         }
    //     }, [authenticated, navigate]);
    // }
    // else{

        
        return (
            <>
            {
                authenticated ? {children} : <Navigate to="/login" />
            }
            {/* {children} */}
            {/* <Routes>
                <Route {...rest} >{children}
                {authenticated ? children : null}
            </Route>
        </Routes> */}

        
            </>
    )
}
// }

export default PrivateRoute