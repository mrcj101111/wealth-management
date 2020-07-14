import React from 'react';
import { NavLink } from 'react-router-dom';


const NoStock = (props) => {
    return (
        <>
            <p>You do not have any stocks yet. Please click the button below to add stocks.</p>
            <NavLink to="/stocks/add-stock">
                <button type="button" className="btn btn-primary">Add stock</button>
            </NavLink>
            
        </>
    )
}

export default NoStock;