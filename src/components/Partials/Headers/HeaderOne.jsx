"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import settings from "../../../utilities/settings";
import NavItems from "@/src/components/Helpers/NavItems";
import Drawer from "@/src/components/Mobile/Drawer";
function HeaderOne({ className }) {
  return (
    <>
      <header>
        <div
          className={`header-wapper w-full h-[150px] lg:block hidden ${
            className || ""
          }`}
        >
          <div className="theme-container mx-auto h-full">
            <div className="w-full h-full flex justify-between items-center">
              <Link href="/" className="logo-area relative">
                <Image
                  width={148}
                  height={77}
                  style={{ objectFit: "scale-down" }}
                  src={settings()?.logo}
                  alt="logo"
                />
              </Link>
              <NavItems />
              <div className="support-area">
                <Link rel="preload" href="/contact">
                  <div className="px-6 py-3.5 bg-primary-500 rounded-md">
                    <span className="text-lg font-semibold text-white tracking-wide">
                      Contact Now
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Drawer />
    </>
  );
}

export default HeaderOne;
