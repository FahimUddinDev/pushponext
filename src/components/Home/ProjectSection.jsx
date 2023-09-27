"use client";
import React, { useEffect, useState } from "react";
import cKey from "@/src/utilities/cKey";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function ProjectSection({ gallery }) {
  const [open, setOpen] = useState(false);
  const [photoIndex, setIndex] = useState(0);
  const [gallaryImages, setGallaryImage] = useState([]);
  useEffect(() => {
    if (gallery.length > 0) {
      const images = gallery.map(
        (item) =>
          `${process.env.NEXT_PUBLIC_BASE_URL}uploads/galleries/${item.photo}`
      );
      setGallaryImage(images);
    }
  }, [gallery]);

  const popupHandler = (value) => {
    setIndex(value);
    setOpen(!open);
  };

  return (
    <section>
      <div className="project-section-wrapper w-full lg:pb-[140px] pb-[60px]">
        <div className="theme-container mx-auto">
          <div className="title mb-[50px]">
            <div className="mb-5" data-aos="fade-up">
              <h2 className="sm:text-[42px] text-3xl sm:leading-[63px] font-semibold text-primary-400 text-center  lg:px-56">
                {cKey()?.gallery_home_title}
              </h2>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="sm:text-lg text-sm leading-[30px] text-center text-primary-300"
            >
              {cKey()?.gallery_home_details}
            </p>
          </div>
          <div className="grid lg:grid-cols-12 sm:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5 mb-[50px]">
            {gallery && gallery.length > 0 && (
              <div className="project-1 lg:col-span-6 cursor-pointer">
                <div
                  className="w-full h-[435px] rounded"
                  onClick={() => popupHandler(0)}
                >
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_URL +
                      "uploads/galleries/thumbnail/" +
                      gallery[0].thumbnail
                    }`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            {gallery && gallery.length > 1 && (
              <div className="project-1 lg:col-span-3">
                <div
                  className="w-full h-[435px] rounded"
                  onClick={() => popupHandler(1)}
                >
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_URL +
                      "uploads/galleries/thumbnail/" +
                      gallery[1].thumbnail
                    }`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            {gallery && gallery.length > 2 && (
              <div className="project-1 lg:col-span-3">
                <div
                  className="w-full h-[435px] rounded"
                  onClick={() => popupHandler(2)}
                >
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_URL +
                      "uploads/galleries/thumbnail/" +
                      gallery[2].thumbnail
                    }`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            {gallery && gallery.length > 3 && (
              <div className="project-1 lg:col-span-3">
                <div
                  className="w-full h-[435px] rounded"
                  onClick={() => popupHandler(3)}
                >
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_URL +
                      "uploads/galleries/thumbnail/" +
                      gallery[3].thumbnail
                    }`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            {gallery && gallery.length > 4 && (
              <div className="project-1 lg:col-span-3">
                <div
                  className="w-full h-[435px] rounded"
                  onClick={() => popupHandler(4)}
                >
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_URL +
                      "uploads/galleries/thumbnail/" +
                      gallery[4].thumbnail
                    }`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            {gallery && gallery.length > 5 && (
              <div className="project-1 lg:col-span-6 cursor-pointer">
                <div
                  className="w-full h-[435px] rounded"
                  onClick={() => popupHandler(5)}
                >
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_URL +
                      "uploads/galleries/thumbnail/" +
                      gallery[5].thumbnail
                    }`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-end w-full">
            <Link href="/gallary">
              <div className="px-[30px] py-[13px] flex space-x-[15px] items-center bg-primary-500 text-white text-lg font-medium rounded-md">
                <span>View All</span>
                <span>
                  <svg
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>

          {gallaryImages && gallaryImages.length > 0 && (
            <Lightbox
              index={photoIndex}
              open={open}
              close={() => setOpen(false)}
              slides={gallaryImages.map((item) => {
                return { src: `${item}` };
              })}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
