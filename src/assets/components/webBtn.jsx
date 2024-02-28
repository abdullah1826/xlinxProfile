import React from "react";

const WebBtn = ({
  elm,
  checkHttp,
  linkAnalytics,
  returnIcons,
  webBtnStyle,
  weblinkButtonTextColor,
  weblinkButtonBackgroundColor,
  placeholderImg,
}) => {
  return (
    <>
      <a
        target="_blank"
        href={elm?.linkID != null && checkHttp(elm?.url, elm?.linkID, elm?.url)}
        // returnSocialUrl(elm?.title, elm?.value)
        className="h-[75px] w-[100%] flex justify-start items-center mb-4 "
        style={{
          display:
            elm?.shareable === false || elm?.isFeatureOn === true
              ? "none"
              : null,
          borderRadius:
            webBtnStyle === "style1" || webBtnStyle === "style5"
              ? "0px"
              : webBtnStyle === "style2" || webBtnStyle === "style6"
              ? "8px"
              : webBtnStyle === "style3" || webBtnStyle === "style7"
              ? "14px"
              : webBtnStyle === "style4" || webBtnStyle === "style8"
              ? "40px"
              : null,
          backgroundColor:
            webBtnStyle === "style1" ||
            webBtnStyle === "style2" ||
            webBtnStyle === "style3" ||
            webBtnStyle === "style4"
              ? weblinkButtonBackgroundColor
              : "transparent",
          border:
            webBtnStyle === "style5" ||
            webBtnStyle === "style6" ||
            webBtnStyle === "style7" ||
            webBtnStyle === "style8"
              ? `1px solid ${weblinkButtonBackgroundColor}`
              : null,
        }}
        onClick={() => linkAnalytics(elm)}
      >
        {elm?.linkID != null && (
          <div className="h-[100%] w-[19%]  flex items-center">
            {elm?.buttonImgUrl && (
              <img
                src={elm?.buttonImgUrl}
                alt="img"
                class={` ${"h-[65px] w-[65px]"}  ml-1 object-cover`}
                style={{
                  display:
                    elm?.shareable === false || elm?.isFeatureOn === true
                      ? "none"
                      : null,
                  borderRadius:
                    webBtnStyle === "style1" || webBtnStyle === "style5"
                      ? "0px"
                      : webBtnStyle === "style2" || webBtnStyle === "style6"
                      ? "8px"
                      : webBtnStyle === "style3" || webBtnStyle === "style7"
                      ? "14px"
                      : webBtnStyle === "style4" || webBtnStyle === "style8"
                      ? "40px"
                      : null,
                }}
              />
            )}
          </div>
        )}
        <p
          class="font-[400] text-[17px]  mt-[6px] text-center  w-[75%]  mr-2"
          style={{ color: weblinkButtonTextColor }}
        >
          {/* {elm?.title} */}
          {/* {elm?.title?.length < 19
        ? elm?.title
        : elm?.title?.substring(0, 62) + "..."} */}
          {elm?.title}
        </p>
      </a>
    </>
  );
};

export default WebBtn;
