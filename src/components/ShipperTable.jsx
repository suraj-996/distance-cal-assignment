import React, { useState } from 'react'
import Navbar from './Navbar';

const ShipperTable = (props) => {
    const [selectedCity, setSelectedCity] = useState("");
    const [sortBy, setSortBy] = useState("rating");
    const [sortOrder, setSortOrder] = useState("asc");

    const handleCitySelect=(e)=>{
        setSelectedCity(e.target.value);
    }
    const handleSort=(sortBy)=>{
        if(sortBy===this.state.sortBy){
            setSortOrder(sortOrder==="asc" ? "desc" : "asc");
        }else{
            setSortBy(sortBy);
        }
    }
    const filtereShippers=()=>{
        let filteredShippers=props.shippers;
        if(selectedCity){
            filteredShippers=filteredShippers.filter(
                (s)=>s.availableCities.includes(selectedCity)
            )
        }
        if(sortBy){
            filteredShippers.sort((a,b)=>{
                if(sortOrder==="asc"){
                    return a[sortBy]-b[sortBy];
                }
                return b[sortBy]-a[sortBy];
            })
        }
        return filteredShippers;
    }
    const filteredShippers=filtereShippers();
    return (
        <>
        <Navbar/>
        <div className='flex justify-center'>
                <div className='container my-8 mx-5 '>
                    <h4 className='text-center text-5xl m-6 font-mono font-semibold bg-green-500'>Select one city</h4>
                    <label className=' flex justify-center'>
                        
                        <select value={selectedCity} onChange={handleCitySelect} className='text-3xl  py-2 px-2 bg-slate-400 '>
                            <option value="">All</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="chennai">Chennai</option>
                            <option value="bangalore">Bangalore</option>
                        </select>
                    </label>
                    <table className= 'min-w-full text-3xl my-9'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Shipper Id</th>
                                <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6' onClick={()=>handleSort("rating")}>Rating {sortBy==="rating" ? sortOrder==="asc" ? "(asc)" : "(desc)" : ""}</th>
                                <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Available Cities</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredShippers.map((shipper)=>(
                                <tr key={shipper.shipperId}>
                                    <td className='pl-10 font-medium text-teal-500'>{shipper.shipperId}</td>
                                    <td className='pl-10 font-medium text-teal-500'>{shipper.rating}</td>
                                    <td className='pl-1 font-medium text-teal-500'>{shipper.availableCities.join(",  ")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
        </div>
        </>
    )
}

export default ShipperTable