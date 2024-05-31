import React, { useState } from "react";
import axios from "axios";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import Auth from '../Auth'
import "animate.css";
export default function Home() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/account/login", { email, password });
      setEmail('');
      setPassword('');
      toast.success(`${response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      Auth.login(response.data);
      history.push('/AllUsers');
    } catch (error) {
      setEmail('');
      setPassword('');
      const errorMessage = (error.response && error.response.data && error.response.data.message) || 'Something went wrong'
      toast.error(`${errorMessage}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    }
  };

  return (
    <div className='fixed shadow-lg home w-full h-screen'>
      <form className="w-[50%] mt-[-3%] h-screen flex flex-col justify-center items-center" onSubmit={handleSubmit}>
        <div className="animate__animated  animate__backInLeft flex flex-col justify-center items-center mb-20">
          <img className=" size-28" alt="" src='https://icones.pro/wp-content/uploads/2021/07/icone-d-affaires-et-d-entrepreneurs-orange.png' />
          <h3 className="text-[#ff6600] text-2xl font-bold sm:text-3xl">Log in to your account</h3>
        </div>
        <div className="animate__animated animate__backInRight  mb-5 relative w-[60%]">
          <input
            type="email"
            name="email"
            placeholder="Enter Admin email"
            className="w-full pl-3 pr-12 py-3 text-gray-500 bg-transparent outline-[#ff6600] border-[#ff6600] border-2 shadow-sm rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <svg className="w-6 h-6 text-[#ff6600] absolute right-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <div className="animate__animated animate__backInLeft  relative w-[60%] mt-2">
          <div className="text-[#ff6600] absolute right-3 inset-y-0 my-auto active:text-[#ff6600]"
            onClick={() => setPasswordHidden(!isPasswordHidden)}
          >
            {
              isPasswordHidden ? (
                <svg className="mt-3 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mt-3 font-bolder w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              )
            }
          </div>
          <input
            name="password"
            type={isPasswordHidden ? "password" : "text"}
            placeholder="Enter your password"
            className="w-full pr-12 pl-3 py-3 text-[#ff6600] bg-transparent outline-none border-2 border-[#ff6600] shadow-sm rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type='submit'
          className="animate__animated animate__backInRight  px-7 w-[60%] mt-5 py-3.5 text-white bg-[#ff6600] rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2 ring-[#ff6600] focus:ring-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}
