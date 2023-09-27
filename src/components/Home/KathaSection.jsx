import React from "react";
import cKey from "@/src/utilities/cKey";

function KathaSection({ katha }) {
  return (
    <section>
      <div className="katha-section-wrapper w-full lg:py-[140px] py-[60px]">
        <div className="theme-container mx-auto overflow-x-hidden">
          <div className="title-area flex justify-center mb-[51px]">
            <div>
              <div className="flex justify-center">
                <h2 className="sm:text-[42px] text-3xl  font-semibold sm:leading-[63px] text-primary-400 text-center mb-5 sm:w-[734px]">
                  {cKey()?.katha_home_title}
                </h2>
              </div>
              <div className="flex justify-center">
                <p className="sm:text-lg sm:leading-[30px] text-sm  text-primary-300 text-center ">
                  {cKey()?.katha_home_details}
                </p>
              </div>
            </div>
          </div>
          <div className="katha-items grid xl:grid-cols-6 sm:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-4">
            {katha &&
              katha.length > 0 &&
              katha.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  className="katha-item w-full h-[240px] rounded-[100px] overflow-hidden flex justify-center items-center"
                >
                  <div>
                    <span className="text-white sm:text-[64px] text-5xl sm:leading-[50px] font-bold mb-2.5 flex justify-center items-center">
                      {item.amount <= 9 ? "0" + item.amount : item.amount}
                    </span>
                    <p className="text-white sm:text-[42px] text-4xl font-semibold">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KathaSection;
