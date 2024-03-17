import { products } from "@/constants/constants"
import React from "react"
import ProductCard from "./ProductCard"
import { Button, Container, Group, SimpleGrid, Text } from "@mantine/core"

export default function Products() {
  const productData = products.map((item) => (
    <ProductCard data={item} key={item.name} />
  ))
  return (
    <Container size="100%" bg="#eee" mt={{ base: 70, lg: 0 }}>
      <Container size="1500" py={70}>
        <Group justify="space-between" align="center">
          <Text fz={30} fw={600}>
            Top Sellers
          </Text>
          <Button size="md">See More</Button>
        </Group>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} mt={50}>
          {productData}
        </SimpleGrid>
      </Container>
    </Container>
  )
}
