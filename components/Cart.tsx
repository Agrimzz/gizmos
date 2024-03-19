"use client"
import { useCart } from "@/context/CartContext"
import {
  Box,
  Button,
  Drawer,
  Flex,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core"
import { Minus, Plus } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

interface CartProps {
  opened: boolean
  close: () => any
}

export default function Cart({ opened, close }: CartProps) {
  const { items, dispatch } = useCart()
  const [total, setTotal] = useState<number>(0)
  const router = useRouter()

  useEffect(() => {
    let totalPrice = 0

    items.map((item: any) => {
      totalPrice += parseInt(item.price) * item.quantity
    })

    setTotal(totalPrice)
  }, [items])
  console.log(items)
  const cartItems = items.map((item: any) => (
    <Flex
      key={item.id}
      justify="space-between"
      align="center"
      direction={{ base: "column", lg: "row" }}
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        align="center"
      >
        <Image src={item.image} alt={item.title} w={{ base: 200, lg: 100 }} />
        <Stack gap={0} w={300}>
          <Text fw={600}>{item.title}</Text>
          <Text fz="sm" c="dimmed">
            Rs.{item.price}
          </Text>
        </Stack>
      </Flex>
      <Flex justify="space-between" align="center" gap={5}>
        <Minus
          onClick={() => {
            dispatch({
              type: "subQuantity",
              payload: { id: item.id },
            })
          }}
        />

        <Box
          style={{
            // border: "1px solid black",
            display: "flex",
            alignItems: "center",
          }}
          py="5"
          px={10}
          bg="brand"
          c="white"
        >
          <Text>{item.quantity}</Text>
        </Box>

        <Plus
          onClick={() => {
            dispatch({
              type: "addQuantity",
              payload: { id: item.id },
            })
          }}
        />
      </Flex>
    </Flex>
  ))

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        size="40%"
        position="right"
        title="Your Cart"
        visibleFrom="lg"
      >
        <Flex direction="column" gap={16}>
          {cartItems.length > 0 ? (
            <>
              {cartItems}
              <Group
                style={{ justifySelf: "flex-end" }}
                justify="space-between"
                bg="white"
              >
                <Group>
                  <Text fz="lg" fw={800}>
                    Total :
                  </Text>
                  <Text fz="lg" fw={800} c="brand">
                    Rs.{total}
                  </Text>
                </Group>
                <Button
                  onClick={() => {
                    router.push("/checkout")
                    close()
                  }}
                >
                  CheckOut
                </Button>
              </Group>
            </>
          ) : (
            <Text>
              Looks like your cart is empty! Add items to your Cart now.
            </Text>
          )}
        </Flex>
      </Drawer>
      <Drawer
        opened={opened}
        onClose={close}
        size="70%"
        position="right"
        title="Your Cart"
        hiddenFrom="lg"
      >
        <Flex direction="column" gap={16}>
          {cartItems.length > 0 ? (
            <>
              {cartItems}
              <Group
                style={{ justifySelf: "flex-end" }}
                justify="space-between"
                bg="white"
              >
                <Group>
                  <Text fz="lg" fw={800}>
                    Total :
                  </Text>
                  <Text fz="lg" fw={800} c="brand">
                    Rs.{total}
                  </Text>
                </Group>
                <Button
                  onClick={() => {
                    router.push("/checkout")
                    close()
                  }}
                >
                  CheckOut
                </Button>
              </Group>
            </>
          ) : (
            <Text>
              Looks like your cart is empty! Add items to your Cart now.
            </Text>
          )}
        </Flex>
      </Drawer>
    </>
  )
}
