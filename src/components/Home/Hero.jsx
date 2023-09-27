"use client";
import React, { useState } from "react";
import HeaderOne from "@/src/components/Partials/Headers/HeaderOne";
import FsLightbox from "fslightbox-react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Link from "next/link";
function Hero({ heading, headingTwo, counters = [], videoKey, videoThumb }) {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <HeaderOne className="absolute left-0 top-0 z-20" />
      <section className="hero-wrapper w-full lg:pt-[155px] pt-[70px] lg:pb-[120px] pb-[60px] relative">
        <div className="theme-container mx-auto">
          <div className="w-full">
            <h1
              dangerouslySetInnerHTML={{
                __html: heading,
              }}
              data-aos="fade-up"
              className=" main-heading xl:text-[80px] xl:leading-[105px] sm:text-6xl text-4xl font-extrabold text-center text-primary-400 mb-6"
            ></h1>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex justify-center mb-[56px]"
            >
              <div className="flex sm:space-x-[60px] space-x-4 items-center">
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("projects")
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <div className="sm:px-[50px] px-7 sm:py-5 py-4 rounded-full bg-primary-600 hover:bg-primary-500 common-trans flex space-x-3 items-center">
                    <span className="sm:text-xl text-white font-semibold text-sm sm:leading-7">
                      See Our Projects
                    </span>
                    <span className="sm:block hidden">
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 7.49999V9.49999H12L6.5 15L7.92 16.42L15.84 8.49999L7.92 0.579987L6.5 1.99999L12 7.49999H0Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </div>
                </button>
                <Link href="/about">
                  <div className="text-primary-500  rounded-full common-trans flex space-x-3 items-center">
                    <span className="sm:text-xl text-sm  font-semibold leading-7">
                      Learn More
                    </span>
                    <span>
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M0 7.49999V9.49999H12L6.5 15L7.92 16.42L15.84 8.49999L7.92 0.579987L6.5 1.99999L12 7.49999H0Z" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="w-full rounded-[25px] h-[430px] bg-no-repeat bg-cover flex justify-center items-center sm:mb-[100px] mb-7"
              style={{
                background: `url(${
                  process.env.NEXT_PUBLIC_BASE_URL +
                  "/uploads/settings/" +
                  videoThumb
                })`,
              }}
            >
              <button onClick={() => setToggler(!toggler)} type="button">
                <div className="w-[70px] h-[70px]  relative">
                  <div className="w-full h-full flex justify-center items-center rounded-full bg-primary-600 relative z-10">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 12 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2812 6.71875C11.7188 7 12 7.5 12 8C12 8.53125 11.7188 9.03125 11.2812 9.28125L2.28125 14.7812C1.8125 15.0625 1.21875 15.0938 0.75 14.8125C0.28125 14.5625 0 14.0625 0 13.5V2.5C0 1.96875 0.28125 1.46875 0.75 1.21875C1.21875 0.9375 1.8125 0.9375 2.28125 1.25L11.2812 6.71875Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>

                  <div className="button-outer-circle has-scale-animation"></div>
                  <div className="button-outer-circle has-scale-animation has-delay-short"></div>
                </div>
              </button>
            </div>
            <div className="lg:flex justify-between items-center">
              <div className="mb-8 lg:mb-0">
                <h2 className="text-primary-500 xl:text-[40px] sm:text-4xl text-2xl xl:leading-[60px] font-extrabold xl:max-w-[645px]">
                  {headingTwo}
                </h2>
              </div>
              <div className="flex items-center xl:space-x-[73px] sm:space-x-10 space-x-6 ">
                {counters &&
                  counters.length > 0 &&
                  counters.map((item, index) => (
                    <div key={index + Math.random()} className="item-counter">
                      <p className="sm:text-[32px] text-2xl text-primary-600 font-semibold mb-1.5">
                        {item.amount < 10 ? "0" + item.amount : item.amount}+
                      </p>
                      <p className="sm:text-lg text-sm text-primary-600">
                        {item.title}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="shape absolute left-0 top-0 pointer-events-none">
          <img src="/assets/img/hero-shape-2.png" alt="" />
        </div>
      </section>
      <FsLightbox
        toggler={toggler}
        sources={[`https://www.youtube.com/embed/${videoKey}`]}
      />

      {/*<div*/}
      {/*  className="theme-container mx-auto "*/}
      {/*  style={{ height: "calc(100% - 100px)" }}*/}
      {/*>*/}
      {/*  <div className="hero-main-wrapper  w-full h-full flex justify-center items-center relative z-10">*/}
      {/*    <div className="w-full grid grid-cols-2 relative">*/}
      {/*      <div className="article-wrapper ">*/}
      {/*        <h1 className="text-[80px] leading-[120px] text-primary-400 font-extrabold uppercase mb-[60px]">*/}
      {/*          Your <br /> Ultimate <br /> Destination*/}
      {/*        </h1>*/}
      {/*        <p className="text-primary-300 text-lg leading-7 capitalize">*/}
      {/*          We are recognized for exceeding client expectations and*/}
      {/*          delivering <br /> great results through dedication.*/}
      {/*        </p>*/}
      {/*        <div className="flex w-[746px] h-[130px] items-center justify-evenly bg-primary-500 rounded-md absolute left-0 -bottom-52 z-20">*/}
      {/*          <div className="item-counter">*/}
      {/*            <p className="text-[32px] text-white font-semibold mb-1.5">*/}
      {/*              3200+*/}
      {/*            </p>*/}
      {/*            <p className="text-lg text-white">Happy Clients</p>*/}
      {/*          </div>*/}
      {/*          <div className="item-counter">*/}
      {/*            <p className="text-[32px] text-white font-semibold mb-1.5">*/}
      {/*              20+*/}
      {/*            </p>*/}
      {/*            <p className="text-lg text-white">Ongoing Projects</p>*/}
      {/*          </div>*/}
      {/*          <div className="item-counter">*/}
      {/*            <p className="text-[32px] text-white font-semibold mb-1.5">*/}
      {/*              6000+*/}
      {/*            </p>*/}
      {/*            <p className="text-lg text-white">Land Own</p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="thumbnil-area relative w-full">*/}
      {/*        <div className="w-full h-[730px] absolute left-0 overflow-hidden rounded-lg z-10">*/}
      {/*          <Image*/}
      {/*            src="/assets/img/hero-2.png"*/}
      {/*            fill*/}
      {/*            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"*/}
      {/*            alt="hero"*/}
      {/*            style={{ objectFit: "cover" }}*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*        <div className="shape absolute -left-[255px] -bottom-[400px]">*/}
      {/*          <img src="/assets/img/hero-shape-1.png" alt="" />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}

export default Hero;
