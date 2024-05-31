import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaChartPie } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import Auth from '../Auth';
export default function ShowUser() {
    const [employee, setEmployee] = useState(false);
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        const fetchFun = async () => {
            try {
                const api = await axios.get(`http://localhost:3001/api/employee/${id}`);
                setEmployee(api.data.data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchFun();
    }, [id]);
    return (
        <div className='flex justify-between items-center app w-full h-screen'>
            <div className='flex flex-col justify-center items-center w-[15%] h-screen'>
                <div className='w-[50%] h-[95%]  flex flex-col justify-around items-center shadow-2xl rounded-2xl  board'>
                    <div className=" flex flex-col justify-center items-center w-full">
                        <Link
                            to={"/AllUsers"}
                            className=' w-full '
                        >
                            <FaUsers
                                size={35}
                                className=" duration-300  w-full border-l-4 border-[#ff6600] mb-[50%] text-[#ff6600] shadow-2xl cursor-pointer"
                            />
                        </Link>
                        <Link
                            to={"/CreateUser"}
                            className=' w-full '
                        >
                            <FaAddressCard
                                size={35}
                                className=" w-full  border-l-4 border mb-[50%] text-white shadow-2xl cursor-pointer"
                            />
                        </Link>
                        <Link
                            to={"/ChartUsers"}
                            className=' w-full '
                        >
                            <FaChartPie
                                size={35}
                                className=" w-full  border-l-4 border mb-[50%] text-white shadow-2xl cursor-pointer"
                            />
                        </Link>
                        <div>
                            <FaPowerOff onClick={() => {
                                Auth.logOut();
                                history.push("/");
                            }} className=" cursor-pointer text-white " size={35} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center  items-center  w-[100%] h-screen '>
                <div className=' over scrollbar-th w-[99%] mr-10 h-[94%] board shadow-2xl rounded-2xl  '>
                    <div className='flex rounded-t-lg bg-top-color sm:px-2 w-full bg-[#ff6600]'>
                        <div className='animate__animated animate__backInDown border-[8px] border-white h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3'>
                            <img
                                src={`http://localhost:3001/public/uploads/${employee.photo}`}
                                alt=""
                            />
                        </div>
                        <div className='w-2/3 sm:text-center pl-5 mt-10 text-start'>
                            <p className=' text-white capitalize font-poppins font-bold text-heading sm:text-4xl text-2xl'>
                                {employee.name + " " + employee.familyName}
                            </p>
                        </div>
                    </div>
                    <div className='  grid gap-6  md:grid-cols-2   p-5 w-full h-screen '>
                        <div className=' animate__animated animate__backInLeft  mt-10 col-span-1  bg-[#ff6600] rounded-lg p-5 h-fit font-bold '>
                            <span className='capitalize text-white font-normal '>
                                First name :{" "}
                            </span>{" "}
                            {employee.name}
                        </div>
                        <div className=' animate__animated animate__backInRight mt-10  col-span-1  bg-[#ff6600] rounded-lg p-5 h-fit font-bold '>
                            <span className='capitalize text-white font-normal '>
                                Last name :{" "}
                            </span>{" "}
                            {employee.familyName}
                        </div>
                        <div className='animate__animated animate__backInLeft  col-span-1  bg-[#ff6600] rounded-lg p-5 h-fit font-bold '>
                            <span className='capitalize text-white font-normal '>CNI : </span>
                            {employee.cni}
                        </div>
                        <div className='  animate__animated animate__backInRight col-span-1  bg-[#ff6600] rounded-lg p-5 h-fit font-bold '>
                            <span className='capitalize text-white font-normal '>
                                Phone number :{" "}
                            </span>{" "}
                            {employee.phone}
                        </div>
                        <div className=' animate__animated animate__backInLeft col-span-1  bg-[#ff6600] rounded-lg p-5 h-fit font-bold '>
                            <span className='v text-white font-normal '>Jop : </span>{" "}
                            {employee.job}
                        </div>
                        <div className=' animate__animated animate__backInRight col-span-1  bg-[#ff6600] rounded-lg p-5 h-fit font-bold '>
                            <span className='text-white font-normal capitalize'>
                                date join :{" "}
                            </span>{" "}
                            {employee.dateInscription}
                        </div>
                        <div className=' animate__animated animate__backInLeft  col-span-1  bg-[#ff6600] rounded-lg p-5 h-fit font-bold '>
                            <span className='capitalize text-white font-normal '>
                                address :{" "}
                            </span>
                            {employee.address}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}