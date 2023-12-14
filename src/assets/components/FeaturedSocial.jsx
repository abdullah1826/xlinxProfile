import React from "react";

const FeaturedSocial = ({
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
        href={checkHttp(elm?.baseUrl + elm?.value, elm?.linkID, elm?.value)}
        onClick={() => linkAnalytics(elm?.title)}
      >
        <div className="w-[100%] flex justify-center">
          <div
            className="w-[92%] h-[121px] mt-4 mb-1 bg-[white]  border-[1px] border-[#F1ECEC]  rounded-[30px] flex "
            // style={
            //   elm?.shareable === false || elm?.isFeatureOn === false
            //     ? { display: "none" }
            //     : null
            // }
          >
            <div className="w-[33%]  flex justify-center items-center ">
              <img
                src={returnIcons(elm?.linkID)}
                alt=""
                className="h-[75px] w-[75px]"
                loading="lazy"
              />
            </div>

            <div className="w-[63%] flex flex-col justify-center ">
              <h2 className="font-[700] text-[18px] ">
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
