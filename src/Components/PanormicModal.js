import React, { useState } from "react";

const PanormicModal = (props) => {
  const [play, setPlay] = useState(1);

  const screenWidth = window.innerWidth;

  return (
    <div
      id="popup-moda"
      className="fixed  top-0 right-0 left-0 z-50 inset-0 flex  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      tabIndex="1"
    >
      <div className="relative flex justify-center items-center p-4 w-full max-w-md max-h-full">
        <div className="relative w-full flex justify-center items-center flex-col bg-whit rounded-lg shadow dark:bg-gray-700">
          <div className="p-4 md:p-5 text-center justify-center items-center flex flex-col w-[382px] md:w-[840px]">
            <div className=" flex justify-between items-center w-[88%] md:w-full bg-slate-700 h-[20px] p-3 rounded-t-x">
              {!play && (
                <div
                  className="text-slate-300 text-[14px]"
                  onClick={() => setPlay(1)}
                >
                  play
                </div>
              )}
              {play == 1 && (
                <div
                  className="text-slate-300 text-[14px]"
                  onClick={() => setPlay(0)}
                >
                  Pause
                </div>
              )}
              <div
                className="text-slate-300 text-[14px] cursor-pointer "
                onClick={props.toggle}
              >
                X
              </div>
            </div>
            <iframe
              width={screenWidth >= 768 ? 800 : 309}
              height={screenWidth >= 768 ? 450 : 225}
              src={props.src}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            {/* <div className=" flex justify-between items-center w-[88%] md:w-full bg-slate-700 h-[20px] p-3 rounded-b-xl">
              {!play && (
                <div
                  className="text-slate-300 text-[14px]"
                  onClick={() => setPlay(1)}
                >
                  play
                </div>
              )}
              {play == 1 && (
                <div
                  className="text-slate-300 text-[14px]"
                  onClick={() => setPlay(0)}
                >
                  Pause
                </div>
              )}
              <div
                className="text-slate-300 text-[14px] cursor-pointer "
                onClick={props.toggle}
              >
                X
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanormicModal;
