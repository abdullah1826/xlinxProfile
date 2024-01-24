import React from "react";

const SaveBtn = ({
  downloadVcf,
  saveBtnStyle,
  saveContactBackgroundColor,
  saveContactTextColor,
}) => {
  console.log(saveContactBackgroundColor);
  return (
    <div className="w-[250px] flex justify-center items-center ">
      <div
        className={`w-[166px] h-[55px]  flex justify-center items-center text-[16px] text-white font-[700] cursor-pointer`}
        style={{
          backgroundColor:
            saveBtnStyle === "style1" || saveBtnStyle === "style2"
              ? saveContactBackgroundColor
              : "transparent",
          fontStyle: "Inter",
          border:
            saveBtnStyle === "style3" || saveBtnStyle === "style4"
              ? `1px solid ${saveContactBackgroundColor}`
              : null,
          borderRadius:
            saveBtnStyle === "style1" || saveBtnStyle === "style3"
              ? "15px"
              : "30px",
          color: saveContactTextColor,
        }}
        onClick={() => downloadVcf()}
      >
        Save Contact
      </div>
    </div>
  );
};

export default SaveBtn;
