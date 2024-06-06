import React from 'react'
import Navbar from '../components/Navbar'
import BottomNavbar from '../components/BottomNavbar'

function Form() {
  return (
    <>
    <Navbar/>
    <div className='h-full w-full flex flex-col justify-center items-center p-4'>
        <form className='h-full w-full flex flex-col justify-evenly items-center'>
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Enter the name:</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Enter the location:</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </label>
        </form>

        <form className='h-auto w-full pt-6 flex flex-row justify-between items-center p-4'>
            <input type="text" placeholder="Year" className="input input-bordered input-primary w-[37%] max-w-xs" />
            <input type="text" placeholder="Amount" className="input inpinput-bordered input-success w-[37%] max-w-xs" />
            <button className="btn btn-neutral w-[20%]">+</button>
        </form>
    </div>
    <BottomNavbar/>
    </>
  )
}

export default Form