"use client";
import React, { useState } from "react";
import cKey from "@/src/utilities/cKey";

function GrowingSection({ grows }) {
  const [tab, setTab] = useState(1);
  const toggleAccordion = (value) => {
    if (value === tab) {
      setTab(null);
    } else {
      setTab(value);
    }
  };
  return (
    <section>
      <div className="growing-wrapper w-full lg:py-[140px] py-[60px]">
        <div className="theme-container mx-auto">
          <div className="title mb-[50px]">
            <h2 className="sm:text-[42px] text-3xl sm:leading-[63px] font-semibold text-primary-400 text-center mb-5">
              {cKey()?.grow_home_title}
            </h2>
            <p className="sm:text-lg text-sm leading-[30px] text-center text-primary-300">
              {cKey()?.grow_home_details}
            </p>
          </div>
          <div className="faq-main-wrapper w-full mb-[50px]">
            {grows &&
              grows.length > 0 &&
              grows.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item w-full rounded overflow-hidden mb-10 ${
                    tab === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index + 1)}
                    className="faq-btn w-full py-5 px-[30px]  flex text-start sm:text-center justify-between items-center"
                  >
                    <span className="text-2xl font-semibold leaing-[28px] text-primary-500">
                      {item.title}
                    </span>
                    <span>
                      {tab === index + 1 ? (
                        <>
                          <svg
                            width="16"
                            height="5"
                            viewBox="0 0 16 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16 4.5H0V0.5H16" fill="#343434" />
                          </svg>
                        </>
                      ) : (
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 14.5H14V20.5H10V14.5H4V10.5H10V4.5H14V10.5H20V14.5Z"
                            fill="black"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`faq-body py-5 px-[30px] ${
                      tab === index + 1 ? "" : ""
                    }`}
                  >
                    <div
                      className="growing-wrapper-html mb-[67px]"
                      dangerouslySetInnerHTML={{
                        __html: item.details,
                      }}
                    ></div>
                    <div className="w-full grid grid-cols-3 gap-[30px]">
                      {item.grow_detail &&
                        item.grow_detail.length > 0 &&
                        item.grow_detail.map((item, i) => (
                          <div key={i} className="item">
                            <img
                              src={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/settings/grows/${item.image}`}
                              alt="item"
                              className="w-full h-[400px]"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/*<div className="flex justify-end w-full">*/}
          {/*  <button*/}
          {/*    type="button"*/}
          {/*    className="px-[30px] py-[13px] bg-primary-500 text-white text-lg font-medium rounded-md"*/}
          {/*  >*/}
          {/*    Show More*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
}

export default GrowingSection;
