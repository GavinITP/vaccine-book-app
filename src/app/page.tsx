import Banner from "@/components/Banner";
import Card from "@/components/Card";
import { HospitalType, hospitalsData } from "@/data/hospitals";

const Home = () => {
  return (
    <>
      <Banner />
      <main className="px-20 mb-20">
        <h2 className="text-center mt-8 mb-16 capitalize font-bold">
          Hospitals
        </h2>
        <div className="grid grid-cols-3">
          {hospitalsData.map(({ title, imgSrc }: HospitalType) => (
            <Card title={title} imgSrc={imgSrc} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
