import React, { useEffect, useState } from "react";
import { FaChartPie } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../index.css";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import "../index.css";
import "animate.css";
import { FaPowerOff } from "react-icons/fa";
import Auth from '../Auth';
import Spinner from "./Spinner";
export default function AllUsers() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [allEmployee, setAllEmployee] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    useEffect(() => {
        const fetchFun = async () => {
            setLoading(true);
            try {
                const api = await axios.get("http://localhost:3001/api/employee");
                setAllEmployee(api.data.data);
                setLoading(false);
            } catch (e) {
                console.log(e);
                setLoading(false);
            }
        };
        fetchFun();
    }, []);

    useEffect(() => {
        const filtered = allEmployee.filter((emp) => emp.cni?.includes(search));
        setFilteredEmployees(filtered);
    }, [search, allEmployee]);

    const deletefun = async (id) => {
        axios.delete(`http://localhost:3001/api/employee/${id}`);
        const filteremp = allEmployee.filter((emp) => emp._id !== id);
        setAllEmployee(filteremp);
    };
    const handleSearch = () => {
        const filtered = allEmployee.filter((emp) => emp.cni?.includes(search));
        setFilteredEmployees(filtered);
    };
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
                                className=" duration-300  w-full border-l-4 border-[#ff6600] mb-[50%]  text-[#ff6600]  shadow-2xl cursor-pointer"
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
            <div className='flex flex-col justify-center items-center relative  w-[100%] h-screen'>
                {loading || allEmployee.length < 1 ? (
                    <Spinner />
                ) : (
                    <div className='flex flex-col justify-center items-center w-[99%] mr-10 h-[95%] shadow-2xl rounded-2xl board'>
                        <div className='animate__animated animate__fadeIn my-[3%] shadow-2xl w-screen bg-white flex px-1 py-1 rounded-full border  overflow-hidden max-w-md mx-auto font-sans'>
                            <div className='flex w-full'>
                                <input
                                    type='text'
                                    placeholder='Search The Employee...'
                                    className='w-full outline-none bg-white pl-4 text-sm'
                                    aria-label='Search Input'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value.toUpperCase())}
                                />
                                <button
                                    className='bg-[#ff6600] transition-all text-white text-sm rounded-full px-5 py-2.5 ml-2'
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                        {filteredEmployees.length < 1 ? (
                            <div className='animate__animated animate__fadeIn mb-[1%]-th   h-[70%] w-[90%] rounded-xl flex justify-center items-center  place-content-center bg-transparent   '>
                                <h1 className=' font-bold uppercase tracking-widest  text-[#ff6600] '>
                                    Not Found |
                                </h1>
                            </div>
                        ) : (
                            <div className='animate__animated animate__fadeIn mb-[1%]-th  scrollbar h-[70%] w-[90%] rounded-xl scrollbar-th over '>
                                <table className='scrollbar-hidden scrollbar-th w-full shadow-2xl rounded-xl bg-white font-sans '>
                                    <thead className='bg-white whitespace-nowrap'>
                                        <tr>
                                            <th className='px-6 py-3 text-left text-sm font-semibold  text-[#ff6600] '>
                                                Avatar
                                            </th>
                                            <th className='px-6 py-3 text-left text-sm font-semibold  text-[#ff6600] '>
                                                CNI
                                            </th>
                                            <th className='px-6 py-3 text-left text-sm font-semibold  text-[#ff6600]  border-5 border-[#ff6600]'>
                                                Name
                                            </th>
                                            <th className='px-6 py-3 text-left text-sm font-semibold  text-[#ff6600]  border-5 border-[#ff6600]'>
                                                Job
                                            </th>
                                            <th className='px-6 py-3 text-left text-sm font-semibold  text-[#ff6600]  border-5 border-[#ff6600]'>
                                                Joined At
                                            </th>
                                            <th className='flex justify-center items-center px-6 py-3 text-left text-sm font-semibold  text-[#ff6600]  border-5 border-[#ff6600]'>
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className='whitespace-nowrap over'>
                                        {filteredEmployees.map((emp) => (
                                            <tr key={emp._id}>
                                                <td className='px-6 py-4 text-sm'>
                                                    <img
                                                        src={`http://localhost:3001/public/uploads/${emp.photo}`}
                                                        className='w-14 h-14 rounded-full'
                                                        alt='Avatar'
                                                    />
                                                </td>
                                                <td className='px-6 py-4 text-sm'>{emp.cni}</td>
                                                <td className='px-6 py-4 text-sm'>{emp.name}</td>
                                                <td className='px-6 py-4 text-sm'>{emp.job}</td>
                                                <td className='px-6 py-4 text-sm'>
                                                    {emp.dateInscription}
                                                </td>
                                                <td className='flex justify-center items-center px-6 py-4'>
                                                    <Link
                                                        to={`/EditUser/${emp._id}`}
                                                        className='mr-4'
                                                        title='Edit'
                                                    >
                                                        <FaUserEdit
                                                            className='shadow-2xl  text-[#ff6600] '
                                                            size={25}
                                                        />
                                                    </Link>
                                                    <Link
                                                        to={`/AllUsers`}
                                                        onClick={(e) => {
                                                            deletefun(emp._id);
                                                        }}
                                                        className='mr-4'
                                                        title='Delete'
                                                    >
                                                        <MdDelete
                                                            className='shadow-2xl  text-[#ff6600] '
                                                            size={25}
                                                        />
                                                    </Link>
                                                    <Link
                                                        to={`/ShowUser/${emp._id}`}
                                                        className='mr-4'
                                                        title='Show'
                                                    >
                                                        <FaEye
                                                            className='shadow-2xl  text-[#ff6600] '
                                                            size={25}
                                                        />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
