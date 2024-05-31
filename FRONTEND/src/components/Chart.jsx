import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import { FaChartPie } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import Auth from '../Auth'
export default function Chart() {
    const [data, setData] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/employee");
                const employeeData = response.data.data;

                // Initialize a map to store the number of employees per year
                const employeeMap = new Map();

                // Iterate through employee data to count employees per year
                employeeData.forEach((emp) => {
                    const dateString = emp.dateInscription;
                    const year = new Date(dateString).getFullYear();

                    if (employeeMap.has(year)) {
                        // Increment the number of employees for the existing year
                        employeeMap.set(year, employeeMap.get(year) + 1);
                    } else {
                        // Initialize the number of employees for a new year
                        employeeMap.set(year, 1);
                    }
                });

                // Convert map to array format accepted by Recharts
                const dataArray = Array.from(employeeMap)
                    .map(([year, employees]) => ({
                        year: year.toString(),
                        employees: employees,
                    }))
                    .sort((a, b) => parseInt(a.year) - parseInt(b.year)); // Sort the array by year

                // Set the data state with the aggregated employee data
                setData(dataArray);
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        };

        fetchEmployeeData();
    }, []);
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
                                className=" w-full  border-l-4 border mb-[50%] text-white shadow-2xl cursor-pointer"
                                size={35}
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
                                className=" duration-300  w-full border-l-4 border-[#ff6600] mb-[50%] text-[#ff6600] shadow-2xl cursor-pointer"
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
            <div className='flex flex-col justify-center items-center w-[100%] h-screen'>
                <div className='flex flex-col justify-center items-center w-[99%] mr-10 h-[95%] shadow-2xl rounded-2xl board'>
                    <AreaChart
                        width={1000}
                        height={500}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='year' />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type='monotone'
                            dataKey='employees'
                            stackId='1'
                            stroke='#f97316'
                            fill='#f97316'
                        />
                    </AreaChart>
                </div>
            </div>
        </div>
    )
}