import React from "react";
import share from "../imgs/share.svg";
import imgPlchldr from "../imgs/imgPlchldr.jpg";
import logoPlchldr from "../imgs/logoPlchldr.png";
import cvrPlchldr from "../imgs/cvrPlchldr.png";
import SaveBtn from "../assets/components/SaveBtn";
import WebBtn from "../assets/components/webBtn";
import WebGrfkBtn from "../assets/components/webGrfkBtn";
import SocialLinks from "../assets/components/SocialLinks";
import ReactPlayer from "react-player";

const Classic = ({
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
  webBtnStyle,
  weblinkButtonTextColor,
  weblinkButtonBackgroundColor,
  saveContactBackgroundColor,
  saveContactTextColor,
  highlightBoxStyle,
  isClassic,
  appIconColor,
  boxTextColor,
  boxBackgroundColor,
  removeHash,
  hideCompanyLogo,
  hideSaveContact,
  whiteTextAndBorder,
  isV1,
}) => {
  // let webBtnStyle = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];
  let hideSaveContactFalse =
    scrnWidth >= 380 ? { right: "15%" } : { right: "11%" };
  let hideSaveContactTrue = null;

  // console.log(hideSaveContact);
  return (
    <div className="w-[100%] relative  h-[100vh] opacity-[100%] overflow-y-scroll scrollbar-hide ">
      <div className="min-h-[355px] w-[100%] flex items-center flex-col">
        {coverurl ? (
          <img
            src={coverurl}
            // alt="background"
            className="h-[210px] w-[90%] mt-[15px] rounded-2xl"
            loading="lazy"
          />
        ) : (
          <div className="h-[210px] w-[90%] mt-[15px] rounded-2xl "></div>
        )}

        <div className="h-[160px] w-[100%] absolute top-[140px] flex justify-center">
          <div className="h-[100%] w-[160px] relative">
            {!hideCompanyLogo && (
              <img
                src={logourl ? logourl : logoPlchldr}
                alt="logo"
                className="absolute bottom-[15px] right-[-7px] h-[55px] w-[55px] rounded-full border-[1px] border-white"
                loading="lazy"
              />
            )}
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

        <div className="w-[100%] flex justify-center mt-[72px] ">
          <h2
            className="text-[22px]  font-[400] text-center w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {returnSlicedString(
              `${userdata?.firstName} ${userdata?.lastName}`,
              30
            )}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center ">
          <h2
            className="text-[16px] font-[300]  text-center w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {returnSlicedString(userdata?.jobTitle, 51)}
          </h2>
        </div>
        <div className="w-[100%] flex justify-center  ">
          <h2
            className="text-[16px] font-[300]  text-center w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {returnSlicedString(userdata?.company, 51)}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center  ">
          <h2
            className=" text-[15px] font-[300] text-[#4D4444] text-center w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {userdata?.address}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center mt-[15px] text-center">
          <p
            className="text-[16px] font-[300] text-[#2e363c] w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {userdata?.bio}
          </p>
        </div>
        <div
          className={`w-[100%] flex justify-center items-center relative`}
          style={!hideSaveContact ? { height: "80px" } : null}
        >
          {/* bg-gradient-to-b from-[${hexToRGBA(userdata?.colorCode)}] to-white */}
          {/* <div className="w-[250px] flex justify-center items-center">
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
          </div> */}
          {!hideSaveContact && (
            <>
              <SaveBtn
                downloadVcf={downloadVcf}
                saveBtnStyle={saveBtnStyle}
                saveContactBackgroundColor={saveContactBackgroundColor}
                saveContactTextColor={saveContactTextColor}
              />
              <div
                className="h-[35px] w-[35px] cursor-pointer absolute"
                onClick={() => handleModal()}
                style={
                  hideSaveContact
                    ? { hideSaveContactTrue }
                    : hideSaveContactFalse
                }
              >
                <img
                  width="30"
                  height="30"
                  src={
                    isV1
                      ? `https://img.icons8.com/ios-filled/100/080808/refresh--v1.png`
                      : `https://img.icons8.com/ios-filled/100/${removeHash(
                          saveContactBackgroundColor
                        )}/refresh--v1.png`
                  }
                  alt="refresh--v1"
                  className="rotate-90 "
                />
                {/* <img src={share} alt="" className="h-[25px] w-[50px] " /> */}
              </div>
            </>
          )}
        </div>
      </div>

      {/* </div> */}

      {/* <div className="w-[100%]">
    {sociallink?.map((elm) => {
      return (
        <>
          <a
            target="_blank"
          
          >
            <div className="w-[100%] flex justify-center">
              <div
                className="w-[90%] h-[130px] mt-4 bg-[white] shadow-xl rounded-[10px] flex border"
                style={
                  elm?.shareable === false ||
                  elm?.isFeatureOn === false
                    ? { display: "none" }
                    : null
                }
              >
                <div className="w-[40%]  flex justify-center items-center">
                  <img
                    src={returnIcons(elm?.linkID)}
                    alt=""
                    className="h-[88px] w-[88px]"
                  />
                </div>

                <div className="w-[60%] flex flex-col ">
                  <h2 className="font-[700] text-[18px] mt-[20px]">
                    {elm?.name?.length < 17
                      ? elm?.name
                      : elm?.name?.substring(0, 16) + "..."}
                  </h2>
                  <p className="font-[300] text-[12px] w-[90%] ">
                    {elm?.feature?.length < 67
                      ? elm?.feature
                      : elm?.feature?.substring(0, 67) + "..."}
                  </p>
                
                </div>
              </div>
            </div>
          </a>
        </>
      );
    })}
  </div> */}

      <div className="w-[100%] flex justify-center mt-3">
        {sociallink?.length > 0 && (
          <div className="w-[94%] rounded-[25px]    flex flex-col items-center">
            {/* bg-[#FAFAFA] */}
            <SocialLinks
              sociallink={sociallink}
              checkHttp={checkHttp}
              linkAnalytics={linkAnalytics}
              webBtnStyle={webBtnStyle}
              weblinkButtonTextColor={weblinkButtonTextColor}
              weblinkButtonBackgroundColor={weblinkButtonBackgroundColor}
              highlightBoxStyle={highlightBoxStyle}
              isClassic={isClassic}
              appIconColor={appIconColor}
              boxTextColor={boxTextColor}
              boxBackgroundColor={boxBackgroundColor}
              whiteTextAndBorder={whiteTextAndBorder}
            />
            <br />
          </div>
        )}
      </div>

      <div
        className=" w-[100%] h-[100px]  flex justify-center items-center"
        // style={{
        //   background: `linear-gradient(to top, ${hexToRGBA(
        //     userdata?.colorCode
        //   )},${hexToRGBA(userdata?.colorCode)}, white)`,
        // }}
      >
        <div
          className="h-[51px] w-[211px] rounded-[15px] text-[#FFFFFF]  bg-black flex justify-center items-center  font-[500] text-[15px] cursor-pointer "
          onClick={() => window.open("https://www.getcirco.com/download")}
        >
          Create your own profile
        </div>
      </div>
      {/* <br /> */}
    </div>
  );
};

export default Classic;
