import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAPIConText } from "../../../lib/context/APIContextProvider";
import axios from "axios";

import HeaderUser from "../HeaderUser";
import FooterUser from "../FooterUser";



const CreateStructure = () => {
    const [filter, setFilter] = useState({ skill: '', number_of_topic: '', level_of_topic: '', part_id: '' });
    const [exams, setTest] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();


    const [formData, setFormData] = useState({
        // skill: '',
        number_of_topic: '',
        level_of_topic: '',
        part_id: '',
    });

    const [formEntries, setFormEntries] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmitForm = (e) => {
        e.preventDefault();

        const allFieldsFilled = Object.values(formData).every(value => value.trim() !== '');

        if (!allFieldsFilled) {
            alert('Vui lòng điền đủ thông tin cấu trúc!!!');
            return; // Dừng xử lý nếu có trường rỗng
        }
        const isPartIdExist = formEntries.some(entry => entry.part_id === formData.part_id);

        if (isPartIdExist) {
            alert('Part đã tồn tại, vui lòng chọn Part khác.');
            return;
        }
        setFormEntries([...formEntries, formData]);
        setFormData({ number_of_topic: '', level_of_topic: '', part_id: '' });
    };
    const handleDelete = (indexToDelete) => {
        const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa mục này không?");
        if (isConfirmed) {
            const newFormEntries = formEntries.filter((_, index) => index !== indexToDelete);
            setFormEntries(newFormEntries);
        }
    };
    const submitFormEntries = async () => {
        const isConfirmed = window.confirm("Bạn chắc chắn muốn làm cấu trúc này chứ?");
        if (isConfirmed) {
            const url = 'http://localhost:8085/api/saveStructure';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formEntries),
            });

            if (!response.ok) {
                throw new Error('Có lỗi đã xảy ra');
            }

            const responseData = await response.json();
            console.log('Success:', responseData);
            navigate(`/testExam/${responseData}`);
        } catch (error) {
            console.error('Error:', error);
        }
        }
        
    };
    const getDataByData = (part_id) => {
        switch (part_id) {
            case '2': return "Part 1: Listening";
            case '3': return "Part 2: Listening";
            case '4': return "Part 3: Listening";
            case '5': return "Part 4: Listening";
            case '1': return "Part 5: Reading";
            case '6': return "Part 6: Reading";
            case '7': return "Part 7: Reading";
            default: return "Unknown Part";
        };
    };
    useEffect(() => {
        const handleBeforeUnload = e => {
            if (formEntries.length > 0) {
                e.preventDefault();
                e.returnValue = "Bạn có chắc chắn muốn rời đi? Thông tin bạn đã nhập có thể không được lưu.";
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [formEntries]);
    return (

        <div>
            <HeaderUser />
            <nav className="min-h-[500px]">

                <div className="w-2/3 mx-auto ">
                    <h1 className="mt-5 mb-5 font-bold text-center text-3xl " >Filter Form</h1>
                    <form onSubmit={handleSubmitForm}>

                        <input
                            name="number_of_topic"
                            type="number"
                            value={formData.number_of_topic}
                            onChange={handleInputChange}
                            placeholder="Number of Topic"
                        />
                        <select
                            name="level_of_topic"
                            value={formData.level_of_topic}
                            onChange={handleInputChange}
                        >
                            <option value="">Chọn độ khó</option>
                            <option value="easy">easy</option>
                            <option value="average">average</option>
                            <option value="hard">hard</option>
                        </select>

                        <select
                            name="part_id"
                            value={formData.part_id}
                            onChange={handleInputChange}
                        >
                            <option value="">Chọn Part</option>
                            <option value="2">Part 1: Listening</option>
                            <option value="3">Part 2: Listening</option>
                            <option value="4">Part 3: Listening</option>
                            <option value="5">Part 4: Listening</option>
                            <option value="1">Part 5: Reading</option>
                            <option value="6">Part 6: Reading</option>
                            <option value="7">Part 7: Reading</option>
                        </select>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto">
                            Add Structure
                        </button>
                    </form>

                    <table className="min-w-full leading-normal mt-10">
                        <thead>
                            <tr>

                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Number of Topic
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Level
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Part
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {formEntries.map((item, index) => (
                                <tr key={index} className="border-b border-gray-200">

                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {item.number_of_topic}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {item.level_of_topic}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {getDataByData(item.part_id)}
                                        </p>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
                        onClick={submitFormEntries}
                    >
                        Begin The Test
                    </button>
                </div>
            </nav>
            <FooterUser />
        </div>
    );
}
export default CreateStructure; 