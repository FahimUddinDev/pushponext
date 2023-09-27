import React from "react";
import Link from "next/link";
import settings from "@/src/utilities/settings";

function NavItems({ className }) {
  return (
    <nav className={`nav-wrapper ${className || ""}`}>
      <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-10 space-y-2 lg:space-y-0">
        <li>
          <Link href="/">
            <div className="flex space-x-2.5 items-center lg:py-5">
              <span className="text-lg font-semibold text-gray-900 leading-none">
                Home
              </span>
              <span className="hidden">
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.91 0.0799866L6.5 4.66999L11.09 0.0799866L12.5 1.49999L6.5 7.49999L0.5 1.49999L1.91 0.0799866Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </li>
        <li>
          <a onClick={() => event.preventDefault()} href="#">
            <div className="flex space-x-2.5 items-center lg:py-5">
              <span className="text-lg font-semibold text-gray-900 leading-none">
                About
              </span>
              <span>
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.91 0.0799866L6.5 4.66999L11.09 0.0799866L12.5 1.49999L6.5 7.49999L0.5 1.49999L1.91 0.0799866Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="/managments">
                <span className="text-lg font-semibold text-gray-900 leading-none">
                  Management Body
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span className="text-lg font-semibold text-gray-900 leading-none">
                  About Us
                </span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a onClick={() => event.preventDefault()} href="#">
            <div className="flex space-x-2.5 items-center lg:py-5">
              <span className="text-lg font-semibold text-gray-900 leading-none">
                Projects
              </span>
              <span>
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.91 0.0799866L6.5 4.66999L11.09 0.0799866L12.5 1.49999L6.5 7.49999L0.5 1.49999L1.91 0.0799866Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </a>
          <ul className="sub-menu">
            {settings() &&
              settings().projects &&
              settings().projects.length > 0 &&
              settings().projects.map((item, i) => (
                <li key={i}>
                  <Link href={`/project/${item.slug}`}>
                    <span className="text-lg font-semibold text-gray-900 leading-none">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </li>
        <li>
          <a onClick={() => event.preventDefault()} href="#">
            <div className="flex space-x-2.5 items-center lg:py-5">
              <span className="text-lg font-semibold text-gray-900 leading-none">
                Document
              </span>
              <span>
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.91 0.0799866L6.5 4.66999L11.09 0.0799866L12.5 1.49999L6.5 7.49999L0.5 1.49999L1.91 0.0799866Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </a>
          <ul className="sub-menu">
            <li>
              <Link href="/brochure">
                <span className="text-lg font-semibold text-gray-900 leading-none">
                  Brochure
                </span>
              </Link>
            </li>
            <li>
              <Link href="/legal-documents">
                <span className="text-lg font-semibold text-gray-900 leading-none">
                  Legal Documents
                </span>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/gallary">
            <div className="flex space-x-2.5 items-center lg:py-5">
              <span className="text-lg font-semibold text-gray-900 leading-none">
                Gallery
              </span>
              <span className="hidden">
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.91 0.0799866L6.5 4.66999L11.09 0.0799866L12.5 1.49999L6.5 7.49999L0.5 1.49999L1.91 0.0799866Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavItems;
