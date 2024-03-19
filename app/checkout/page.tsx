"use client"
import { useCart } from "@/context/CartContext"
import {
  Anchor,
  Button,
  Center,
  Container,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core"
import React, { useEffect, useState } from "react"

export default function Checkout() {
  const { items } = useCart()
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    let price = 0

    items.map((item: any) => {
      price += parseInt(item.price) * item.quantity
    })
    setTotal(price)
  }, [items])
  return (
    <Container size="100%" bg="#eee">
      <Container size="lg" mt={70} py="md">
        {items.length > 0 ? (
          <>
            <Text fz="xl" fw={600}>
              CheckOut:
            </Text>
            <Stack mt={24}>
              {items.map((item: any) => (
                <Group key={item.id} justify="space-between" bg="#fff" p="lg">
                  <Group>
                    <Image src={item.image} alt={item.name} w={300} />
                    <Stack gap={0} w={300}>
                      <Text fz="sm" c="brand" fw={800}>
                        {item.brand}
                      </Text>
                      <Text fw={600}>{item.title}</Text>
                    </Stack>
                  </Group>
                  <Stack align="center" gap={0}>
                    <Text size="sm" c="brand">
                      Quantity : {item.quantity}
                    </Text>
                    <Text fw={800} fz="lg">
                      Rs.{parseInt(item.price)}
                    </Text>
                  </Stack>
                </Group>
              ))}
            </Stack>
            <Group justify="flex-end" mt={32}>
              <Stack align="flex-end" gap={0}>
                <Text fw={600} lh={0}>
                  Total : Rs.{total}
                </Text>
                <Button mt={24}>Check Out</Button>
              </Stack>
            </Group>
          </>
        ) : (
          <Center mt={32}>
            <Text>Add Items to cart to checkout. </Text>
            <Anchor href="/">Go to Home</Anchor>
          </Center>
        )}
      </Container>
    </Container>
  )
}
