"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import _instance from ".././../../lib/_instance";
function DefaultLayout({ children }) {
  const [load, setLoad] = useState(true);
  const backToTop = () => {
    const result = document.querySelector("#backtotop");
    if (result) {
      document.addEventListener("scroll", () => {
        if (
          document.body.scrollTop > window.innerHeight ||
          document.documentElement.scrollTop > window.innerHeight
        ) {
          result.style.display = "flex";
        } else {
          result.style.display = "none";
        }
      });
      result.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  };
  useEffect(() => {
    AOS.init();
    backToTop();
    _instance
      .settings()
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem(
            "settings",
            JSON.stringify(
              res.data && {
                ...res.data.data.general_setting,
                projects: res.data.data.projects,
                socials: res.data.data.socials,
              }
            )
          );
          localStorage.setItem(
            "keywords",
            JSON.stringify(res.data && res.data.data.keywords)
          );
          if (
            localStorage.getItem("keywords") &&
            localStorage.getItem("settings")
          ) {
            setLoad(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>{!load && <div>{children || children}</div>}</div>
      <button
        id="backtotop"
        type="button"
        onClick={() => backToTop()}
        className="w-10 h-10 bg-primary-600 fixed bottom-5 right-5 rounded justify-center items-center text-white hidden"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
            />
          </svg>
        </span>
      </button>
    </>
  );
}

export default DefaultLayout;
