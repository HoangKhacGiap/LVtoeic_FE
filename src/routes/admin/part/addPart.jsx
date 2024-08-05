import React, { useState, useEffect } from "react";
import { CheckCircleIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import debounce from 'lodash.debounce';

const AddPart = () => {

  const [partList, setPartList] = useState([]);

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
      const response = await axios.get(`http://localhost:8085/api/filterPart`, {
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
      setPartList(data.contents);
      setPageNumber(data.pageNumber);
      setTotalPage(data.totalPages);

    } catch (error) {
      console.error('Error fetching data:', error);
      setPartList([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token, pageNumber, pageSize, keyword]);

  const handleSubmit = async (e) => {
    window.alert('Lỗi server');
    // e.preventDefault();
    // const form = e.target;
    // const data = new FormData(form);
    // const name = data.get('name');
    // const description = data.get('description');
    // const skill = data.get('skill');
    // const partNumber = data.get('partNumber');
    // try {
    //   const response = await axios.post(`http://localhost:8085/api/part`, {
    //     name,
    //     description,
    //     skill,
    //     partNumber
    //   }, {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   });
    //   console.log(response.data);
    //   fetchData();
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
  }

  return (
      <div className="w-full h-full p-12">
        <h1 className="font-semibold my-12 text-center text-3xl">Add Part</h1>
        {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 flex items-center float-left">
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
        </div> */}
        <form className="mt-8 space-y-6" 
              onSubmit={handleSubmit}
              >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description" className="sr-only">Description</label>
              <input
                id="description"
                name="description"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Description"
                // value={description}
                // onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="skill" className="sr-only">Skill</label>
              <select
                id="skill"
                name="skill"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                // value={skill}
                // onChange={(e) => setSkill(e.target.value)}
              >
                <option value="">Select Skill</option>
                <option value="easy">Listening</option>
                <option value="average">Reading</option>
                <option value="hard">Speaking</option>
              </select>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
        {/* <table className="table-auto w-full mt-8">
          <thead>
            <tr>
              <th className="border px-4 py-2">STT</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Part Number</th>
              <th className="border px-4 py-2">Skill</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {partList.map((part) => (
              <tr key={part.id}>
                <td className="border px-4 py-2">{part.stt}</td>
                <td className="border px-4 py-2">{part.name}</td>
                <td className="border px-4 py-2">{part.description}</td>
                <td className="border px-4 py-2">{part.partNumber}</td>
                <td className="border px-4 py-2">{part.skill}</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
  );
};

export default AddPart;