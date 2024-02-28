import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, storage } from "../Firebase";
import { onValue, push, ref, set, update } from "firebase/database";
import { getDownloadURL, ref as storagref } from "firebase/storage";
import { returnIcons, returnSocialUrl } from "../assets/ReturnSocialIcons";
import Loader from "../assets/components/Loader";
import VCard from "vcard-creator";
import NotFound from "./NotFound";
import LeadformModal from "../assets/components/LeadformModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import share from "../imgs/share.svg";
import imgPlchldr from "../imgs/imgPlchldr.jpg";
import logoPlchldr from "../imgs/logoPlchldr.png";
import cvrPlchldr from "../imgs/cvrPlchldr.png";
import prffbg from "../imgs/prflbg.png";

import ConfirmModal from "../assets/components/SubmitConfirmModal";
import Classic from "../Themes/Classic";
import Color from "../Themes/Color";
import Full from "../Themes/Full";
import Portrait from "../Themes/Portrait";

const Home = () => {
  let { userid } = useParams();
  let [userdata, setuserdata] = useState(null);
  let [sociallink, setsociallink] = useState([]);
  let [loading, setloading] = useState(true);

  // console.log(sociallink);

  // ------------------getting Data--------------------

  let [usersdata, setusersdata] = useState(null);
  let [allAnalytics, setAllAnalytics] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, `User/`);
    onValue(starCountRef, async (snapshot) => {
      const data = await snapshot.val();
      console.log(data);
      setusersdata(Object.values(data));
    });
  }, []);

  // console.log(allAnalytics);

  let [notfound, setnotfound] = useState(false);
  let [endpoint, setendpoint] = useState("");
  let [showSlide, setshowSlide] = useState(false);

  let [modal, setModal] = useState(false);
  let [confirmModal, setConfirmModal] = useState(false);

  let handleConfirmModal = () => {
    setConfirmModal(!confirmModal);
  };

  let handleModal = () => {
    setModal(!modal);
  };

  let currentDate = Date.now();
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  const oneMonth = 30 * 24 * 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;

  useEffect(() => {
    const starCountRef2 = ref(db, `Analytic/`);
    onValue(starCountRef2, async (snapshot) => {
      const analytData = await snapshot.val();
      console.log(analytData);
      setAllAnalytics(Object.values(analytData));

      if (usersdata) {
        let checklist = usersdata?.some((elm) => {
          return userid === elm?.id || userid === elm?.username;
        });
        console.log(checklist);
        if (checklist) {
          console.log("true");
          usersdata?.map((elm) => {
            if (userid === elm?.id || userid === elm?.username) {
              console.log(elm);
              setuserdata(elm);
              setModal(elm?.leadMode);
              elm?.links && setsociallink(Object.values(elm?.links));
              setloading(false);
            }
          });

          //     let thedata=usersdata?.filter((elm)=>{
          // return userid === elm?.id || userid === elm?.userName
          //         })
          // if(thedata){
          //   setuserdata(thedata);
          //   setModal(thedata?.leadMode)
          //   thedata?.links &&  setsociallink(Object.values(thedata?.links));
          // setloading(false);
          // }
        } else {
          setloading(false);
          setnotfound(true);
        }
      }
    });
  }, [usersdata]);

  // console.log(userdata?.Analytics?.updatedAt);

  // getting profile url

  let [profileurl, setprofileurl] = useState("");
  useEffect(() => {
    if (userdata?.profileUrl) {
      // const storage = getStorage();
      const fileRef = storagref(storage, userdata?.profileUrl);
      // console.log(loginUserData.profileUrl);

      getDownloadURL(fileRef)
        .then((URL) => {
          console.log(URL);
          setprofileurl(URL);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userdata?.profileUrl]);

  // getting logo img

  let [logourl, setlogourl] = useState("");
  useEffect(() => {
    if (userdata?.logoUrl) {
      // const storage = getStorage();
      const fileRef = storagref(storage, userdata?.logoUrl);
      // console.log(loginUserData.profileUrl);

      getDownloadURL(fileRef)
        .then((URL) => {
          console.log(URL);
          setlogourl(URL);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userdata?.logoUrl]);

  // getting logo img

  let [coverurl, setcoverurl] = useState("");
  useEffect(() => {
    if (userdata?.coverUrl) {
      // const storage = getStorage();
      const fileRef = storagref(storage, userdata?.coverUrl);
      // console.log(loginUserData.profileUrl);

      getDownloadURL(fileRef)
        .then((URL) => {
          // console.log(URL);
          setcoverurl(URL);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userdata?.logoUrl]);

  // ----------------------------------------->Analytics<-------------------------------------

  let addedInAnalyticsOrNot = (id) => {
    let addedOrNot = allAnalytics?.some((elm) => {
      return id === elm?.userid;
    });
    return addedOrNot;
  };

  let returnClickedLinkAnalyt = () => {};

  let crntUsrAnalytics = allAnalytics?.find((usr) => {
    return userdata?.id === usr?.userid;
  });
  let linkAddedInAnalyticsOrNot = (id) => {
    let addedOrNot = crntUsrAnalytics?.links?.some((elm) => {
      return id === elm?.id;
    });
    return addedOrNot;
  };

  useEffect(() => {
    if (userdata?.id) {
      if (addedInAnalyticsOrNot(userdata?.id)) {
        // ---------------------------updatetion for week wise analytics-------------------------
        if (currentDate > crntUsrAnalytics?.updatedWeek + oneWeek) {
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
            totalViews: crntUsrAnalytics?.totalViews + 1,
            updatedWeek: currentDate,
            pastWeekViews: crntUsrAnalytics?.crntWeekViews,
            pastWeekLeads: crntUsrAnalytics?.crntWeekLeads,

            // pastMonthViews: crntUsrAnalytics?.crntMonthViews,
            // pastMonthLeads: crntUsrAnalytics?.crntMonthLeads,
          }).then(() => {
            update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
              crntWeekViews: 1,
              crntWeekLeads: 0,
            });
          });
        } else {
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
            totalViews: crntUsrAnalytics?.totalViews + 1,
            crntWeekViews: crntUsrAnalytics?.crntWeekViews + 1,
            crntMonthViews: crntUsrAnalytics?.crntMonthViews + 1,
          });
        }

        // ---------------------------updatetion for Month wise analytics-------------------------
        if (currentDate > crntUsrAnalytics?.updatedMonth + oneMonth) {
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
            updatedMonth: currentDate,
            // pastWeekViews: crntUsrAnalytics?.crntWeekViews,
            // pastWeekLeads: crntUsrAnalytics?.crntWeekLeads,
            pastMonthViews: crntUsrAnalytics?.crntMonthViews,
            pastMonthLeads: crntUsrAnalytics?.crntMonthLeads,
          }).then(() => {
            update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
              crntMonthViews: crntUsrAnalytics?.crntMonthViews + 1,
              crntMonthLeads: 0,
            });
          });
        }

        // ---------------------------updatetion for Month wise analytics-------------------------
        if (currentDate > crntUsrAnalytics?.updatedDay + oneDay) {
          let weeklyViewsArray = Object.values(crntUsrAnalytics?.weeklyViews);
          let weeklyConnectionsArray = Object.values(
            crntUsrAnalytics?.weeklyConnections
          );
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
            updatedDay: currentDate,
            weeklyViews: [
              weeklyViewsArray[1],
              weeklyViewsArray[2],
              weeklyViewsArray[3],
              weeklyViewsArray[4],
              weeklyViewsArray[5],
              weeklyViewsArray[6],
              crntUsrAnalytics?.todayViews,
            ],
            weeklyConnections: [
              weeklyConnectionsArray[1],
              weeklyConnectionsArray[2],
              weeklyConnectionsArray[3],
              weeklyConnectionsArray[4],
              weeklyConnectionsArray[5],
              weeklyConnectionsArray[6],
              crntUsrAnalytics?.todayLeads,
            ],
          }).then(() => {
            update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
              todayViews: 1,
              todayLeads: 0,
            });
          });
        } else {
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
            todayViews: crntUsrAnalytics?.todayViews + 1,
            todayLeads: crntUsrAnalytics?.todayLeads,
          });
        }
      } else {
        let thePushKey = push(ref(db, `Analytic/`), {
          userid: userdata?.id,
          totalViews: 1,
          totalClicks: 0,
          totalClickRate: 0,
          totalLeads: 0,

          crntWeekViews: 1,
          pastWeekViews: 0,

          crntWeekLeads: 0,
          pastWeekLeads: 0,

          crntMonthViews: 1,
          pastMonthViews: 0,

          crntMonthLeads: 0,
          pastMonthLeads: 0,

          todayViews: 1,
          todayLeads: 0,
          weeklyViews: [0, 0, 0, 0, 0, 0, 0],
          weeklyConnections: [0, 0, 0, 0, 0, 0, 0],
          updatedWeek: currentDate,
          updatedMonth: currentDate,
          updatedDay: currentDate,
        }).key;

        update(ref(db, `Analytic/${thePushKey}`), {
          id: thePushKey,
        });
      }
    }
  }, [userdata?.id]);

  // useEffect(() => {
  //   if (userdata?.id) {
  //     if (userdata?.Analytics) {
  //       if (currentDate > userdata?.Analytics?.updatedAt + oneWeek) {
  //         update(ref(db, `User/${userdata?.id}/Analytics`), {
  //           totalClicks: userdata?.Analytics?.totalClicks + 1,
  //           updatedAt: currentDate,
  //           tClicksPstWk: userdata?.Analytics?.tClicksCrntWk,
  //           tContactsMePstWk: userdata?.Analytics?.tContactsMeCrntWk,
  //         }).then(() => {
  //           update(ref(db, `User/${userdata?.id}/Analytics`), {
  //             tClicksCrntWk: 0,
  //             tContactsMeCrntWk: 0,
  //           });
  //         });
  //       } else {
  //         update(ref(db, `User/${userdata?.id}/Analytics`), {
  //           totalClicks: userdata?.Analytics?.totalClicks + 1,
  //         });
  //       }
  //     } else {
  //       update(ref(db, `User/${userdata?.id}/Analytics`), {
  //         totalClicks: 1,
  //         totalLinkClicks: 0,
  //         tClicksCrntWk: 1,
  //         tClicksPstWk: 0,
  //         tContactsMeCrntWk: 0,
  //         tContactsMePstWk: 0,
  //       });
  //     }
  //   }
  // }, [userdata?.id]);

  // ----------------------------------------->Link Analytics<-------------------------------------

  let linkAnalytics = (name) => {
    if (crntUsrAnalytics?.links) {
      if (linkAddedInAnalyticsOrNot(name?.id)) {
        console.log("added");
        let findLink = crntUsrAnalytics?.links?.find((elm) => {
          return name?.id === elm?.id;
        });

        let linksWithoutCrntLink = crntUsrAnalytics?.links?.filter((elm) => {
          return name?.id != elm?.id;
        });
        update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
          links: [
            ...linksWithoutCrntLink,
            {
              id: findLink?.id,
              linkID: findLink?.linkID,
              name: findLink?.name ? findLink?.name : "",
              clicks: findLink?.clicks + 1,
              image: findLink?.image ? findLink?.image : "",
              title: findLink?.title ? findLink?.title : "",
              url: findLink?.url ? findLink?.url : "",
              style: findLink?.style ? findLink?.style : "",
              linkImgUrl: findLink?.linkImgUrl ? findLink?.linkImgUrl : "",
              buttonImgUrl: findLink?.buttonImgUrl
                ? findLink?.buttonImgUrl
                : "",
              graphicImgUrl: findLink?.graphicImgUrl
                ? findLink?.graphicImgUrl
                : "",
            },
          ],
        }).then(() => {
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}/`), {
            totalClicks: crntUsrAnalytics?.totalClicks + 1,
          });
        });
      } else {
        console.log("yes this part is working");
        update(ref(db, `Analytic/${crntUsrAnalytics?.id}/`), {
          links: [
            ...crntUsrAnalytics?.links,
            {
              id: name?.id,
              linkID: name?.linkID,
              name: name?.name ? name?.name : "",
              clicks: 1,
              image: name?.image ? name?.image : "",
              title: name?.title ? name?.title : "",
              url: name?.url ? name?.url : "",
              style: name?.style ? name?.style : "",
              linkImgUrl: name?.linkImgUrl ? name?.linkImgUrl : "",
              buttonImgUrl: name?.buttonImgUrl ? name?.buttonImgUrl : "",
              graphicImgUrl: name?.graphicImgUrl ? name?.graphicImgUrl : "",
            },
          ],
        }).then(() => {
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
            totalClicks: crntUsrAnalytics?.totalClicks + 1,
          });
        });
      }
      console.log("testing analytics");
    } else {
      update(ref(db, `Analytic/${crntUsrAnalytics?.id}/`), {
        links: [
          {
            id: name?.id,
            linkID: name?.linkID,
            name: name?.name ? name?.name : "",
            clicks: 1,
            image: name?.image ? name?.image : "",
            title: name?.title ? name?.title : "",
            url: name?.url ? name?.url : "",
            style: name?.style ? name?.style : "",
            linkImgUrl: name?.linkImgUrl ? name?.linkImgUrl : "",
            buttonImgUrl: name?.buttonImgUrl ? name?.buttonImgUrl : "",
            graphicImgUrl: name?.graphicImgUrl ? name?.graphicImgUrl : "",
          },
        ],
      }).then(() => {
        update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
          totalClicks: 1,
        });
        console.log("testing analytics2");
      });
    }
  };

  // -----------------------------------------hex to rgba for bg color-------------------------------------

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

  // To base64

  let [base64img, setbase64img] = useState("");
  useEffect(() => {
    let cnvrtTo64 = async () => {
      const base64 = await fetch(profileurl)
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          return new Promise((res) => {
            reader.onloadend = () => {
              res(reader.result);
            };
          });
        });
      setbase64img(base64);
    };
    cnvrtTo64();
  }, [profileurl]);

  // Download Vcf file
  let checkHttp = (url, id, value) => {
    if (id === 4) {
      return `sms:${value}`;
    } else if (id === 2 || id === 1) {
      return `tel:${value}`;
    } else if (id === 3) {
      return `mailto:${value}`;
    } else {
      if (url?.includes("https://") || url?.includes("http://")) {
        return url;
      } else {
        return `https://${url}`;
      }
    }

    // else {
    //   if (id === 4) {

    //   } else {
    //     return url;
    //   }
    // }
  };

  console.log(userdata);
  let downloadVcf = async () => {
    // Define a new vCard
    const myVCard = new VCard();

    // Some variables
    const lastname = userdata?.lastName;
    const firstname = userdata?.firstName;
    const additional = "";
    const prefix = "";
    const suffix = "";

    myVCard
      .addName(lastname, firstname, additional, prefix, suffix)
      .addJobtitle(userdata?.jobTitle)
      .addCompany(userdata?.company)
      .addEmail(userdata?.email)
      .addPhoneNumber(userdata?.phone)
      .addPhoto(base64img.slice(37), "jpeg")
      .addAddress("", "", userdata?.address)
      .addNote("From Circo");

    sociallink?.map((elm) => {
      if (
        // elm?.linkID != 3 &&
        elm?.linkID != 1 &&
        elm?.linkID != 4 &&
        elm?.linkID != 2 &&
        elm?.linkID != 3 &&
        elm?.linkID != 26 &&
        elm?.shareable === true
      ) {
        myVCard.addSocial(
          checkHttp(
            elm?.linkID === 999 ? elm?.url : elm?.baseUrl + elm?.value,
            elm?.linkID,
            elm?.value
          ),
          elm?.name
        );
      }
      if (elm?.linkID === 2 && elm?.value != userdata?.phone) {
        myVCard.addPhoneNumber(elm?.value);
      }
      if (elm?.linkID === 3 && elm?.value != userdata?.email) {
        myVCard.addEmail(elm?.value);
      }

      // if (elm?.linkID === 1) {
      //   myVCard.addPhoneNumber(elm?.value);
      // }
      if (elm?.linkID === 21) {
        myVCard.addURL(elm?.value);
      }
      // checkHttp(elm?.baseUrl + elm?.value, elm?.linkID)
    });

    const vcardData = myVCard.toString();
    const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "YoTap.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  let returnSlicedString = (str, numVal) => {
    if (str?.length <= numVal) {
      return str;
    } else {
      return str?.slice(0, numVal) + "...";
    }
  };
  // console.log(userdata);

  let handleLinkAliginmentIssue = () => {
    let theLinks = sociallink?.filter((elm) => {
      return elm?.shareable === true || elm?.isFeatureOn === false;
    });

    if (theLinks?.length % 3 === 0) {
      return theLinks;
    } else {
      theLinks?.push({ linkID: null });
      // theLinks?.push({ linkID: null });
      return theLinks;
    }
  };
  let scrnWidth = window.innerWidth;
  console.log(sociallink);

  let isClassic = false;
  let isColor = false;
  let isFull = true;

  // let saveBtnStyle = ["s1", "s2", "s3", "s4"];
  // let webBtnStyle = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s7"];
  console.log(userdata?.profileDesign?.backgroundTheme);

  let removeHash = (code) => {
    if (code?.includes("#")) {
      return code?.slice(1, code?.length);
    } else {
      return code;
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {notfound || userdata.profileOn === 0 ? (
            <NotFound />
          ) : userdata?.directMode === false ? (
            // <div className="h-max w-max relative">
            <div
              className="h-[100vh] max-w-[435px] w-[100%] flex flex-col items-center  shadow-lg  relative"
              style={
                userdata?.profileDesign?.backgroundTheme === "Full"
                  ? {
                      fontFamily: "Inter, sans-serif",
                      // backgroundImage: `url(${userdata?.profileDesign?.backgroundImage})`,
                      // backgroundSize: "cover",
                      // backgroundRepeat: "no-repeat",
                      // objectFit: "cover",
                      // opacity: `${userdata?.profileDesign?.backgroundOpacity}%`,
                    }
                  : {
                      fontFamily: "Inter, sans-serif",

                      // background: `linear-gradient(to bottom, ${hexToRGBA(
                      //   userdata?.cardColor
                      // )},${hexToRGBA(userdata?.backgroudColor)}, white)`,
                      backgroundColor: `${userdata?.profileDesign?.backgroundColor}`,
                    }
              }
            >
              {userdata?.profileDesign?.backgroundTheme === "Custom" ? (
                <img
                  // backgroundImage
                  src={userdata?.profileDesign?.backgroundImage}
                  className="h-[100%] w-[100%] object-cover"
                  style={{
                    opacity: `${userdata?.profileDesign?.backgroundOpacity}%`,
                  }}
                />
              ) : null}
              {/* <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "100%",
                }}
              > */}
              {/* <ToastContainer position="top-center" autoClose={2000} /> */}

              <LeadformModal
                modal={modal}
                handleModal={handleModal}
                userdata={userdata}
                crntUsrAnalytics={crntUsrAnalytics}
                handleConfirmModal={handleConfirmModal}
              />
              <ConfirmModal
                confirmModal={confirmModal}
                handleConfirmModal={handleConfirmModal}
                userdata={userdata}
                prflImg={
                  profileurl ? profileurl : `https://placehold.co/116x116`
                }
                downloadVcf={downloadVcf}
              />

              {userdata?.profileDesign ? (
                <>
                  {userdata?.profileDesign?.backgroundTheme === "Classic" && (
                    <Classic
                      coverurl={coverurl}
                      logourl={logourl}
                      profileurl={profileurl}
                      userdata={userdata}
                      returnSlicedString={returnSlicedString}
                      handleModal={handleModal}
                      downloadVcf={downloadVcf}
                      sociallink={sociallink}
                      returnIcons={returnIcons}
                      checkHttp={checkHttp}
                      linkAnalytics={linkAnalytics}
                      scrnWidth={scrnWidth}
                      saveBtnStyle={userdata?.profileDesign?.saveContactStyle}
                      webBtnStyle={userdata?.profileDesign?.weblinkStyle}
                      weblinkButtonTextColor={
                        userdata?.profileDesign?.weblinkButtonTextColor
                      }
                      weblinkButtonBackgroundColor={
                        userdata?.profileDesign?.weblinkButtonBackgroundColor
                      }
                      saveContactBackgroundColor={
                        userdata?.profileDesign?.saveContactBackgroundColor
                      }
                      saveContactTextColor={
                        userdata?.profileDesign?.saveContactTextColor
                      }
                      highlightBoxStyle={
                        userdata?.profileDesign?.highlightBoxStyle
                      }
                      isClassic={true}
                      appIconColor={userdata?.profileDesign?.appIconColor}
                      boxTextColor={userdata?.profileDesign?.boxTextColor}
                      boxBackgroundColor={
                        userdata?.profileDesign?.boxBackgroundColor
                      }
                      removeHash={removeHash}
                      hideCompanyLogo={userdata?.profileDesign?.hideCompanyLogo}
                      hideSaveContact={userdata?.profileDesign?.hideSaveContact}
                      whiteTextAndBorder={
                        userdata?.profileDesign?.whiteTextAndBorder
                      }
                      isV1={false}
                    />
                  )}

                  {userdata?.profileDesign?.backgroundTheme === "Color" && (
                    <Color
                      Portrait
                      coverurl={coverurl}
                      logourl={logourl}
                      profileurl={profileurl}
                      userdata={userdata}
                      returnSlicedString={returnSlicedString}
                      handleModal={handleModal}
                      downloadVcf={downloadVcf}
                      sociallink={sociallink}
                      returnIcons={returnIcons}
                      checkHttp={checkHttp}
                      linkAnalytics={linkAnalytics}
                      scrnWidth={scrnWidth}
                      saveBtnStyle={userdata?.profileDesign?.saveContactStyle}
                      webBtnStyle={userdata?.profileDesign?.weblinkStyle}
                      weblinkButtonTextColor={
                        userdata?.profileDesign?.weblinkButtonTextColor
                      }
                      weblinkButtonBackgroundColor={
                        userdata?.profileDesign?.weblinkButtonBackgroundColor
                      }
                      saveContactBackgroundColor={
                        userdata?.profileDesign?.saveContactBackgroundColor
                      }
                      saveContactTextColor={
                        userdata?.profileDesign?.saveContactTextColor
                      }
                      bg={userdata?.profileDesign?.backgroundColor}
                      highlightBoxStyle={
                        userdata?.profileDesign?.highlightBoxStyle
                      }
                      appIconColor={userdata?.profileDesign?.appIconColor}
                      boxTextColor={userdata?.profileDesign?.boxTextColor}
                      boxBackgroundColor={
                        userdata?.profileDesign?.boxBackgroundColor
                      }
                      whiteTextAndBorder={
                        userdata?.profileDesign?.whiteTextAndBorder
                      }
                      removeHash={removeHash}
                      hideCompanyLogo={userdata?.profileDesign?.hideCompanyLogo}
                      hideSaveContact={userdata?.profileDesign?.hideSaveContact}
                    />
                  )}

                  {userdata?.profileDesign?.backgroundTheme === "Portrait" && (
                    <Portrait
                      Portrait
                      coverurl={coverurl}
                      logourl={logourl}
                      profileurl={profileurl}
                      userdata={userdata}
                      returnSlicedString={returnSlicedString}
                      handleModal={handleModal}
                      downloadVcf={downloadVcf}
                      sociallink={sociallink}
                      returnIcons={returnIcons}
                      checkHttp={checkHttp}
                      linkAnalytics={linkAnalytics}
                      scrnWidth={scrnWidth}
                      saveBtnStyle={userdata?.profileDesign?.saveContactStyle}
                      webBtnStyle={userdata?.profileDesign?.weblinkStyle}
                      weblinkButtonTextColor={
                        userdata?.profileDesign?.weblinkButtonTextColor
                      }
                      weblinkButtonBackgroundColor={
                        userdata?.profileDesign?.weblinkButtonBackgroundColor
                      }
                      saveContactBackgroundColor={
                        userdata?.profileDesign?.saveContactBackgroundColor
                      }
                      saveContactTextColor={
                        userdata?.profileDesign?.saveContactTextColor
                      }
                      bg={userdata?.profileDesign?.backgroundColor}
                      highlightBoxStyle={
                        userdata?.profileDesign?.highlightBoxStyle
                      }
                      appIconColor={userdata?.profileDesign?.appIconColor}
                      boxTextColor={userdata?.profileDesign?.boxTextColor}
                      boxBackgroundColor={
                        userdata?.profileDesign?.boxBackgroundColor
                      }
                      whiteTextAndBorder={
                        userdata?.profileDesign?.whiteTextAndBorder
                      }
                      removeHash={removeHash}
                      hideCompanyLogo={userdata?.profileDesign?.hideCompanyLogo}
                      hideSaveContact={userdata?.profileDesign?.hideSaveContact}
                    />
                  )}

                  {userdata?.profileDesign?.backgroundTheme === "Custom" && (
                    <div className="absolute w-[100%]">
                      <Full
                        coverurl={coverurl}
                        logourl={logourl}
                        profileurl={profileurl}
                        userdata={userdata}
                        returnSlicedString={returnSlicedString}
                        handleModal={handleModal}
                        downloadVcf={downloadVcf}
                        sociallink={sociallink}
                        returnIcons={returnIcons}
                        checkHttp={checkHttp}
                        linkAnalytics={linkAnalytics}
                        scrnWidth={scrnWidth}
                        saveBtnStyle={userdata?.profileDesign?.saveContactStyle}
                        webBtnStyle={userdata?.profileDesign?.weblinkStyle}
                        weblinkButtonTextColor={
                          userdata?.profileDesign?.weblinkButtonTextColor
                        }
                        weblinkButtonBackgroundColor={
                          userdata?.profileDesign?.weblinkButtonBackgroundColor
                        }
                        saveContactBackgroundColor={
                          userdata?.profileDesign?.saveContactBackgroundColor
                        }
                        saveContactTextColor={
                          userdata?.profileDesign?.saveContactTextColor
                        }
                        highlightBoxStyle={
                          userdata?.profileDesign?.highlightBoxStyle
                        }
                        appIconColor={userdata?.profileDesign?.appIconColor}
                        boxTextColor={userdata?.profileDesign?.boxTextColor}
                        boxBackgroundColor={
                          userdata?.profileDesign?.boxBackgroundColor
                        }
                        whiteTextAndBorder={
                          userdata?.profileDesign?.whiteTextAndBorder
                        }
                        removeHash={removeHash}
                        hideCompanyLogo={
                          userdata?.profileDesign?.hideCompanyLogo
                        }
                        hideSaveContact={
                          userdata?.profileDesign?.hideSaveContact
                        }
                      />
                    </div>
                  )}
                </>
              ) : (
                <Classic
                  coverurl={coverurl}
                  logourl={logourl}
                  profileurl={profileurl}
                  userdata={userdata}
                  returnSlicedString={returnSlicedString}
                  handleModal={handleModal}
                  downloadVcf={downloadVcf}
                  sociallink={sociallink}
                  returnIcons={returnIcons}
                  checkHttp={checkHttp}
                  linkAnalytics={linkAnalytics}
                  scrnWidth={scrnWidth}
                  saveBtnStyle="style1"
                  webBtnStyle="style1"
                  weblinkButtonTextColor="white"
                  weblinkButtonBackgroundColor="black"
                  saveContactBackgroundColor="#080808"
                  saveContactTextColor="white"
                  highlightBoxStyle="style1"
                  isClassic={true}
                  appIconColor="black"
                  boxTextColor="black"
                  boxBackgroundColor="white"
                  removeHash={() => {
                    return "#0a0a0a";
                  }}
                  hideCompanyLogo={false}
                  hideSaveContact={false}
                  isV1={true}
                />
              )}
              {/* </div> */}
            </div>
          ) : (
            // </div>
            (window.location.href = checkHttp(
              userdata?.direct?.baseUrl + userdata?.direct?.value,
              userdata?.direct?.linkID,
              userdata?.direct?.value
            ))
            // returnSocialUrl(userdata?.direct?.name, userdata?.direct?.value)
          )}
        </>
      )}
    </>
  );
};

export default Home;
