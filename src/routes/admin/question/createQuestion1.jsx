import React, { useState } from "react";
import { CheckCircleIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@chakra-ui/react";
import { useStateContext } from "../../../lib/context/StateContextProvider";
import CreateQuestion from "../../../routes/admin/creategame/CreateQuestion";

const products = [
  { id: 1, skill: 'skill 1', content: 'câu hỏi abc', image: 'image1.jpg', description: 'This is product 1' },
  { id: 2, skill: 'skill 2', content: 'câu hỏi abc', image: 'image2.jpg', description: 'This is product 2' },
  { id: 3, skill: 'skill 3', content: 'câu hỏi abc', image: 'image3.jpg', description: 'This is product 3' },
  { id: 4, skill: 'skill 4', content: 'câu hỏi abc', image: 'image4.jpg', description: 'This is product 4' },
  { id: 5, skill: 'skill 5', content: 'câu hỏi abc', image: 'image5.jpg', description: 'This is product 5' },
  { id: 6, skill: 'skill 6', content: 'câu hỏi abc', image: 'image6.jpg', description: 'This is product 6' },
];
const TableHeader = ({ children }) => (
  <th className="border px-4 py-2">{children}</th>
);
const CreateQuestionManage = () => {
  return (
    <div className="w-full h-full p-12">
      <h1 className="font-semibold my-12 text-center text-3xl">Questions Manage</h1>
      <div className="">
        <div >
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 flex items-center float-left">
            <PlusIcon className="h-5 w-5 mr-2" />
            Add
          </button>
          <button className="mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center float-right">
            <PencilIcon className="h-5 w-5 mr-2" />
            Add from Excel
          </button>
        </div>
        <div className="mt-4 mb-2">
          <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="search" placeholder="Search..." />
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <TableHeader>Số thứ tự</TableHeader>
              <TableHeader>Kỹ năng</TableHeader>
              <TableHeader>Nội dung</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{product.skill}</td>
                <td className="border px-4 py-2">{product.content}</td>
                <td className="border px-4 py-2 flex justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Details</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateQuestionManage;