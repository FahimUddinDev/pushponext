import React from "react";
function MainWid({ managements }) {
  return (
    <section className="w-full sm:py-[110px] py-[60px]">
      <div className="theme-container mx-auto">
        <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
          {managements &&
            managements.length > 0 &&
            managements.map((item, index) => (
              <div
                key={index}
                className="mdir w-full h-[470px] rounded-lg overflow-hidden relative group"
              >
                <div className="w-full h-full">
                  <img
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}uploads/settings/managements/${item.photo}`}
                    alt="mdir"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-full bg-primary-500 absolute left-0 top-[352px] group-hover:top-0  common-trans bg-opacity-[0.9] pt-6 px-[48px] pb-[48px]">
                  <h2 className="xl:text-[24px] text-white font-semibold xl:leading-[38px] capitalize text-xl">
                    {item.name}
                  </h2>
                  <p className="xl:text-xl text-primary-600 xl:leading-[38px] mb-[30px] text-md capitalize">
                    {item.designation}
                  </p>
                  <p className="text-xl text-white leading-[30px] opacity-0 group-hover:opacity-100 transition-all duration-800 ease-in-out">
                    {item.message}
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
