import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoContainer = ({ link }) => {
  return (
    <div class="mt-4 w-[100%] flex justify-center ">
      <div style={{ height: "186px", width: "100%" }}>
        <div style={{ height: "100%", width: "100%", borderRadius: "20px" }}>
          {link ? (
            <ReactPlayer
              url={link}
              height="100%"
              width="100%"
              controls={true}
              className="rounded-[20px]"
              style={{ borderRadius: "20px" }}
            />
          ) : (
            <div className="h-[100%] w-[100%] flex justify-center items-center">
              <h2>No video found!</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
