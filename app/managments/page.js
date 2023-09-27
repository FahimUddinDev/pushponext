import React from "react";
import HeaderOne from "@/src/components/Partials/Headers/HeaderOne";
import FooteOne from "@/src/components/Partials/Footers/FooteOne";
import PageTitle from "@/src/components/common/PageTitle";
import DefaultLayout from "@/src/components/Partials/DefaultLayout";
import MainWid from "@/src/components/ManagementsWidgets/MainWid";
async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/managements`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata = {
  title: "Home | Management",
};

async function Page() {
  const { data } = await getData();
  return (
    <>
      <DefaultLayout>
        <HeaderOne />
        <main>
          <div className="theme-container mx-auto mt-[60px] lg:mt-0">
            <PageTitle title="Management Body" />
          </div>
          <MainWid managements={data.managements} />
        </main>
        <FooteOne />
      </DefaultLayout>
    </>
  );
}

export default Page;
