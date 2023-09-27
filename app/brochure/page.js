import React from "react";
import HeaderOne from "@/src/components/Partials/Headers/HeaderOne";
import FooteOne from "@/src/components/Partials/Footers/FooteOne";
import PageTitle from "@/src/components/common/PageTitle";
import DefaultLayout from "@/src/components/Partials/DefaultLayout";
import MainWid from "@/src/components/BrochureWidgets/MainWid";
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/brochures`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata = {
  title: "Home | Brochures",
};
async function Page() {
  const { data } = await getData();
  return (
    <>
      <DefaultLayout>
        <HeaderOne />
        <main>
          <div className="theme-container mx-auto mt-[60px] lg:mt-0">
            <PageTitle title="Brochure" />
          </div>
          <MainWid brochures={data.brochures} />
        </main>
        <FooteOne />
      </DefaultLayout>
    </>
  );
}

export default Page;
