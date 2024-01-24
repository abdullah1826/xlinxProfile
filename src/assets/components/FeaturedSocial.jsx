import React from "react";

const FeaturedSocial = ({
  elm,
  checkHttp,
  linkAnalytics,
  returnIcons,
  webBtnStyle,
  highlightBoxStyle,
  appIconColor,
  imgAdded,
}) => {
  return (
    <>
      <a
        target="_blank"
        href={checkHttp(elm?.baseUrl + elm?.value, elm?.linkID, elm?.value)}
        onClick={() => linkAnalytics(elm?.title)}
        className="w-[100%] mb-3"
      >
        <div className="w-[100%] flex justify-center">
          <div
            className="w-[100%] h-[121px] mt-4 mb-1 bg-[white]  border-[1px] border-[#F1ECEC]  rounded-[30px] flex "
            // style={
            //   elm?.shareable === false || elm?.isFeatureOn === false
            //     ? { display: "none" }
            //     : null
            // }
            style={{
              backgroundColor:
                highlightBoxStyle === "style1" ? "white" : "black",
            }}
          >
            <div className="w-[33%]  flex justify-center items-center">
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
              {/* <div
                class={`${"h-[75px] w-[75px] rounded-2xl  flex justify-center items-center"}`}
                style={{ backgroundColor: appIconColor }}
              >
                <img
                  src={returnIcons(elm?.linkID)}
                  alt=""
                  class={`${"h-[60px] w-[60px] "}`}
                  loading="lazy"
                />
              </div> */}
            </div>

            <div
              className="w-[63%] flex flex-col justify-center"
              style={{
                color: highlightBoxStyle === "style1" ? "black" : "white",
              }}
            >
              <h2 className="font-[700] text-[18px]">
                {elm?.title?.length < 22
                  ? elm?.title
                  : elm?.title?.substring(0, 22) + "..."}
              </h2>
              <p className="font-[400] text-[13px] w-[90%] ">
                {elm?.feature?.length < 67
                  ? elm?.feature
                  : elm?.feature?.substring(0, 67) + "..."}
              </p>
              {/* 68 */}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default FeaturedSocial;
