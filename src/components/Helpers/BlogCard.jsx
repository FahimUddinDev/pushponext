import React from "react";
import Link from "next/link";
import dateFormat from "@/src/utilities/date-format";

function BlogCard({ blog, index }) {
  return (
    <div
      key={index}
      data-aos-duration="1500"
      data-aos="fade-up"
      data-aos-delay={`${index}00`}
      className="blog-item w-full rounded group overflow-hidden"
    >
      <div className="blog-thumb w-full h-[300px] overflow-hidden">
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_URL}public/uploads/blogs/${blog.photo}`}
          alt="thumb"
          className="w-full h-full object-cover group-hover:scale-110 transform scale-100 common-trans"
        />
      </div>
      <div className="w-full px-6 pb-8 pt-4 bg-white">
        <div className="flex space-x-8 items-center mb-3">
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
                />
              </svg>
            </span>
            <span className="text-lg text-primary-300">Admin</span>
          </div>
          <div className="flex space-x-[13px] items-center">
            <span>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 8.83301H5.83333V10.4997H7.5V8.83301ZM10.8333 8.83301H9.16667V10.4997H10.8333V8.83301ZM14.1667 8.83301H12.5V10.4997H14.1667V8.83301ZM15.8333 2.99967H15V1.33301H13.3333V2.99967H6.66667V1.33301H5V2.99967H4.16667C3.24167 2.99967 2.5 3.74967 2.5 4.66634V16.333C2.5 16.775 2.67559 17.199 2.98816 17.5115C3.30072 17.8241 3.72464 17.9997 4.16667 17.9997H15.8333C16.2754 17.9997 16.6993 17.8241 17.0118 17.5115C17.3244 17.199 17.5 16.775 17.5 16.333V4.66634C17.5 4.22431 17.3244 3.80039 17.0118 3.48783C16.6993 3.17527 16.2754 2.99967 15.8333 2.99967ZM15.8333 16.333H4.16667V7.16634H15.8333V16.333Z"
                  fill="#6C757D"
                />
              </svg>
            </span>
            <span className="text-lg text-primary-300">
              {dateFormat(blog.date)}
            </span>
          </div>
        </div>
        <h2 className="text-gray-900 text-[24px] font-medium leading-7 mb-[37px]">
          {blog.title}
        </h2>
        <Link href={`/blog/${blog.slug}`}>
          <div className="flex space-x-[14px] items-center text-xl text-primary-600">
            <span>Read More</span>
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M12.172 6.99968L6.808 1.63568L8.222 0.22168L16 7.99968L8.222 15.7777L6.808 14.3637L12.172 8.99968H0V6.99968H12.172Z" />
              </svg>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
