import React from 'react';
import profile from '../assets/profile.jpg'

function Hello() {
    return (
        <div className="sidebar">
            <h1 className="text-center">Wealth</h1>
            <div className="sidebar__profile-picture">
                <div className="sidebar__profile-picture--grey-border">
                    <img src={profile} alt="profile"></img>
                </div>
            </div>
        </div>
    )
};

export default Hello;