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
            <div className="w-1/2 mx-auto profile-info text-center">
                <table className="table-auto w-full mt-4 border-collapse border border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Field</th>
                            <th className="border border-gray-300 px-4 py-2 bg-gray-100">Information</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Name</td>
                            <td className="border border-gray-300 px-4 py-2">{profile.name}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Email</td>
                            <td className="border border-gray-300 px-4 py-2">{profile.email}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Address</td>
                            <td className="border border-gray-300 px-4 py-2">{profile.address}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Phone Number</td>
                            <td className="border border-gray-300 px-4 py-2">{profile.phoneNumber}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2">Password</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <a href="/change-password" className="text-blue-600 hover:text-blue-800 no-underline">change password</a>
                            </td>
                        </tr>
                        {/* <tr>
                            <td colSpan="2" className="text-center py-4">
                                <button type="submit" className="mx-auto px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">
                                    Submit
                                </button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <div className="mt-20">
                <table className="w-3/4 mx-auto leading-normal mt-50">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Ngày
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Điểm
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example row */}
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">1</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">2023-04-01</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">85</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <button className="text-blue-600 hover:text-blue-900">View</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">1</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">2023-04-01</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">85</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <button className="text-blue-600 hover:text-blue-900">View</button>
                            </td>
                        </tr><tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">1</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">2023-04-01</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">85</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <button className="text-blue-600 hover:text-blue-900">View</button>
                            </td>
                        </tr><tr>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">1</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">2023-04-01</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">85</p>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <button className="text-blue-600 hover:text-blue-900">View</button>
                            </td>
                        </tr>
                        {/* Repeat rows as needed */}
                    </tbody>
                </table>
            </div>
            <FooterUser />
        </div>
    );
}
export default Profile;   
