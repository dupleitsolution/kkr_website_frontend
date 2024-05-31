import Pagination from "../Components/Pagination";
import IMG1 from "../assets/imgs/Image1.png";
import IMG2 from "../assets/imgs/Image2.png";
import IMG3 from "../assets/imgs/Image3.png";
import IMG11 from "../assets/imgs/Image11.png";
import IMG22 from "../assets/imgs/Image22.png";
import IMG33 from "../assets/imgs/Image33.png";
import Backg from "../assets/imgs/Mback4.jpg";
import about1 from "../assets/imgs/about1.png";
import about11 from "../assets/imgs/about11.png";
import bottom from "../assets/imgs/bottom.png";
import fb from "../assets/imgs/facebook.svg";
import inst from "../assets/imgs/instagram.svg";
import shar from "../assets/imgs/share.svg";
import top from "../assets/imgs/top.png";
import twi from "../assets/imgs/twitter.svg";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import "./Home.css";
import API from "../APIroutes";
import { useNavigate } from "react-router-dom";

const ITEMS_PERPAGE = 10;
function ViewAll() {
  const [telNumber, setTelNumber] = useState("");
  const [share, setShare] = useState(false);
  const [number, setNumber] = useState("");
  const [page, setPage] = useState(parseInt(localStorage.getItem("page")));
  const [jobs, setJobs] = useState("");
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  // const totalPages = Math.ceil(61 / ITEMS_PERPAGE);

  const placesList = [
    {
      number: "1",
      name: "Brahma Sarovar",
      link: "http://kkrtour.com/secpage.html?id=01",
    },
    {
      number: "2",
      name: "Jyotisar",
      link: "http://kkrtour.com/secpage.html?id=02",
    },
    {
      number: "3",
      name: "Sheikh Chaheli’s Tomb",
      link: "http://kkrtour.com/secpage.html?id=03",
    },
    {
      number: "4",
      name: "Sri Krishna Museum",
      link: "http://kkrtour.com/secpage.html?id=04",
    },
    {
      number: "5",
      name: "Panorama",
      link: "http://kkrtour.com/secpage.html?id=05",
    },
    {
      number: "6",
      name: "Dharohar, Haryana",
      link: "http://kkrtour.com/secpage.html?id=06",
    },
    {
      number: "7",
      name: "Kalpana Chawla",
      link: "http://kkrtour.com/secpage.html?id=07",
    },
    {
      number: "8",
      name: "Mini Zoo",
      link: "http://kkrtour.com/secpage.html?id=08",
    },
    {
      number: "9",
      name: "Bhadar Kali Mandir",
      link: "http://kkrtour.com/secpage.html?id=09",
    },
    {
      number: "10",
      name: "Sannehit Sarovar",
      link: "http://kkrtour.com/secpage.html?id=10",
    },
    {
      number: "11",
      name: "Sri Venkateswara Swamy Temple",
      link: "http://kkrtour.com/secpage.html?id=11",
    },
    {
      number: "12",
      name: "Sthaneshwar Mahadev",
      link: "http://kkrtour.com/secpage.html?id=12",
    },
    {
      number: "13",
      name: "Sri Vyas Gaudiyamath",
      link: "http://kkrtour.com/secpage.html?id=13",
    },
    {
      number: "14",
      name: "Nabha House",
      link: "http://kkrtour.com/secpage.html?id=14",
    },
    {
      number: "15",
      name: "Lakshmi Narayan Mandir",
      link: "http://kkrtour.com/secpage.html?id=15",
    },
    {
      number: "16",
      name: "Birla Mandir",
      link: "http://kkrtour.com/secpage.html?id=16",
    },
    {
      number: "17",
      name: "Chhevin Patshahi",
      link: "http://kkrtour.com/secpage.html?id=17",
    },
    {
      number: "18",
      name: "Jairam Vidyapeeth",
      link: "http://kkrtour.com/secpage.html?id=18",
    },
    {
      number: "19",
      name: "1857 War Museum",
      link: "http://kkrtour.com/secpage.html?id=19",
    },
    {
      number: "20",
      name: "Bhishma Kund Narkatari",
      link: "http://kkrtour.com/secpage.html?id=20",
    },
    {
      number: "21",
      name: "Harsh ka Tila",
      link: "http://kkrtour.com/secpage.html?id=21",
    },
    {
      number: "22",
      name: "Raja Karn Ka Tila",
      link: "http://kkrtour.com/secpage.html?id=22",
    },
    {
      number: "23",
      name: "Mahabharata Museum, Jyotisar",
      link: "http://kkrtour.com/secpage.html?id=23",
    },
    {
      number: "24",
      name: "Baba Shrawan Nath Heveli",
      link: "http://kkrtour.com/secpage.html?id=24",
    },
    {
      number: "25",
      name: "Faridkot House",
      link: "http://kkrtour.com/secpage.html?id=25",
    },
    {
      number: "26",
      name: "Baba Kali Kamli Mandir",
      link: "http://kkrtour.com/secpage.html?id=26",
    },
    {
      number: "27",
      name: "Ban Ganga",
      link: "http://kkrtour.com/secpage.html?id=27",
    },
    {
      number: "28",
      name: "Shaheed Smarak",
      link: "http://kkrtour.com/secpage.html?id=28",
    },
    {
      number: "29",
      name: "Krishna Arjun Mandir",
      link: "http://kkrtour.com/secpage.html?id=29",
    },
    {
      number: "30",
      name: "Dronacharya Stadium",
      link: "http://kkrtour.com/secpage.html?id=30",
    },
    {
      number: "31",
      name: "Nabhi Kamal",
      link: "http://kkrtour.com/secpage.html?id=31",
    },
    {
      number: "32",
      name: "Rantuk Yaksha",
      link: "http://kkrtour.com/secpage.html?id=32",
    },
    {
      number: "33",
      name: "Arunai Mandir",
      link: "http://kkrtour.com/secpage.html?id=33",
    },
    {
      number: "34",
      name: "Kulotaran Tirtha",
      link: "http://kkrtour.com/secpage.html?id=34",
    },
    {
      number: "35",
      name: "Shalihotra Tirth, Sarasa",
      link: "http://kkrtour.com/secpage.html?id=35",
    },
    {
      number: "36",
      name: "Kuber Tirth",
      link: "http://kkrtour.com/secpage.html?id=36",
    },
    {
      number: "37",
      name: "Kalashvar Mahadev Mandir",
      link: "http://kkrtour.com/secpage.html?id=37",
    },
    {
      number: "38",
      name: "OP Jindal Park",
      link: "http://kkrtour.com/secpage.html?id=38",
    },
    {
      number: "39",
      name: "Guru Tegbhahadur Ji Gurdwara",
      link: "http://kkrtour.com/secpage.html?id=39",
    },
    {
      number: "40",
      name: "Multi Art Culture Centre",
      link: "http://kkrtour.com/secpage.html?id=40",
    },
    {
      number: "41",
      name: "Gita Gyan Sansthanam",
      link: "http://kkrtour.com/secpage.html?id=41",
    },
    {
      number: "42",
      name: "Gulzari Lal Nanda Smarak",
      link: "http://kkrtour.com/secpage.html?id=42",
    },
    {
      number: "43",
      name: "Saraswati Tirth, Pehowa",
      link: "http://kkrtour.com/secpage.html?id=43",
    },
    {
      number: "44",
      name: "Gyan Mandir",
      link: "http://kkrtour.com/secpage.html?id=44",
    },
    {
      number: "45",
      name: "Aapga Tirtha, Mirzapur",
      link: "http://kkrtour.com/secpage.html?id=45",
    },
    {
      number: "46",
      name: "Bhurishrava Tirtha, Bhor Saidan",
      link: "http://kkrtour.com/secpage.html?id=46",
    },
    {
      number: "47",
      name: "Hanuman Mandir (Dakshinmukhi)",
      link: "http://kkrtour.com/secpage.html?id=47",
    },
    {
      number: "48",
      name: "Gurdwara Sri Rajghat Patshahi Dasvin",
      link: "http://kkrtour.com/secpage.html?id=48",
    },
    {
      number: "49",
      name: "Kurukshetra University Kurukshetra",
      link: "http://kkrtour.com/secpage.html?id=49",
    },
    {
      number: "50",
      name: "Gurukul",
      link: "http://kkrtour.com/secpage.html?id=50",
    },
    {
      number: "51",
      name: "National Institute of Technology",
      link: "http://kkrtour.com/secpage.html?id=51",
    },
    {
      number: "52",
      name: "Pashupati Nath Mahadev Mandir",
      link: "http://kkrtour.com/secpage.html?id=52",
    },
    {
      number: "53",
      name: "Guru Nanak Singh Gurdwara",
      link: "http://kkrtour.com/secpage.html?id=53",
    },
    {
      number: "54",
      name: "Manipurak, Murtjapur",
      link: "http://kkrtour.com/secpage.html?id=54",
    },
    {
      number: "55",
      name: "Kamyak Tirtha, Kamauda",
      link: "http://kkrtour.com/secpage.html?id=55",
    },
    {
      number: "56",
      name: "Institute of Hotel Management",
      link: "http://kkrtour.com/secpage.html?id=56",
    },
    {
      number: "57",
      name: "Krishna Arjun Rath",
      link: "http://kkrtour.com/secpage.html?id=57",
    },
    {
      number: "58",
      name: "Krishna Arjun Rath",
      link: "http://kkrtour.com/secpage.html?id=57",
    },

    {
      number: "59",
      name: "Krishna Arjun Rath",
      link: "http://kkrtour.com/secpage.html?id=57",
    },
    {
      number: "60",
      name: "Krishna Arjun Rath",
      link: "http://kkrtour.com/secpage.html?id=57",
    },

    {
      number: "61",
      name: "About Kurukshetra",
      link: "http://kkrtour.com/secpage.html?id=61",
    },
  ];

  const renderList = data?.slice(10 * (page - 1), 10 * page);

  const totalPages = Math.ceil(data.length / ITEMS_PERPAGE);
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

  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(page));
  }, [page]);

  const Fetchdata = async () => {
    try {
      const fetchdata = await axios.get(API.fetchJobs);
      console.log(fetchdata);
      setData(fetchdata.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Fetchdata();
  }, []);

  const onListclick = (id) => {
    navigate("/about", { state: id });
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

  const handleRightpage = () => {
    setPage((p) =>{ 
      localStorage.setItem("page", JSON.stringify(p+1));
      return p + 1});
  };

  const handleLeftpage = () => {
    setPage((p) =>{ 
      localStorage.setItem("page", JSON.stringify(p-1));
      return p - 1});
  };

  const getSrcByScreenSize = () => {
    if (window.innerWidth < 768) {
      return about11; // Provide the source for the small image
    } else {
      return about1; // Provide the source for the large image
    }
  };

  const startingIndex = (page - 1) * ITEMS_PERPAGE;

  const handleDots = (index) => {
    console.log("Index", index);
    localStorage.setItem("page", JSON.stringify(index));
    setPage(index);
  };

  return (
    <div className="  w-full flex text-center flex-col bg-cov bg-righ bg-no-repeat items-center justify-center text-4xl font-semibold bg-[#DDDDD]  ">
      <div className="col-md-4 mb-[0px] w-full pb-[px] ">
        <div class="z-0 p-0 border border-solid">
          <div class="flex overflow-hidden relative flex-col justify-center items-center w-full backdrop-blur-3xl">
            <img
              alt=""
              src={about1}
              class="img-fluid img-thumbnail bg-cover h-[90px] md:h-[250px] min-w-[305px] w-[100%] obsolute  bg-blend-darken bg-black bg-opacity-40"
            />

            <div
              id="05"
              class="flex absolute inset-0 justify-center items-center p-1 px-4 w-full text-2xl font-bold text-center text-white bg-black bg-opacity-40 rounded-lg h- md:text-4xl font-poppins"
            >
              All You Need To Know
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex overflow-hidden relative flex-col justify-center items-center w-full"
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
        <div className="py-0 w-full max-w-screen-md md:py-1">
          <div className="flex flex-col w-full items-cente justify-cente">
            <div className=" flex items-center flex-col  mx-auto w-full md:w-[100%]  mb-[10px] rounded-lg">
              <div className="text-center py-0 text-black text-[18px] md:text-[24px]">
                
                  List of Places
                
              </div>
              <div
                style={{
                  borderRadius: "10px",
                  boxShadow: `rgba(0, 0, 0, 0.4) 0px 5px 15px`,
                }}
                className="flex items-center justify-center w-[80%] md:w-[90%] bg-white overflow-hidden mt-2"
              >
                <div className="flex flex-col items-center justify-center w-[100%] md:w-[100%] ">
                  {/* <h2 className="text-center">List of Places</h2> */}

                  <ul className="flex flex-col justify-start items-start w-full">
                    {renderList?.map((place, index) => (
                      <li
                        className="flex pl-[20px w-full  border-b-2 text-left text-[12px] md:text-[22px] bg-[#FBEBCC]  hover:bg-[#D1C2AA]  "
                        key={index}
                        onClick={() => {
                          onListclick(place?.id);
                        }}
                      >
                        <span className=" bg-[#581e00] py-1 md:py-2 w-[15%] text-center text-slate-300">
                          {startingIndex + index + 1}{" "}
                        </span>

                        <a
                          href={place.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-[10px] py-1 md:py-2 text-[14px] md:text-[22px]  cursor-pointer "
                        >
                          {place.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" flex  mb-[40px] w-full h-[90px] justify-end">
          <div className="w-[30%]  flex flex-col  justify-end items-end ml-[0px] md:mr-[20px]">
            {share && (
              <div
                className="flex items-center justify-between bg-white h-full mb-[5px] px-[10px]  w-[70%] md:w-[30%]  md:mr-[0px] mr-[30px] "
                style={{
                  borderRadius: "0.375rem",
                  boxShadow: `rgba(0, 0, 0, 0.4) 1px 1px 7px 1px`,
                }}
              >
                <img className="bg-cover w-[20px]" src={fb}></img>
                <img className="bg-cover w-[20px]" src={inst}></img>
                <img className="bg-cover w-[20px]" src={twi}></img>
                <img className="bg-cover w-[20px]" src={shar}></img>
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
        </div> */}

        <section className="w-[100%]  ">
          <div className="w-full  md:w-[80%] mx-auto">
            <Pagination
              totalPages={totalPages}
              setPage={setPage}
              threeDots={handleDots}
              noOfpage={jobs.length / ITEMS_PERPAGE}
              //currentPage={page}
              currentPage={parseInt(localStorage.getItem("page"))}
              onRightclick={handleRightpage}
              onLeftclick={handleLeftpage}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ViewAll;
