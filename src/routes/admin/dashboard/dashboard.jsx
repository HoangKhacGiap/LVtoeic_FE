import React, { useState, useEffect } from "react";
import { CheckCircleIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const Dashboard = () => {
    const [countResult, setCountResult] = useState(null);
    const [countUser, setCountUser] = useState(null);
    const [countStructure, setCountStructure] = useState(null);

    const token = localStorage.getItem("token");



    const fetchCountResult = async () => {
        try {
            const response = await axios.get("http://localhost:8085/api/countResult", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCountResult(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching count result:", error);
        }
    };
    const fetchCountUser = async () => {
        try {
            const response = await axios.get("http://localhost:8085/api/user/countUsers", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCountUser(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching count result:", error);
        }
    };
    const fetchCountStructure = async () => {
        try {
            const response = await axios.get("http://localhost:8085/api/countStructure", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCountStructure(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching count result:", error);
        }
    };
    useEffect(() => {
        fetchCountStructure();
        fetchCountUser();
        fetchCountResult();
    }, [token]);

    return (
        <div>
            <h1>Trang dashboard</h1>
            {countResult !== null ? (
                <div>
                    <h2>Thống kê số lượng</h2>
                    <p>Số lượng Result: {countResult}</p>
                    <p>Số lượng Structure: {countStructure}</p>
                    <p>Số lượng User: {countUser}</p>

                </div>
            ) : (
                <p>Đang tải dữ liệu...</p>
            )}
        </div>
    );
};

export default Dashboard;