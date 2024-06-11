import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { dataContext } from '../context/SubscriptionContext';

function User() {

    const { userId } = useParams();
    const { data, setData } = useContext(dataContext);

    if(data === null){
      return(
        <>
        <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 w-full">
          <div className="text-center">
            <h1 className="mt-5 text-[36px] font-bold text-red-500 lg:text-[50px]">
              Server error
            </h1>
            <p className="text-slate-600 mt-5 lg:text-lg">
              Oops something went wrong. Try to refresh this page or feel free
              to contact us if the problem presists.
            </p>
            <br />
            <br />
            <button
              className="btn btn-error w-32"
              onClick={() => {
                window.location.href = '/';
              }}
            >
              Refresh
            </button>
          </div>
        </div>
      </>
      )
    }

    const { name, accountStatus, location, yearPaid, } = data?.documents[userId];
    const collection = JSON.parse(yearPaid);
    console.log(collection);

  return (
    <>
    <div className="flex flex-col justify-start items-start w-screen h-full p-5">
      <h1 className='text-3xl font-bold mb-3'>{name}</h1>
      {
        accountStatus ? <p className='text-sm text-green-500 font-semibold'>Active</p> : <p className='text-sm text-red-500 font-semibold'>Suspended</p>
      }
      <h3 className='text-sm bg-primary p-2 rounded-lg mt-3 mb-4 shadow-lg'>Location: {location}</h3>
      <div className='w-full h-full bg-secondary rounded-lg shadow-xl mt-2'>
  <table className='table table-lg'>
    {/* head */}
    <thead>
      <tr>
        <th>Year</th>
        <th>Collection</th>
      </tr>
    </thead>
    <tbody>
      {/* rows */}
      {
        collection?.map((val) => {
          return(
            <>
            <tr>
        <td>{val?.y}</td>
        <td>{val?.p}</td>
      </tr>
            </>
          )
        })
      }
    </tbody>
  </table>
      </div>
    </div>
    </>
  )
}

export default User