import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/libs/getHospitals";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import AddHospitalForm from "@/components/AddHospitalForm";

const Hospital = async () => {
  const hospitals = getHospitals();

  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);

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

        {profile.data.role === "admin" ? <AddHospitalForm /> : null}
      </Suspense>
    </main>
  );
};

export default Hospital;
