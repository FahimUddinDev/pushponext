"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, EffectCards } from "swiper";
import cKey from "@/src/utilities/cKey";

function TestimonialSection({ testimonials = [] }) {
  const swiperOptions = {
    autoplay: {
      delay: 5000,
    },
    speed: 800,
    allowTouchMove: false,
    navigation: { nextEl: ".arrow-left", prevEl: ".arrow-right" },
  };
  const swiperOptions2 = {
    autoplay: {
      delay: 5000,
    },
    allowTouchMove: false,
    speed: 800,
  };
  return (
    <section>
      <div className="testimonial-section-wrapper w-full lg:py-[140px] py-[60px]">
        <div className="theme-container mx-auto">
          <div className="w-full xl:px-[144px]">
            <div className="title mb-[50px]">
              <div className="mb-2.5" data-aos="fade-up">
                <h2 className="sm:text-[42px] text-3xl sm:leading-[63px] font-semibold text-primary-500">
                  {cKey()?.testimonial_home_title}
                </h2>
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="sm:text-lg text-sm sm:leading-[30px] text-primary-300"
              >
                {cKey()?.testimonial_home_details}
              </p>
            </div>
            <div className="lg:w-full sm:w-[500px] w-full lg:grid lg:grid-cols-2">
              <div className="thumb-wrapper-slider w-full sm:h-[474px] h-[350px] mb-10 lg:mb-0">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards, Navigation, Autoplay]}
                  navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                  {...swiperOptions2}
                  className="w-full sm:h-[474px] h-[350px]"
                >
                  {testimonials &&
                    testimonials.length > 0 &&
                    testimonials.map((item, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/settings/testimonials/${item.photo}`}
                          alt="thumb"
                          className=" h-full"
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
              <div className="w-full">
                <Swiper
                  {...swiperOptions}
                  modules={[Autoplay, Navigation]}
                  className="akyladeSwiper"
                >
                  {testimonials &&
                    testimonials.length > 0 &&
                    testimonials.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="item pl-10">
                          <div className="article-area relative mb-12 mt-12">
                            <span className="absolute -left-10 -top-10">
                              <svg
                                width="32"
                                height="25"
                                viewBox="0 0 32 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.02025 22.3119C1.21775 20.3974 0.25 18.2502 0.25 14.7694C0.25 8.64443 4.54975 3.15468 10.8025 0.44043L12.3653 2.85193C6.529 6.00893 5.388 10.1057 4.933 12.6887C5.87275 12.2022 7.103 12.0324 8.30875 12.1444C11.4658 12.4367 13.9543 15.0284 13.9543 18.2502C13.9543 19.8746 13.3089 21.4326 12.1603 22.5812C11.0116 23.7299 9.4537 24.3752 7.82925 24.3752C5.9515 24.3752 4.156 23.5177 3.02025 22.3119ZM20.5203 22.3119C18.7178 20.3974 17.75 18.2502 17.75 14.7694C17.75 8.64443 22.0498 3.15468 28.3025 0.44043L29.8653 2.85193C24.029 6.00893 22.888 10.1057 22.433 12.6887C23.3728 12.2022 24.603 12.0324 25.8088 12.1444C28.9658 12.4367 31.4543 15.0284 31.4543 18.2502C31.4543 19.8746 30.8089 21.4326 29.6603 22.5812C28.5116 23.7299 26.9537 24.3752 25.3293 24.3752C23.4515 24.3752 21.656 23.5177 20.5203 22.3119Z"
                                  fill="#38AF43"
                                />
                              </svg>
                            </span>
                            <p className="text-primary-300 text-lg leading-8">
                              {item.details}
                            </p>
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 leading-9 mb-1">
                            {item.name}
                          </h2>
                          <p className="text-primary-300 text-lg font-semibold leading-8">
                            {item.designation}
                          </p>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex space-x-[30px] items-center justify-end mt-12 sm:pl-10">
                  <div className="arrow-left w-[50px] h-[50px] border border-primary-600 text-primary-600 flex justify-center items-center rounded-full cursor-pointer hover:bg-primary-600 hover:text-white focus:bg-primary-600 focus:text-white">
                    <span>
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M21.6665 12.3329L21.6665 9.66624L5.6665 9.66624L12.9998 2.33291L11.1065 0.439572L0.546504 10.9996L11.1065 21.5596L12.9998 19.6662L5.6665 12.3329L21.6665 12.3329Z" />
                      </svg>
                    </span>
                  </div>
                  <div className="arrow-right w-[50px] h-[50px] border border-primary-600 text-primary-600 flex justify-center items-center rounded-full cursor-pointer hover:bg-primary-600 hover:text-white focus:bg-primary-600 focus:text-white">
                    <span>
                      <svg
                        width="22"
                        height="22"
                        className="fill-current"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.333496 9.6671V12.3338H16.3335L9.00016 19.6671L10.8935 21.5604L21.4535 11.0004L10.8935 0.44043L9.00016 2.33376L16.3335 9.6671H0.333496Z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
