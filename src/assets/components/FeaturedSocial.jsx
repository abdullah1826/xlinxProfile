import React from "react";
import { returnReactIcons } from "../ReturnSocialIcons";
import { returnPngIcons } from "../ReturnSocialIconsPng";

const FeaturedSocial = ({
  elm,
  checkHttp,
  linkAnalytics,
  webBtnStyle,
  highlightBoxStyle,
  appIconColor,
  imgAdded,
  boxBackgroundColor,
  boxTextColor,
  i,
  sociallink,
}) => {
  console.log(highlightBoxStyle);

  return (
    <>
      <a
        target="_blank"
        href={checkHttp(
          elm?.baseUrl + (elm?.value ? elm?.value : elm?.url),
          elm?.linkID,
          elm?.value
        )}
        onClick={() => linkAnalytics(elm)}
        className="w-[100%]"
        // mb-3
        // style={{
        //   marginTop:
        //     (sociallink[i - 1]?.isLinkHighlighted === false &&
        //       sociallink[i - 1]?.linkID != 999) ||
        //     (sociallink[i - 1]?.isLinkHighlighted === false &&
        //       sociallink[i - 1]?.linkID === 999 &&
        //       sociallink[i - 1]?.style === "style1")
        //       ? "-15px"
        //       : "0px",
        // }}
      >
        <div className="w-[100%] flex justify-center">
          <div
            className="w-[100%] h-[121px]    rounded-[30px] flex "
            // mt-4 mb-1
            // style={
            //   elm?.shareable === false || elm?.isFeatureOn === false
            //     ? { display: "none" }
            //     : null
            // }
            style={{
              display: elm?.shareable === false ? "none" : null,

              backgroundColor:
                highlightBoxStyle === "style1"
                  ? "transparent"
                  : boxBackgroundColor,
              border:
                highlightBoxStyle === "style1"
                  ? `1px solid ${boxBackgroundColor}`
                  : null,
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
                  {elm?.linkID != null &&
                    (!appIconColor || elm?.linkID === 999 ? (
                      <img
                        src={
                          returnPngIcons(elm?.linkID)
                            ? returnPngIcons(elm?.linkID)
                            : elm?.linkImgUrl
                        }
                        alt="img"
                        class="h-[100%] w-[100%] rounded-2xl"

                        // style={elm?.name==='Calendly'? {borderRadius:'10px'}:null}
                      />
                    ) : (
                      returnReactIcons(elm?.linkID, appIconColor, 45)
                    ))}
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
                color: boxTextColor,
              }}
            >
              <h2
                className="font-[700] text-[18px]"
                // style={{ color: boxTextColor }}
              >
                {elm?.title?.length < 22
                  ? elm?.title
                  : elm?.title?.substring(0, 22) + "..."}
              </h2>
              <p
                className="font-[400] text-[13px] w-[90%]"
                // style={{ color: boxTextColor }}
              >
                {elm?.linkHighlightDescription
                  ? elm?.linkHighlightDescription?.length < 67
                    ? elm?.linkHighlightDescription
                    : elm?.linkHighlightDescription?.substring(0, 67) + "..."
                  : ""}
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
