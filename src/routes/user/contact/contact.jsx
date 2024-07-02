import React from "react";
import { Link, useNavigate } from "react-router-dom";

import HeaderUser from "../HeaderUser";
import FooterUser from "../FooterUser";

const Contact = () => {
    return (
        <div>
            <HeaderUser />
            {/* <div className="w-full h-[100px] flex items-center justify-around bg-[#252b2d]">
            </div> */}
            <h1 className="text-5xl font-bold text-center mx-auto mt-16 mb-10">Need Help? Just fullfil in this form</h1>
            <h2 className="text-3xl text-center mx-auto">Our team will contact you soon</h2>
            <div className="container w-3/4 max-w-xs mx-auto mt-20">
                <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full mx-auto">
                    <div className="flex flex-row space-x-4 mb-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Đăng ký
                        </button>
                    </div>
                </form>
            </div>
            <FooterUser />
        </div>
    );
}
export default Contact;   
