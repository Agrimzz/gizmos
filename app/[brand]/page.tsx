import ProductCard from "@/components/ProductCard"
import { products } from "@/constants/constants"
import { Container, Mark, SimpleGrid, Text, Title } from "@mantine/core"
import React from "react"

export default function page({ params }: any) {
  const product = products.filter((item: any) => {
    return item.brand.toLowerCase() === params.brand
  })

  const productData = product.map((item: any) => (
    <ProductCard data={item} key={item.name} />
  ))
  console.log(product)
  return (
    <Container size={1500} mt={104}>
      <Title order={3}>
        Browse products from{" "}
        <Mark color="brand">{params.brand.toUpperCase()} </Mark>
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} mt={32}>
        {productData}
      </SimpleGrid>
    </Container>
  )
}
