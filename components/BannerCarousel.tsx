"use client"
import React, { useRef } from "react"
import { Carousel } from "@mantine/carousel"
import { Image } from "@mantine/core"
import Autoplay from "embla-carousel-autoplay"

export default function BannerCarousel() {
  const autoplay = useRef(Autoplay({ delay: 10000 }))
  return (
    <Carousel
      withIndicators
      slideSize="100%"
      slideGap="0"
      loop
      withControls
      mt={70}
      visibleFrom="lg"
      plugins={[autoplay.current]}
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
