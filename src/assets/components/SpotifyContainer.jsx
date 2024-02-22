import React from "react";

const SpotifyContainer = ({ link, shareable }) => {
  const convertToEmbedUrl = (url) => {
    return url.replace("open.spotify.com/", "open.spotify.com/embed/");
  };

  const embedUrl = convertToEmbedUrl(link);

  return (
    <div
      class="w-[100%] flex justify-center mb-[-25px]"
      style={{ display: !shareable ? "none" : null }}
    >
      {/* <div style={{ height: "186px", width: "100%" }}> */}
      {/* <div
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "30px",
            overflow: "hidden",
          }}
        > */}
      {link ? (
        <iframe
          style={{ borderRadius: "20px" }}
          //   src="https://open.spotify.com/embed/track/5qlsGohL4JSjYFYnCsljHM?si=ebd86abd06c84a5a"
          src={embedUrl}
          width="100%"
          height="200px"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      ) : (
        <div className="h-[100%] w-[100%] flex justify-center items-center">
          <h2>No multimedia found!</h2>
        </div>
      )}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default SpotifyContainer;
