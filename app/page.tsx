import BannerCarousel from "@/components/BannerCarousel"
import NewArrivals from "@/components/NewArrivals"
import ProductCard from "@/components/ProductCard"
import Products from "@/components/Products"
import { Button, SimpleGrid, Text } from "@mantine/core"

export default function Home() {
  return (
    <>
      <BannerCarousel />
      <Products />
      <NewArrivals />
    </>
  )
}
