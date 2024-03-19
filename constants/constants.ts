export const links = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/" },
  { label: "Brands", link: "/" },
  { label: "Contact", link: "/" },
]

export const products = [
  {
    id: 1,
    brand: "Logitech",
    name: "Logitech G Pro X Gaming Headset",
    image: "https://elitehubs.com/cdn/shop/products/R-4_1920x.jpg?v=1683974204",
    price: "12500",
  },
  {
    id: 2,
    brand: "Razer",
    name: "Razer Kraken V3 Gaming Headset ",
    image:
      "https://elitehubs.com/cdn/shop/products/razer-kraken-v3-over-ear-gaming-headset-black-image-main-600x600-1_1920x.webp?v=1683973860",
    price: "8439",
  },
  {
    id: 3,
    brand: "CORSAIR",
    name: "CORSAIR HS35 Stereo Gaming Headphone ",
    image:
      "https://elitehubs.com/cdn/shop/files/ca-9011198-ap-red-image-main-600x600_1920x.webp?v=1695323958",
    price: "2998",
  },
  {
    id: 4,
    brand: "HyperX",
    name: "HyperX Cloud III Gaming Headset ",
    image:
      "https://elitehubs.com/cdn/shop/files/hyperx_cloud_iii_red_66x0049_main_1_720x_60d6461c-cb4e-4f16-9da8-be902ef65b21_1920x.webp?v=1686910205",
    price: "7497",
  },
]

export const newArrivals = [
  {
    alt: "hyperx",
    image: "https://i.ytimg.com/vi/4lro2eeHwRk/maxresdefault.jpg",
    link: "",
  },
  {
    alt: "razer",
    image:
      "https://assets2.razerzone.com/images/pnx.assets/97d7a2cee1256dbe017e3d2a27619114/razer-kraken-v3-pro-og-image.jpg",
    link: "",
  },
  {
    alt: "logitech",
    image:
      "https://s24.q4cdn.com/131595232/files/doc_multimedia/Low_Resolution_JPG-G435_MC_Key_Visual_03_16x9_Poster.jpg",
    link: "",
  },
  {
    alt: "hyperx",
    image:
      "https://www.vortez.net/contentteller.php?ct=news&action=file&id=8048",
    link: "",
  },
]

import razer from "@/public/razer-1.svg"
import corsair from "@/public/corsair-2.svg"
import logitech from "@/public/logitech-gaming-3.svg"
import hyperx from "@/public/hyperx-logo-lg.svg"

export const brands = [
  { name: "razer", image: razer.src, link: "" },
  { name: "corsair", image: corsair.src, link: "" },
  { name: "logitech", image: logitech.src, link: "" },
  { name: "hyperx", image: hyperx.src, link: "" },
]
