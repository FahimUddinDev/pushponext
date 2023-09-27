"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function MainWid({ slug }) {
  const [blog, setBlog] = useState(null);
  useEffect(() => {
    if (!blog) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/projects/${slug}`)
        .then((res) => {
          console.log(res);
          if (res && res.status === 200) {
            setBlog(res.data ? res.data.data.project : null);
          } else {
            setBlog(null);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <>
      {blog ? (
        <>
          <section className="theme-container mx-auto mt-[60px] lg:mt-0">
            <div
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}uploads/settings/works/${blog.photo})`,
              }}
              className=" w-full xl:h-[618px] h-[450px] rounded-[20px] flex justify-center items-center bg-cover bg-no-repeat"
            >
              <span
                data-aos="zoom-in"
                className="xl:text-[56px] sm:text-4xl text-xl text-white font-extrabold uppercase"
              >
                Project: {blog.title}
              </span>
            </div>
          </section>
          <section className="w-full py-[70px]">
            <div className="theme-container mx-auto">
              <div className="w-full lg:px-[100px] ">
                <div
                  className="mb-[50px] html-code-wrap"
                  dangerouslySetInnerHTML={{
                    __html: blog.details,
                  }}
                ></div>
                <h2 className="text-[32px] font-medium leading-[30px] mb-5 text-gray-900">
                  চলমান কর্মতৎপরতা
                </h2>
                <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-6 mb-[50px]">
                  {blog.work_detail &&
                    blog.work_detail.length > 0 &&
                    blog.work_detail.map((item, i) => (
                      <div
                        key={item}
                        className="w-full lg:h-[375px] sm:h-[300px] h-[250px] rounded overflow-hidden"
                      >
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/settings/works/${item.image}`}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                </div>
                <h2 className="text-[32px] font-medium leading-[30px] mb-5 text-gray-900">
                  বুকিং করতে করনীয়
                </h2>
                <p className="text-xl leading-[30px] mb-[50px] text-gray-700">
                  {blog.booking_tips}
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <div className="flex justify-center my-10">
            <p>Project Not Found</p>
          </div>
        </>
      )}
    </>
  );
}

export default MainWid;
