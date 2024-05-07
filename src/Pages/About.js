import YoutubeModal from "../Components/YoutubeModal";
import Dvie from "../assets/imgs/3DVIE.png";
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
import React, { useState } from "react";

function About() {
  const options = [
    {
      image: headphones,
      title: "Virtual Guide",
      link: "https://www.youtube.com/embed/UjePZo0O9HU?si=ui-ivIKPo-0M8AIM",
    },
    {
      image: camera,
      title: "Panoramic View",
      link: "https://teliportme.com/view/2069514/vr",
    },
    {
      image: Dvie,
      title: "3D View",
      link: "https://www.mappls.com/3d@jrvseoao,omqjoasf,lhtllqelaqovsatej,l,f,f,es,f,f,f,zdata",
    },
    {
      image: nearby,
      title: "Sight Seeing",
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
    },

    {
      image: pinmap,
      title: "Near By",
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
    },

    {
      image: sightsceen,
      title: "Tour Guide",
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
    },

    {
      image: quizimg,
      title: "InfoQuest",
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
    },
  ];

  const [iframe, setIframe] = useState(false);
  const [url, setUrl] = useState(false);
  const getSrcByScreenSize = () => {
    if (window.innerWidth < 768) {
      return about11; // Provide the source for the small image
    } else {
      return about1; // Provide the source for the large image
    }
  };
  return (
    <div
    
      className="  flex-col text-center justify-center text-4xl font-semibold bg-[#d57e2f  shadow-l  w-full"
    >
      <div id="05" class=" flex flex-col  items-center justify-center w-full">
        <div className="col-md-4 mb-[0px] w-full pb-[px] ">
          <div class="border-solid border z-0 p-0">
            <div class="backdrop-blur-3xl flex flex-col justify-center items-center w-full overflow-hidden  relative">
              <img
                alt=""
                src={getSrcByScreenSize()}
                class="img-fluid img-thumbnail bg-cover h-[350px] md:h-[250px] min-w-[305px] w-[100%]  bg-blend-darken bg-black bg-opacity-40"
              />


              <div
                id="05"
                class="absolute inset-0 flex items-center bg-black bg-opacity-40 justify-center w-full h- p-1 px-4 rounded-lg text-3xl md:text-4xl text-center  text-white  font-bold font-poppins "
              >
                Panorama & Science Centre
              </div>
            </div>
          </div>
        </div>


        <div className="overflow-hidden relative w-full">
     

          <div className="absolute  hidden md:block  left-[-10px] bottom-0">
            <img
              src={bottom}
              className="h-[480px] w-[150px] lg:w-[280px] object-contain "
            ></img>
          </div>
          <div className="absolute hidden md:block  top-[-100px]  right-[-10px] ">
            <img
              src={top}
              className="h-[480px]  w-[150px] lg:w-[280px] object-contain"
            ></img>
          </div>

          <section
            className="blog md:mt-[00px] bg-re-50  overflow-hidden  relative "
            id="blog"
          >
            <h1
              className=" text-xl md:text-[24px] text-center heading mt-[50px] "
              // style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)" }}
            >
              Sight <span className="text-[#581e00] ">Description</span>
            </h1>
            <p className="text-center heading-description py-5 text-[14px] md:text-lg font-semibold text-[#052e16]">
              Check the following details
            </p>
            <div className="  flex flex-wrap gap-y-4 md:gap-10  justify-center items-center  md:w-full " >
              <div className="   max-w-[300px] flex justify-center items-center ">
              <div className="bg-[#FBEBCC] w-full p-2 md:w-[300px] post border border-sky-blue rounded-lg shadow-md transition duration-400 ease-in-out hover:transform hover:-translate-y-1">
                <div className="blog-img">
                  <img
                    src="https://img.freepik.com/premium-vector/research-marketing-concept-with-creative-team-men-women-projecting-discuss-new-project_87771-23495.jpg?"
                    alt=""
                    className="w-full h-[200px]"
                  />
                </div>
                <div className=" mt-3 p-4">
                  <h1 className="text-xl font-bold text-[#581e00]">ABOUT </h1>
                  <a
                    href="https://kurukshetra.gov.in/panorama/#about"
                    className="text-center heading-description py-5 text-sm font-semibold text-[#581e00]"
                  >
                    Get to know more about this temple
                  </a>
                </div>
              </div>
              </div>
            
              <div className=" w-full flex max-w-[300px]  justify-center items-center">
              <div className="bg-[#FBEBCC] w-full md:w-[300px] p-2 post border border-sky-blue rounded-lg shadow-md transition duration-400 ease-in-out hover:transform hover:-translate-y-1">
                <div className="blog-img">
                  <img
                    src="https://img.freepik.com/premium-vector/vector-city-map-kanpur-uttar-pradesh-india_509477-337.jpg?"
                    alt=""
                    className="w-full h-[200px]"
                  />
                </div>
                <div className=" mt-3 p-4">
                  <h1 className="text-xl font-bold text-[#581e00]">MAP</h1>
                  <a
                    href="https://kurukshetra.gov.in/history"
                    className="text-center heading-description py-5 text-sm font-semibold text-[#581e00]"
                  >
                    know the exact location
                  </a>
                </div>
              </div>
              </div>
            <div className="w-full flex max-w-[300px] justify-center  items-center">
            <div className="bg-[#FBEBCC] w-full md:w-[300px] p-2 post border border-sky-blue rounded-lg shadow-md transition duration-400 ease-in-out hover:transform hover:-translate-y-1">
                <div className="blog-img">
                  <img
                    src="https://img.freepik.com/premium-photo/colorful-vector-art-festive-celebration-ai-generated_731790-11320.jpg?"
                    alt=""
                    className="w-full h-[200px]"
                  />
                </div>
                <div className=" mt-3 p-4">
                  <h1 className="text-xl font-bold text-[#581e00]">EVENT </h1>
                  <a
                    href="https://kurukshetra.gov.in/events-in-kurukshetra/"
                    className="text-center heading-description py-5 text-sm font-semibold text-[#581e00]"
                  >
                    Checkout all related events & more
                  </a>
                </div>
              </div>
            </div>
            </div>
            <section className=" pt-10  mt-10 flex flex-col items-center justify-center   w-full">
            <h1
              className="text-xl md:text-[24px] text-center "
            >
              Unveiling{" "}
              <span className="text-[#581e00]">the Ultimate Exploration</span>
            </h1>
            <p className="text-center heading-description py-5 text-[14px] md:text-lg font-semibold text-[#052e16]">
              Your Path to Adventure Awaits!.
            </p>
            <div className="flex flex-wrap justify-center items-center  md:gap-6 ">
              {iframe && (
                <YoutubeModal src={url} toggle={() => setIframe((p) => !p)} />
              )}
              {options?.map((option, index) => {
                if (option.title == "Virtual Guide") {
                  return (
                    <div
                      key={index}
                      className="border border-sky-blue flex flex-col items-center cursor-pointer shadow-lg m-2 h-[200px] w-[250px] transition duration-400 ease-in-out hover:bg-[#DDDDDD] hover:transform hover:-translate-y-1 border-solid rounded-lg p-4"
                      onClick={() => {
                        setIframe((prevState) => !prevState);
                        setUrl(option.link);
                      }}
                    >

                      <div className="sub-img  d-flex flex justify-center">
                        <img
                          src={option.image}
                          alt={option.title}
                          className={`max-w-full w-25 ${
                            option.image === quizimg ? "h-[60px]" : "h-[80px]"
                          } bg-cover mb-4 cover justify-center items-center text-center`}
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-4">
                        {option.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        <a
                          className="flex items-center text-sm text-blue-600 hover:underline"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIframe((p) => !p);
                            setUrl(option.link);
                          }}
                        >
                          See our guidelines{" "}
                        </a>
                      </p>
                    </div>
                  );
                } else if (option.title == "Panoramic View") {
                  return (
                    <div
                      key={index}
                      className="border border-sky-blue flex flex-col items-center cursor-pointer shadow-lg m-2 h-[200px] w-[250px] transition duration-400 ease-in-out hover:bg-[#DDDDDD] hover:transform hover:-translate-y-1 border-solid rounded-lg p-4"
                      onClick={() => {
                        setIframe((prevState) => !prevState);
                        setUrl(option.link);
                      }}
                    >

                      <div className="sub-img  d-flex flex justify-center">
                        <img
                          src={option.image}
                          alt={option.title}
                          className={`max-w-full w-25 ${
                            option.image === quizimg ? "h-[90px]" : "h-[80px]"
                          } bg-cover mb-4 cover justify-center items-center text-center`}
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-4">
                        {option.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        <a
                          className="flex items-center text-sm text-blue-600 hover:underline"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIframe((p) => !p);
                            setUrl(option.link);
                          }}
                        >
                          See our guidelines{" "}
                        </a>
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <a
                      key={index}
                      className=" border border-sky-blue flex flex-col items-center cursor-pointer shadow-lg m-2 h-[200px] w-[250px]  transition duration-400 ease-in-out hover:bg-[#DDDDDD] hover:transform hover:-translate-y-1 border-solid rounded-lg p-4"
                      href={option.link}
                    >
                      <div className="sub-img  d-flex flex justify-center">
                        <img
                          src={option.image}
                          alt={option.title}
                          className={`max-w-full w-25 ${
                            option.image === quizimg ? "h-[80px]" : "h-[80px]"
                          } bg-cover mb-4 cover justify-center items-center text-center`}
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-4">
                        {option.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        <a
                          href={option.link}
                          className="flex items-center text-sm  text-blue-600 hover:underline"
                        >
                          See our guidelines{" "}
                          <svg
                            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                            />
                          </svg>
                        </a>
                      </p>
                    </a>
                  );
                }
              })}
            </div>
          </section>
          </section>

         
        </div>
   
      </div>
   
    </div>
  );
}

export default About;
