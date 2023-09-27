"use client";
import React, { useState } from "react";

function MainWid({ aboutContent }) {
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className="about-page-wrapper w-full lg:py-[140px] py-[60px]">
        <div className="theme-container mx-auto">
          <div className="w-full">
            <div className="w-full flex xl:flex-row flex-col-reverse xl:space-x-[112px] space-x-0 items-center pb-[100px] mb-[100px] border-b border-borderColor-100">
              <div className="xl:w-[563px] w-[500px] h-[414px] mt-10 xl:mt-0">
                <div className="w-full h-full rounded-[10px]">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/settings/${aboutContent.photo}`}
                    alt="thumb"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="sm:text-[42px] text-3xl sm:leading-[63px] font-semibold  text-primary-400 mb-5">
                  What Drives Us
                </h2>
                <p className="text-lg text-primary-300 leading-[30px] mb-5">
                  {aboutContent.about}
                </p>
              </div>
            </div>
            <div className="w-full flex xl:flex-row flex-col xl:space-x-[112px] space-x-10 items-center ">
              <div className="flex-1 mb-10 xl:mb-0">
                <h2 className="sm:text-[42px] text-3xl sm:leading-[63px] font-semibold  text-primary-400 mb-5">
                  We are committed to you
                </h2>
                <div className="w-full flex space-x-5 items-center mb-5">
                  <button
                    onClick={() => setTab(1)}
                    type="button"
                    className={`px-5 py-2.5 rounded-full   leading-[30px] text-2xl font-medium border ${
                      tab === 1
                        ? "bg-primary-600 border-transparent text-white"
                        : "bg-none border-borderColor-100 text-primary-400"
                    }`}
                  >
                    Mission
                  </button>
                  <button
                    onClick={() => setTab(2)}
                    type="button"
                    className={`px-5 py-2.5 rounded-full leading-[30px] text-2xl font-medium border ${
                      tab === 2
                        ? "bg-primary-600 border-transparent text-white"
                        : "bg-none border-borderColor-100 text-primary-400"
                    }`}
                  >
                    Vision
                  </button>
                </div>
                {tab === 1 && (
                  <div data-aos="fade-up" className="tab-body">
                    <p className="text-lg text-primary-300 leading-[30px] mb-5">
                      {aboutContent.mission}
                    </p>
                  </div>
                )}
                {tab === 2 && (
                  <div data-aos="fade-up" className="tab-body">
                    <p className="text-lg text-primary-300 leading-[30px] mb-5">
                      {aboutContent.vision}
                    </p>
                  </div>
                )}
              </div>
              <div className="xl:w-[563px] w-[450px] h-[414px]">
                <div className="w-full h-full rounded-[10px]">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/settings/${aboutContent.photo1}`}
                    alt="thumb"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainWid;
