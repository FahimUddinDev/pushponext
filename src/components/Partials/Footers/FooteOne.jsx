"use client";
import React from "react";
import cKey from "../../../utilities/cKey";
import settings from "../../../utilities/settings";
import Link from "next/link";
import FontAwesomeCom from "@/src/components/Helpers/FontAwesomeCom";
function FooteOne() {
  return (
    <footer>
      <div className="footer-wrapper w-full  pt-[50px] bg-primary-500">
        <div className="theme-container mx-auto">
          <div className="sm:grid sm:grid-cols-12 pb-[100px] gap-10 xl:gap-0">
            <div className="xl:col-span-4 sm:col-span-12">
              <div className="logo-area w-[148px] h-[77px] mb-[30px]">
                <img
                  src={settings()?.logo}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xl leading-8 text-primary-300 sm:w-[384px] mb-10 sm:mb-0">
                {cKey()?.footer_text}
              </p>
            </div>
            <div className="xl:col-span-8 sm:col-span-12">
              <div className="w-full sm:flex space-y-10 sm:space-y-0 justify-between">
                <div className="clum-1">
                  <h2 className="text-[24px] leading-8 text-white mb-5">
                    Important
                  </h2>
                  <ul className="flex flex-col space-y-2.5">
                    <li>
                      <Link href="/brochure">
                        <span className="text-xl text-primary-300 leading-8 hover:text-white hover:underline common-trans">
                          Brochure
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <span className="text-xl text-primary-300 leading-8 hover:text-white hover:underline common-trans">
                          About Us
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallary">
                        <span className="text-xl text-primary-300 leading-8 hover:text-white hover:underline common-trans">
                          Gallery
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/legal-documents">
                        <span className="text-xl text-primary-300 leading-8 hover:text-white hover:underline common-trans">
                          Documents
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="clum-2">
                  <h2 className="text-[24px] leading-8 text-white mb-5">
                    Address
                  </h2>
                  <p className="text-xl leading-8 text-primary-300 mb-3 md:w-[300px] w-full">
                    {settings()?.address}
                  </p>
                  <a href={`${settings()?.short_name_2}`} target="_blank">
                    <span className="text-xl text-primary-300 leading-8 underline hover:text-white hover:underline common-trans">
                      View On Map
                    </span>
                  </a>
                </div>
                <div className="contact">
                  <h2 className="text-[24px] leading-8 text-white mb-5">
                    Contact Us
                  </h2>
                  <ul className="flex flex-col space-y-2.5 mb-5">
                    <li>
                      <a href={`tel:${settings()?.phone}`}>
                        <div className="flex space-x-[13px] text-xl text-primary-300 leading-8 hover:text-white common-trans items-center">
                          <span>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current"
                            >
                              <path d="M17 12.5C15.8 12.5 14.5 12.3 13.4 11.9C13.3 11.9 13.2 11.9 13.1 11.9C12.8 11.9 12.6 12 12.4 12.2L10.2 14.4C7.4 12.9 5 10.6 3.6 7.8L5.8 5.6C6.1 5.3 6.2 4.9 6 4.6C5.7 3.5 5.5 2.2 5.5 1C5.5 0.5 5 0 4.5 0H1C0.5 0 0 0.5 0 1C0 10.4 7.6 18 17 18C17.5 18 18 17.5 18 17V13.5C18 13 17.5 12.5 17 12.5ZM2 2H3.5C3.6 2.9 3.8 3.8 4 4.6L2.8 5.8C2.4 4.6 2.1 3.3 2 2ZM16 16C14.7 15.9 13.4 15.6 12.2 15.2L13.4 14C14.2 14.2 15.1 14.4 16 14.4V16Z" />
                            </svg>
                          </span>
                          <span className="">{settings()?.phone}</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:hello@pushpodhara.com">
                        <div className="flex space-x-[13px] text-xl text-primary-300 leading-8 hover:text-white common-trans items-center">
                          <span>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current"
                            >
                              <path d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM20 7.238L12.072 14.338L4 7.216V19H20V7.238ZM4.511 5L12.061 11.662L19.502 5H4.511Z" />
                            </svg>
                          </span>
                          <span className="">{settings()?.email}</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <ul className="social-icons flex space-x-5 items-center">
                    {settings()?.socials &&
                      settings()?.socials.length > 0 &&
                      settings()?.socials.map((item, i) => (
                        <li key={i}>
                          <a href={item.url} target="_blank">
                            <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#919599] hover:bg-white common-trans">
                              <FontAwesomeCom
                                className="w-5 h-5 text-[#343434]"
                                icon={item.icon}
                              />
                            </div>
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[100px] flex justify-center items-center border-t border-primary-300">
            <p className="text-xl text-primary-300 leading-8">
              @2023 All rights reserved, Developed by{" "}
              <a
                href="https://www.facebook.com/clockodee"
                target="_blank"
                className="text-white underline inline-block ml-1"
              >
                CLOCKODEE
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooteOne;
