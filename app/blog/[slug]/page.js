import HeaderOne from "../../../src/components/Partials/Headers/HeaderOne";
import FooteOne from "../../../src/components/Partials/Footers/FooteOne";
import DefaultLayout from "../../../src/components/Partials/DefaultLayout";
import Blog from "@/src/components/blog";
import React from "react";

async function Page(ctx) {
  return (
    <>
      <DefaultLayout>
        <HeaderOne />
        <Blog slug={ctx.params.slug} />
        <FooteOne />
      </DefaultLayout>
    </>
  );
}

export default Page;
