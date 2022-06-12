import React from "react";
import { AiFillSetting, AiOutlineCloseCircle } from "react-icons/ai";
import { CheckIcon } from "@heroicons/react/outline";
import { useStateContext } from "../contexts/ContextProvider";

const Setting = () => {
  const {
    setHoverCurrentColor,
    setCurrentColor,
    setSetting,
    setting,
    currentColor,
  } = useStateContext();

  return (
    <>
      <div
        className="hidden fixed bottom-8 right-8"
        style={{ zIndex: "9999999" }}
        onClick={() => setSetting(true)}
      >
        <div className="bg-indigo-600 p-3 text-white rounded-full text-2xl">
          <AiFillSetting className="" />
        </div>
      </div>
      <div
        className={`${
          setting ? "block" : "hidden"
        } fixed p-8 bg-white top-0 bottom-0 right-0 h-screen min-w-25 xs:min-w-50 md:min-w-40 sm:min-w-50 lg:min-w-25`}
        style={{ zIndex: "9999999" }}
      >
        <span
          className="absolute top-5 right-5 text-2xl"
          onClick={() => setSetting(false)}
        >
          <AiOutlineCloseCircle />
        </span>
        <p className="text-2xl font-bold border-b-2 pb-6">Settings</p>

        <div className="mt-8">
          <p className="text-xl font-bold">Theme Colors</p>
          <p className="flex mt-6">
            <button
              type="button"
              className="h-10 w-10 rounded-full cursor-pointer bg-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white p-1 mr-2"
              onClick={() => {
                setCurrentColor("orange");
                setHoverCurrentColor("hover:text-orange-500");
              }}
            >
              <CheckIcon
                className={"orange" === currentColor ? "block" : "hidden"}
              />
            </button>
            <button
              type="button"
              className="h-10 w-10 rounded-full cursor-pointer bg-indigo-500 border-indigo-500 hover:bg-indigo-500 hover:text-white p-1 mr-2"
              onClick={() => {
                setCurrentColor("indigo");
                setHoverCurrentColor("hover:text-indigo-500");
              }}
            >
              <CheckIcon
                className={"indigo" === currentColor ? "block" : "hidden"}
              />
            </button>
            <button
              type="button"
              className="h-10 w-10 rounded-full cursor-pointer bg-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white p-1 mr-2"
              onClick={() => {
                setCurrentColor("pink");
                setHoverCurrentColor("hover:text-pink-500");
              }}
            >
              <CheckIcon
                className={"pink" === currentColor ? "block" : "hidden"}
              />
            </button>

            <button
              type="button"
              className="h-10 w-10 rounded-full cursor-pointer bg-green-500 border-green-500 hover:bg-green-500 hover:text-white p-1 mr-2"
              onClick={() => {
                setCurrentColor("green");
                setHoverCurrentColor("hover:text-green-500");
              }}
            >
              <CheckIcon
                className={"green" === currentColor ? "block" : "hidden"}
              />
            </button>
            <button
              type="button"
              className="h-10 w-10 rounded-full cursor-pointer bg-cyan-500 border-cyan-500 hover:bg-cyan-500 hover:text-white p-1 mr-2"
              onClick={() => {
                setCurrentColor("cyan");
                setHoverCurrentColor("hover:text-cyan-500");
              }}
            >
              <CheckIcon
                className={"cyan" === currentColor ? "block" : "hidden"}
              />
            </button>
            <button
              type="button"
              className="h-10 w-10 rounded-full cursor-pointer bg-red-500 border-red-500 hover:bg-red-500 hover:text-white p-1 mr-2"
              onClick={() => {
                setCurrentColor("red");
                setHoverCurrentColor("hover:text-red-500");
              }}
            >
              <CheckIcon
                className={"red" === currentColor ? "block" : "hidden"}
              />
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Setting;
