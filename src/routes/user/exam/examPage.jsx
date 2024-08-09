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
                <h1 className="text-5xl font-bold text-center mx-auto mb-10">EXCERCISE TEST</h1>
                <div className="flex flex-wrap space-x-4">
                    <button
                        className="w-full md:w-48 h-12 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                        onClick={handleConfirmNavigation('/testExam/59')}
                    >
                        EXCERCISE 1
                    </button>
                    <button
                        className="w-full md:w-48 h-12 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                        onClick={handleConfirmNavigation('/testExam/60')}
                    >
                        EXCERCISE 2
                    </button>
                    <button
                        className="w-full md:w-48 h-12 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                        onClick={handleConfirmNavigation('/testExam/61')}
                    >
                        EXCERCISE 3
                    </button>
                    <button
                        className="w-full md:w-48 h-12 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                        onClick={handleConfirmNavigation('/testExam/62')}
                    >
                        EXCERCISE 4
                    </button>
                    <button
                        className="w-full md:w-48 h-12 rounded-md bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4"
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
