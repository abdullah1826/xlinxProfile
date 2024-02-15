import React from "react";
import share from "../imgs/share.svg";
import imgPlchldr from "../imgs/imgPlchldr.jpg";
import logoPlchldr from "../imgs/logoPlchldr.png";
import cvrPlchldr from "../imgs/cvrPlchldr.png";
import FeaturedSocial from "../assets/components/FeaturedSocial";
import WebGrfkBtn from "../assets/components/webGrfkBtn";
import WebBtn from "../assets/components/webBtn";
import SaveBtn from "../assets/components/SaveBtn";
import SocialLinks from "../assets/components/SocialLinks";

const Portrait = ({
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
  bg,
  highlightBoxStyle,
  appIconColor,
  boxTextColor,
  boxBackgroundColor,
  removeHash,
  hideCompanyLogo,
  hideSaveContact,
}) => {
  // console.log(weblinkButtonBackgroundColor);
  let hexToRGBA = (hex) => {
    // Remove the '#' character if present
    hex = hex?.replace("#", "");

    // Convert the hex value to RGB
    const red = parseInt(hex?.substring(0, 2), 16);
    const green = parseInt(hex?.substring(2, 4), 16);
    const blue = parseInt(hex?.substring(4, 6), 16);

    // Convert RGB to RGBA with alpha value 0.1
    const rgba = `rgba(${red}, ${green}, ${blue}, 0.1)`;

    return rgba;
  };

  let hideSaveContactFalse =
    scrnWidth >= 380 ? { right: "15%" } : { right: "11%" };
  let hideSaveContactTrue = null;
  return (
    <div className="w-[100%]   max-h-[100vh] opacity-[100%] overflow-y-scroll scrollbar-hide">
      <div className="min-h-[355px] w-[100%] flex items-center flex-col">
        <div className="w-[100%] h-[420px] relative overflow-hidden">
          <div
            className="w-[100%] h-[150px] absolute bottom-[-15px] "
            style={{
              background: `linear-gradient(to top, ${bg},${bg}, transparent)`,
              //   background: `linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, ${bg} 100%)`,
            }}
          ></div>
          <img
            src={profileurl}
            className="w-[100%] h-[400px]  object-cover"
            alt=""
          />
        </div>
        {/* <div className="h-[160px] w-[100%]  flex justify-center mt-[20px]">
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
        </div> */}

        <div className="w-[100%] flex justify-center z-20 mt-[-20px]">
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

        <div className="w-[100%] flex justify-center ">
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
          className={`w-[100%] flex justify-center items-center relative`}
          style={!hideSaveContact ? { height: "80px" } : null}
        >
          {/* bg-gradient-to-b from-[${hexToRGBA(userdata?.colorCode)}] to-white */}
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
                  src={`https://img.icons8.com/ios-filled/100/${removeHash(
                    saveContactBackgroundColor
                  )}/refresh--v1.png`}
                  alt="refresh--v1"
                  className="rotate-90 "
                />
                {/* <img src={share} alt="" className="h-[25px] w-[50px] " /> */}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-[100%] flex justify-center mt-3">
        <div className="w-[94%] rounded-[25px]    flex flex-col items-center">
          <SocialLinks
            sociallink={sociallink}
            checkHttp={checkHttp}
            linkAnalytics={linkAnalytics}
            webBtnStyle={webBtnStyle}
            weblinkButtonTextColor={weblinkButtonTextColor}
            weblinkButtonBackgroundColor={weblinkButtonBackgroundColor}
            appIconColor={appIconColor}
            boxTextColor={boxTextColor}
            boxBackgroundColor={boxBackgroundColor}
            highlightBoxStyle={highlightBoxStyle}
          />

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

export default Portrait;
