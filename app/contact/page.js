import React from "react";
import HeaderOne from "@/src/components/Partials/Headers/HeaderOne";
import FooteOne from "@/src/components/Partials/Footers/FooteOne";
import DefaultLayout from "@/src/components/Partials/DefaultLayout";
import PageTitle from "@/src/components/common/PageTitle";
import MainWid from "@/src/components/ContactWidgets/MainWid";

function Page() {
  return (
    <>
      <DefaultLayout>
        <HeaderOne />
        <main>
          <div className="theme-container mx-auto">
            <PageTitle title="Contact Us" />
          </div>
          <MainWid />
        </main>
        <FooteOne />
      </DefaultLayout>
    </>
  );
}

export default Page;
