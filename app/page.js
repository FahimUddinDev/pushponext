import Home from "@/src/components/Home";
import DefaultLayout from "@/src/components/Partials/DefaultLayout";
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/home`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata = {
  title: "Home | Pushpodhara",
};

export default async function HomePage() {
  const { data } = await getData();
  return (
    <>
      <DefaultLayout>
        <Home homePage={data} />
      </DefaultLayout>
    </>
  );
}
