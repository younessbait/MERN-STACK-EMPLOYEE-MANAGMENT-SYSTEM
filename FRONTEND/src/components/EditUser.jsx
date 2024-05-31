import React, { useState, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useParams, useHistory } from "react-router-dom";
import { MdAddAPhoto } from "react-icons/md";
import "animate.css";
import axios from "axios";
import { FaChartPie } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import Auth from '../Auth';
export default function EditUser() {
    const { id } = useParams();
    const history = useHistory();
    const [er, seter] = useState(false);
    useEffect(() => {
        const fetchFun = async () => {
            try {
                const api = await axios.get(`http://localhost:3001/api/employee/${id}`);
                setname(api.data.data.name);
                setfamilyName(api.data.data.familyName);
                setcni(api.data.data.cni);
                setphone(api.data.data.phone);
                setjob(api.data.data.job);
                setdateInscription(api.data.data.dateInscription);
                setaddress(api.data.data.address);
                setphoto(api.data.data.phot);
            } catch (e) {
                console.log(e);
            }
        };
        fetchFun();
    }, [id]);
    const [name, setname] = useState("");
    const [familyName, setfamilyName] = useState("");
    const [cni, setcni] = useState("");
    const [phone, setphone] = useState("");
    const [job, setjob] = useState("");
    const [dateInscription, setdateInscription] = useState("");
    const [address, setaddress] = useState("");
    const [photo, setphoto] = useState("photo");
    async function test(e) {
        e.preventDefault();
        const data = new FormData();
        data.append("name", name);
        data.append("familyName", familyName);
        data.append("phone", phone);
        data.append("job", job);
        data.append("address", address);
        data.append("cni", cni);
        data.append("dateInscription", dateInscription);
        data.append("photo", photo);
        try {
            await axios.put(`http://localhost:3001/api/employee/${id}`, data);

            history.push('/AllUsers');
        } catch (err) {
            seter(!er);
        }
    }
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
            <div className='flex flex-col justify-center  items-center  w-[100%] h-screen  '>
                {er ? (
                    <div
                        id='alert-border-2'
                        className='animate__animated animate__backInDown w-[40%] shadow-2xl top-2 z-20 absolute flex items-start justify-start p-5 mb-4 text-red-500 border-t-4 border-red-500 bg-white'
                        role='alert'
                    >
                        <svg
                            className='flex-shrink-0 w-4 h-4'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                        >
                            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z' />
                        </svg>
                        <div className='ms-3 text-center text-sm font-medium mr-5'>
                            An error occurred. Please try again later.
                        </div>
                        <button
                            type='button'
                            onClick={() => {
                                seter(!er);
                            }}
                            className='ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-500 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8'
                            data-dismiss-target='#alert-border-2'
                            aria-label='Close'
                        >
                            <span className='sr-only'>Dismiss</span>
                            <svg
                                className='w-3 h-3'
                                aria-hidden='true'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 14 14'
                            >
                                <path
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='2'
                                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                                />
                            </svg>
                        </button>
                    </div>
                ) : (
                    ""
                )}
                <form
                    className='  w-[99%] mr-10 h-[95%] shadow-2xl rounded-2xl  board animate__animated animate__fadeIn    over scrollbar-th '
                    onSubmit={(e) => test(e)}
                >
                    <div className='  mt-6  grid gap-6 mb-6 md:grid-cols-2'>
                        <div className=' my-2 ml-10'>
                            <label
                                htmlFor='first_name'
                                className='flex    items-center mb-2 text-sm font-medium  text-[#ff6600] '
                            >
                                First name
                            </label>
                            <input
                                type='text'
                                id='first_name'
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                className=' outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3.5  '
                                placeholder='first_name'
                                required
                            />
                        </div>
                        <div className='my-2 mr-10'>
                            <label
                                htmlFor='last_name'
                                className='flex    items-center mb-2 text-sm font-medium  text-[#ff6600] '
                            >
                                Family name
                            </label>
                            <input
                                type='text'
                                id='family_name'
                                value={familyName}
                                onChange={(e) => setfamilyName(e.target.value)}
                                className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3.5  '
                                placeholder='last_name'
                                required
                            />
                        </div>
                        <div className='my-2 ml-10'>
                            <label
                                htmlFor='cni'
                                className='flex    items-center mb-2 text-sm font-medium  text-[#ff6600] '
                            >
                                <FaIdCard className=' mr-5 ' size={20} />
                                cni
                            </label>
                            <input
                                type='text'
                                id='cni'
                                value={cni}
                                onChange={(e) => setcni(e.target.value)}
                                className=' outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3.5  '
                                placeholder='cni'
                                required
                            />
                        </div>
                        <div className='my-2 mr-10'>
                            <label
                                htmlFor='phone'
                                className='flex    items-center mb-2 text-sm font-medium  text-[#ff6600] '
                            >
                                <FaPhoneAlt className='  mr-5 ' size={20} />
                                phone number
                            </label>
                            <input
                                type='text'
                                id='phone'
                                value={phone}
                                onChange={(e) => setphone(e.target.value)}
                                className='outline-none  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3.5  '
                                placeholder='(+212) 767 672 175	'
                                required
                            />
                        </div>
                        <div className=' my-2 ml-10'>
                            <label
                                htmlFor='jop'
                                className='flex   items-center mb-2 text-sm font-medium  text-[#ff6600] '
                            >
                                <FaUserTie className='  mr-5 ' size={20} />
                                Jop
                            </label>
                            <input
                                type='text'
                                id='jop'
                                value={job}
                                onChange={(e) => setjob(e.target.value)}
                                className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3.5  '
                                placeholder='Jop'
                                required
                            />
                        </div>
                        <div className='my-2 mr-10'>
                            <label
                                htmlFor='date'
                                className='flex    items-center mb-2 text-sm font-medium  text-[#ff6600] '
                            >
                                <MdDateRange className='  mr-5 ' size={20} /> Date Join
                            </label>
                            <input
                                type='date'
                                id='date'
                                value={dateInscription}
                                onChange={(e) => setdateInscription(e.target.value)}
                                className='bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3.5  '
                                placeholder=''
                                required
                            />
                        </div>
                    </div>
                    <div className=' grid gap-6 mb-6 md:grid-cols-2'>
                        <div className=' my-2 ml-10'>
                            <label
                                htmlFor='address'
                                className='flex   items-center mb-2 text-sm font-medium  text-[#ff6600] '
                            >
                                <FaLocationDot className='  mr-5 ' size={20} />
                                Address
                            </label>
                            <input
                                type='address'
                                id='address'
                                value={address}
                                onChange={(e) => setaddress(e.target.value)}
                                className='bg-gray-50 border outline-none  border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3.5  '
                                placeholder='address'
                                required
                            />
                        </div>
                        <div className=' my-2 mr-10'>
                            <label
                                htmlFor='photo'
                                className='flex    items-center mb-2 text-sm font-medium  text-[#ff6600] '
                            >
                                <MdAddAPhoto className='  mr-5 ' size={20} />
                                photo
                            </label>
                            <input
                                type='file'
                                id='photo'
                                className='outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3.5  '
                                placeholder='photo'
                                onChange={(e) => setphoto(e.target.files[0])}
                            />
                        </div>
                    </div>
                    <button type='submit' className='btn ml-10'>
                        <span> Save</span>
                    </button>
                </form>
            </div>
        </div>
    )
}