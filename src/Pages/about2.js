import React from "react";
import Backg from "../assets/imgs/bak3.jpg";
import camera from "../assets/imgs/camera-fill.png";
import headphones from "../assets/imgs/headphones.png";
import Dvie from "../assets/imgs/3DVIE.png";
import nearby from "../assets/imgs/nearby.png";
import pinmap from "../assets/imgs/pin-map-fill.png";
import sightsceen from "../assets/imgs/sightsceen.png";
import quizimg from "../assets/imgs/quizimg.png";
import Chariot from "../assets/imgs/chariot2.png";
import Animation from "../assets/imgs/Animation.webm";



const About2 = () => {
  const options = [
    {
      image: headphones,
      title: "Virtual Guide",
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
    },
    {
      image: camera,
      title: "Panoramic View",
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
    },
    {
      image: Dvie,
      title: "3D View",
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
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

  return (
    <div className="bg-[#071e26] flex flex-col items-center g-[40px]">
      <div className="relative overflow-hidden h-[550px] w-full">
        {/* Image */}
        <img
          src="https://cdn.s3waas.gov.in/s3248e844336797ec98478f85e7626de4a/uploads/2023/01/2023011740.jpg"
          alt="Your Image"
          className=" h-full w-full"
        />

        {/* Gradient overlay */}
        <div className="absolute top-[275px] left-0 w-full h-[50%] bg-gradient-to-t from-[#071e26] opacity-100 transition-opacity duration-[00px] ease-in-out"></div>

        {/* Other content */}
        <div className="absolute top-[265px]  w-full h-full flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold">Your Content Title</h2>
            <p className="text-lg mt-4">Your content description.</p>
          </div>
        </div>
      </div>
      <div class=" flex mt-[80px] w-[90%]  flex-col min-w-0 break-words bg-[#071e26ad]  shadow-md rounded-lg mycard">
        <div className="flex flex-col items-center justify-center w-full">
        <img
          src={Chariot}
          className="bg-cover w-[200px] h-[200px] "
        />
        <video
        src={Animation}
        autoPlay
        loop
        muted
        className="w-[300px] h-auto bg-contain"
      />
        <h1 className="text-white text-bold font-bold text-2xl">Your virtual tour guide</h1>
        </div>
        <div class="p-4 mystyle">
          <div class="col-md-8">
            <div class="px-4 py-2 container flex flex-col min-w-0 break-words">
              {/* <!--Heading-->
                    <!--Data-->
                    <!--Text--> */}
              <div class="relative flex flex-col w-full break-words bg-[#071e26]  shadow-md rounded-lg">
                <div class="pl-0 mb-6 text-center">
                  <ul class="flex flex-row w-[90%] items-center    h-[80px] justify-center gap-5 mx-auto text-center  ">
                  
                    
                    <li class="list-item list-none bg-slate-400 rounded-full">
                      <a
                        href="https://kurukshetra.gov.in/panorama/#about"
                        tabindex="0"
                        target="_blank"
                        class="flex text-center items-center justify-center text-black"
                      >
                        <button class="flex btn-xl w-[90px] h-[45px] rounded-full text-center text-lg font-bold  items-center justify-center">
                          About
                        </button>
                      </a>
                    </li>

                    <li class="list-item list-none  bg-slate-400 rounded-full">
                      {" "}
                      <a
                        href="https://kurukshetra.gov.in/history"
                        tabindex="0"
                        target="_blank"
                        class="text-black"
                      >
                        <button class="flex btn-xl w-[90px] h-[45px] rounded-full text-center text-lg font-bold  items-center justify-center">
                          Map
                        </button>
                      </a>
                    </li>
                    <li class="list-item list-none  bg-slate-400 rounded-full">
                      {" "}
                      <a
                        href="https://kurukshetra.gov.in/events-in-kurukshetra/"
                        tabindex="0"
                        target="_blank"
                        class="text-black text-[18px]"
                      >
                        <button class="flex btn-xl w-[90px] h-[45px] rounded-full text-center text-lg font-bold  items-center justify-center">
                          Event
                        </button>
                      </a>
                    </li>

                    {/* <!-- Other list items --> */}
                  </ul>
                </div>
                {/* <div class="  shadow-lg mx-auto w-full flex flex-col gap-2 ">
                  {options?.map((item, index) => {
                    return (
                      <div
                        className={`flex items-center mt-[100px] g-[10px] ${
                          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                        }`}
                      >
                        <div className=" flex w-[300px] p-6  cursor-pointer   bg-slate-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <div className="transform transition-transform hover:scale-110 ">
                            <img
                              style={{
                                backgroundImage: `url('${item.image}')`,
                              }}
                              className="bg-cover w-8 h-8 mb-2"
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
                        <div
                          className="m-[50px]  text-white text-[24px]"
                          style={{ fontFamily: "Fantasy" }}
                        >
                          Info Related to the Place
                        </div>
                      </div>
                    );
                  })}

                  
                </div> */}
                <div class="  shadow-lg mx-auto w-[90%] grid grid-cols-3 gap-2 ">
                    {options?.map((item, index) => {
                      return (
                        <div className="max-w-sm p-6  cursor-pointer   bg-slate-600  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                          <div className="transform transition-transform hover:scale-110 ">
                            <img
                            
                              src={item.image}
                              className="bg-cover w-8 h-8 mb-2"
                            />

                            <p className="mb-1 text-xl text-left  font-semibold tracking-tight text-gray-900 dark:text-white">
                              {item.title}
                            </p>

                            <div className="flex flex-start">
                              <a
                                href={item.link}
                                className=" flex items-center text-sm  text-slate-100 hover:underline"
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

                    {/* <li  classNameName="ml-4">
                      <a
                        href="https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama"
                        tabindex="0"
                        target="_blank"
                        class="coloblack"
                      >
                        <h5>
                          <button
                            type="button"
                            class="cursor-pointer bg-[#ffc107] rounded-md px-5 py-2 float-left mt-4 shadow-inner-md btn-warning btn-warning"
                          >
                            <img
                              className="bg-cover"
                              style={{ backgroundImage: `url('${camera}')` }}
                              width="40px"
                              height="40px"
                            />
                          </button>
                          <span class="ml-[10px] text-[20px]">
                            Panoramic View{" "}
                          </span>
                        </h5>
                      </a>
                    </li>

                    <li  className="ml-4">
                      <a
                        href="https://www.mappls.com/@jrveelaf,omqtaljj,lpojseqlvslvtvvt,l,f,f,of,f,l,f,zdata"
                        tabindex="0"
                        target="_blank"
                        class="coloblack"
                      >
                        <h5>
                          <button
                            type="button"
                            class="cursor-pointer bg-[#ffc107] rounded-md px-5 py-2 float-left mt-4 shadow-inner-md btn-warning btn-warning"
                          >
                            <img
                              className="bg-cover"
                              style={{ backgroundImage: `url('${Dvie}')` }}
                              width="40px"
                              height="40px"
                            />
                          </button>
                          <span class="ml-[10px] text-[20px]">3D View </span>
                        </h5>
                      </a>
                    </li>
                    <li  className="ml-4">
                      <a
                        href="https://kurukshetra.gov.in/panorama/#sightseeing"
                        tabindex="0"
                        target="_blank"
                        class="coloblack"
                      >
                        <h5>
                          <button
                            type="button"
                            class="cursor-pointer bg-[#ffc107] rounded-md px-5 py-2 float-left mt-4 shadow-inner-md btn-warning btn-warning"
                          >
                            <img
                              className="bg-cover"
                              style={{
                                backgroundImage: `url('${sightsceen}')`,
                              }}
                              width="40px"
                              height="40px"
                            />
                          </button>
                          <span class="ml-[10px] text-[20px]">
                            Sight Seeing{" "}
                          </span>
                        </h5>
                      </a>
                    </li>

                    <li  className="ml-4">
                      <a
                        href="https://kurukshetra.gov.in/panorama/#nearby"
                        tabindex="0"
                        target="_blank"
                        class="coloblack"
                      >
                        <h5>
                          <button
                            type="button"
                            class="cursor-pointer bg-[#ffc107] rounded-md px-5 py-2 float-left mt-4 shadow-inner-md btn-warning btn-warning"
                          >
                            <img
                              className="bg-cover"
                              style={{ backgroundImage: `url('${pinmap}')` }}
                              width="40px"
                              height="40px"
                            />
                          </button>
                          <span class="ml-[10px] text-[20px]">Near By </span>
                        </h5>
                      </a>
                    </li>

                    <li  className="ml-4">
                      <a
                        href="https://kurukshetra.gov.in/panorama/#tourguide"
                        tabindex="0"
                        target="_blank"
                        class="coloblack"
                      >
                        <h5>
                          <button
                            type="button"
                            class="cursor-pointer bg-[#ffc107] rounded-md px-5 py-2 float-left mt-4 shadow-inner-md btn-warning btn-warning"
                          >
                            <img
                              className="bg-cover"
                              style={{ backgroundImage: `url('${nearby}')` }}
                              width="40px"
                              height="40px"
                            />
                          </button>
                          <span class="ml-[10px] text-[20px]">Tour Guide</span>
                        </h5>
                      </a>
                    </li>

                    <li  className="ml-4">
                      <a
                        href="https://nickurukshetra.github.io/?id=7"
                        tabindex="0"
                        target="_blank"
                        class="coloblack"
                      >
                        <h5>
                          <button
                            type="button"
                            class="cursor-pointer bg-[#ffc107] rounded-md px-5 py-2 float-left mt-4 shadow-inner-md btn-warning btn-warning"
                          >
                            <img
                              className="bg-cover"
                              style={{ backgroundImage: `url('${quizimg}')` }}
                              width="40px"
                              height="40px"
                            />
                          </button>
                          <span class="ml-[10px] text-[20px]">InfoQuest</span>
                        </h5>
                      </a>
                    </li> */}
                  </div>
                <div className="border-b border-solid mt-[20px] border-[#afadad] w-[90%] mb-4 ml-[40px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
