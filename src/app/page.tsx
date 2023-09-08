import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";

const Home = () => {
  return (
    <>
      <Banner />
      <main className="px-20 mb-20">
        <h2 className="text-center mt-8 mb-16 capitalize font-bold">
          Hospitals
        </h2>
        <CardPanel />
      </main>
    </>
  );
};

export default Home;
