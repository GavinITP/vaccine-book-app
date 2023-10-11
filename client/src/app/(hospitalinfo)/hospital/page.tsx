import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import CardPanel from "@/components/CardPanel";

const Hospital = () => {
  const hospitals = getHospitals();

  return (
    <main className="py-28">
      <Suspense
        fallback={
          <p className="text-center">
            Loading...
            <LinearProgress />
          </p>
        }
      >
        <HospitalCatalog hospitalJson={hospitals} />
      </Suspense>

      {/* <div className="my-40">
        <CardPanel />
      </div> */}
    </main>
  );
};

export default Hospital;
