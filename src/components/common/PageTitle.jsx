import React from "react";

function PageTitle({ title }) {
  return (
    <section className="page-title-wrapper w-full h-[250px] rounded-[20px] flex justify-center items-center">
      <span
        data-aos="zoom-in"
        className="lg:text-[52px] text-4xl text-white font-semibold capitalize"
      >
        {title}
      </span>
    </section>
  );
}

export default PageTitle;
