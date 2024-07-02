import React, { useEffect, useState } from "react";
import { navBar } from "../../lib/utils";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Homepage = () => {
  const [state, setState] = useState("1");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage?.getItem("token")) {
      const decodedToken = jwtDecode(localStorage.getItem("token"));
      const userRole = decodedToken.roles[0].authority;
      // navigate(`/${userRole}`);
      setState("");
    }
  }, [state]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="container-home w-[80%] h-[80%] bg-white flex justify-center items-center">
        <div className="w-[320px] h-[400px] shadow-2xl rounded-3xl border-black bg-white text-center">
          <ul className="flex flex-col justify-center items-center h-full space-y-7">
            {navBar.map((item, index) => {
              return (
                <li
                  key={index}
                  className="w-48 h-12 rounded-md bg-[#8e8e8e] hover:bg-slate-300"
                >
                  <Link
                    className="w-48 h-12 rounded-md flex justify-center items-center"
                    to={item.link ? item.link : ""}
                  >
                    {item.nameItem}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};
export default Homepage;
