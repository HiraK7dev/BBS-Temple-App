import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import BottomNavbar from '../components/BottomNavbar'
import { create } from '../appwrite/database';

function Form() {

    const [yearPaid, setyearPaid] = useState([]);

    const [name, setName] = useState(``);
    const [location, setLocation] = useState(``);
    const [year, setYear] = useState(``);
    const [amount, setAmount] = useState(``);

    function onChange(event){
        if(event.target.placeholder === `Name`){
            setName(event.target.value);
        }
        else if(event.target.placeholder === `Location`){
            setLocation(event.target.value);
        }
        else if(event.target.placeholder === `Year`){
            setYear(event.target.value);
        }
        else {
            setAmount(event.target.value);
        }
    }

    function updateYearPaid(event){
        event.preventDefault();
        if(year == `` || amount == ``){
            alert(`Invalid Input!`);        
        } else {
            setyearPaid([...yearPaid, {
                id: Date.now(),
                y: year,
                p: amount,
            }]);
            setYear(``);
            setAmount(``);
        }
    }

    function reverseYearPaid(event){
        event.preventDefault();
        setyearPaid(yearPaid.filter((val) => {
            return event.target.id != val.id;
        }));
    }

    function onSubmit(){
        let tempYearPaid = JSON.stringify(yearPaid);
        create(
            name,
            location,
            tempYearPaid,
        );
        setTimeout(()=>{ window.location.href = '/'; }, 3000);
    }

  return (
    <>
    <Navbar/>
    <div className='h-full w-full flex flex-col justify-center items-center p-6 overflow-auto'>
        <form className='h-auto w-full flex flex-col justify-evenly items-center'>
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">Enter the name:</span>
            </div>
            <input value={name} onChange={onChange} type="text" placeholder="Name" className="input input-bordered w-full" />
        </label>
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">Enter the location:</span>
            </div>
            <input value={location} onChange={onChange} type="text" placeholder="Location" className="input input-bordered w-full" />
        </label>
        </form>
        
        <form onSubmit={updateYearPaid} className='h-auto w-full pt-6 flex flex-row justify-between items-center'>
            <input value={year} onChange={onChange} type="number" placeholder="Year" className="input input-bordered input-primary w-[37%] max-w-xs" />
            <input value={amount} onChange={onChange} type="number" placeholder="Amount" className="input inpinput-bordered input-success w-[37%] max-w-xs" />
            <button className="btn btn-neutral w-[20%] text-xl">+</button>
        </form>

        {
            yearPaid.map((val) => {
                return(
                    <div className='h-auto w-full pt-6 flex flex-row justify-between items-center'>
                        <input value={val.y} type="text" placeholder="Year" className="input input-bordered input-primary w-[37%] max-w-xs" disabled/>
                        <input value={`₹` + val.p} type="text" placeholder="Amount" className="input inpinput-bordered input-success w-[37%] max-w-xs" disabled/>
                        <button id={val.id} className="btn btn-error w-[20%]" onClick={reverseYearPaid}>X</button>
                    </div>
                )
            })
        }

        <button onClick={onSubmit} className="btn btn-outline mt-6 w-full">Add to list</button>
    </div>
    <BottomNavbar/>
    </>
  )
}

export default Form