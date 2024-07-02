import React, { useState } from "react";
import { CheckCircleIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@chakra-ui/react";
import { useStateContext } from "../../../lib/context/StateContextProvider";

const skills = [
  { id: 1, skill: 'listening', content: 'câu hỏi abc', image: 'image1.jpg', description: 'This is product 1' },
  { id: 2, skill: 'speaking', content: 'câu hỏi abc', image: 'image2.jpg', description: 'This is product 2' },
  { id: 3, skill: 'reading', content: 'câu hỏi abc', image: 'image3.jpg', description: 'This is product 3' },
  { id: 4, skill: 'writting', content: 'câu hỏi abc', image: 'image4.jpg', description: 'This is product 4' },

];

const CreateSkill = () => {
  return (
    <div className="w-full h-full p-12">
      <h1 className="font-semibold my-12 text-center text-3xl">Skills Manage</h1>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 flex items-center float-left">
        <PlusIcon className="h-5 w-5 mr-2" />
        Add
      </button>
      <div className="mt-4 mb-2">
          <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="search" placeholder="Search..." />
        </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Level</th>
            {/* <th className="border px-4 py-2">Content</th> */}
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace this with your data */}
          {skills.map((skill, index) => (
            <tr key={skill.id}>
              <td className="border px-4 py-2">{skill.id}</td>
              <td className="border px-4 py-2">{skill.skill}</td>
              {/* <td className="border px-4 py-2">{skill.content}</td> */}
              <td className="border px-4 py-2 flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Details</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateSkill;