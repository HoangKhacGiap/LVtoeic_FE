import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAPIConText } from "../../../lib/context/APIContextProvider";
import axios from "axios";

import HeaderUser from "../HeaderUser";
import FooterUser from "../FooterUser";
// import '../testexam.css';
const MainStart = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    let navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/mainTest/12');
    };

    return (
        <div>
            <HeaderUser />
            <div className="min-h-[350px] flex items-center justify-center flex-col">
                <div className="flex flex-wrap space-x-4">
                    <button
                        className="w-full md:w-48 h-12 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                        onClick={openModal}
                    >
                        <h1 className="text-2xl">
                            Start
                        </h1>
                    </button>
                    {modalIsOpen && (
                        <div className="fadein-animation fixed inset-0 flex items-center justify-center  bg-opacity-50">
                            <div className="bg-white rounded-lg p-6 mx-4 md:mx-0 shadow-2xl">
                                <h1 className="text-center text-2xl font-bold mb-4">Thông tin bài thi</h1>
                                <div>
                                    <p className="mb-2">  <strong>Part 1: </strong>Nghe mô tả một bức ảnh và chọn đáp án đúng nhất trong 4 đáp án.</p>
                                </div>
                                <div>
                                    <p className="mb-2">  <strong>Part 2: </strong> Nghe một câu hỏi hoặc phát biểu, sau đó chọn câu trả lời thích hợp nhất. </p>
                                </div>
                                <div>
                                    <p className="mb-2">  <strong>Part 3: </strong>Nghe các đoạn hội thoại ngắn giữa hai hoặc ba người, sau đó trả lời các câu hỏi liên quan.</p>
                                </div>
                                <div>
                                    <p className="mb-2">  <strong>Part 4: </strong> Nghe các bài nói ngắn, sau đó trả lời các câu hỏi liên quan.</p>
                                </div>
                                <div>
                                    <p className="mb-2">  <strong>Part 5: </strong> Chọn từ hoặc cụm từ thích hợp để hoàn thành câu</p>
                                </div>
                                <div>
                                    <p className="mb-2">  <strong>Part 6: </strong>  Điền từ hoặc câu còn thiếu vào các đoạn văn.</p>
                                </div>
                                <div>
                                    <p className="mb-2">  <strong>Part 7: </strong>Đọc các đoạn văn hoặc nhiều đoạn văn liên quan và trả lời các câu hỏi.</p>
                                </div>
                                <nav className="flex justify-center mx-auto space-x-4">
                                    <button
                                        className="w-full md:w-48 h-12 rounded-md bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4"
                                        onClick={handleSubmit}
                                    >
                                        BẮT ĐẦU
                                    </button>
                                    <button
                                        className="w-full md:w-48 h-12 rounded-md bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4"
                                        onClick={closeModal}
                                    >
                                        ĐÓNG
                                    </button>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <FooterUser />
        </div>
    );
}
export default MainStart; 