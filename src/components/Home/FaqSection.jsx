import React from "react";
import FaqWid from "@/src/components/common/FaqCom";
import cKey from "@/src/utilities/cKey";

function FaqSection({ faqs }) {
  return (
    <section>
      <div className="faq-section-wrapper w-full lg:py-[140px] py-[60px]">
        <div className="theme-container mx-auto">
          <div className="title mb-[60px]">
            <h2 className="sm:text-[42px] text-3xl sm:leading-[63px] font-semibold text-primary-500">
              {cKey()?.faq_title}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[30px]">
            <FaqWid
              faqs={
                faqs && faqs.length > 0
                  ? faqs.slice(0, faqs.length >= 3 ? 3 : faqs.length)
                  : []
              }
            />
            {faqs && faqs.length > 3 && faqs.length <= 6 && (
              <FaqWid
                faqs={faqs && faqs.slice(3, faqs.length < 7 ? 6 : faqs.length)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
