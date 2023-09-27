import React from "react";
import Link from "next/link";
import cKey from "@/src/utilities/cKey";

function AboutSection({ projects }) {
  return (
    <section id="projects">
      <div className="bg-primary-500  lg:py-[140px] py-[60px]">
        <div className="theme-container mx-auto">
          <div className="w-full grid xl:grid-cols-2 gap-10 xl:gap-0 items-center">
            <div className="relative">
              <h2 className="sm:text-[42px] text-3xl text-white text-center xl:text-start font-medium sm:leading-[63px] mb-[30px] xl:pr-32 relative z-10">
                {cKey()?.project_home_title}
              </h2>
              <p className="sm:text-lg text-sm text-center xl:text-start sm:leading-[30px] text-primary-300 xl:pr-36">
                {cKey()?.project_home_details}
              </p>
              <div
                data-aos="fade-right"
                className="absolute -left-[90px] -top-[64px] xl:block hidden"
              >
                <span>
                  <svg
                    width="136"
                    height="136"
                    viewBox="0 0 136 136"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="68" cy="68" r="68" fill="#FF6868" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-[30px]">
              {projects &&
                projects.length > 0 &&
                projects
                  .slice(0, projects.length >= 2 ? 2 : projects.length)
                  .map((item, index) => (
                    <div
                      key={index}
                      data-aos="fade-up"
                      data-aos-duration="3000"
                      className="item group"
                    >
                      <div className="w-full">
                        <div className="w-full h-[229px] rounded overflow-hidden mb-[15px]">
                          <img
                            src={`${
                              process.env.NEXT_PUBLIC_BASE_URL +
                              "uploads/settings/works/" +
                              item.photo
                            }`}
                            alt=""
                            className="w-full h-full object-cover group-hover:scale-110 transform scale-100 common-trans"
                          />
                        </div>
                        <p className="text-center xl:text-start text-[28px] text-white font-semibold leading-[30px] mb-2.5">
                          {item.title}
                        </p>
                        <p className="text-center xl:text-start text-lg text-primary-300 mb-4">
                          {item.short_details}
                        </p>
                        <div className="flex justify-center xl:justify-start">
                          <Link href={`/project/${item.slug}`}>
                            <div className="flex space-x-[14px] items-center">
                              <span className="text-lg leading-[30px] text-primary-600">
                                Learn More
                              </span>
                              <span>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6.99996V8.99996H12L6.5 14.5L7.92 15.92L15.84 7.99996L7.92 0.0799561L6.5 1.49996L12 6.99996H0Z"
                                    fill="#38AF43"
                                  />
                                </svg>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
