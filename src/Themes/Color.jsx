import React from "react";
import share from "../imgs/share.png";
import imgPlchldr from "../imgs/imgPlchldr.jpg";
import logoPlchldr from "../imgs/logoPlchldr.png";
import cvrPlchldr from "../imgs/cvrPlchldr.png";

const Color = ({
  coverurl,
  logourl,
  profileurl,
  userdata,
  returnSlicedString,
  handleModal,
  downloadVcf,
  sociallink,
  returnIcons,
  checkHttp,
  linkAnalytics,
  scrnWidth,
}) => {
  return (
    <div className="w-[97%]   max-h-[100vh] opacity-[100%] overflow-y-scroll scrollbar-hide">
      <div className="min-h-[355px] w-[100%] flex items-center flex-col">
        <div className="h-[160px] w-[100%]  flex justify-center mt-[20px]">
          <div className="h-[100%] w-[160px] relative">
            <img
              src={logourl ? logourl : logoPlchldr}
              alt="logo"
              className="absolute bottom-[15px] right-[-7px] h-[55px] w-[55px] rounded-full border-[1px] border-white"
              loading="lazy"
            />
            {profileurl ? (
              <img
                src={profileurl}
                alt="profile"
                className="h-[150px] w-[150px] rounded-full border-[5px] border-white"
                loading="lazy"
              />
            ) : (
              <div className="h-[150px] w-[150px] rounded-full border-[5px] border-white"></div>
            )}
          </div>
        </div>

        <div className="w-[100%] flex justify-center mt-[22px] ">
          <h2 className="text-[22px]  font-[400] text-center w-[90%]">
            {returnSlicedString(
              `${userdata?.firstName} ${userdata?.lastName}`,
              30
            )}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center ">
          <h2 className="text-[16px] font-[300] text-[#4D4444] text-center w-[90%]">
            {returnSlicedString(userdata?.jobTitle, 51)}
          </h2>
        </div>
        <div className="w-[100%] flex justify-center  ">
          <h2 className="text-[16px] font-[300] text-[#4D4444] text-center w-[90%]">
            {returnSlicedString(userdata?.company, 51)}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center  ">
          <h2 className=" text-[15px] font-[300] text-[#4D4444] text-center w-[90%]">
            {userdata?.address}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center mt-[15px] text-center">
          <p className="text-[16px] font-[300] text-[#2e363c] w-[90%]">
            {userdata?.bio}
          </p>
        </div>
        <div
          className={`w-[100%] h-[80px] flex justify-center items-center relative`}
        >
          {/* bg-gradient-to-b from-[${hexToRGBA(userdata?.colorCode)}] to-white */}
          <div className="w-[250px] flex justify-center items-center ">
            <div
              className={`w-[166px] h-[55px]  rounded-[15px] flex justify-center items-center text-[18px] text-white font-[700] cursor-pointer`}
              style={{
                backgroundColor: "black",
                fontStyle: "Inter",
              }}
              onClick={() => downloadVcf()}
            >
              Save Contact
            </div>
          </div>
          <div
            className="h-[25px] w-[25px] cursor-pointer absolute"
            onClick={() => handleModal()}
            style={scrnWidth >= 380 ? { right: "17%" } : { right: "13%" }}
          >
            <img src={share} alt="" className="h-[25px] w-[25px]" />
          </div>
        </div>
      </div>

      <div className="w-[100%] flex justify-center mt-3">
        <div className="w-[94%] rounded-[25px]    flex flex-col items-center">
          {/* bg-[#f5f5f58e] */}
          <div className="w-[95%] mt-1">
            {sociallink?.map((elm) => {
              return (
                <>
                  <a
                    target="_blank"
                    href={checkHttp(
                      elm?.baseUrl + elm?.value,
                      elm?.linkID,
                      elm?.value
                    )}
                    // onClick={() => linkAnalytics(elm?.title)}
                  >
                    <div className="w-[100%] flex justify-center">
                      <div
                        className="w-[92%] h-[121px] mt-4 mb-1 bg-[white]  border-[1px] border-[#F1ECEC]  rounded-[30px] flex "
                        style={
                          elm?.shareable === false || elm?.isFeatureOn === false
                            ? { display: "none" }
                            : null
                        }
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
            })}
          </div>
          <div className=" w-[95%]  flex justify-around items-center flex-wrap mt-5">
            {/* grid grid-cols-3 gap-x-4 pr-7 */}
            {sociallink?.map((elm) => {
              return (
                <>
                  <a
                    target="_blank"
                    href={
                      elm?.linkID != null &&
                      checkHttp(
                        elm?.baseUrl + elm?.value,
                        elm?.linkID,
                        elm?.value
                      )
                    }
                    // returnSocialUrl(elm?.title, elm?.value)
                    class="h-[120px] w-[31%] flex flex-col  items-center mt-4 "
                    style={
                      elm?.shareable === false || elm?.isFeatureOn === true
                        ? { display: "none" }
                        : null
                    }
                    onClick={() => linkAnalytics(elm)}
                  >
                    {elm?.linkID != null && (
                      <img
                        src={returnIcons(elm?.linkID)}
                        alt="img"
                        class={` ${"h-[75px] w-[75px]"}`}
                        // style={elm?.name==='Calendly'? {borderRadius:'10px'}:null}
                      />
                    )}
                    <h2 class="font-[300] text-[12px] text-[#000000] mt-[6px] text-center">
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
          {/* <br /> */}
        </div>
      </div>

      <div
        className=" w-[100%] h-[100px]  flex justify-center items-center mt-[16px]"
        // style={{
        //   background: `linear-gradient(to top, ${hexToRGBA(
        //     userdata?.colorCode
        //   )},${hexToRGBA(userdata?.colorCode)}, white)`,
        // }}
      >
        <div className="h-[51px] w-[211px] rounded-[15px] text-[#FFFFFF]  bg-black flex justify-center items-center  font-[500] text-[15px] cursor-pointer">
          Create your own profile
        </div>
      </div>
      {/* <br /> */}
    </div>
  );
};

export default Color;
