import Image from "next/image";

interface Props {
  params: { hid: string };
}

const hospitalDetailPage = ({ params }: Props) => {
  const hospitalsMockData = new Map([
    ["001", { title: "Chula", imgSrc: "/img/hospitals/chula.jpg" }],
    ["002", { title: "Rajavithi", imgSrc: "/img/hospitals/rajavithi.jpg" }],
    ["003", { title: "Thammasat", imgSrc: "/img/hospitals/thammasat.jpg" }],
  ]);

  return (
    <main className="text-center py-28 grid grid-cols-2 w-[1000px] mx-auto">
      <Image
        src={hospitalsMockData.get(params.hid)?.imgSrc || ""}
        alt={hospitalsMockData.get(params.hid)?.title || ""}
        width={500}
        height={300}
      />

      <h1 className="text-3xl font-bold">
        Name: {hospitalsMockData.get(params.hid)?.title}
      </h1>
    </main>
  );
};

export default hospitalDetailPage;

export const generateStaticParams = async () => {
  return [{ hid: "001" }, { hid: "002" }, { hid: "003" }];
};
