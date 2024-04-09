import React from "react";

const SaveBtn = ({
  downloadVcf,
  saveBtnStyle,
  saveContactBackgroundColor,
  saveContactTextColor,
}) => {
  console.log(saveContactTextColor);

  let hexToRGBA = (hex, num) => {
    // Remove the '#' character if present
    hex = hex?.replace("#", "");

    // Convert the hex value to RGB
    const red = parseInt(hex?.substring(0, 2), 16);
    const green = parseInt(hex?.substring(2, 4), 16);
    const blue = parseInt(hex?.substring(4, 6), 16);

    // Convert RGB to RGBA with alpha value 0.1
    const rgba1 = `rgba(${red}, ${green}, ${blue}, 0.75)`;
    const rgba2 = `rgba(${red}, ${green}, ${blue}, 0.33)`;
    if (num === "1") {
      return rgba1;
    } else {
      return rgba2;
    }
  };

  return (
    <div className="w-[250px] flex justify-center items-center ">
      <div
        className={`w-[166px] h-[55px]  flex justify-center items-center text-[20px] text-white font-[800] cursor-pointer`}
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
            saveBtnStyle === "style1" ||
            saveBtnStyle === "style3" ||
            saveBtnStyle === "style5"
              ? "15px"
              : "30px",
          background:
            saveBtnStyle === "style6" || saveBtnStyle === "style5"
              ? `linear-gradient(90deg, ${hexToRGBA(
                  saveContactBackgroundColor,
                  "1"
                )} 30%, ${hexToRGBA(saveContactBackgroundColor, "2")} 100%)`
              : null,
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
