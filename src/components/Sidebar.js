import React from 'react';
import profile from '../assets/profile.jpg';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';

function Hello(props) {
    return (
        <div className="sidebar">
            <h1 className="text-center">Wealth</h1>
            <div className="sidebar__profile-picture">
                <div className="sidebar__profile-picture--grey-border">
                    <img src={profile} alt="profile"></img>
                </div>
            </div>
            <h2 className="text-center">Corné Botma</h2>
            <h3>Navigation</h3>
            <div className="navbar">
                <ul className="nav flex-column">
                    <li onClick={props.onAddValue} className="nav-item">
                        <a className="active pl-4">Active</a>
                    </li>
                    <li onClick={props.onRemoveValue} className="nav-item">
                        <a className="pl-4">Stock Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        val: state.testData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddValue: () => dispatch({ type: actionTypes.ADD_VALUE }),
        onRemoveValue: () => dispatch({ type: actionTypes.REMOVE_VALUE })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);