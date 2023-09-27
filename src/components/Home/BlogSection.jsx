import React from "react";
import BlogCard from "@/src/components/Helpers/BlogCard";

function BlogSection({ blogs }) {
  return (
    <section>
      <div className="blog-section-wrapper w-full lg:pb-[140px] pb-[60px]">
        <div className="theme-container mx-auto">
          <div className="title mb-[60px]">
            <h2 className="sm:text-[42px] text-3xl sm:leading-[63px] font-semibold text-primary-400 text-center mb-5">
              Our Media Coverage
            </h2>
            <p className="sm:text-lg sm:leading-[30px] text-sm text-center text-primary-300">
              We are recognized for exceeding client expectations and delivering
              great
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 xl:gap-[30px] gap-4">
            {blogs &&
              blogs.length > 0 &&
              blogs
                .slice(0, 3)
                .map((item, index) => <BlogCard key={index} blog={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
