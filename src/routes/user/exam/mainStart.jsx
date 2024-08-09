import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAPIConText } from "../../../lib/context/APIContextProvider";
import axios from "axios";

import HeaderUser from "../HeaderUser";
import FooterUser from "../FooterUser";

const MainStart = () => {
    let navigate = useNavigate();

    return(
        <div>
            <HeaderUser />
            <div className="min-h-[350px] flex items-center justify-center flex-col">
                <div className="flex flex-wrap space-x-4">
                    <button
                        className="w-full md:w-48 h-12 rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                        onClick={() => navigate('/mainTest/39')}
                    >
                        START
                    </button>
                </div>
            </div>
            <FooterUser />
        </div>
    );
}
export default MainStart; 