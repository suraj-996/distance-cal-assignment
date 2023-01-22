import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate();
    return (
        <div className='bg-slate-200 p-5 text-3xl font-semibold text-blue-600'>
            <ul className='flex justify-around'>
                <li onClick={()=>navigate("/distance-calculator")}>Distance Calculator</li>
                <li onClick={()=>navigate("/shipper-data")}>Shipper Data</li>
            </ul>
        </div>
    )
}

export default Navbar