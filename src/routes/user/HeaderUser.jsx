import React from "react";
import { navBar } from "../../lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../lib/context/StateContextProvider";

const Header = () => {
    const navigate = useNavigate();
    const { token, setToken } = useStateContext();
    const { onOpen1 } = useStateContext();
    return (
        <div className=" w-full h-[100px] flex items-center justify-around bg-[#252b2d]">
            <div className="navbar-header">
                <h1 className="title-header text-[36px] font-bold text-white">
                    <Link
                        to={"/helloword"}
                    >
                        TOEIC LEARNING

                    </Link>
                </h1>
            </div>
            <nav>
                <ul className="flex text-white font-medium space-x-10 cursor-pointer">
                    <li>
                        <Link
                            to={"/ExamPage"}
                        >
                            ExamToeic
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/contact"}
                        >
                            Contact
                        </Link>

                    </li>
                    <li>
                    <Link
                            to={"/profile"}
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        {token !== null ? (
                            <Link
                                to={"/"}
                                onClick={() => {
                                    localStorage.removeItem("token");
                                }}
                            >
                                Logout
                            </Link>
                        ) : (
                            ""
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;