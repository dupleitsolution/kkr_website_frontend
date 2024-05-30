import API from "../APIroutes";
import PanormicModal from "../Components/PanormicModal";
import YoutubeModal from "../Components/YoutubeModal";
import Dvie from "../assets/imgs/3DVIE.png";
import IMG1 from "../assets/imgs/Image1.png";
import Backg from "../assets/imgs/Mback4.jpg";
import about1 from "../assets/imgs/about1.png";
import about11 from "../assets/imgs/about11.png";
import bottom from "../assets/imgs/bottom.png";
import camera from "../assets/imgs/camera-fill.png";
import headphones from "../assets/imgs/headphones.png";
import nearby from "../assets/imgs/nearby.png";
import pinmap from "../assets/imgs/pin-map-fill.png";
import quizimg from "../assets/imgs/quizimg.png";
import sightsceen from "../assets/imgs/sightsceen.png";
import top from "../assets/imgs/top.png";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function About() {
  const isRun = useRef(false);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let location = useLocation();
  let id = location.state;

  useEffect(() => {
    if (!id) {
      id = localStorage.getItem("id");
    }
    // Store id in localStorage
    localStorage.setItem("id", id);
  }, [id]);

  const [data, setData] = useState("");
  const [options, setOptions] = useState([]);
  const [virtualLink, setVirtualLink] = useState(true);
  const [apiCall, setApiCall] = useState(true);

  function combineLinksByTitle(dataa) {
    const result = {};
    const modifiedArray = [];

    // Iterate through the array
    dataa?.forEach((item) => {
      // Check if the title already exists in the result object
      if (result[item?.title]) {
        // If the title exists, add the link as a new property with a numbered suffix
        const linkNumber =
          Object.keys(result[item?.title]).filter((key) =>
            key.startsWith("link")
          ).length + 1;

        result[item.title][`link${linkNumber}`] = item?.link;
      } else {
        // If the title doesn't exist, create a new property with the title as key
        result[item?.title] = { title: item?.title, link1: item?.link };
      }
    });

    // Convert the result object to an array of values and push to modifiedArray
    Object.values(result).forEach((value) => modifiedArray.push(value));
    console.log("modified", modifiedArray);
    return modifiedArray;
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchTemple = await axios.get(`${API.fetchById}/${id}`);
      setData(fetchTemple?.data?.data);
      console.log("DATA", fetchTemple?.data?.data);
      setOptions(combineLinksByTitle(fetchTemple?.data?.data?.options));
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
      setApiCall(false);
    }
  };

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    fetchData();
  }, []);

  const [iframe, setIframe] = useState(false);
  const [ipframe, setIPframe] = useState(false);
  const [url, setUrl] = useState(false);
  // NEW CHANG
  const getImageSource = (title) => {
    if (title === "Virtual Guide") {
      return headphones;
    } else if (title === "Panoramic View") {
      return camera;
    } else if (title === "3D View") {
      return Dvie;
    } else if (title === "Sight Seeing") {
      return pinmap;
    } else if (title === "Tour Guide") {
      return sightsceen;
    } else if (title === "Near By (Directions)" || title === "Near By") {
      return nearby;
    } else if (title === "InfoQuest") {
      return quizimg;
    } else {
      return null; // Return null for titles with no corresponding image
    }
  };

  return (
    < div className=" ">
      {Loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="h-16 w-16 relative">
            <div className="absolute top-0 left-0 border-8 border-red-700 border-t-0 border-l-0 rounded-full w-full h-full animate-spin"></div>
          </div>
        </div>
      ) : data ? (
        <div
          id="05"
          class=" flex flex-col min-h-full items-center justify-center w-full "
        >
          <div className="col-md-4 mb-[0px] w-full pb-[px] ">
            <div class="border-solid borde z-0 p-0">
              <div class="  flex flex-col justify-center items-center w-full overflow-hidd  relativ">
                <div
                  id="05"
                  class=" inse-0 flex items-center -10  text-[#581e00]  justify-center w-full h- p-2 px-4 rounded-lg text-2xl md:text-2xl text-center   font-bold font-poppins "
                >
                  {data?.name}
                </div>
                <div className="bg-[#FBEBCC]">
                <div className="relative bg-[#FBEBCC] m-2 ">
                  <img
                    alt=""
                    src={data?.banner !== "" ? data.banner : IMG1}
                    className="bg-[#FBEBCC] border  img-fluid img-thumbnail object-fit h-[150px] md:h-[250px] min-w-[305px] md:w-[600px] bg-blend-darken"
                  />
                  <div className="flex gap-8 justify-center items-center bg-black bg-opacity-50 inset-0 absolute">
                    <a
                      href={data?.about}
                      target={data?.about !== "" ? "_blank" : undefined}
                      rel={
                        data?.about !== "" ? "noopener noreferrer" : undefined
                      }
                      className="heading-description bg-none hover:bg-[#FBEBCC] text-[#FBEBCC] rounded-xl py-2 px-4 text-lg font-semibold hover:text-[#581e00]"
                    >
                      About
                    </a>

                    <a
                      href={data?.map}
                      target={data?.map !== "" ? "_blank" : undefined}
                      className="heading-description bg-none hover:bg-[#FBEBCC] text-[#FBEBCC] rounded-xl py-2 px-4 text-lg font-semibold hover:text-[#581e00]"
                    >
                      Map
                    </a>

                    <a
                      href={data?.event}
                      target={data?.event !== "" ? "_blank" : undefined}
                      className="heading-description bg-none hover:bg-[#FBEBCC] text-[#FBEBCC] rounded-xl py-2 px-4 text-lg font-semibold hover:text-[#581e00]"
                    >
                      Event
                    </a>
                  </div>
                </div>
                </div>
                <div
                  id=""
                  class="absolut inset- flex items-center bg-white   justify-center w-full h- p-1 px-4 rounded-lg text-3xl md:text-4xl text-center  text-white  font-bold font-poppins "
                ></div>
              </div>
            </div>
          </div>

          <div className="overflow-hidde relative w-full">
            <div className="absolute  hidden md:block  left-[-10px] bottom-0">
              <img
                src={bottom}
                className="h-[480px] w-[150px] lg:w-[280px] object-contain "
              ></img>
            </div>
            <div className="absolute hidden md:block  top-[-510px]  right-[-10px] ">
              <img
                src={top}
                className="h-[480px]  w-[150px] lg:w-[280px] object-contain"
              ></img>
            </div>

            <section
              className=" flex flex-col justify-center items-center blog md:mt-[00px] bg-re-50   overflow-hidden   "
              id="blog"
            >
              {/* <h1
                className=" text-xl md:text-[24px] text-center heading mb-4 mt-[30px] "
                // style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)" }}
              >
                Sight <span className="text-[#581e00] ">Description</span>
              </h1> */}
              {/* <p className="text-center heading-description py-5 text-[14px] md:text-lg font-semibold text-[#052e16]">
                Check the following details
              </p> */}
              {/* <div className="  flex  flex-col md:flex-row gap-y-4 md:gap-10  justify-center items-center  md:w-full ">
                <div className="max-w-[300px] flex justify-center items-center">
                  <a
                    className="bg-[#FBEBCC] w-full p-2 md:w-[300px] post border border-sky-blue rounded-lg shadow-md transition duration-400 ease-in-out hover:transform hover:-translate-y-1"
                    href={data?.about}
                    target={data?.about !== "" ? "_blank" : undefined}
                    rel={data?.about !== "" ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (data?.about == "") {
                        e.preventDefault();
                      }
                    }}
                  >
                    <div className="relative w-full h-[200px]">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ankor_Wat_temple.jpg/800px-Ankor_Wat_temple.jpg"
                        alt=""
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
                        <h1 className="text-xl font-bold text-[#FBEBCC]">
                          ABOUT
                        </h1>
                        <a
                          href={data?.about}
                          target={data?.about !== "" ? "_blank" : undefined}
                          rel={
                            data?.about !== ""
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="heading-description py-2 text-sm font-semibold text-[#FBEBCC] hover:text-gray-300"
                        >
                          Get to know more about this temple
                        </a>
                      </div>
                    </div>
                  </a>
                </div>

                <div className=" w-full flex max-w-[300px]  justify-center items-center">
                  <a
                    className="bg-[#FBEBCC] w-full md:w-[300px] p-2 post border border-sky-blue rounded-lg shadow-md transition duration-400 ease-in-out hover:transform hover:-translate-y-1"
                    href={data?.map}
                    target={data?.map !== "" ? "_blank" : undefined}
                    onClick={(e) => {
                      if (data?.map == "") {
                        e.preventDefault();
                      }
                    }}
                  >
                    <div className="relative w-full h-[200px]">
                      <img
                        src="https://img.freepik.com/premium-vector/vector-city-map-kanpur-uttar-pradesh-india_509477-337.jpg?"
                        alt=""
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
                        <h1 className="text-xl font-bold text-[#FBEBCC]">
                          MAP
                        </h1>
                        <a
                          href={data?.map}
                          target={data?.map !== "" ? "_blank" : undefined}
                          className="heading-description py-2 text-sm font-semibold text-[#FBEBCC] hover:text-gray-300"
                        >
                          Know the exact location
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="w-full flex max-w-[300px] justify-center  items-center">
                  <a
                    className="bg-[#FBEBCC] w-full md:w-[300px] p-2 post border border-sky-blue rounded-lg shadow-md transition duration-400 ease-in-out hover:transform hover:-translate-y-1"
                    href={data?.event}
                    target={data?.event !== "" ? "_blank" : undefined}
                    onClick={(e) => {
                      if (data?.event == "") {
                        e.preventDefault();
                      }
                    }}
                  >
                    <div className="relative w-full h-[200px]">
                      <img
                        src="https://img.freepik.com/premium-photo/long-shot-back-view-crowd-indian-people-diwali-generative-ai_705708-14867.jpg?size=626&ext=jpg&uid=R139032141&ga=GA1.1.795464967.1712651002&semt=ais_user-customized"
                        alt=""
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
                        <h1 className="text-xl font-bold text-[#FBEBCC]">
                          EVENT
                        </h1>
                        <a
                          href={data?.event}
                          target={data?.event !== "" ? "_blank" : undefined}
                          className="heading-description py-2 text-sm font-semibold text-[#FBEBCC] hover:text-gray-300"
                        >
                          Checkout all related events & more
                        </a>
                      </div>
                    </div>
                  </a>
                </div>
              </div> */}
              <section className=" pt- mb-2 md:mb-14 md:mt-10 mt-2 flex flex-col items-center justify-center    w-[90%]">
                <h1 className="text-xl mb-2 md:text-[24px] text-center ">
                  Unveiling{" "}
                  <span className="text-[#581e00]">
                    the Ultimate Exploration
                  </span>
                </h1>
                <p className="text-center heading-description py-0 md:py-4 text-[14px] md:text-lg font-semibold text-[#052e16]">
                  Your Path to Adventure Awaits!.
                </p>
                <div className="flex flex-wrap justify-center items-center  md:gap-6 ">
                  {iframe && (
                    <YoutubeModal
                      src={url}
                      toggle={() => setIframe((p) => !p)}
                    />
                  )}
                  {ipframe && (
                    <PanormicModal
                      src={url}
                      toggle={() => setIPframe((p) => !p)}
                    />
                  )}
                  {options?.map((option, index) => {
                    if (option?.link1 === "" || option?.link1 == "#") {
                      return null; // Skip rendering if link is empty
                    }
                    if (option.title == "Virtual Guide") {
                      return (
                        <div
                          key={index}
                          className="border border-sky-blue rounded-xl flex flex-col items-center cursor-pointer shadow-lg m-2 h-[75px] w-[100px] md:h-[100px] md:w-[150px] transition duration-400 ease-in-out hover:bg-[#DDDDDD] hover:transform hover:-translate-y-1 border-solid rounded-lg p-2"
                          // onClick={(e) => {
                          //   e.stopPropagation();
                          //   setIframe((prevState) => !prevState);
                          //   //setUrl(option.link1);
                          //   setUrl(virtualLink?option.link1:option.link2);
                          // }}
                        >
                          <div className="sub-img  d-flex flex justify-center">
                            <img
                              src={getImageSource(option?.title)}
                              alt={option?.title}
                              className={`max-w-full w-25 ${
                                option.image === quizimg
                                  ? "h-[15px] md:h-[30px]"
                                  : "h-[20px] md:h-[40px]"
                              } bg-cover mb-2 cover justify-center items-center text-center`}
                            />
                          </div>
                          <span className="text-[10px] md:text-sm font-semibold ">
                            {option.title}
                          </span>
                          {option?.link2?.length > 2 && (
                            <select
                              className="flex items-center text-[10px] h-[10%] placeholder:language bg-[#DDDDDD] hover:bg-white"
                              onChange={(e) => {
                                e.stopPropagation();
                                const selectedLanguage = e.target.value;
                                setVirtualLink((p) => !p);
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              <option value="" disabled selected>
                                Select Language
                              </option>
                              <option
                                value="english"
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              >
                                English
                              </option>
                              <option
                                value="hindi"
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              >
                                Hindi
                              </option>
                            </select>
                          )}

                          <p className="text-sm text-gray-500">
                            <a
                              className="flex items-center text-[10px] md:text-sm  text-blue-600 hover:underline"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIframe((p) => !p);
                                setUrl(
                                  virtualLink ? option?.link1 : option?.link2
                                );
                              }}
                              target="_blank" // Open link in a new tab
                              rel="noopener noreferrer" // Add rel attribute for security reasons
                            >
                              See our guidelines{" "}
                            </a>
                          </p>
                        </div>
                      );
                    } else if (option.title == "Panoramic View") {
                      if (option?.link1 == "" || option?.link1 == "#") {
                        return null; // Skip rendering if link is empty
                      }
                      return (
                        <a
                          key={index}
                          className="border border-sky-blue rounded-xl flex flex-col items-center cursor-pointer shadow-lg m-2 h-[75px] w-[100px] md:h-[100px] md:w-[150px] transition duration-400 ease-in-out hover:bg-[#DDDDDD] hover:transform hover:-translate-y-1 border-solid rounded-lg p-2"
                          // onClick={() => {
                          //   setIPframe((prevState) => !prevState);
                          //   setUrl(option.link);
                          // }}
                          onClick={(e) => {
                            // e.stopPropagation();
                            setIPframe((p) => !p);
                            setUrl(option.link1);
                          }}
                          target="_blank" // Open link in a new tab
                          rel="noopener noreferrer" // Add rel attribute for security reasons
                        >
                          <div className="sub-img  d-flex flex justify-center">
                            <img
                              src={getImageSource(option.title)}
                              alt={option.title}
                              className={`max-w-full w-25 ${
                                option.image === quizimg
                                  ? "h-[22px] md:h-[45px]"
                                  : "h-[20px] md:h-[40px]"
                              } bg-cover mb-2 cover justify-center items-center text-center`}
                            />
                          </div>
                          <h3 className="text-[10px] md:text-sm font-semibold mb-">
                            {option.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            <a
                              className="flex items-center text-[10px] md:text-sm text-blue-600 hover:underline"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIPframe((p) => !p);
                                setUrl(option.link1);
                              }}
                              target="_blank" // Open link in a new tab
                              rel="noopener noreferrer" // Add rel attribute for security reasons
                            >
                              See our guidelines{" "}
                            </a>
                          </p>
                        </a>
                      );
                    } else {
                      return (
                        <a
                          key={index}
                          className=" border border-sky-blue rounded-xl flex flex-col items-center cursor-pointer shadow-lg m-2 h-[75px] w-[100px] md:h-[100px] md:w-[150px]  transition duration-400 ease-in-out hover:bg-[#DDDDDD] hover:transform hover:-translate-y-1 border-solid rounded-lg p-2"
                          href={option.link1}
                          target="_blank" // Open link in a new tab
                          rel="noopener noreferrer" // Add rel attribute for security reasons
                        >
                          <div className="sub-img  d-flex flex justify-center">
                            <img
                              src={getImageSource(option?.title)}
                              alt={option?.title}
                              className={`max-w-full w-25 ${
                                option?.image === quizimg
                                  ? "h-[20px] md:h-[40px]"
                                  : "h-[20px] md:h-[40px]"
                              } bg-cover mb-2 cover justify-center items-center text-center`}
                            />
                          </div>
                          <h3 className="text-[10px] md:text-sm font-semibold mb-">
                            {option?.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            <a
                              className="flex items-center text-[10px] md:text-sm text-blue-600 hover:underline"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIPframe((p) => !p);
                                setUrl(option.link1);
                              }}
                              target="_blank" // Open link in a new tab
                              rel="noopener noreferrer" // Add rel attribute for security reasons
                            >
                              See our guidelines{" "}
                            </a>
                          </p>
                        </a>
                      );
                    }
                  })}
                </div>
              </section>

              {/* <div className="flex text-center items-center justify-center m-2 text-xl hover:bg-slate-600 text-white rounded-xl w-[20%] md:w-[6%] bg-[#842029]">
                <Link
                  className=" flex items-center justify-center text-center mb-1 p-1"
                  to="/"
                >
                  Home
                </Link>
              </div> */}
            </section>
          </div>
        </div>
      ) : (
        // If no temple data is found
        <div className="flex justify-center items-center h-screen">
          <p>No tourist Place found!</p>
        </div>
      )}
    </div>
  );
}

export default About;
