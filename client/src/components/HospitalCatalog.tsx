import Link from "next/link";
import Card from "./Card";

export interface HospitalDataType {
  _id: string;
  name: string;
  address: string;
  district: string;
  province: string;
  postalCode: string;
  tel: string;
  picture: string;
}

export interface HospitalJsonType {
  count: number;
  data: HospitalDataType[];
}

interface Props {
  hospitalJson: HospitalJsonType | Promise<any>;
}

const HospitalCatalog = async ({ hospitalJson }: Props) => {
  const hospitalJsonReady = await hospitalJson;
  const { count, data } = hospitalJsonReady;

  return (
    <>
      <h3 className="text-3xl text-center font-bold mb-12">
        {count} hospitals near you
      </h3>

      <div className="grid grid-cols-3">
        {data.map(({ _id, name, picture }: HospitalDataType) => (
          <Link href={`/hospital/${_id}`} key={_id}>
            <Card title={name} imgSrc={picture} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default HospitalCatalog;
