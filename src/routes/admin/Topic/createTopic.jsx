import React, { useState } from "react";
import { CheckCircleIcon, PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@chakra-ui/react";
import { useStateContext } from "../../../lib/context/StateContextProvider";

const topics = [
  { id: 1, skill: 'listening',  content: 'content topic', part: 'II', level: 'easy' },
  { id: 2, skill: 'reading',    content: 'content topic', part: 'I',  level: 'hard' },
  { id: 3, skill: 'speaking',   content: 'content topic', part: 'V',  level: 'hard' },
  { id: 4, skill: 'writting',   content: 'content topic', part: 'IV', level: 'average' },

];

const CreateTopic = () => {
  return (
    <div className="w-full h-full p-12">
      <h1 className="font-semibold my-12 text-center text-3xl">Topics Manage</h1>
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
            <th className="border px-4 py-2">skill</th>
            <th className="border px-4 py-2">part</th>
            <th className="border px-4 py-2">level</th>
            <th className="border px-4 py-2">topic</th>

            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace this with your data */}
          {topics.map((level, index) => (
            <tr key={level.id}>
              <td className="border px-4 py-2">{level.id}</td>
              <td className="border px-4 py-2">{level.skill}</td>
              <td className="border px-4 py-2">{level.part}</td>
              <td className="border px-4 py-2">{level.level}</td>
              <td className="border px-4 py-2">{level.content}</td>

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

export default CreateTopic;