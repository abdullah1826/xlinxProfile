import React from "react";

const WebBtn = ({
  elm,
  checkHttp,
  linkAnalytics,
  returnIcons,
  webBtnStyle,
}) => {
  return (
    <>
      <a
        target="_blank"
        href={
          elm?.linkID != null &&
          checkHttp(elm?.baseUrl + elm?.value, elm?.linkID, elm?.value)
        }
        // returnSocialUrl(elm?.title, elm?.value)
        className="h-[75px] w-[100%] flex justify-start items-center mb-3"
        style={{
          display:
            elm?.shareable === false || elm?.isFeatureOn === true
              ? "none"
              : null,
          borderRadius:
            webBtnStyle === "s1" || webBtnStyle === "s5"
              ? "0px"
              : webBtnStyle === "s2" || webBtnStyle === "s6"
              ? "8px"
              : webBtnStyle === "s3" || webBtnStyle === "s7"
              ? "14px"
              : webBtnStyle === "s4" || webBtnStyle === "s8"
              ? "40px"
              : null,
          backgroundColor:
            webBtnStyle === "s1" ||
            webBtnStyle === "s2" ||
            webBtnStyle === "s3" ||
            webBtnStyle === "s4"
              ? "black"
              : "transparent",
          border:
            webBtnStyle === "s5" ||
            webBtnStyle === "s6" ||
            webBtnStyle === "s7" ||
            webBtnStyle === "s8"
              ? "1px solid white"
              : null,
        }}
        onClick={() => linkAnalytics(elm)}
      >
        {elm?.linkID != null && (
          <div className="h-[100%] w-[22%] flex items-center">
            <img
              src={returnIcons(elm?.linkID)}
              alt="img"
              class={` ${"h-[65px] w-[65px]"}  ml-1 `}
              style={{
                display:
                  elm?.shareable === false || elm?.isFeatureOn === true
                    ? "none"
                    : null,
                borderRadius:
                  webBtnStyle === "s1" || webBtnStyle === "s5"
                    ? "0px"
                    : webBtnStyle === "s2" || webBtnStyle === "s6"
                    ? "8px"
                    : webBtnStyle === "s3" || webBtnStyle === "s7"
                    ? "14px"
                    : webBtnStyle === "s4" || webBtnStyle === "s8"
                    ? "40px"
                    : null,
              }}
            />
          </div>
        )}
        <p class="font-[400] text-[17px] text-white mt-[6px] text-center  w-[75%]">
          {/* {elm?.title} */}
          {/* {elm?.title?.length < 19
        ? elm?.title
        : elm?.title?.substring(0, 62) + "..."} */}
          This is a customized link title
        </p>
      </a>
    </>
  );
};

export default WebBtn;
