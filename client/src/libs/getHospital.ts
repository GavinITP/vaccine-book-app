const getHospital = async (id: string) => {
  const response = await fetch(`http://localhost:9000/api/v1/hospitals/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch hospital");
  }

  return await response.json();
};

export default getHospital;
