"use client"

import { brands } from "@/constants/constants"
import { Center, Container, Image, SimpleGrid, Text } from "@mantine/core"
import { useRouter } from "next/navigation"
import React from "react"

export default function Partners() {
  const router = useRouter()
  return (
    <Container size={1500}>
      <Center>
        <Text fz={30} fw={600} mt={50}>
          Our Parnters
        </Text>
      </Center>
      <SimpleGrid cols={{ base: 2, lg: 4 }} mt={30}>
        {brands.map((item) => (
          <Image
            src={item.image}
            alt={item.name}
            key={item.name}
            w={200}
            onClick={() => router.push(`/${item.name.toLowerCase()}`)}
          />
        ))}
      </SimpleGrid>
    </Container>
  )
}
