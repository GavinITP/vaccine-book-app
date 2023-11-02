import Hospital from "@/db/models/Hospital";
import { dbConnect } from "@/db/dbConnect";
import { revalidatePath } from "next/cache";

const AddHospitalForm = () => {
  const addHospital = async (addHospitalForm: FormData) => {
    "use server";

    const hospitalName = addHospitalForm.get("hospitalName");
    const address = addHospitalForm.get("address");
    const district = addHospitalForm.get("district");
    const province = addHospitalForm.get("province");
    const postalCode = addHospitalForm.get("postalCode");
    const tel = addHospitalForm.get("tel");
    const pictureURL = addHospitalForm.get("pictureURL");

    try {
      await dbConnect();
      const hospital = await Hospital.create({
        name: hospitalName,
        address,
        district,
        province,
        postalcode: postalCode,
        tel,
        picture: pictureURL,
      });
    } catch (e) {
      console.log(e);
    }

    revalidatePath("/hospitals");
  };

  return (
    <form action={addHospital} className="max-w-lg mx-auto p-4 my-20">
      <div className="mb-4">
        <label
          htmlFor="hospitalName"
          className="block text-sm font-medium text-gray-700"
        >
          Hospital Name
        </label>
        <input
          type="text"
          id="hospitalName"
          name="hospitalName"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="district"
          className="block text-sm font-medium text-gray-700"
        >
          District
        </label>
        <input
          type="text"
          id="district"
          name="district"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="province"
          className="block text-sm font-medium text-gray-700"
        >
          Province
        </label>
        <input
          type="text"
          id="province"
          name="province"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="postalCode"
          className="block text-sm font-medium text-gray-700"
        >
          Postal Code
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="tel"
          className="block text-sm font-medium text-gray-700"
        >
          Tel.
        </label>
        <input
          type="tel"
          id="tel"
          name="tel"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="pictureURL"
          className="block text-sm font-medium text-gray-700"
        >
          Picture URL
        </label>
        <input
          type="url"
          id="pictureURL"
          name="pictureURL"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold rounded-md p-2"
      >
        Submit
      </button>
    </form>
  );
};

export default AddHospitalForm;
