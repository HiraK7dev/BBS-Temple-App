import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import { list } from "../appwrite/database";
import { dataContext } from "../context/SubscriptionContext";

function Home() {
  const { data, setData } = useContext(dataContext);
  const [isLoading, setisLoading] = useState(0);

  async function fetchingData() {
    setisLoading(1);
    let tempData = await list();
    setData(tempData);
    console.log(tempData); //Viewing the data
    setisLoading(0);
  }

  useEffect(() => {
    fetchingData();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="w-screen h-screen flex items-center justify-center">
          <div className="rounded-md h-12 w-12 border-4 border-t-4 border-black animate-spin absolute"></div>
        </div>
      </>
    );
  }

  if (data == `error`) {
    return (
      <>
        <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 w-full bg-white">
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
                location.reload();
              }}
            >
              Refresh
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-start items-center w-screen h-full">
        <div className="flex justify-between items-center h-20 w-full p-3">
          <Search />
          <Link className="btn btn-neutral w-1/6 text-xl" to="/more/form">
            <p>+</p>
          </Link>
        </div>
        {/* Displaying the data */}
        <div className="w-full h-auto p-4">
          {data?.documents?.map((data) => {
            return (
              <>
                <Link
                  to=""
                  className="flex justify-start items-center w-full h-6 p-4"
                >
                  {data.name}
                </Link>
                <div className="divider"></div>
              </>
            );
          })}
        </div>
      </div>
      <BottomNavbar />
    </>
  );
}

export default Home;
