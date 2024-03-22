import { Container } from "@mantine/core"
import React from "react"

export default function ProductPage({ params }: any) {
  return (
    <Container mt={104} size={1500}>
      {params.name}
    </Container>
  )
}
