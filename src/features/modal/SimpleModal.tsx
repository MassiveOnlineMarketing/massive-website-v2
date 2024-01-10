"use client"

import { XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [visible, setVisible] = useState(isOpen);
  const timerRef = useRef(0);

  useEffect(() => {
      if (isOpen) {
          setVisible(true);
      } else {
          setVisible(false);
      }
      
      return () => {
          clearTimeout(timerRef.current);
      }
  }, [isOpen]);

  const handleClose = () => {
      setVisible(false);
      timerRef.current = setTimeout(onClose, 500) as unknown as number;
  };

  if (!visible && !isOpen) return null;

  return (
    <div className="modal fixed flex justify-center items-center z-40 inset-0 p-6">
      <div
        className={` flex flex-col p-4 md:p-8 max-w-[1000px] w-[95%] max-h-[900px] h-[95%] relative z-50 rounded-xl overflow-y-scroll ${ visible ? "animate-modalOpacityIn" : "animate-modalOpacityOut"}`}
      >
        {children}
        <button className="absolute top-8 right-8" onClick={handleClose}>
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Modal;
