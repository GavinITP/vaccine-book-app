import { render, screen, waitFor } from "@testing-library/react";
import HospitalCatalog, {
  HospitalJsonType,
} from "@/components/HospitalCatalog";

const mockHospitalJson: HospitalJsonType = {
  count: 4,
  data: [
    {
      _id: "652654d0d5f3b18ac3cd9a85",
      name: "Chulalongkorn Hospital",
      address: "1873 Rama IV Rd",
      district: "Pathum Wan",
      province: "Bangkok",
      postalCode: "10330",
      tel: "026494000",
      picture:
        "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
    },
    {
      _id: "65265541d5f3b18ac3cd9a88",
      name: "Rajavithi Hospital",
      address: "2 Phaya Thai Rd, Thung Phaya Thai",
      district: "Ratchathewi",
      province: "Bangkok",
      postalCode: "10400",
      tel: "022062900",
      picture:
        "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
    },
    {
      _id: "6526556ed5f3b18ac3cd9a8b",
      name: "Thammasat University Hospital",
      address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
      district: "Khlong Luang",
      province: "Pathum Thani",
      postalCode: "12120",
      tel: "029269999",
      picture:
        "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
    },
    {
      _id: "6543bc2737a4e63d6bded6e1",
      name: "Vajira Hospital",
      address: "681 Samsen Road",
      district: "Dusit",
      province: "Bangkok",
      postalCode: "10300",
      tel: "022443000",
      picture:
        "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
    },
  ],
};

describe("HospitalCatalog", () => {
  it("should have correct number of hospital images", async () => {
    const hospitalCatalog = await HospitalCatalog({
      hospitalJson: mockHospitalJson,
    });
    render(hospitalCatalog);

    await waitFor(() => {
      const hospitalImages = screen.queryAllByRole("img");
      expect(hospitalImages.length).toBe(4);
    });
  });
});
