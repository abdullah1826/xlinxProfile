import React from "react";
import share from "../imgs/share.svg";
import imgPlchldr from "../imgs/imgPlchldr.jpg";
import logoPlchldr from "../imgs/logoPlchldr.png";
import cvrPlchldr from "../imgs/cvrPlchldr.png";
import SaveBtn from "../assets/components/SaveBtn";
import WebBtn from "../assets/components/webBtn";
import WebGrfkBtn from "../assets/components/webGrfkBtn";
import FeaturedSocial from "../assets/components/FeaturedSocial";
import SocialLinks from "../assets/components/SocialLinks";

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
  webBtnStyle,
  weblinkButtonTextColor,
  weblinkButtonBackgroundColor,
  saveContactBackgroundColor,
  saveContactTextColor,
  highlightBoxStyle,
  appIconColor,
  boxBackgroundColor,
  boxTextColor,
  removeHash,
  hideCompanyLogo,
  hideSaveContact,
}) => {
  console.log(sociallink);

  // let webBtnStyle = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];
  let hideSaveContactFalse =
    scrnWidth >= 380 ? { right: "15%" } : { right: "11%" };
  let hideSaveContactTrue = null;
  return (
    <div className="w-[100%]  max-h-[100vh] opacity-[100%] overflow-y-scroll scrollbar-hide ">
      <div className="min-h-[355px] w-[100%] flex items-center flex-col ">
        <div className="h-[160px] w-[100%]  flex justify-center mt-[20px]">
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
          {!hideSaveContact && (
            <SaveBtn
              downloadVcf={downloadVcf}
              saveBtnStyle={saveBtnStyle}
              saveContactBackgroundColor={saveContactBackgroundColor}
              saveContactTextColor={saveContactTextColor}
            />
          )}
          <div
            className="h-[35px] w-[35px] cursor-pointer absolute"
            onClick={() => handleModal()}
            style={
              hideSaveContact ? { hideSaveContactTrue } : hideSaveContactFalse
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
        </div>
      </div>

      <div className="w-[100%] flex justify-center mt-3">
        <div className="w-[94%] rounded-[25px]  flex flex-col items-center">
          <SocialLinks
            sociallink={sociallink}
            checkHttp={checkHttp}
            linkAnalytics={linkAnalytics}
            webBtnStyle={webBtnStyle}
            weblinkButtonTextColor={weblinkButtonTextColor}
            weblinkButtonBackgroundColor={weblinkButtonBackgroundColor}
            appIconColor={appIconColor}
            boxBackgroundColor={boxBackgroundColor}
            boxTextColor={boxTextColor}
          />
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
