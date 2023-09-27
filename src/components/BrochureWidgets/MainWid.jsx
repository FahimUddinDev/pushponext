"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
function MainWid({ brochures }) {
  const [open, setOpen] = useState(false);
  const [photoIndex, setIndex] = useState(0);
  const popupHandler = (value) => {
    setIndex(value);
    setOpen(!open);
  };
  return (
    <section className="w-full py-[110px]">
      <div className="theme-container mx-auto">
        <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
          {brochures &&
            brochures.length > 0 &&
            brochures.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay={`${index + 1}00`}
                className="brochar-item w-full h-[350px] rounded-lg overflow-hidden relative group cursor-pointer"
                onClick={() => popupHandler(index)}
              >
                <div className="w-full h-full">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/bouchures/thumbnail/${item.thumbnail}`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
      {brochures && brochures.length > 0 && (
        <Lightbox
          index={photoIndex}
          open={open}
          close={() => setOpen(false)}
          slides={brochures.map((item) => {
            return {
              src: `${process.env.NEXT_PUBLIC_BASE_URL}uploads/bouchures/${item.photo}`,
            };
          })}
        />
      )}
    </section>
  );
}

export default MainWid;
