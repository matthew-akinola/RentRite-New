import React, { useState, useEffect } from 'react';
import { IoClose } from "react-icons/io5";

interface iModal {
    title?: string | number,
    children: React.ReactNode,
    setIsOpen: () => void,
    isOpen: boolean
}

const Modal: React.FC<iModal> = ({title, children, setIsOpen, isOpen}) => {
  const [modalId] = useState(`modal_${Math.random().toString(36).substr(2, 9)}`);
  const [overlayId] = useState(`overlay_${Math.random().toString(36).substr(2, 9)}`);


  return (
    <>
      

      <div id={overlayId} onClick={setIsOpen} className={`${isOpen ? '' : 'hidden'} h-[100vh] top-0 bottom-0 fixed  inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start pt-10 md:pt-0`}>
        <div id={modalId} onClick={(e) => e.stopPropagation()} className={` ${isOpen ? 'translate-y-[0px] scale-90' : 'opacity-0 scale-150 translate-y-[-100px]'} transform -translate-y-full scale-150 relative w-10/12 md:w-1/2 h-max bg-white rounded shadow-lg transition-opacity transition-transform duration-300 p-6`}>
          <button onClick={setIsOpen} className="absolute z-30 text-black fill-black top-3 right-3 hover:bg-primary-600 text-2xl w-10 h-10 rounded-full focus:outline-none">
            <IoClose />
          </button>
          {
            title && (
              <div className="px-4 py-3 flex w-full justify-center mt-8">
                <h2 className="text-[1.5rem] font-[700] text-gray-600">{title}</h2>
              </div>
            )
          }
            <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;

