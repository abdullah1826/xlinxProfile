import React, { useState } from "react";
import share from "../imgs/share.svg";
import imgPlchldr from "../imgs/imgPlchldr.jpg";
import logoPlchldr from "../imgs/logoPlchldr.png";
import cvrPlchldr from "../imgs/cvrPlchldr.png";
import SaveBtn from "../assets/components/SaveBtn";
import WebBtn from "../assets/components/webBtn";
import WebGrfkBtn from "../assets/components/webGrfkBtn";
import FeaturedSocial from "../assets/components/FeaturedSocial";
import SocialLinks from "../assets/components/SocialLinks";
import { browserName } from "react-device-detect";
import MenumenuModal from "../assets/components/MenuModal";
import { HiDotsHorizontal } from "react-icons/hi";

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
  whiteTextAndBorder,
}) => {
  console.log(sociallink);

  // let webBtnStyle = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];
  let hideSaveContactFalse =
    scrnWidth >= 380 ? { right: "15%" } : { right: "11%" };
  let hideSaveContactTrue = null;

  let [menuModal, setMenuModal] = useState(false);
  let handleMenuModal = () => {
    setMenuModal(!menuModal);
  };

  return (
    <div className="w-[100%]  max-h-[100vh] opacity-[100%] overflow-y-scroll scrollbar-hide ">
      <div
        className=" w-[100%] flex items-center flex-col "
        style={
          !hideSaveContact ? { minHeight: "355px" } : { minHeight: "300px" }
        }
      >
        <MenumenuModal
          menuModal={menuModal}
          handleMenuModal={handleMenuModal}
          userdata={userdata}
        />
        <div
          className="h-[38px] w-[38px] rounded-full absolute top-5 right-7 cursor-pointer flex justify-center items-center z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.495) 0%, rgba(255, 255, 255, 0.2178) 100%)",
          }}
          onClick={() => handleMenuModal()}
        >
          <HiDotsHorizontal className="text-[white] text-2xl" />
        </div>
        <div className="h-[160px] w-[100%]  flex justify-center mt-[20px]">
          <div className="h-[100%] w-[160px] relative">
            {!hideCompanyLogo && logourl && (
              <img
                src={logourl}
                alt="logo"
                className="absolute bottom-[15px] right-[-7px] h-[55px] w-[55px] rounded-full border-[1px] border-white"
                loading="lazy"
              />
            )}
            {/* {profileurl ? ( */}
            <img
              src={profileurl ? profileurl : imgPlchldr}
              alt="profile"
              className="h-[150px] w-[150px] rounded-full border-[3px] border-white"
              loading="lazy"
            />
            {/* // ) : (
            //   <div className="h-[150px] w-[150px] rounded-full border-[3px] border-white"></div>
            // )} */}
          </div>
        </div>

        <div className="w-[100%] flex justify-center mt-[10px]">
          <h2
            className="text-[28px]  font-[600] text-center w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {returnSlicedString(
              `${userdata?.firstName} ${userdata?.lastName}`,
              30
            )}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center mt-3">
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
            className=" text-[15px] font-[300] text-center w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {userdata?.address}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center mt-[15px] text-center">
          <p
            className="text-[16px] font-[300] w-[90%]"
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

      <div
        className="w-[100%] flex justify-center"
        style={!hideSaveContact ? { marginTop: "12px" } : null}
      >
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
            highlightBoxStyle={highlightBoxStyle}
            whiteTextAndBorder={whiteTextAndBorder}
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
        <div
          className="h-[49px] w-[178px] rounded-[55px] text-[#FFFFFF] flex justify-center items-center  font-[500] text-[15px] cursor-pointer gap-2"
          onClick={() => window.open("https://www.getcirco.com/download")}
          style={{
            background:
              "linear-gradient(90deg, rgba(119, 119, 119, 0.66) 0%, rgba(44, 44, 44, 0.33) 100%)",
          }}
        >
          <img src={btmLogo} className="h-[17px] w-[17px]" />
          Create your Circo
        </div>
      </div>
      {/* <br /> */}
      {browserName === "Mobile Safari" && (
        <>
          <br />
          <br />
          <br />
        </>
      )}
    </div>
  );
};

export default Full;
