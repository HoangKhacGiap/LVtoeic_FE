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

                // console.log(response.data);
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
    <table className="table-auto w-full mt-4">
        <thead>
            <tr>
                <th className="px-4 py-2">Field</th>
                <th className="px-4 py-2">Information</th>
            </tr>
        </thead>
        <tbody>
            {/* <tr>
                <td className="border px-4 py-2">ID</td>
                <td className="border px-4 py-2">{profile.id}</td>
            </tr> */}
            <tr>
                <td className="border px-4 py-2">Name</td>
                <td className="border px-4 py-2">{profile.name}</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">Email</td>
                <td className="border px-4 py-2">{profile.email}</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">Address</td>
                <td className="border px-4 py-2">{profile.address}</td>
            </tr>
            <tr>
                <td className="border px-4 py-2">Phone Number</td>
                <td className="border px-4 py-2">{profile.phoneNumber}</td>
            </tr>
        </tbody>
    </table>
</div>
            <FooterUser />
        </div>
    );
}
export default Profile;   
