import React from 'react';
import { NavLink } from 'react-router-dom';
import AddStock from './addStock/AddStock'
import { Route } from 'react-router-dom';

const NoStock = (props) => {
    return (
        <>
            <p>You do not have any stocks yet. Please click the button below to add stocks.</p>
            <NavLink to="/stocks/add-stock">
                <button type="button" className="btn btn-primary">Add stock</button>
            </NavLink>
            <Route  path="/stocks/add-stock" component={AddStock} />
        </>
    )
}

export default NoStock;
