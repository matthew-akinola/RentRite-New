import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface DropdownProps {
  name: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  data: string[];
  maxWidth: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  name,
  value,
  setValue,
  toggle,
  setToggle,
  data,
  maxWidth,
}) => {
  return (
    <div className={`relative md:px-2 w-full max-w-[${maxWidth}] font-outfit`}>
      <span className="text-[#FBFBFC] text-xs font-semibold uppercase">
        {name}
      </span>
      <div
        onClick={() => setToggle(!toggle)}
        className={`flex pr-3 pl-2 w-full py-2 bg-white text-gray-800 cursor-pointer rounded-md`}
      >
        <div className="w-full flex items-center justify-between">
          <span>{value}</span>
          <span>
            {!toggle ? (
              <MdOutlineKeyboardArrowDown size={16} />
            ) : (
              <MdOutlineKeyboardArrowUp size={16} />
            )}
          </span>
        </div>
      </div>
      {toggle && (
        <div className="absolute z-10 w-full shadow-xl bg-white h-32 overflow-y-scroll rounded-b-md top-14">
          <div className="flex py-3 gap-3 flex-col w-full ">
            {data.map((item, index) => (
              <span
                key={index}
                className="hover:bg-purple-200 cursor-pointer px-2"
                onClick={(e) => {
                  setValue(e.currentTarget.textContent || "");
                  setToggle(false);
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
