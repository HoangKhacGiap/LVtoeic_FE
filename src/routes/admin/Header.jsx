import React from "react";
import { navBar } from "../../lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../lib/context/StateContextProvider";

const Header = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStateContext();
  const { onOpen1 } = useStateContext();
  return (
    <div className="w-full h-[100px] flex items-center justify-around bg-[#252b2d]">
      <div className="navbar-header">
        <h1 className="title-header text-[36px] font-bold text-white">
          ADMIN
        </h1> 
      </div>
      <nav>
        <ul className="flex text-white font-medium space-x-5">
          <li className="hover:bg-blue-500 hover:text-white">
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
