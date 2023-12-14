import React from "react";
import share from "../imgs/share.png";
import imgPlchldr from "../imgs/imgPlchldr.jpg";
import logoPlchldr from "../imgs/logoPlchldr.png";
import cvrPlchldr from "../imgs/cvrPlchldr.png";
import SaveBtn from "../assets/components/SaveBtn";
import WebBtn from "../assets/components/webBtn";
import WebGrfkBtn from "../assets/components/webGrfkBtn";
import FeaturedSocial from "../assets/components/FeaturedSocial";

const Full = ({
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
  saveBtnStyle,
}) => {
  console.log(sociallink);

  let webBtnStyle = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];
  return (
    <div className="w-[100%]  max-h-[100vh] opacity-[100%] overflow-y-scroll scrollbar-hide ">
      <div className="min-h-[355px] w-[100%] flex items-center flex-col ">
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

        <div className="w-[100%] flex justify-center mt-[10px] ">
          <h2 className="text-[22px]  font-[400] text-center w-[90%] text-white">
            {returnSlicedString(
              `${userdata?.firstName} ${userdata?.lastName}`,
              30
            )}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center ">
          <h2 className="text-[16px] font-[300] text-white text-center w-[90%]">
            {returnSlicedString(userdata?.jobTitle, 51)}
          </h2>
        </div>
        <div className="w-[100%] flex justify-center  ">
          <h2 className="text-[16px] font-[300] text-white text-center w-[90%]">
            {returnSlicedString(userdata?.company, 51)}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center  ">
          <h2 className=" text-[15px] font-[300] text-white text-center w-[90%]">
            {userdata?.address}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center mt-[15px] text-center">
          <p className="text-[16px] font-[300] text-white w-[90%]">
            {userdata?.bio}
          </p>
        </div>
        <div
          className={`w-[100%] h-[80px] flex justify-center items-center relative`}
        >
          {/* bg-gradient-to-b from-[${hexToRGBA(userdata?.colorCode)}] to-white */}
          <SaveBtn downloadVcf={downloadVcf} saveBtnStyle={saveBtnStyle} />
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
        <div className="w-[94%] rounded-[25px]  flex flex-col items-center">
          {/* bg-[#f5f5f58e] */}
          <div className="w-[95%] mt-1">
            {sociallink?.map((elm) => {
              return <></>;
            })}
          </div>
          <div className=" w-[95%]  flex justify-around items-center flex-wrap mt-5">
            {/* grid grid-cols-3 gap-x-4 pr-7 */}
            {sociallink?.map((elm) => {
              return elm?.linkID === 32 ||
                elm?.linkID === 15 ||
                elm?.linkID === 16 ? (
                <WebBtn
                  elm={elm}
                  checkHttp={checkHttp}
                  linkAnalytics={linkAnalytics}
                  returnIcons={returnIcons}
                  webBtnStyle={webBtnStyle[7]}
                />
              ) : elm?.linkID === 31 ? (
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
                />
              ) : (
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
                    <h2 class="font-[300] text-[12px] text-white mt-[6px] text-center">
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

export default Full;
