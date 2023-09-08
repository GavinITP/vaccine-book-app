const bannerImagesSrc = "/img/banners/";
const numberOfBanners = 4;
let bannerImages: string[] = [];

for (let i = 1; i <= numberOfBanners; i++) {
  bannerImages.push(bannerImagesSrc + `banner${i}.jpg`);
}

export { bannerImages };
