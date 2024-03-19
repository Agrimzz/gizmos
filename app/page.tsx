import BannerCarousel from "@/components/BannerCarousel"
import NewArrivals from "@/components/NewArrivals"
import Partners from "@/components/Partners"
import ProductCard from "@/components/ProductCard"
import Products from "@/components/Products"
import { Button, SimpleGrid, Text } from "@mantine/core"

export default function Home() {
  return (
    <>
      <BannerCarousel />
      <Products />
      <NewArrivals />
      <Partners />
    </>
  )
}
