import React from "react";
import cKey from "@/src/utilities/cKey";

function AgencySection({ teams }) {
  return (
    <section>
      <div className="agency-section w-full bg-primary-500 lg:py-[140px] py-[60px]">
        <div className="theme-container mx-auto">
          <div className="title mb-[60px]">
            <div className="mb-5" data-aos="fade-up">
              <h2 className="sm:text-[42px] text-3xl sm:leading-[63px] font-semibold text-white text-center">
                {cKey()?.team_home_title}
              </h2>
            </div>
            <p
              data-aos="fade-up"
              className="sm:text-lg text-sm leading-[30px] text-center text-primary-300"
            >
              {cKey()?.team_home_details}
            </p>
          </div>
          <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
            {teams &&
              teams.length > 0 &&
              teams.map((item, index) => (
                <div
                  key={index}
                  data-aos-duration="1500"
                  data-aos="fade-up"
                  data-aos-delay={`${index + 1}00`}
                  className="item group"
                >
                  <div className="w-full h-[360px] relative">
                    <div className="w-full h-full rounded overflow-hidden">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/settings/teams/${item.photo}`}
                        alt=""
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 common-trans"
                      />
                    </div>
                    <div className="w-full px-[100px]">
                      <div className="w-full h-[53px] bg-[#146D1D] bg-opacity-[0.7] rounded-full -mt-7 relative z-10 backdrop-blur-sm flex justify-center items-center">
                        <div className="flex space-x-[30px]">
                          {/*<a target="_blank" href={`${item.twitter}`}>*/}
                          {/*  <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-primary-600 transform translate-x-0 hover:-translate-y-1 common-trans">*/}
                          {/*    <span>*/}
                          {/*      <svg*/}
                          {/*        width="22"*/}
                          {/*        height="18"*/}
                          {/*        viewBox="0 0 22 18"*/}
                          {/*        fill="none"*/}
                          {/*        xmlns="http://www.w3.org/2000/svg"*/}
                          {/*      >*/}
                          {/*        <path*/}
                          {/*          d="M21.2125 2.65605C20.4491 2.99375 19.6395 3.21555 18.8106 3.31411C19.6839 2.79132 20.3374 1.9689 20.6493 1.00005C19.8287 1.48761 18.9305 1.83077 17.9938 2.01461C17.2031 1.17106 16.098 0.693029 14.9418 0.694339C12.6326 0.694339 10.7597 2.56661 10.7597 4.87683C10.7597 5.20458 10.7973 5.52242 10.8676 5.82909C7.39048 5.65404 4.31008 3.99005 2.24678 1.45941C1.87529 2.09767 1.68006 2.82318 1.68105 3.56167C1.68105 5.01259 2.41961 6.29324 3.5415 7.043C2.87738 7.022 2.22789 6.84264 1.64719 6.51973C1.64655 6.5373 1.64654 6.55487 1.64654 6.57148C1.64654 8.5984 3.0882 10.2892 5.002 10.6731C4.64281 10.7703 4.27233 10.8194 3.90022 10.8191C3.62997 10.8191 3.36772 10.7942 3.1128 10.7453C3.64532 12.4065 5.18886 13.6159 7.0196 13.6491C5.53813 14.8118 3.70869 15.4426 1.82543 15.4399C1.49212 15.4402 1.15909 15.4205 0.828125 15.3811C2.74004 16.6102 4.96552 17.2625 7.23842 17.2601C14.9316 17.2601 19.138 10.8875 19.138 5.36111C19.138 5.1803 19.1336 4.99886 19.1256 4.81997C19.9443 4.22845 20.651 3.49567 21.2125 2.65605Z"*/}
                          {/*          fill="#F6F6F6"*/}
                          {/*        />*/}
                          {/*      </svg>*/}
                          {/*    </span>*/}
                          {/*  </div>*/}
                          {/*</a>*/}
                          {/*<a target="_blank" href={`${item.facebook}`}>*/}
                          {/*  <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-primary-600 transform translate-x-0 hover:-translate-y-1 common-trans">*/}
                          {/*    <span>*/}
                          {/*      <svg*/}
                          {/*        width="11"*/}
                          {/*        height="20"*/}
                          {/*        viewBox="0 0 11 20"*/}
                          {/*        fill="none"*/}
                          {/*        xmlns="http://www.w3.org/2000/svg"*/}
                          {/*      >*/}
                          {/*        <path*/}
                          {/*          d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47062 7 3.5 9 3.5H10.5V0.1401C10.1743 0.09685 8.943 0 7.6429 0C4.9284 0 3 1.65686 3 4.69971V7.5H0V11.5H3V20H7V11.5Z"*/}
                          {/*          fill="#F6F6F6"*/}
                          {/*        />*/}
                          {/*      </svg>*/}
                          {/*    </span>*/}
                          {/*  </div>*/}
                          {/*</a>*/}
                          <a href={`tel:${item.phone}`}>
                            <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-primary-600 transform translate-x-0 hover:-translate-y-1 common-trans">
                              <span>
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M3.62 7.79C5.06 10.62 7.38 12.94 10.21 14.38L12.41 12.18C12.69 11.9 13.08 11.82 13.43 11.93C14.55 12.3 15.75 12.5 17 12.5C17.2652 12.5 17.5196 12.6054 17.7071 12.7929C17.8946 12.9804 18 13.2348 18 13.5V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C12.4913 18 8.1673 16.2089 4.97918 13.0208C1.79107 9.8327 0 5.50868 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H4.5C4.76522 0 5.01957 0.105357 5.20711 0.292893C5.39464 0.48043 5.5 0.734784 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"
                                    fill="#F6F6F6"
                                  />
                                </svg>
                              </span>
                            </div>
                          </a>
                          <a href={`mailto:${item.email}`}>
                            <div className="w-[35px] h-[35px] rounded-full flex justify-center items-center bg-primary-600 transform translate-x-0 hover:-translate-y-1 common-trans">
                              <span>
                                <svg
                                  width="20"
                                  height="16"
                                  viewBox="0 0 20 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18 4L10 9L2 4V2L10 7L18 2M18 0H2C0.89 0 0 0.89 0 2V14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H18C18.5304 16 19.0391 15.7893 19.4142 15.4142C19.7893 15.0391 20 14.5304 20 14V2C20 0.89 19.1 0 18 0Z"
                                    fill="#F6F6F6"
                                  />
                                </svg>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-[32px] text-white leading-[48px] font-semibold text-center mt-9">
                    {item.name}
                  </h2>
                  <p className="text-lg leading-[30px] text-primary-300 font-medium text-center">
                    {item.designation}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgencySection;
