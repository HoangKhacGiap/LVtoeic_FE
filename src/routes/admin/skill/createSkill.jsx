import React, { useState, useEffect } from "react";
import { CheckCircleIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import debounce from 'lodash.debounce';

const CreateSkill = () => {
  const [skillList, setSkillList] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [keyword, setKeyword] = useState('');
  const token = localStorage.getItem("token");

  const [debouncedKeyword, setDebouncedKeyword] = useState('');
  const updateKeyword = debounce((value) => {
    setDebouncedKeyword(value);
  }, 2000);

  useEffect(() => {
    return () => {
      updateKeyword.cancel();
    };
  }, []);

  const handleSearch = (e) => {
    const { value } = e.target;
    setKeyword(value);
    updateKeyword(value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8085/api/filterSkill`, {
        params: {
          pageNumber,
          pageSize,
          keyword
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      console.log(1);

      const data = response.data;
      setSkillList(data.contents);
      setPageNumber(data.pageNumber);
      setTotalPage(data.totalPages);

    } catch (error) {
      console.error('Error fetching data:', error);
      setSkillList([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token, pageNumber, pageSize, keyword]);


  return (
    <div className="w-full h-full p-12">
      <h1 className="font-semibold my-12 text-center text-3xl">Skills Manage</h1>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 flex items-center float-left">
        <PlusIcon className="h-5 w-5 mr-2" />
        Add
      </button>
      <div className="mt-4 mb-2">
        <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          type="search"
          placeholder="Search..."
          value={keyword}
          onChange={handleSearch}
        />
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">STT</th>
            <th className="border px-4 py-2">Skill</th>
            <th className="border px-4 py-2">action</th>
          </tr>
        </thead>
        <tbody>
          {skillList.map((skill) => (
            <tr key={skill.id}>
              <td className="border px-4 py-2">{skill.id}</td>
              <td className="border px-4 py-2">{skill.name}</td>
              {/* <td className="border px-4 py-2">{datas.content}</td> */}
              <td className="border px-4 py-2 flex justify-center">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Details</button> */}
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {/* <ul>
          {levelList.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
        <div>
          <button
            onClick={() => setPageNumber(prev => Math.max(prev - 1, 0))}
            disabled={pageNumber === 0}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            Previous
          </button>
          <span className="mx-4 text-lg font-bold">
            {pageNumber + 1} / {totalPage}
          </span>
          <button
            onClick={() => setPageNumber(prev => Math.min(prev + 1, totalPage - 1))}
            disabled={pageNumber === totalPage - 1}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSkill;