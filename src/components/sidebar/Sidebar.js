import React from 'react';
import profile from '../../assets/profile.jpg';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';
import { faBolt, faTachometerAlt, faChartArea, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function Hello(props) {
    return (
        <div className="sidebar">
            <div className="title">
                <FontAwesomeIcon icon={faBolt} size="2x" />
                <h1>Wealth Manager</h1>
            </div>
            <div className="d-none d-md-block sidebar__profile-picture">
                <img src={profile} alt="profile"></img>
                <div className="d-inline-block align-middle pl-4">
                    Corné Botma
                    <br />
                    cjbotma2@gmail.com
                </div>
            </div>
            <div className="navbar">
                <ul className="nav flex-column">
                    <li onClick={props.onAddValue} className="nav-item">
                        <NavLink to="/">
                            <FontAwesomeIcon icon={faTachometerAlt} size="lg" />
                            Dashboard
                        </NavLink>
                    </li>
                    <li onClick={props.onRemoveValue} className="nav-item">
                        <NavLink to="/stocks">
                            <FontAwesomeIcon icon={faChartArea} size="lg" />
                            Stocks
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/properties">
                            <FontAwesomeIcon icon={faHome} size="lg" />
                            Properties
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        val: state.testData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddValue: () => dispatch({ type: actionTypes.ADD_VALUE }),
        onRemoveValue: () => dispatch({ type: actionTypes.REMOVE_VALUE })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);