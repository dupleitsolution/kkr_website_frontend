import Dvie from "../assets/imgs/3DVIE.png";
import Animation from "../assets/imgs/Animation.webm";
import Backg from "../assets/imgs/bak3.jpg";
import camera from "../assets/imgs/camera-fill.png";
import Chariot from "../assets/imgs/chariot2.png";
import headphones from "../assets/imgs/headphones.png";
import nearby from "../assets/imgs/nearby.png";
import pinmap from "../assets/imgs/pin-map-fill.png";
import quizimg from "../assets/imgs/quizimg.png";
import sightsceen from "../assets/imgs/sightsceen.png";
import React from "react";
import Slider from "react-slick";
import "./Home.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";

const About3 = () => {
  const slides = [
    {
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
      title: "This is a title",
      description: "This is a description",
    },
    {
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
      title: "This is a second title",
      description: "This is a second description",
    },
    {
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
      title: "This is a third title",
      description: "This is a third description",
    },
    {
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
      title: "This is a fourth title",
      description: "This is a fourth description",
    },
    {
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
      title: "This is a fifth title",
      description: "This is a fifth description",
    },
    {
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
      title: "This is a sixth title",
      description: "This is a sixth description",
    },
    {
      link: "https://teliportme.com/view/2069514?utm_medium=android&utm_source=share-panorama",
      title: "This is a seventh title",
      description: "This is a seventh description",
    },
  ];

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    { title: "Card 1", description: "Description 1" },
    { title: "Card 2", description: "Description 2" },
    { title: "Card 3", description: "Description 3" },
    // Add more card objects as needed
  ];

  return (
    <div 
    style={{ 
      backgroundImage: `url('https://static.wixstatic.com/media/45d3ca_450e2d25b6a3441d93b82c9e4aee8fb5~mv2.png/v1/fill/w_930,h_735,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/45d3ca_450e2d25b6a3441d93b82c9e4aee8fb5~mv2.png')` 
  }}
    className="bg-[#EEEEEE bg-cover flex flex-col w-full items-center g-[40px]">
      <div className="flex items-center justify-center overflow-hidden h-[800px] w-[90%]">
        {/* Image */}

        <div className="  w-full  flex flex-col items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold text-[#d97706] ">
              Your Content Title
            </h2>
            <p className="text-lg mt-4 text-[#d97706]">
              Your content description.
            </p>
          </div>
          <div className="border-b border-solid mt-[20px] border-[#c2410c] w-[90%] mb-4 ml-[40px"></div>
          <ul class="flex flex-row w-[90%] items-center    h-[80px] justify-center gap-5 mx-auto text-center  ">
            <li class="list-item list-none bg-[#5B6556] border border-solid border-[#c2410c] rounded-full">
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

            <li class="list-item list-none  bg-[#5B6556] rounded-full border border-solid border-[#c2410c]">
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
            <li class="list-item list-none  bg-[#5B6556] rounded-full border border-solid border-[#c2410c]">
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

        <div className="flex flex-col items-center justify-center h-[82%]  bg-[#5B6556] rounded-x mt-[50px] ml-[200px] w-full">
          <div className="border border-solid-white border-white h-[90%] ml-[-60px] mr-[200px]  rounded-xl">
          <img
            src="https://cdn.s3waas.gov.in/s3248e844336797ec98478f85e7626de4a/uploads/2023/01/2023011740.jpg"
            alt="Your Image"
            className="bg-cover h-[100%] w-[95%] mt-[10px]   ml-[-30px]  rounded-xl border border-solid-white border-white "
          />
           </div>
          {/* <div className="absolute top-[570px] left-0 w-full h-[30%] bg-gradient-to-t from-[#EEEEEE] opacity-100 transition-opacity duration-[00px] ease-in-out"></div> */}
        </div>

        {/* Gradient overlay */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#071e26] opacity-90 transition-opacity duration-[00px] ease-in-out"></div> */}

        {/* Other content */}
      </div>
       <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center heading">
          Unveiling <span className="text-orange-700">the Ultimate Exploration</span>
          </h1>
          <p className="text-center heading-description py-5 text-lg font-semibold text-sky-blue">
           Your Path to Adventure Awaits!.
          </p>
          </div>

      <div className="col-md-4 p-20 px-10  mt-[0px] w-[90%]">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={10}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3, // Adjust the number of slides for tablet view if needed
              spaceBetween: 15, // Adjust the space between slides for tablet view if needed
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className=""
        >
          {options?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className=" swiper-slide  max-w-sm p-6  my-[60px] ml-[60px] cursor-pointer transform transition-transform hover:scale-125  bg-[#fb923c] rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <div className="transform transition-transform ">
                  <img src={item.image} className="bg-cover w-8 h-8 mb-2" />

                  <p className="mb-1 text-xl text-left font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </p>

                  <div className="flex flex-start">
                    <a
                      href={item.link}
                      className="flex items-center text-sm text-slate-100 hover:underline"
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <img src={Chariot} className="bg-cover w-[200px] h-[200px] " />
    </div>
  );
};

export default About3;
