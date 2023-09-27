import React, { useState } from "react";
import Link from "next/link";
import NavItems from "../Helpers/NavItems";
import settings from "@/src/utilities/settings";

function Drawer() {
  const [drawer, setDrawer] = useState(false);
  return (
    <section>
      <div className="drawer-wrapper w-full h-[80px] block lg:hidden bg-white shadow">
        {drawer && (
          <div
            onClick={() => setDrawer(!drawer)}
            className="w-full h-full fixed bg-black bg-opacity-50 z-10"
          ></div>
        )}
        <div className="theme-container h-full">
          <div className="w-full flex h-full justify-between items-center">
            <div className="flex space-x-2.5 items-center">
              <div className="drawer-active">
                <button onClick={() => setDrawer(!drawer)} type="button">
                  <span className="text-gray-900">
                    <svg
                      className="w-7 h-7 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 4H21V6H3V4ZM7 19H21V21H7V19ZM3 14H21V16H3V14ZM7 9H21V11H7V9Z"></path>
                    </svg>
                  </span>
                </button>
                <div
                  className={`drawer-body-wrapper bg-white shadow w-[310px] h-full fixed inset-0 -left-5 z-30 ${
                    drawer ? "active" : ""
                  }`}
                >
                  <div className="absolute right-5 top-5">
                    <button
                      onClick={() => setDrawer(!drawer)}
                      type="button"
                      className=" text-red-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="fill-current w-8 h-8"
                      >
                        <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
                      </svg>
                    </button>
                  </div>
                  <div className="w-full px-7 pt-10">
                    <Link href="/">
                      <div className="w-[171px] h-16 mb-10">
                        <img
                          src={settings()?.logo}
                          alt="logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </Link>
                    <NavItems className="mobile-nav-wrapper" />
                  </div>
                </div>
              </div>
              <Link href="/">
                <div className="w-[171px] h-16">
                  <img
                    src={settings()?.logo}
                    alt="logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
            </div>

            {/* <div>
              <Link href="/signin">
                <div className="flex space-x-2.5 items-center">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_539_10779)">
                        <path
                          d="M15.8337 7.17264V5.95931C15.8337 4.41221 15.2191 2.92848 14.1251 1.83452C13.0312 0.740558 11.5474 0.125977 10.0003 0.125977C8.45323 0.125977 6.9695 0.740558 5.87554 1.83452C4.78157 2.92848 4.16699 4.41221 4.16699 5.95931V7.17264C3.41528 7.55625 2.78407 8.13996 2.34295 8.85943C1.90182 9.57891 1.66791 10.4062 1.66699 11.2501V15.4168C1.66832 16.632 2.15163 17.797 3.01088 18.6563C3.87014 19.5155 5.03516 19.9988 6.25033 20.0001H13.7503C14.9655 19.9988 16.1305 19.5155 16.9898 18.6563C17.849 17.797 18.3323 16.632 18.3337 15.4168V11.2501C18.3327 10.4062 18.0988 9.57891 17.6577 8.85943C17.2166 8.13996 16.5854 7.55625 15.8337 7.17264V7.17264ZM10.0003 2.62598C10.8844 2.62598 11.7322 2.97717 12.3573 3.60229C12.9825 4.22741 13.3337 5.07526 13.3337 5.95931V6.66681H6.66699V5.95931C6.66699 5.07526 7.01818 4.22741 7.6433 3.60229C8.26842 2.97717 9.11627 2.62598 10.0003 2.62598V2.62598ZM15.8337 15.4168C15.8337 15.9693 15.6142 16.4992 15.2235 16.8899C14.8328 17.2806 14.3029 17.5001 13.7503 17.5001H6.25033C5.69779 17.5001 5.16789 17.2806 4.77719 16.8899C4.38649 16.4992 4.16699 15.9693 4.16699 15.4168V11.2501C4.16699 10.6976 4.38649 10.1677 4.77719 9.777C5.16789 9.3863 5.69779 9.16681 6.25033 9.16681H13.7503C14.3029 9.16681 14.8328 9.3863 15.2235 9.777C15.6142 10.1677 15.8337 10.6976 15.8337 11.2501V15.4168Z"
                          fill="#E0E7EC"
                        />
                        <path
                          d="M10.4163 11.6665H9.58301C8.89265 11.6665 8.33301 12.2261 8.33301 12.9165C8.33301 13.6069 8.89265 14.1665 9.58301 14.1665H10.4163C11.1067 14.1665 11.6663 13.6069 11.6663 12.9165C11.6663 12.2261 11.1067 11.6665 10.4163 11.6665Z"
                          fill="#E0E7EC"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_539_10779">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span className="text-white text-lg font-medium capitalize">
                    loginsdfsdf
                  </span>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Drawer;
