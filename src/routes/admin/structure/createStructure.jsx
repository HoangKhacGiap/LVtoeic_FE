import React, { useState } from "react";
import { CheckCircleIcon, PencilIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@chakra-ui/react";
import { useStateContext } from "../../../lib/context/StateContextProvider";

const CreateStructure = () => {
  return (
    <div className="w-full h-full p-12">
      <h1 className="font-semibold my-12 text-center text-3xl">Structure Manage</h1>
    </div>
  );
};

export default CreateStructure;