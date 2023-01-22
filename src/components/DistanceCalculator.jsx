import React, { useState } from 'react'
import GetCost from './GetCost';
import Navbar from './Navbar';

const DistanceCalculator = () => {
    const [startCity,setStartCity]=useState("");
    const [endCity,setEndCity]=useState("");
    const [middleStop,setMiddleStop]=useState("");
    const [cost,setCost]=useState(0);

    const handeStartCityChange=(e)=>{

        setStartCity(e.target.value);
        console.log(startCity);
    }
    const handleEndCityChange=(e)=>{
        setEndCity(e.target.value);
    }
    const handleMiddleStopChange=(e)=>{
        setMiddleStop(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setCost(GetCost(startCity,endCity,middleStop));
        console.log(cost);
    }
    
    return (
        <>
        <Navbar/>
        <div className='flex justify-center p-8'>
            <div >
                <h2 className='flex justify-center text-6xl bg-green-600 font-extralight'>Distance Calculator page</h2>
                <form onSubmit={handleSubmit}>
                    <div  className='flex justify-center'>
                    <label className='m-6'>
                        <h1 className='text-2xl  font-mono font-medium '>Select start city</h1>
                        <select className='text-3xl  py-2 px-2 bg-slate-400 ' value={startCity} onChange={handeStartCityChange}>
                            <option value="mumbai">Mumbai</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="chennai">Chennai</option>
                            <option value="bangalore">Bangalore</option>
                        </select>
                    </label>
                    <br />
                    <label className='m-6'>
                        <h1 className='text-2xl  font-mono font-medium '>Select end city</h1>
                        <select className='text-3xl  py-2 px-2 bg-slate-400 '  value={endCity} onChange={handleEndCityChange}>
                            <option value="mumbai">Mumbai</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="chennai">Chennai</option>
                            <option value="bangalore">Bangalore</option>
                        </select>
                    </label>
                    <br />
                    <label className='m-6'>
                        <h1 className='text-2xl  font-mono font-medium '>Select middle stop city</h1>
                        <select className='text-3xl  py-2 px-2 bg-slate-400 ' value={middleStop} onChange={handleMiddleStopChange}>
                            <option value="">None</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="chennai">Chennai</option>
                            <option value="bangalore">Bangalore</option>
                        </select>
                    </label>
                    </div>
                    <div className='flex justify-center '>
                    <button className='text-3xl my-5 m-auto py-2 px-2 bg-slate-400 ' type="submit">Get Distance</button>
                    
                    </div>
                    <p className='flex justify-center text-5xl text-blue-600 font-medium'>Cost: {cost} paise</p>
                </form>
            
            </div>
        </div>
        </>
        
    )
}

export default DistanceCalculator