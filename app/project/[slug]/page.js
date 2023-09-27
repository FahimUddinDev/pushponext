import React from "react";
import HeaderOne from "@/src/components/Partials/Headers/HeaderOne";
import FooteOne from "@/src/components/Partials/Footers/FooteOne";
import DefaultLayout from "@/src/components/Partials/DefaultLayout";
import MainWid from "@/src/components/ProjectDetailsWidgets/MainWid";

function Page(ctx) {
  return (
    <>
      <DefaultLayout>
        <HeaderOne />
        <main>
          <MainWid slug={ctx.params.slug} />
        </main>
        <FooteOne />
      </DefaultLayout>
    </>
  );
}

export default Page;
