import React from "react";
import WebBtn from "./webBtn";
import WebGrfkBtn from "./webGrfkBtn";
import FeaturedSocial from "./FeaturedSocial";
import { returnIcons } from "../ReturnSocialIcons";

const SocialLinks = ({
  sociallink,
  checkHttp,
  linkAnalytics,
  webBtnStyle,
  weblinkButtonTextColor,
  weblinkButtonBackgroundColor,
  highlightBoxStyle,
  isClassic,
  appIconColor,
}) => {
  console.log(appIconColor);

  let imgAdded = (name) => {
    if (typeof name === "string") {
      if (name?.slice(0, 4) === "http") {
        console.log(true);
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <div className=" w-[95%]  flex justify-around items-center flex-wrap mt-5">
      {/* grid grid-cols-3 gap-x-4 pr-7 */}
      {sociallink?.map((elm) => {
        return elm?.linkID === 999 &&
          elm?.style != "style3" &&
          elm?.style != "style1" ? (
          <WebBtn
            elm={elm}
            checkHttp={checkHttp}
            linkAnalytics={linkAnalytics}
            returnIcons={returnIcons}
            webBtnStyle={webBtnStyle}
            weblinkButtonTextColor={weblinkButtonTextColor}
            weblinkButtonBackgroundColor={weblinkButtonBackgroundColor}
          />
        ) : elm?.linkID === 999 && elm?.style === "style3" ? (
          <WebGrfkBtn
            elm={elm}
            checkHttp={checkHttp}
            linkAnalytics={linkAnalytics}
            // returnIcons={returnIcons}
            // webBtnStyle={webBtnStyle[7]}
          />
        ) : elm?.isFeatureOn ? (
          <FeaturedSocial
            elm={elm}
            checkHttp={checkHttp}
            linkAnalytics={linkAnalytics}
            returnIcons={returnIcons}
            webBtnStyle={webBtnStyle}
            highlightBoxStyle={highlightBoxStyle}
            appIconColor={appIconColor}
            imgAdded={imgAdded}
          />
        ) : elm?.linkID === 400 ? (
          <div className="w-[100%] text-center flex flex-col items-center">
            <h2 className="text-[18px] font-[700]">{elm?.title}</h2>
            <p className="font-[400] text-[16px] w-[95%] text-center">
              {elm?.value}
            </p>
          </div>
        ) : (
          <>
            <a
              target="_blank"
              href={
                elm?.linkID != 999
                  ? checkHttp(
                      elm?.baseUrl + elm?.value,
                      elm?.linkID,
                      elm?.value
                    )
                  : checkHttp(elm?.url, elm?.linkID, elm?.url)
              }
              // returnSocialUrl(elm?.title, elm?.value)
              class="h-[120px] w-[31%] flex flex-col  items-center mt-3 mb-[-10px]"
              style={
                elm?.shareable === false || elm?.isFeatureOn === true
                  ? { display: "none" }
                  : null
              }
              onClick={() => linkAnalytics(elm)}
            >
              {imgAdded(elm?.image) ? (
                <img
                  src={elm?.image}
                  alt="img"
                  class={
                    elm?.linkID === 999
                      ? ` ${"h-[100%] w-[100%] rounded-2xl"}`
                      : ` ${"h-[75px] w-[75px] rounded-2xl  flex justify-center items-center"}`
                  }
                  // style={elm?.name==='Calendly'? {borderRadius:'10px'}:null}
                />
              ) : (
                <div
                  class={`${"h-[75px] w-[75px] rounded-2xl  flex justify-center items-center"}`}
                  style={{ backgroundColor: appIconColor }}
                >
                  {elm?.linkID != null && (
                    <img
                      src={
                        returnIcons(elm?.linkID)
                          ? returnIcons(elm?.linkID)
                          : elm?.linkImgUrl
                      }
                      alt="img"
                      class={
                        elm?.linkID === 999
                          ? ` ${"h-[100%] w-[100%] rounded-2xl"}`
                          : ` ${"h-[60px] w-[60px]"}`
                      }
                      // style={elm?.name==='Calendly'? {borderRadius:'10px'}:null}
                    />
                  )}
                </div>
              )}
              <h2
                class="font-[300] text-[12px]  mt-[6px] text-center"
                style={{ color: isClassic ? "black" : "white" }}
              >
                {/* {elm?.title} */}
                {elm?.title?.length < 19
                  ? elm?.title
                  : elm?.title?.substring(0, 19) + "..."}
              </h2>
            </a>
          </>
        );
      })}
    </div>
  );
};

export default SocialLinks;
