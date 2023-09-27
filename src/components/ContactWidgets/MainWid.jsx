"use client";
import React, { useEffect, useState } from "react";
import LottieAnimation from "@/src/components/Helpers/LottieAnimation";
import ContactLottie from "../../../public/assets/lotties/contact-us.json";
import _instance from "@/lib/_instance";
import axios from "axios";
import cKey from "@/src/utilities/cKey";
function MainWid() {
  const [addresses, setAddress] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const messageHandler = () => {
    _instance
      .sendMessage({
        name: name,
        phone: phone,
        email: email,
        message: message,
      })
      .then((res) => {
        console.log(res);
        if (res) {
          setError(
            res.data && res.data.success
              ? { success: res.data.success, message: res.data.message }
              : { success: res.data.success, ...res.data.message }
          );
          setEmail("");
          setPhone("");
          setName("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (!addresses) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/addresses`)
        .then((res) => {
          if (res.data) {
            setAddress(res.data.data.addresses);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <section className="contact-page-wrapper w-full py-[140px]">
      <div className="theme-container mx-auto">
        <div className="grid grid-cols-2 gap-[114px] mb-[100px]">
          <div>
            <h2 className="text-[42px] text-center font-semibold leading-[63px] text-primary-400 mb-5">
              {cKey()?.contact_title}
            </h2>
            <LottieAnimation width={585} height={585} src={ContactLottie} />
          </div>
          <div className="pr-[100px]">
            {error && !error.success && (
              <div className="w-full p-5 rounded border border-red-800 bg-red-100 mb-5">
                <ul className="list-disc ml-5">
                  {error.name && (
                    <li className="text-red-800 text-lg capitalize mb-2.5">
                      {error.name[0]}
                    </li>
                  )}
                  {error.phone && (
                    <li className="text-red-800 text-lg capitalize mb-2.5">
                      {error.phone[0]}
                    </li>
                  )}
                  {error.email && (
                    <li className="text-red-800 text-lg capitalize mb-2.5">
                      {error.email[0]}
                    </li>
                  )}
                  {error.message && (
                    <li className="text-red-800 text-lg capitalize mb-2.5">
                      {error.message[0]}
                    </li>
                  )}
                </ul>
              </div>
            )}
            {error && error.success && (
              <div className="w-full p-5 rounded border border-green-800 bg-green-100 mb-5">
                <p className="text-green-800 text-lg capitalize">
                  {error.message}
                </p>
              </div>
            )}

            <div className="flex flex-col space-y-3.5">
              <div className="input-item">
                <label
                  htmlFor="name"
                  className="block mb-3 text-xl leading-[30px]"
                >
                  Name <sup className="text-red-500 text-lg">*</sup>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-full h-[56px] rounded focus:outline-0 focus:right-0 border border-borderColor-100 px-8"
                />
              </div>
              <div className="input-item">
                <label
                  htmlFor="name"
                  className="block mb-3 text-xl leading-[30px]"
                >
                  Phone<sup className="text-red-500 text-lg">*</sup>
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  className="w-full h-[56px] rounded focus:outline-0 focus:right-0 border border-borderColor-100 px-8"
                />
              </div>
              <div className="input-item">
                <label
                  htmlFor="name"
                  className="block mb-3 text-xl leading-[30px]"
                >
                  Email<sup className="text-red-500 text-lg">*</sup>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  className="w-full h-[56px] rounded focus:outline-0 focus:right-0 border border-borderColor-100 px-8"
                />
              </div>
              <div className="input-item">
                <label
                  htmlFor="name"
                  className="block mb-3 text-xl leading-[30px]"
                >
                  Message<sup className="text-red-500 text-lg">*</sup>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-[123px] rounded focus:outline-0 focus:right-0 border border-borderColor-100 p-8"
                ></textarea>
              </div>
              <div className="input-item">
                <button
                  onClick={messageHandler}
                  type="submit"
                  disabled={
                    name === "" &&
                    phone === "" &&
                    email === "" &&
                    message === ""
                      ? true
                      : false
                  }
                  className="w-full h-[56px] rounded focus:outline-0 focus:right-0 text-xl text-white font-medium capitalize bg-black disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  Send Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[100px] grid grid-cols-3 items-center gap-[50px]">
          {addresses &&
            addresses.length > 0 &&
            addresses.map((item, i) => (
              <div key={i} className="item">
                <h2 className="text-2xl font-semibold leading-[30px] text-primary-600 mb-5">
                  {item.title}:
                </h2>
                <div className="flex space-x-5 mb-2.5 items-center">
                  <span>
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.364 15.364L9 21.7279L2.63604 15.364C-0.87868 11.8492 -0.87868 6.15076 2.63604 2.63604C6.15076 -0.87868 11.8492 -0.87868 15.364 2.63604C18.8787 6.15076 18.8787 11.8492 15.364 15.364ZM9 13C11.2091 13 13 11.2091 13 9C13 6.79086 11.2091 5 9 5C6.79086 5 5 6.79086 5 9C5 11.2091 6.79086 13 9 13ZM9 11C7.8954 11 7 10.1046 7 9C7 7.89543 7.8954 7 9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11Z"
                        fill="#343434"
                      />
                    </svg>
                  </span>
                  <p className="text-xl leading-[30px] text-primary-400">
                    {item.address}
                  </p>
                </div>
                <div className="flex space-x-5 mb-2.5 items-center">
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
                        fill="#343434"
                      />
                    </svg>
                  </span>
                  <p className="text-xl leading-[30px] text-primary-400">
                    {item.phone}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default MainWid;
