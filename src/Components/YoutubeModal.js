import React, { useState } from "react";

const YoutubeModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [play, setPlay] = useState(1);

  function getEmbedUrl(videoUrl) {
    // Check if the URL is a YouTube video URL in the standard format
    const isYouTubeUrl1 =
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=)?([^&]+)/.test(
        videoUrl
      );

    // Check if the URL is a YouTube video URL in the shortened format
    const isYouTubeUrl2 = /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^&]+)/.test(
      videoUrl
    );

    // Check if the URL is an MP3 link
    const isMp3Url = /\.mp3$/.test(videoUrl);

    if (isYouTubeUrl1 || isYouTubeUrl2) {
      // Extract video ID from the YouTube URL
      const videoId = isYouTubeUrl1
        ? videoUrl.match(
            /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=)?([^&]+)/
          )[1]
        : videoUrl.match(/(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^&]+)/)[1];

      // Construct the embed URL using the extracted video ID
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;

      return embedUrl;
    } else if (isMp3Url) {
      // Return the MP3 URL as it is
      return videoUrl;
    } else {
      // Return a default value or handle unsupported URL formats
      return ""; // You can return an empty string or any other default value
    }
  }

  const embedUrl = getEmbedUrl(props?.src);
  console.log("embedUrl", embedUrl); // Output: https://www.youtube.com/embed/wi5h8obNWZU

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

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
            {embedUrl && embedUrl.includes("youtube") ? (
              <iframe
                width={screenWidth >= 768 ? 800 : 309}
                height={screenWidth >= 768 ? 450 : 225}
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                muted
              ></iframe>
            ) : (
              <audio
                controls
               
                style={{
                  width: screenWidth >= 768 ? 800 : 307,
                  height: screenWidth >= 768 ? 80 : 60,
                  background: "black",
                 
                }}
              >
                <source
                  style={{
                    marginBottom: "10px",
                  }}
                  className="mb-2"
                  src={embedUrl}
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            )}
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

export default YoutubeModal;
