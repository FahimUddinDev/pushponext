"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "@/src/components/Helpers/BlogCard";

function Index({ slug }) {
  const [blog, setBlog] = useState(null);
  const [relatedBlog, setRltdBlog] = useState([]);
  useEffect(() => {
    if (!blog) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/blogs/${slug}`)
        .then((res) => {
          console.log(res);
          if (res && res.status === 200) {
            setBlog(res.data ? res.data.data.blog : null);
            setRltdBlog(res.data ? res.data.data.related_blogs : []);
          } else {
            setBlog(null);
            setRltdBlog([]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  return (
    <>
      <main>
        {blog && (
          <div>
            <div className="theme-container mx-auto mt-[60px] lg:mt-0">
              <div
                style={{
                  backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL}uploads/blogs/${blog?.photo})`,
                }}
                className=" w-full sm:h-[618px] h-[400px] rounded-[20px] flex justify-center items-center bg-center bg-no-repeat bg-cover"
              ></div>
            </div>
            <div className="theme-container mx-auto">
              <div className="w-full lg:px-[100px]">
                <div className="flex space-x-8 items-center my-5">
                  <div className="flex space-x-[13px] items-center">
                    <span>
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.00016 0.833008C7.88422 0.833008 8.73206 1.1842 9.35719 1.80932C9.98231 2.43444 10.3335 3.28229 10.3335 4.16634C10.3335 5.0504 9.98231 5.89824 9.35719 6.52336C8.73206 7.14849 7.88422 7.49967 7.00016 7.49967C6.11611 7.49967 5.26826 7.14849 4.64314 6.52336C4.01802 5.89824 3.66683 5.0504 3.66683 4.16634C3.66683 3.28229 4.01802 2.43444 4.64314 1.80932C5.26826 1.1842 6.11611 0.833008 7.00016 0.833008ZM7.00016 9.16634C10.6835 9.16634 13.6668 10.658 13.6668 12.4997V14.1663H0.333496V12.4997C0.333496 10.658 3.31683 9.16634 7.00016 9.16634Z"
                          fill="#6C757D"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-lg text-primary-300">Admin</span>
                  </div>
                  <div className="flex space-x-[13px] items-center">
                    <span>
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.00016 0.833008C7.88422 0.833008 8.73206 1.1842 9.35719 1.80932C9.98231 2.43444 10.3335 3.28229 10.3335 4.16634C10.3335 5.0504 9.98231 5.89824 9.35719 6.52336C8.73206 7.14849 7.88422 7.49967 7.00016 7.49967C6.11611 7.49967 5.26826 7.14849 4.64314 6.52336C4.01802 5.89824 3.66683 5.0504 3.66683 4.16634C3.66683 3.28229 4.01802 2.43444 4.64314 1.80932C5.26826 1.1842 6.11611 0.833008 7.00016 0.833008ZM7.00016 9.16634C10.6835 9.16634 13.6668 10.658 13.6668 12.4997V14.1663H0.333496V12.4997C0.333496 10.658 3.31683 9.16634 7.00016 9.16634Z"
                          fill="#6C757D"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-lg text-primary-300">
                      10th May, 2023
                    </span>
                  </div>
                </div>
                <h2 className="sm:text-[32px] text-3xl font-medium sm:leading-[30px] mb-[50px] text-gray-900">
                  {blog.title}
                </h2>
                <div
                  className="blog-details-html-wrapper mb-[50px]"
                  dangerouslySetInnerHTML={{
                    __html: blog.description,
                  }}
                ></div>
              </div>
            </div>
          </div>
        )}
        {relatedBlog && relatedBlog.length > 0 && (
          <section className="theme-container mx-auto ">
            <div className="lg:pb-[140px] pb-[60px]">
              <div className="title mb-[60px]">
                <h2 className="sm:text-[42px] text-3xl sm:leading-[63px] font-semibold text-primary-400 text-center mb-5">
                  Related Blogs
                </h2>
              </div>
              <div className="blog-section-wrapper grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
                {relatedBlog.slice(0, 3).map((item, index) => (
                  <BlogCard key={index} blog={item} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

export default Index;
