import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useAPIConText } from "../../../lib/context/APIContextProvider";


import HeaderUser from "../HeaderUser";
import FooterUser from "../FooterUser";


function getTest() {
    let navigate = useNavigate();

    const handleConfirmNavigation = (path) => () => {
        const isConfirmed = window.confirm('Bạn có muốn làm bài kiểm tra không?');
        if (isConfirmed) {
            navigate(path);
        }
    };
    const handleConfirmNavigationStructure = (path) => () => {
        const isConfirmed = window.confirm('Bạn có muốn tạo cấu trúc bài thi không?');
        if (isConfirmed) {
            navigate(path);
        }
    };

    return (
        <div>
            <HeaderUser />
            <div className="min-h-[500px] flex items-center justify-center flex-col">
                <h1 className="text-5xl font-bold text-center mx-auto mb-10">TOEIC TEST</h1>
                <div className="flex space-x-4">
                    <button
                        className="w-48 h-12 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                        onClick={handleConfirmNavigation('/testExam/1')}
                    >
                        Random Test
                    </button>
                    <button
                        className="w-48 h-12 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                        // onClick={handleConfirmNavigationStructure('/ExamPage/createStructure')}
                        onClick={() => navigate('/ExamPage/createStructure')}
                    >
                        Create Structure
                    </button>
                </div>
            </div>
            <FooterUser />
        </div>
    );
}
export default getTest;   
