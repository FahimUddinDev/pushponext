import React from "react";

function FacilitiesSection({ facility, facility_details }) {
  return (
    <section>
      <div className="facilities-section  w-full  lg:pb-[140px] pb-[60px] bg-white">
        <div className="theme-container mx-auto">
          <div className="w-full grid lg:grid-cols-2 gap-10 items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="w-full lg:h-[656px] h-[450px] overflow-hidden   thumb xl:pr-[112px] sm:pr-10"
            >
              <div className="w-full h-full relative overflow-hidden  rounded-[10px]">
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/settings/facilities/${facility.photo}`}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[239px] h-[167px] bg-red-400 bg-opacity-95 flex justify-center items-center rounded-br-md rounded-tl-md lg:rounded-t lg:rounded-br-none absolute bottom-0 sm:left-[128px] left-auto right-0">
                <div>
                  <p className="text-[64px] text-white font-bold mb-2 leading-[72px]">
                    {facility.counter_amount}+
                  </p>
                  <p className="text-white text-2xl">
                    {facility.counter_title}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-[50px]">
                <h2
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  className="sm:text-[42px] text-3xl sm:leading-[63px] font-semibold text-primary-400 mb-4"
                >
                  {facility.title}
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: facility.details,
                  }}
                  className="sm:text-lg text-sm text-primary-300 leading-[30px] mb-5"
                ></p>
              </div>
              <div className="sm:flex xl:space-x-10 sm:space-x-3.5 ">
                <div className="clum-1">
                  {facility_details &&
                    facility_details.length > 0 &&
                    facility_details
                      .slice(
                        0,
                        facility_details.length > 8 ? 8 : facility.length
                      )
                      .map((item, i) => (
                        <div
                          key={i}
                          className="flex space-x-3 items-center mb-5"
                        >
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.0026 14L4.75999 9.7574L6.17421 8.3431L9.0026 11.1716L14.6595 5.51472L16.0737 6.92893L9.0026 14Z"
                                fill="#38AF43"
                              />
                            </svg>
                          </span>
                          <span className="text-lg font-semibold text-primary-400">
                            {item.title}
                          </span>
                        </div>
                      ))}
                </div>
                <div className="clum-2">
                  {facility_details &&
                    facility_details.length > 0 &&
                    facility_details
                      .slice(
                        8,
                        facility_details.length >= 15
                          ? 15
                          : facility_details.length < 15 &&
                            facility_details.length > 9
                          ? facility.length
                          : facility.length
                      )
                      .map((item, i) => (
                        <div
                          key={i}
                          className="flex space-x-3 items-center mb-5"
                        >
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.0026 14L4.75999 9.7574L6.17421 8.3431L9.0026 11.1716L14.6595 5.51472L16.0737 6.92893L9.0026 14Z"
                                fill="#38AF43"
                              />
                            </svg>
                          </span>
                          <span className="text-lg font-semibold text-primary-400">
                            {item.title}
                          </span>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FacilitiesSection;
