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
import YoutubeModal from "../Components/YoutubeModal";

function About() {
  const options = [
    {
      image: headphones,
      title: "Virtual Guide",
      link: "https://www.youtube.com/embed/UjePZo0O9HU",
    },
    {
      image: camera,
      title: "Panoramic View",
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
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
      title: "Panorama & Science Centre",
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
    },
  ];

  const [iframe,setIframe] = useState(false)

  const getSrcByScreenSize = () => {
    if (window.innerWidth < 768) {
      return about11; // Provide the source for the small image
    } else {
      return about1; // Provide the source for the large image
    }
  };
  return (
    <div
      style={
        {
          // backgroundImage: `url('https://static.wixstatic.com/media/45d3ca_450e2d25b6a3441d93b82c9e4aee8fb5~mv2.png/v1/fill/w_930,h_735,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/45d3ca_450e2d25b6a3441d93b82c9e4aee8fb5~mv2.png')`,
        }
      }
      className="relative flex-col text-center bg-cover bg-center bg-no-repeat items-center inset-0 justify-center text-4xl font-semibold bg-[#d57e2f shadow-l"
    >
      <div id="05" class=" flex flex-col  items-center justify-center">
        <div className="col-md-4 mb-[0px] w-full pb-[px] ">
          <div class="border-solid border z-0 p-0">
            <div class="backdrop-blur-3xl flex flex-col justify-center items-center w-full overflow-hidden  relative">
              <img
                alt=""
                src={getSrcByScreenSize()}
                class="img-fluid img-thumbnail bg-cover h-[350px] md:h-[250px] w-[1370px] bg-blend-darken bg-black bg-opacity-40"
              />

              {/* <div class="absolute inset-0 bg-[#eccca3] opacity-30"></div> */}

              <div
                id="05"
                class="absolute inset-0 flex items-center bg-black bg-opacity-40 justify-center w-full h- p-1 px-4 rounded-lg text-3xl md:text-4xl text-center  text-white  font-bold font-poppins "
              >
                Panorama & Science Centre
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div className=" flex flex-col justify-end  md:mt-[-260px]  items-end w-full  ">
          <img src={top} className="hidden md:block md:h-[650px]"></img>
        </div> */}

        <div className="overflow-hidden relative b-red-600">
          {/* <div className="absolute top-0 right-0  items-end w-full  ">
          <img src={top} className="hidden md:block md:h-[650px]"></img>
        </div> */}

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
            className="blog md:mt-[00px] bg-re-50  overflow-hidden  "
            id="blog"
          >
            <h1
              className=" text-3xl md:text-4xl text-center heading mt-[50px] "
              // style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)" }}
            >
              Sight <span className="text-[#581e00] ">Description</span>
            </h1>
            <p className="text-center heading-description py-5 text-[14px] md:text-lg font-semibold text-[#052e16]">
              Check the following details
            </p>
            <div className="container flex md:flex-row flex-col md:row-cols-3 gap-[40px] justify-center items-center ">
              <div className="bg-[#FBEBCC] w-[300px] post border border-sky-blue rounded-lg shadow-md transition duration-400 ease-in-out hover:transform hover:-translate-y-1">
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
              <div className="bg-[#FBEBCC] w-[300px] post border border-sky-blue rounded-lg shadow-md transition duration-400 ease-in-out hover:transform hover:-translate-y-1">
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
              <div className="bg-[#FBEBCC] w-[300px] post border border-sky-blue rounded-lg shadow-md transition duration-400 ease-in-out hover:transform hover:-translate-y-1">
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
          </section>

          <section className="sub-service pt-10 mt-10 flex flex-col items-center justify-center">
            <h1
              className="text-3xl md:text-4xl text-center heading"
              // style={{ textShadow: "2px 2px 3px rgba(0, 0, 0, 0.5)" }}
            >
              Unveiling{" "}
              <span className="text-[#581e00]">the Ultimate Exploration</span>
            </h1>
            <p className="text-center heading-description py-5 text-[14px] md:text-lg font-semibold text-[#052e16]">
              Your Path to Adventure Awaits!.
            </p>
            <div className="flex flex-wrap gap-30 m-[30px] justify-center items-center">
            { iframe &&
                     <YoutubeModal toggle={()=>setIframe((p)=>!p)}/>
                     }
              {options.map((option, index) => {
                if (option.title == "Virtual Guide") {
                  return (
                    <div
                      key={index}
                      className="border border-sky-blue flex flex-col items-center cursor-pointer shadow-lg m-2 h-[200px] w-[250px] transition duration-400 ease-in-out hover:bg-[#DDDDDD] hover:transform hover:-translate-y-1 border-solid rounded-lg p-4"
                      onClick={()=>setIframe((p)=>!p)}
                    >
                      {/* Embedded YouTube video */}
                     
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
                        <div
                          
                          className="flex items-center text-sm text-blue-600 hover:underline"
                          onClick={()=>setIframe((p)=>!p)}
                        >
                          See our guidelines{" "}
                          
                        </div>
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
                            option.image === quizimg ? "h-[60px]" : "h-[80px]"
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
        </div>
        {/* <div class="p-4 mystyle w-[90%]">
          <div class="col-md-12">
            <div class="px-4 py-2  flex flex-col min-w-0 break-words">
              <div class="relative mb-[30px] flex flex-col min-w-0 break-words   rounded-lg">
                <div class="   w-[100%] grid grid-cols-3 gap-2 ">
                  {options?.map((item, index) => {
                    return (
                      <div className="max-w-sm p-6 m-2 cursor-pointer transform transition-transform hover:scale-110 bg-[#f1d092]   rounded-xl shadow ">
                        <div className="transform transition-transform  ">
                          <img
                            src={item.image}
                            className="bg-cover w-8 h-8 mb-2 text-center items-center justify-center"
                          />

                          <p className="mb-1 text-xl text-left  font-semibold tracking-tight text-gray-900 dark:text-white">
                            {item.title}
                          </p>

                          <div className="flex flex-start">
                            <a
                              href={item.link}
                              className=" flex items-center text-sm  text-blue-600 hover:underline"
                            >
                              See our guideline
                              <svg
                                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="border-b mt-[20px] border-solid border-[#afadad] w-[90%] mb-4 ml-[40px]"></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="absolute  md:flex mb-[20px] md:justify-between w-full mt-[-500px]">
        <img className=" hidden md:flex h-[500px]" src={bottom}></img>
        
      </div> */}
    </div>
  );
}

export default About;
