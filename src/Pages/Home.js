import IMG1 from "../assets/imgs/Image1.png";
import IMG2 from "../assets/imgs/Image2.png";
import IMG3 from "../assets/imgs/Image3.png";
import IMG11 from "../assets/imgs/Image11.png";
import IMG22 from "../assets/imgs/Image22.png";
import IMG33 from "../assets/imgs/Image33.png";
import Backg from "../assets/imgs/Mback4.jpg";
import bottom from "../assets/imgs/bottom.png";
import fb from "../assets/imgs/facebook.svg";
import inst from "../assets/imgs/instagram.svg";
import shar from "../assets/imgs/share.svg";
import top from "../assets/imgs/top.png";
import twi from "../assets/imgs/twitter.svg";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const [telNumber, setTelNumber] = useState("");
  const [share, setShare] = useState(false);
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

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

  const onGoclick = (id) => {
    navigate("/about", { state: number });
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
          <div className="relative">
            <img
              src={IMG1}
              alt=""
              className="absolute d-block w-full  h-[90px] md:h-[250px] object-cover "
            />
          </div>
          <div className="relative" >
            <img
              src={IMG2}
              alt=""
              className="d-block w-full  h-[90px] md:h-[250px] obsolute bg-fit "
            />
          </div>
          <div className="relative">
            <img
              src={IMG3}
              alt=""
              className="obsolute d-block  w-full   h-[90px] md:h-[250px] object-cover  "
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
              <div className="text-center  flex flex-col justify-center items-center py-1 ">
                <span className="text-black text-xl md:text-[24px] ">
                  Kurukshetra Tour Guide
                </span>
                <Link
                  to="/view"
                  style={{
                    borderRadius: "5px",
                    boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 2px 0px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    localStorage.setItem("page", JSON.stringify(1));
                  }}
                >
                  <span className="text-[16px] cursor-pointer mx-2 hover:scale-90  w-[20% ">
                    View All
                  </span>
                </Link>
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
                      className="  py- px-4 w-[91%] placeholder:opacity-100 placeholder:font-normal  placeholder:text-gray focus:outline-none focus:border-blue-500 mt-3 mb-1 md:my-5  border-gray-900 rounded-none text-lg font-semibold  border-solid h-[35px] md:h-[50px] text-center bg-gray-50"
                      value={number}
                      min={0}
                      max={99}
                      maxLength={2}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault(); // Prevent form submission
                          navigate("/about", { state: number });
                        }
                      }}
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        const sanitizedValue = inputValue.replace(/\D/g, "");
                        if (sanitizedValue !== "") {
                          const parsedValue = parseInt(sanitizedValue, 10);
                          if (
                            !isNaN(parsedValue) &&
                            parsedValue >= 0 &&
                            parsedValue <= 99
                          ) {
                            setNumber(parsedValue);
                          }
                        } else {
                          setNumber("");
                        }
                      }}
                      style={{
                        borderRadius: "0.275rem",
                        boxShadow: `rgba(0, 0, 0, 0.1) 1px 1px 7px 1px`,
                      }}
                    />
                    <div className=" w-[90%] grid grid-cols-3 gap-0 md:gap-2   justify-center items-center  mb-1 md:mb-2 mt-1 md:mt-4">
                      <div
                        className=" mx- mb-1 py-2  "
                        onClick={() =>
                          setNumber((p) => (p.length >= 2 ? p : p + "1"))
                        }
                      >
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[80%]  h-[50px]  transition duration-200 ease-linear shadow-md bord bor rounded-sm p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-[#D1C2AA] hover:text-white m-1 md:m-2 "
                        >
                          <div
                            style={{ fontWeight: "600" }}
                            className="text-center text-[26px] font-bold md:text-2xl  text-black"
                          >
                            1
                          </div>
                        </div>
                      </div>
                      <div
                        className="span4  inline-block mx- mb-1   "
                        onClick={() =>
                          setNumber((p) => (p.length >= 2 ? p : p + "2"))
                        }
                      >
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[80%] h-[50px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-[#D1C2AA] hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "600" }}
                            className="text-center text-[26px] md:text-2xl font-bold text-black"
                          >
                            2
                          </div>
                        </div>
                      </div>
                      <div
                        className="span4  inline-block mx- mb-1  "
                        onClick={() =>
                          setNumber((p) => (p.length >= 2 ? p : p + "3"))
                        }
                      >
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className="flex justify-center items-center w-[80%] h-[50px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-[#D1C2AA] hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "600" }}
                            className="text-center text-[26px] md:text-2xl font-bold text-black"
                          >
                            3
                          </div>
                        </div>
                      </div>
                      <div
                        className="span4  inline-block mx- mb-1"
                        onClick={() =>
                          setNumber((p) => (p.length >= 2 ? p : p + "4"))
                        }
                      >
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[80%] h-[50px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-[#D1C2AA] hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "600" }}
                            className="text-center text-[26px] md:text-2xl font-bold text-black"
                          >
                            4
                          </div>
                        </div>
                      </div>
                      <div
                        className="span4  inline-block mx- mb-1"
                        onClick={() =>
                          setNumber((p) => (p.length >= 2 ? p : p + "5"))
                        }
                      >
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[80%] h-[50px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-[#D1C2AA] hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "600" }}
                            className="text-center text-[26px] md:text-2xl font-bold text-black"
                          >
                            5
                          </div>
                        </div>
                      </div>
                      <div
                        className="span4  inline-block mx- mb-1"
                        onClick={() =>
                          setNumber((p) => (p.length >= 2 ? p : p + "6"))
                        }
                      >
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[80%] h-[50px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-[#D1C2AA] hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "600" }}
                            className="text-center text-[26px] md:text-2xl font-bold text-black"
                          >
                            6
                          </div>
                        </div>
                      </div>
                      <div
                        className="span4  inline-block mx- mb-1"
                        onClick={() =>
                          setNumber((p) => (p.length >= 2 ? p : p + "7"))
                        }
                      >
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[80%] h-[50px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-[#D1C2AA] hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "600" }}
                            className="text-center text-[26px] md:text-2xl font-bold text-black"
                          >
                            7
                          </div>
                        </div>
                      </div>
                      <div
                        className="span4  inline-block mx- mb-1"
                        onClick={() =>
                          setNumber((p) => (p.length >= 2 ? p : p + "8"))
                        }
                      >
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className="flex justify-center items-center  w-[80%] h-[50px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-[#D1C2AA] hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "600" }}
                            className="text-center text-[26px] md:text-2xl font-bold text-black"
                          >
                            8
                          </div>
                        </div>
                      </div>
                      <div
                        className="span4  inline-block mx- mb-1"
                        onClick={() =>
                          setNumber((p) => (p.length >= 2 ? p : p + "9"))
                        }
                      >
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[80%] h-[50px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-[#D1C2AA] hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "600" }}
                            className="text-center text-[26px] md:text-2xl font-bold text-black"
                          >
                            9
                          </div>
                        </div>
                      </div>
                      <div
                        className="span4  inline-block mx- mb-1"
                        onClick={() =>
                          setNumber((p) => (p.length >= 2 ? p : p + "0"))
                        }
                      >
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className="flex justify-center items-center  w-[80%] h-[50px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-lg p-2 md:p-4 bg-[#FBEBCC] bg-opacity-60 text-gray-700 cursor-pointer hover:bg-[#D1C2AA] hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "600" }}
                            className="text-center text-[26px] font-bold md:text-2xl  text-black"
                          >
                            0
                          </div>
                        </div>
                      </div>
                      <div className="span4  inline-block mx- mb-1">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[80%] h-[50px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-full p-2 md:p-4 bg-[#DDDDDD] text-gray-700 cursor-pointer hover:bg-[#D1C2AA] hover:text-white  m-2 "
                        >
                          <div
                            style={{ fontWeight: "600" }}
                            className="text-center text-[26px] md:text-2xl font-bold text-black"
                            onClick={() => {
                              setNumber((p) => p.substring(0, p.length - 1));
                            }}
                          >
                            Clear
                          </div>
                        </div>
                      </div>
                      <div className=" mx- mb-1">
                        <div
                          style={{ borderRadius: "0.275rem" }}
                          className=" flex justify-center items-center w-[80%] h-[50px] transition duration-200 ease-linear shadow-md borde border-gray-400 rounded-full p-2 md:p-4 bg-[#842029] text-gray-700 cursor-pointer hover:bg-gray-600 hover:text-white  m-2 "
                          onClick={onGoclick}
                        >
                          <div
                            style={{ fontWeight: "600" }}
                            className="text-center text-[26px] md:text-2xl font-bold text-white"
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
        <div className=" flex  mb-[40px] w-full h-[40px] justify-end">
          <div className="w-[30%]  flex flex-col  justify-end items-end ml-[0px] md:mr-[20px]">
            {share && (
              <div
                className="flex items-center justify-between bg-white h-full mb-[5px] px-[10px] cursor-pointer w-[70%] md:w-[30%]  md:mr-[0px] mr-[30px] "
                style={{
                  borderRadius: "0.375rem",
                  boxShadow: `rgba(0, 0, 0, 0.4) 1px 1px 7px 1px`,
                }}
              >
                <img
                  className="bg-cover w-[20px]"
                  src={fb}
                  onClick={() => {
                    window.location.href = "https://www.facebook.com/";
                  }}
                ></img>
                <img
                  className="bg-cover w-[20px]"
                  src={inst}
                  onClick={() => {
                    window.location.href =
                      "https://www.instagram.com/sem/campaign/signup/?campaign_id=13530338610&extra_1=s%7Cc%7C547419127631%7Ce%7Cinstagram%20%27%7C&placement&creative=547419127631&keyword=instagram%20%27&partner_id=googlesem&extra_2=campaignid%3D13530338610%26adgroupid%3D126262414014%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-1321618851291%26loc_physical_ms%3D9303130%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=Cj0KCQjwxeyxBhC7ARIsAC7dS3_lpZBxjoLci5ermXU1r4K5E2SZwthlUhrUecKiKD69YN21L3o0Rt4aAtUBEALw_wcB";
                  }}
                ></img>
                <img
                  className="bg-cover w-[20px]"
                  src={twi}
                  onClick={() => {
                    window.location.href = "https://twitter.com/?lang=en";
                  }}
                ></img>
                {/* <img
                  className="bg-cover w-[20px]"
                  src={shar}
                  onClick={() => {
                    window.location.href = "https://www.facebook.com/";
                  }}
                ></img> */}
              </div>
            )}
            <button
              style={{ borderRadius: "0.375rem" }}
              className="bg-[#842029]   w-[70%] md:w-[30%] text-[12px] md:text-[14px] py-0 md:mr-[0px] mr-[30px] hover:bg-gray-600  text-white"
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
