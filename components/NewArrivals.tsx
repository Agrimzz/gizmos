import { newArrivals } from "@/constants/constants"
import { Center, Container, Image, SimpleGrid, Text } from "@mantine/core"
import React from "react"

export default function NewArrivals() {
  return (
    <Container size={1500}>
      <Center>
        <Text fz={30} fw={600} mt={50}>
          New Arrivals
        </Text>
      </Center>
      <SimpleGrid cols={{ base: 1, lg: 2 }} mt={30}>
        {newArrivals.map((item) => (
          <Image src={item.image} alt={item.alt} key={item.image} h={400} />
        ))}
      </SimpleGrid>
    </Container>
  )
}
