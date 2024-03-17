"use client"
import React from "react"
import { Carousel } from "@mantine/carousel"
import { Image } from "@mantine/core"

export default function BannerCarousel() {
  return (
    <Carousel
      slideSize="100%"
      slideGap="0"
      loop
      withControls={true}
      withIndicators={true}
      //   mt={70}
    >
      <Carousel.Slide>
        <Image
          src="https://www.evetech.co.za/repository/webp/razer-store-main-banner-2560px-v1.webp"
          alt="carousel"
          w="100%"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="https://www.evetech.co.za/repository/webp/logitech-gaming-headsets-banner-2560px-v11.webp"
          alt="carousel"
          w="100%"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="https://www.evetech.co.za/repository/webp/hyperx-gaming-headsets-banner-2560px-v1.webp"
          alt="carousel"
          w="100%"
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="https://www.evetech.co.za/repository/webp/corsair-gaming-headsets-banner-2560px-v1.webp"
          alt="carousel"
          w="100%"
        />
      </Carousel.Slide>
    </Carousel>
  )
}
