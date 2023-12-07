import React from "react";

const SaveBtn = ({ downloadVcf, saveBtnStyle }) => {
  return (
    <div className="w-[250px] flex justify-center items-center ">
      <div
        className={`w-[166px] h-[55px]  flex justify-center items-center text-[16px] text-white font-[700] cursor-pointer`}
        style={{
          backgroundColor:
            saveBtnStyle === "s1" || saveBtnStyle === "s2"
              ? "black"
              : "transparent",
          fontStyle: "Inter",
          border:
            saveBtnStyle === "s3" || saveBtnStyle === "s4"
              ? "1px solid black"
              : null,
          borderRadius:
            saveBtnStyle === "s1" || saveBtnStyle === "s3" ? "15px" : "30px",
        }}
        onClick={() => downloadVcf()}
      >
        Save Contact
      </div>
    </div>
  );
};

export default SaveBtn;
