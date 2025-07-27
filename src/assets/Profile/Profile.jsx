// Profile.jsx
//import React from 'react';import { auth } from "../firebase-config.jsx"; // Adjust the path based on the actual location
//mport { auth } from "../firebase-config.jsx"; // Adjust the path based on the actual location


const Profile = () => {
    const user = auth.currentUser; // Get the currently logged-in user

    return (
        <div style={{ padding: '2rem' }}>
            <h1>User Profile</h1>
            {user ? (
                <div>
                    <p><strong>Name:</strong> {user.displayName || 'N/A'}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    {/* You can add more user information here */}
                </div>
            ) : (
                <p>No user is logged in.</p>
            )}
        </div>
    );
};

export default Profile;
