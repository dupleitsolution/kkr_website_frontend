import IMG1 from "../assets/imgs/Image1.png";
import IMG2 from "../assets/imgs/Image2.png";
import IMG3 from "../assets/imgs/Image3.png";
import IMG11 from "../assets/imgs/Image11.png";
import IMG22 from "../assets/imgs/Image22.png";
import IMG33 from "../assets/imgs/Image33.png";
import Backg from "../assets/imgs/Mback4.jpg";
import bottom from "../assets/imgs/bottom.png";
import top from "../assets/imgs/top.png";
import fb from "../assets/imgs/facebook.svg";
import twi from "../assets/imgs/twitter.svg";
import inst from "../assets/imgs/instagram.svg";
import shar from "../assets/imgs/share.svg";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";

function Home() {
  const [telNumber, setTelNumber] = useState("");
  const [share, setShare] = useState(false);
  const [number ,setNumber]  = useState("");

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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 576 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  const getSrcByScreenSize1 = () => {
    if (window.innerWidth < 768) {
      return IMG11; // Provide the source for the small image
    } else {
      return IMG1; // Provide the source for the large image
    }
  };

  const getSrcByScreenSize2 = () => {
    if (window.innerWidth < 768) {
      return IMG22; // Provide the source for the small image
    } else {
      return IMG2; // Provide the source for the large image
    }
  };

  const getSrcByScreenSize3 = () => {
    if (window.innerWidth < 768) {
      return IMG33; // Provide the source for the small image
    } else {
      return IMG3; // Provide the source for the large image
    }
  };
  return (
    <div className="  w-full flex text-center flex-col bg-cov bg-righ bg-no-repeat items-center justify-center text-4xl font-semibold bg-[#DDDDD]  ">
      <div className="w-full ">
        <Carousel
          arrows={false}
          showDots={true}
          responsive={responsive}
          showArrows={false}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          className="my-carousel"
        >
          {[IMG1, IMG2, IMG3].map((v) => {})}
          <div>
            <img
              src={getSrcByScreenSize1()}
              alt=""
              className=" d-block w-full  h-[350px] md:h-[250px]  "
            />
          </div>
          <div>
            <img
              src={getSrcByScreenSize2()}
              alt=""
              className="d-block w-full  h-[350px] md:h-[250px]  "
            />
          </div>
          <div>
            <img
              src={getSrcByScreenSize3()}
              alt=""
              className="d-block  w-full   h-[350px] md:h-[250px]  "
            />
          </div>
        </Carousel>
      </div>

      <div
        className="flex flex-col  w-full justify-center items-center relative overflow-hidden 
       "
      >
        <div className="absolute  hidden md:block  left-[-10px] bottom-0">
          <img
            src={bottom}
            className="h-[480px] w-[150px] lg:w-[280px] object-contain "
          ></img>
        </div>
        <div className="absolute hidden md:block  top-0 mt-[-122px] right-[-10px] ">
          <img
            src={top}
            className="h-[480px]  w-[150px] lg:w-[280px] object-contain"
          ></img>
        </div>
        <div className="container w-full py-4 max-w-screen-md">
          <div className="  flex flex-col items-center justify-center w-full ">
            <div className=" mx-auto w-full md:w-[60%]  mb-[20px] rounded-lg">
              <div className="text-center py-1 ">
                <span className="text-black text-xl">
                  Kurukshetra Tour Guide
                </span>
              </div>
              <div
                style={{
                  borderRadius: "10px",
                  boxShadow: `rgba(0, 0, 0, 0.4) 0px 5px 15px`,
                }}
                className="row  bg-white overflow-hidden mt-2"
              >
                {/* <div style={{ borderRadius: '0.275rem' }} className="rounded-t-lg bg-slate-100 ">
                <div className="viewall text-center pb-4">
                  <span>
                    <a
                      className="text-black"
                      href="https://kkrtour.com/viewall.html"
                    >
                      
                    </a>
                  </span>
                </div>
              </div> */}

                <div className="text-center ">
                  <div className="col-md-12 w-full flex items-center bg-white shadow-lg  justify-center flex-col">
                    <input
                      type="tel"
                      placeholder="Enter a number"
                      name="name"
                      id="telNumber"
                      className="  py- px-4 w-[91%] placeholder:opacity-100 placeholder:font-normal  placeholder:text-gray focus:outline-none focus:border-blue-500 mt-3 mb-1 md:my-5  border-gray-900 rounded-none text-lg font-bold  border-solid h-16 text-center bg-gray-50"
                      value={number}
                      maxlength="2"
                      style={{
                        borderRadius: "0.275rem",
                        boxShadow: `rgba(0, 0, 0, 0.1) 1px 1px 7px 1px`,
                      }}
                    />
                    <div className=" w-[90%] grid grid-cols-3 gap-0 md:gap-2   justify-center items-center mb-1 md:mb-2 mt-1 md:mt-4">
                      <div className=" mx- mb-1  ">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          onClick={()=>setNumber(1)}
                          className=" flex justify-center items-center w-[90%]  h-[60px]  transition duration-200 ease-linear shadow-md bord bor rounded-sm p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white m-1 md:m-2 "
                        >
                          <div
                            style={{ fontWeight: "400" }}
                            className="text-center text-[14px] font-semibold md:text-2xl  text-black"
                           
                          >
                            1
                          </div>
                        </div>
                      </div>
                      <div className="span4  inline-block mx- mb-1  ">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[90%] h-[60px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 "
                          onClick={()=>setNumber(2)}
                        >
                          <div
                            style={{ fontWeight: "400" }}
                            className="text-center text-[14px] md:text-2xl font-lato text-black"
                           
                          >
                            2
                          </div>
                        </div>
                      </div>
                      <div className="span4  inline-block mx- mb-1  ">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          onClick={()=>setNumber(3)}
                          className="flex justify-center items-center w-[90%] h-[60px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "400" }}
                            className="text-center text-[14px] md:text-2xl font-lato text-black"
                            
                          >
                            3
                          </div>
                        </div>
                      </div>
                      <div className="span4  inline-block mx- mb-1">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          onClick={()=>setNumber(4)}
                          className=" flex justify-center items-center w-[90%] h-[60px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "400" }}
                            className="text-center text-[14px] md:text-2xl font-lato text-black"
                           
                          >
                            4
                          </div>
                        </div>
                      </div>
                      <div className="span4  inline-block mx- mb-1">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[90%] h-[60px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "400" }}
                            onClick={()=>setNumber(5)}
                            className="text-center text-[14px] md:text-2xl font-lato text-black"
                            
                          >
                            5
                          </div>
                        </div>
                      </div>
                      <div className="span4  inline-block mx- mb-1">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[90%] h-[60px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "400" }}
                            onClick={()=>setNumber(6)}
                            className="text-center text-[14px] md:text-2xl font-lato text-black"
                            
                          >
                            6
                          </div>
                        </div>
                      </div>
                      <div className="span4  inline-block mx- mb-1">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[90%] h-[60px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "400" }}
                            onClick={()=>setNumber(7)}
                            className="text-center text-[14px] md:text-2xl font-lato text-black"
                            
                          >
                            7
                          </div>
                        </div>
                      </div>
                      <div className="span4  inline-block mx- mb-1">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className="flex justify-center items-center  w-[90%] h-[60px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "400" }}
                            onClick={()=>setNumber(8)}
                            className="text-center text-[14px] md:text-2xl font-lato text-black"
                            
                          >
                            8
                          </div>
                        </div>
                      </div>
                      <div className="span4  inline-block mx- mb-1">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[90%] h-[60px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "400" }}
                            onClick={()=>setNumber(9)}
                            className="text-center text-[14px] md:text-2xl font-lato text-black"
                            
                          >
                            9
                          </div>
                        </div>
                      </div>
                      <div className="span4  inline-block mx- mb-1">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className="flex justify-center items-center  w-[90%] h-[60px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "400" }}
                            onClick={()=>setNumber(0)}
                            className="text-center text-[14px] md:text-2xl font-lato text-black"
                            
                          >
                            0
                          </div>
                        </div>
                      </div>
                      <div className="span4  inline-block mx- mb-1">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[90%] h-[60px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-full p-2 md:p-4 bg-[#DDDDDD] text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "400" }}
                            className="text-center text-[14px] md:text-2xl font-lato text-black"
                          >
                            Cancel
                          </div>
                        </div>
                      </div>
                      <div className=" mx- mb-1">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[90%] h-[60px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-full p-2 md:p-4 bg-[#842029] text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "400" }}
                            className="text-center text-[14px] md:text-2xl font-lato text-white"
                          >
                            Go
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex  mb-[40px] w-full h-[90px] justify-end">
          <div className="w-[30%]  flex flex-col  justify-center items-center ">

            {share && <div className="flex items-center justify-between bg-white h-full mb-[5px] px-[10px]  w-[70%] md:w-[30%]  md:mr-[0px] mr-[30px] "  style={{ borderRadius: "0.375rem" , boxShadow: `rgba(0, 0, 0, 0.4) 1px 1px 7px 1px`,}}>
                           <img className="bg-cover w-[20px]" src={fb}></img>
                           <img className="bg-cover w-[20px]" src={inst}></img>
                           <img className="bg-cover w-[20px]" src={twi}></img>
                           <img className="bg-cover w-[20px]" src={shar}></img>
              </div>}
            <button
              style={{ borderRadius: "0.375rem" }}
              className="bg-[#842029]   w-[70%] md:w-[30%] text-[12px] md:text-[14px] py-0 md:mr-[0px] mr-[30px]  text-white"
              onClick={() => setShare((p) => !p)}
            >
              Share Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
