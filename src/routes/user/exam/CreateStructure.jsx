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



    const [formData, setFormData] = useState({
        skill: '',
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
        setFormEntries([...formEntries, formData]);
        setFormData({ skill: '', number_of_topic: '', level_of_topic: '', part_id: '' }); // Reset form
    };
    // const filteredData = formData.filter(item => {
    //     return Object.keys(filter).every(key =>
    //         filter[key] === '' || item[key].toString().toLowerCase().includes(filter[key].toLowerCase())
    //     );
    // });
    // const handleInputChange = (index, event) => {
    //     const newFormData = [...formData];
    //     newFormData[index][event.target.name] = event.target.value;
    //     setFormData(newFormData);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Gửi dữ liệu đến API bằng Axios
    //     axios.post('http://localhost:8085/api/saveStructure', formData)
    //         .then(response => {
    //             console.log('Success:', response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // };
    const getDataByData = (part_id) => {
        switch (part_id) {
            case '1': return "Part 1: Listening";
            case '2': return "Part 2: Listening";
            case '3': return "Part 3: Listening";
            case '4': return "Part 4: Listening";
            case '5': return "Part 5: Reading";
            case '6': return "Part 6: Reading";
            case '7': return "Part 7: Reading";
            default: return "Unknown Part";
        };
    };

    return (

        <div>
            <HeaderUser />
            <nav className="min-h-[500px]">
                
                <div className="w-2/3 mx-auto ">
                    <h1 className="mt-5 mb-5 font-bold text-center text-3xl " >Filter Form</h1>
                    <form onSubmit={handleSubmitForm}>
                        <input
                            name="skill"
                            value={formData.skill}
                            onChange={handleInputChange}
                            placeholder="Skill"
                        />
                        <input
                            name="number_of_topic"
                            type="number"
                            value={formData.number_of_topic}
                            onChange={handleInputChange}
                            placeholder="Number of Topic"
                        />
                        <input
                            name="level_of_topic"
                            value={formData.level_of_topic}
                            onChange={handleInputChange}
                            placeholder="Level of Topic"
                        />
                        <input
                            name="part_id"
                            type="number"
                            value={formData.part_id}
                            onChange={handleInputChange}
                            placeholder="Part ID"
                        />
                        {/* Các phần khác của form và component giữ nguyên */}
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto">
                            Add Structure
                        </button>
                    </form>

                    <table className="min-w-full leading-normal mt-10">
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Skill
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Number of Topic
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Level
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Part
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {formEntries.map((item, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex items-center">
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {item.skill}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
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
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto">
                        Create Structure
                    </button>
                </div>
            </nav>
            <FooterUser />
        </div>
    );
}
export default CreateStructure; 