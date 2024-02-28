import React, { useState } from "react";
import iconimg from "../imgs/notFoundBg2.png";
import NotFoundModal from "../assets/components/NotFoundModal";
import notfndbg from "../imgs/notfondbg.png";
import circo from "../imgs/circo.png";
import rocket from "../imgs/rocket.png";

const NotFound = () => {
  let [modal, setModal] = useState(false);

  let handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="min-h-[100vh] max-w-[435px] w-[100%] ">
      {/* <NotFoundModal modal={modal} handleModal={handleModal} /> */}
      {/* <div className="w-[96%] shadow-lg min-h-[100vh] border">
        <div className="w-[100%] flex justify-center text-2xl mt-[50px] ">
          Y o t a p
        </div>

        <div className="w-[100%] flex justify-center text-lg mt-[30px] text-[#808080] font-medium">
          Profile Not Found
        </div>

        <div className="w-[100%] relative  h-[200px]">
          <div
            className="w-[100%] absolute top-6  h-[90px]  z-10"
            style={{
              background:
                "linear-gradient(to bottom, #ffffff , rgba(255,255,255,0.7) , rgba(255,255,255,0.0) )",
            }}
          ></div>
          <div
            className="h-[160px] w-[100%]  absolute bottom-0"
            style={{
              backgroundImage: `url(${iconimg})`,
              backgroundSize: "cover",
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>

        <div className="w-[100%] flex justify-center">
          <div
            className="w-[85%] h-[60px] flex justify-center items-center rounded-full bg-[#f4f4f5] text-lg font-medium mt-[90px] cursor-pointer"
            onClick={() => handleModal()}
          >
            Why am I seeing this ?
          </div>
        </div>
      </div> */}
      <div
        style={{
          backgroundImage: `url(${notfndbg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
        }}
        className="flex flex-col justify-evenly"
      >
        <div className="w-[100%] flex justify-center items-center">
          <img src={circo} alt="" className="w-[155px] h-[55px]" />
        </div>
        <div className="w-[100%] flex justify-center items-center">
          <img src={rocket} alt="" className="w-[285px] h-[285px]" />
        </div>
        <div className="w-[100%] flex justify-center">
          <p
            className="w-[90%] text-center font-[400] text-[16px] text-white mt"
            style={{ lineHeight: "35.36px" }}
          >
            This profile is not activated. Active or create your own profile in
            Circo App.
          </p>
        </div>

        <div className="w-[100%] flex justify-center items-center">
          <div
            className="h-[62px] w-[216px] border rounded-[35px] flex justify-center items-center border-white text-white cursor-pointer"
            onClick={() => window.open("https://www.getcirco.com/download")}
          >
            Download App
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
