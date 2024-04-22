import React, { useState } from "react";
import Backg from "../assets/imgs/bak3.jpg";

function Home() {
  const [telNumber, setTelNumber] = useState("");

  const handleNumClick = (text) => {
    if (telNumber.length < 2) {
      setTelNumber((prevTelNumber) => prevTelNumber + text);
    }
  };

  const handleClearClick = () => {
    setTelNumber("");
  };

  const handleGoClick = () => {
    if (telNumber.length >= 2) {
      const v = telNumber;
      window.location.href = "secpage.html?id=" + v;
    }
  };

  return (
    <div
      style={{ backgroundImage: `url('${Backg}')` }}
      className="relative flex text-center bg-cover bg-center bg-no-repeat items-center inset-0 justify-center text-4xl font-semibold bg-slate-100 shadow-lg"
    >
      <div className="container mx-auto">
        <br />
        <div id="demo" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#demo"
              data-bs-slide-to="2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cdn.s3waas.gov.in/s3248e844336797ec98478f85e7626de4a/uploads/2018/06/2018060167.png"
                alt=""
                className="d-block w-full h-full"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.s3waas.gov.in/s3248e844336797ec98478f85e7626de4a/uploads/2018/06/2018060670.jpg"
                className="d-block w-full"
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.s3waas.gov.in/s3248e844336797ec98478f85e7626de4a/uploads/2018/06/2018060641.jpg"
                alt=""
                className="d-block w-full"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
        <br />


        <div className="container mx-auto ">
          <div className="row shadow-lg rounded-lg bg-opacity-10 bg-white">
            <div className="rounded-t-lg bg-[#F08080]">
              <h2 className="text-center py-4 ">
                <i>Kurukshetra Tour Guide</i>
              </h2>
              <div className="viewall text-center pb-4">
                <span>
                  <a
                    className="text-black"
                    href="https://kkrtour.com/viewall.html"
                  >
                    <i>View All</i>
                  </a>
                </span>
              </div>
            </div>

            <div className="text-center">
              <div className="col-md-12 flex items-center justify-center flex-col">
                <input
                  type="tel"
                  name="name"
                  id="telNumber"
                  className=" w-[500px] py-2 px-4 focus:outline-none focus:border-blue-500 mb-10 mt-10  border-gray-900 rounded-none text-lg font-bold border-2 border-solid h-16 text-center bg-[#f7f5eb]"
                  value=""
                  maxlength="2"
                />
                <div className=" grid grid-cols-3 gap-4 w-[1000px]  justify-center items-center mt-4">
                  <div className="  inline-block mx-2 mb-4">
                    <div className="  transition duration-200 ease-linear shadow-md border bg-[#9e9e9e] bg-opacity-20 border-gray-400 rounded-lg p-4 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 ">
                      <div className=" text-center mt-4 text-2xl font-lato text-gray-700">1</div>
                    </div>
                  </div>
                  <div className="span4  inline-block mx-2 mb-4">
                    <div className="num num transition duration-200 ease-linear shadow-md border border-gray-400 rounded-lg p-4 bg-[#9e9e9e] bg-opacity-20 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 ">
                      <div className="text-center mt-4 text-2xl font-lato text-gray-700">2</div>
                    </div>
                  </div>
                  <div className="span4  inline-block mx-2 mb-4">
                    <div className="num num transition duration-200 ease-linear shadow-md border border-gray-400 rounded-lg p-4 bg-[#9e9e9e] bg-opacity-20 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 ">
                      <div className="text-center mt-4 text-2xl font-lato text-gray-700">3</div>
                    </div>
                  </div>
                  <div className="span4  inline-block mx-2 mb-4">
                    <div className="num num transition duration-200 ease-linear shadow-md border border-gray-400 rounded-lg p-4 bg-[#9e9e9e] bg-opacity-20 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 ">
                      <div className="text-center mt-4 text-2xl font-lato text-gray-700">4</div>
                    </div>
                  </div>
                  <div className="span4  inline-block mx-2 mb-4">
                    <div className="num num transition duration-200 ease-linear shadow-md border border-gray-400 rounded-lg p-4 bg-[#9e9e9e] bg-opacity-20 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 ">
                      <div className="text-center mt-4 text-2xl font-lato text-gray-700">5</div>
                    </div>
                  </div>
                  <div className="span4  inline-block mx-2 mb-4">
                    <div className="num num transition duration-200 ease-linear shadow-md border border-gray-400 rounded-lg p-4 bg-[#9e9e9e] bg-opacity-20 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 ">
                      <div className="text-center mt-4 text-2xl font-lato text-gray-700">6</div>
                    </div>
                  </div>
                  <div className="span4  inline-block mx-2 mb-4">
                    <div className="num num transition duration-200 ease-linear shadow-md border border-gray-400 rounded-lg p-4 bg-[#9e9e9e] bg-opacity-20 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 ">
                      <div className="text-center mt-4 text-2xl font-lato text-gray-700">7</div>
                    </div>
                  </div>
                  <div className="span4  inline-block mx-2 mb-4">
                    <div className="num num transition duration-200 ease-linear shadow-md border border-gray-400 rounded-lg p-4 bg-[#9e9e9e] bg-opacity-20 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 ">
                      <div className="text-center mt-4 text-2xl font-lato text-gray-700">8</div>
                    </div>
                  </div>
                  <div className="span4  inline-block mx-2 mb-4">
                    <div className="num num transition duration-200 ease-linear shadow-md border border-gray-400 rounded-lg p-4 bg-[#9e9e9e] bg-opacity-20 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 ">
                      <div className="text-center mt-4 text-2xl font-lato text-gray-700">9</div>
                    </div>
                  </div>
                  <div className="span4  inline-block mx-2 mb-4">
                    <div className="num num transition duration-200 ease-linear shadow-md border border-gray-400 rounded-lg p-4 bg-[#9e9e9e] bg-opacity-20 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 ">
                      <div className="text-center mt-4 text-2xl font-lato text-gray-700">0</div>
                    </div>
                  </div>
                  <div className="span4  inline-block mx-2 mb-4">
                    <div className="num num transition duration-200 ease-linear shadow-md border border-gray-400 rounded-lg p-4 bg-yellow-600 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 ">
                      <div className="text-center mt-4 text-2xl font-lato text-gray-700">C</div>
                    </div>
                  </div>
                  <div className="span4  inline-block mx-2 mb-4">
                    <div className="num num transition duration-200 ease-linear shadow-md border border-gray-400 rounded-lg p-4 bg-green-300 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 ">
                      <div className="text-center mt-4 text-2xl font-lato text-gray-700">Go</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
