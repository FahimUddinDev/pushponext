"use client";
import React, { useState } from "react";
import cKey from "@/src/utilities/cKey";
import Link from "next/link";
function FunFactSection() {
  return (
    <section>
      <div className="fun-fact-section w-full md:h-[480px] h-[300px]">
        <div className="theme-container mx-auto h-full">
          <div className="w-full h-full">
            <div
              className="w-full h-full flex justify-center items-center rounded-[25px] overflow-hidden px-2.5"
              style={{
                backgroundImage: `url(/assets/img/fun-fact.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div>
                <h2 className="sm:text-[42px] text-3xl sm:leading-[63px] text-white font-semibold mb-2.5 text-center">
                  {cKey()?.fun_fact_title}
                </h2>
                <p className="text-white sm:text-lg text-sm sm:leading-[30px] sm:w-[514px] mb-8 text-center">
                  {cKey()?.fun_fact_details}
                </p>
                <div className="flex justify-center">
                  <Link href="/about">
                    <div className="px-[26px] py-[13px] border border-primary-500 rounded-md text-primary-500 sm:text-lg text-sm font-medium inline-flex space-x-3.5 items-center">
                      <span>Learn More</span>
                      <span>
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path d="M0 7.50008V9.50008H12L6.5 15.0001L7.92 16.4201L15.84 8.50008L7.92 0.580078L6.5 2.00008L12 7.50008H0Z" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FunFactSection;
