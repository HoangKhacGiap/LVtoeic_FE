import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


import HeaderUser from "../HeaderUser";
import FooterUser from "../FooterUser";

const Profile = () => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');

                const response = await axios.get(`http://localhost:8085/api/user/profile/`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                console.log(response.data);
                setProfile(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProfile();
    }, []);


    return (
        <div>
            <HeaderUser />

            <h1 className="text-5xl font-bold text-center mx-auto mt-16 mb-10">MY PROFILE</h1>
            <div className="profile-info text-center">
                <p><strong>ID:</strong> {profile.id}</p>
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Address:</strong> {profile.address}</p>
                <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
            </div>
            <FooterUser />
        </div>
    );
}
export default Profile;   
