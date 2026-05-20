import { useState, useEffect } from "react";
import { getToken } from "../utils/localstorage";
import { MapPin, Mail, Phone, User, Calendar, ShieldCheck } from 'lucide-react';

const Profile = () => {
    const [userInfor, setUserInfor] = useState({});
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch('/api/auth/me', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getToken()}`
                    }
                });
                const userData = await response.json();
                setUserInfor(userData.data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfileData();
    }, []);

    return (
        <div className="profile-container">
            <h2>Profile Information</h2>
            <div>
                <img src={userInfor.avatarUrl} alt="Profile" />
            </div>
            <div className="profile-info">
                <p>username: {userInfor.username}</p>
                <p>{userInfor.lastName} {userInfor.firstName}</p>
                <p>email: {userInfor.email}</p>
                <p>phone number: {userInfor.phoneNumber}</p>
                <p>address: {userInfor.address}</p>
                
            </div>
        </div>
    );
};

export default Profile;