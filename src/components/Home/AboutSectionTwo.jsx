import React from "react";

function AboutSectionTwo({ service }) {
  return (
    <section>
      <div className="about-section-two  w-full  lg:py-[140px] py-[60px] bg-white">
        <div className="theme-container mx-auto">
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-0 items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="w-full sm:h-[656px] h-[400px] overflow-hidden relative  thumb xl:pr-[112px] sm:pr-10"
            >
              <div className="w-full h-full overflow-hidden  rounded-[10px]">
                <img
                  src={`${
                    process.env.NEXT_PUBLIC_BASE_URL +
                    "uploads/settings/" +
                    service.image
                  }`}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[239px] h-[167px] bg-red-400 bg-opacity-95 flex justify-center items-center rounded-tl-md rounded-br-md absolute top-0 left-0">
                <div>
                  <p className="text-[64px] text-white font-bold mb-2 leading-[72px]">
                    {service.experience_amount}+
                  </p>
                  <p className="text-white text-2xl">
                    {service.experience_title}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="sm:text-[42px] text-3xl  font-semibold sm:leading-[63px] text-primary-400 sm:pr-32 mb-4"
              >
                {service.title}
              </h2>
              <p className="sm:text-lg text-sm text-primary-300 sm:leading-[30px] mb-5">
                {service.details}
              </p>
              <div className="w-full grid sm:grid-cols-4 grid-cols-2 xl:gap-[30px] gap-2">
                <div className="item bg-primary-700 rounded h-[120px] flex justify-center items-center">
                  <div>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 mb-3.5 ">
                        <img
                          src={`${
                            process.env.NEXT_PUBLIC_BASE_URL +
                            "uploads/settings/" +
                            service.service_image1
                          }`}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-lg leading-6 font-semibold text-primary-500">
                      {service.service1}
                    </p>
                  </div>
                </div>
                <div className="item bg-primary-700 rounded h-[120px] flex justify-center items-center">
                  <div>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 mb-3.5 ">
                        <img
                          src={`${
                            process.env.NEXT_PUBLIC_BASE_URL +
                            "uploads/settings/" +
                            service.service_image2
                          }`}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-lg leading-6 font-semibold text-primary-500">
                      {service.service2}
                    </p>
                  </div>
                </div>
                <div className="item bg-primary-700 rounded h-[120px] flex justify-center items-center">
                  <div>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 mb-3.5 ">
                        <img
                          src={`${
                            process.env.NEXT_PUBLIC_BASE_URL +
                            "uploads/settings/" +
                            service.service_image3
                          }`}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-lg leading-6 font-semibold text-primary-500">
                      {service.service3}
                    </p>
                  </div>
                </div>
                <div className="item bg-primary-700 rounded h-[120px] flex justify-center items-center">
                  <div>
                    <div className="flex justify-center">
                      <div className="w-8 h-8 mb-3.5 ">
                        <img
                          src={`${
                            process.env.NEXT_PUBLIC_BASE_URL +
                            "uploads/settings/" +
                            service.service_image4
                          }`}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-lg leading-6 font-semibold text-primary-500">
                      {service.service4}
                    </p>
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

export default AboutSectionTwo;
