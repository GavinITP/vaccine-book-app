import Image from "next/image";
import getHospital from "@/libs/getHospital";

interface Props {
  params: { hid: string };
}

const hospitalDetailPage = async ({ params }: Props) => {
  const { data } = await getHospital(params.hid);
  const { name, address, district, province, postalcode, tel, picture } = data;

  return (
    <main className="text-center py-28 grid grid-cols-2 w-[1000px] mx-auto">
      <Image
        src={picture}
        alt={name}
        width={500}
        height={300}
        className="rounded-lg shadow-lg"
      />

      <div>
        <h1 className="text-4xl font-bold ml-16 text-left">{name}</h1>

        <div className="text-left mt-12 ml-16">
          <p>Address: {address}</p>
          <p>District: {district}</p>
          <p>Province: {province}</p>
          <p>Postal Code: {postalcode}</p>
          <p>Tel. {tel}</p>
        </div>
      </div>
    </main>
  );
};

export default hospitalDetailPage;

export const generateStaticParams = async () => {
  return [{ hid: "001" }, { hid: "002" }, { hid: "003" }];
};
