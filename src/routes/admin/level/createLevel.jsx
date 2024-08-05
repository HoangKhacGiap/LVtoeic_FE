import React, { useState, useEffect } from "react";
import { CheckCircleIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import debounce from 'lodash.debounce';

const CreateLevel = () => {
  const [levelList, setLevelList] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const [showPopup, setShowPopup] = useState(false);


  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [keyword, setKeyword] = useState('');
  const token = localStorage.getItem("token");

  const [name, setName] = useState('');
  const [error, setError] = useState('');
  // const limit = 2;

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
      const response = await axios.get(`http://localhost:8085/api/filterLevel`, {
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
      setLevelList(data.contents);
      setPageNumber(data.pageNumber);
      setTotalPage(data.totalPages);

    } catch (error) {
      console.error('Error fetching data:', error);
      setLevelList([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, [token, pageNumber, pageSize, keyword]);

  const createSkill = async () => {
    if (!name) {
      setError('Please enter a Level name.');
      return;
    }
    const isConfirmed = window.confirm("Bạn có chắc muốn thêm skill này không??");
    
    if (!isConfirmed) {
      return; // Nếu người dùng chọn "Cancel", dừng lại
    }
  
    try {
      const response = await axios.post(`http://localhost:8085/api/createLevel`, {
        name,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setShowPopup(false);
      window.location.reload();
      console.log(response.data);
      console.log(1);
  
      const data = response.data;
    } catch (error) {
      if (error.response.status === 409) {
        // Server responded with a status other than 2xx
        console.error('Error response:', error.response);
        setError(`Kỹ năng bạn nhập đã tồn tại.`);
        // setName('');
      } else if (error.request) {
        // Request was made but no response was received
        console.error('Error request:', error.request);
        setError('No response received from the server. Please try again.');
      } else {
        // Something else happened while setting up the request
        console.error('Error message:', error.message);
        setError('An error occurred while creating the skill. Please try again.');
      }
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="w-full h-full p-12">
      <h1 className="font-semibold my-12 text-center text-3xl">Levels Manage</h1>
      <button 
        onClick={() => setShowPopup(true)}
        
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 flex items-center float-left">
        <PlusIcon className="h-5 w-5 mr-2" />
        Add
      </button>
      {showPopup && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 z-50 rounded-lg shadow-lg min-w-[300px] min-h-[200px]">
            <h2 className="text-lg font-semibold">Add Level</h2>
            <div>
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="input your level name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
            <button
              onClick={() => createSkill()}
              className="mr-4 mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Save
            </button>
            <button
              onClick={() => {
                setShowPopup(false);
                setName('');
                setError('');
              }}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Đóng
            </button>
          </div>
        </div>
      )}
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
            <th className="border px-4 py-2">Level</th>
            <th className="border px-4 py-2">action</th>
          </tr>
        </thead>
        <tbody>
          {levelList.map((level) => (
            <tr key={level.id}>
              <td className="border px-4 py-2">{level.id}</td>
              <td className="border px-4 py-2">{level.name}</td>
              <td className="border px-4 py-2 flex justify-center">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Details</button> */}
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div>
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

export default CreateLevel;