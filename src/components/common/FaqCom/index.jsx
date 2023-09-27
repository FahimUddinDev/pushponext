"use client";
import React, { useState } from "react";
import "./style.css";

function FaqCom({ faqs }) {
  const [tab, setTab] = useState(1);
  return (
    <div className="faq-wrapper">
      {faqs &&
        faqs.length > 0 &&
        faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item border border-black rounded-[10px] mb-[30px] ${
              tab === index + 1 ? "active" : ""
            }`}
          >
            <button
              type="button"
              className="faq-button px-[23px] py-5 flex justify-between items-center w-full"
              onClick={() => setTab(index + 1)}
            >
              <span className="sm:text-2xl text-xl font-semibold text-gray-900">
                {item.title}
              </span>
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.7501 0H11.2501V15L18.1251 8.125L19.9001 9.9L10.0001 19.8L0.100098 9.9L1.8751 8.125L8.7501 15V0Z"
                    fill="#343434"
                  />
                </svg>
              </span>
            </button>
            <div className="faq-body w-full px-[23px] pb-5">
              <p className="text-lg leading-[30px] text-primary-400">
                {item.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default FaqCom;
