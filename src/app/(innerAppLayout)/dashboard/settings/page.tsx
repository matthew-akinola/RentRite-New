"use client"
import { useClickOutside } from "@/lib/utils";
import { useState, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { MdNightlight } from "react-icons/md";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const Settings = () => {
    const [isThemeDisplay, settingIsThemeDisplay] = useState(false);
    const [isThemeOpen, setIsThemeOpen] = useState(false);
    const [isLanguageDisplay, setIsLanguageDisplay] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const languageDropdownRef = useRef<HTMLDivElement>(null);

    useClickOutside(dropdownRef, () => {
        settingIsThemeDisplay(false);
        setIsThemeOpen(false);
    });

    useClickOutside(languageDropdownRef, () => {
        setIsLanguageDisplay(false);
        setIsLanguageOpen(false);
    });

    const toggleThemeDisplay = () => {
        settingIsThemeDisplay(!isThemeDisplay);
        setIsThemeOpen(!isThemeOpen);
    };

    const toggleLanguageDisplay = () => {
        setIsLanguageDisplay(!isLanguageDisplay);
        setIsLanguageOpen(!isLanguageOpen);
    };

    return (
        <div>
            <div className="w-full flex flex-col">
                <h2 className="text-3xl font-bold">Settings</h2>
            </div>
            <div className="mt-10 flex flex-col relative">
                <div className="flex justify-between border-b-[1px] border-gray-300 pb-4">
                    <span className="flex flex-col">
                        <p className="text-lg font-[700]">Language</p>
                        <p className="text-sm text-gray-600 mt-2">Choose preferred language</p>
                    </span>
                    <span onClick={toggleLanguageDisplay} className="cursor-pointer">
                        <FaChevronRight
                            className={isLanguageOpen ? "rotate-90 transition-transform duration-300" : "transition-transform duration-300"}
                        />
                    </span>
                    {isLanguageDisplay && (
                        <div ref={languageDropdownRef} className="border border-[1px] rounded-[15px] absolute top-[15px] right-0 bg-white">
                            <RadioGroup defaultValue="comfortable" className="gap-0">
                            <div className="flex items-start px-5 space-x-2 hover:bg-[#FFE9FF] py-3 rounded-t-[16px]">
                                <RadioGroupItem className="mt-1 mr-6" value="english" id="r1" />
                                <label className="flex flex-col ">
                                    <p className="mr-9 font-[700] mb-1">English</p>
                                    <p className="font-[400] text-sm text-gray-400">English </p>
                                </label>
                            </div>
                            <div className="flex items-start px-5 space-x-2 hover:bg-[#FFE9FF] py-3">
                                <RadioGroupItem className="mt-1 mr-6" value="Arabic" id="r2" />
                                <label className="flex flex-col ">
                                    <p className="mr-9 font-[700] mb-1">عربي</p>
                                    <p className="font-[400] text-sm text-gray-400">Arabic </p>
                                </label>
                            </div>
                            <div className="flex items-start px-5 space-x-2 hover:bg-[#FFE9FF] py-3 rounded-b-[16px]">
                                <RadioGroupItem className="mt-1 mr-6" value="Belarusian" id="r3" />
                                <label className="flex flex-col ">
                                    <p className="mr-9 font-[700] mb-1">беларускі</p>
                                    <p className="font-[400] text-sm text-gray-400">Belarusian </p>
                                </label>
                            </div>
                            </RadioGroup>
                        </div>
                    )}
                </div>

                <div className="flex justify-between border-b-[1px] border-gray-300 pb-4 mt-5 ">
                    <span className="flex flex-col">
                        <p className="text-lg font-[700]">Theme</p>
                        <p className="text-sm text-gray-600 mt-2">Choose preferred theme</p>
                    </span>
                    <span onClick={toggleThemeDisplay} className="cursor-pointer">
                        <FaChevronRight
                            className={isThemeOpen ? "rotate-90 transition-transform duration-300" : "transition-transform duration-300"}
                        />
                    </span>
                    {isThemeDisplay && (
                        <div ref={dropdownRef} className="border border-[1px] rounded-[15px] absolute top-[115px] right-0 bg-white">
                            <span className="hover:bg-[#FFE9FF] hover:rounded-t-[15px] px-5 py-3 flex items-center">
                                <p className="mr-9">Light Mode</p>
                                <span>
                                    <IoMdSunny />
                                </span>
                            </span>
                            <span className="hover:bg-[#FFE9FF] hover:rounded-b-[15px] px-5 py-3 flex items-center">
                                <p className="mr-9">Night Mode</p>
                                <span>
                                    <MdNightlight />
                                </span>
                            </span>
                        </div>
                    )}
                </div>

                <div className="flex justify-between border-b-[1px] border-gray-300 pb-4 mt-5 ">
                    <span className="flex flex-col">
                        <p className="text-lg font-[700]">Notification Settings</p>
                        <p className="text-sm text-gray-600 mt-2">Receive the latest  weather news,forecast,updates from us.</p>
                    </span>
                    {/* <span>
                        <FaChevronRight />
                    </span> */}
                </div>
            </div>
        </div>
    );
};

export default Settings;
