"use client"
import { Button, Image, Paper, Stack, Text } from "@mantine/core"
import React from "react"
import classes from "./productcard.module.css"
import { useHover } from "@mantine/hooks"
import { ShoppingCart } from "@phosphor-icons/react"
import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"

interface Product {
  id: any
  brand: string
  image: string
  name: string
  price: string
}

interface ProductCardProps {
  data: Product
}

export default function ProductCard({ data }: ProductCardProps) {
  const { hovered, ref } = useHover()
  const router = useRouter()
  const truncatedName =
    data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name

  const { items, dispatch } = useCart()
  return (
    <Paper
      className={classes.outBox}
      bg="brand"
      ref={ref}
      // style={{ maxWidth: "350px" }}
      onClick={() =>
        router.push(`/${data.brand.toLowerCase()}/${data.name.toLowerCase()}`)
      }
    >
      <Paper className={classes.inBox} bg="white" p="xl">
        <Stack align="center" gap={30}>
          <Text fz="md" fw={600}>
            {data.brand.toUpperCase()}
          </Text>
          <Image src={data.image} alt="img1" w={250} />
          <Stack w="100%" gap={20}>
            <Text c="dimmed">{truncatedName}</Text>
            <Text fz="lg" fw={700} ta="left">
              Rs.{data.price}
            </Text>
          </Stack>
        </Stack>
      </Paper>
      {hovered && (
        <Button
          className={classes.add}
          leftSection={<ShoppingCart size={20} />}
          onClick={(e) => {
            e.preventDefault()
            dispatch({
              type: "add",
              payload: {
                id: data.id,
                name: data.name,
                price: data.price,
                image: data.image,
                brand: data.brand,
              },
            })
          }}
        >
          ADD TO CART
        </Button>
      )}
    </Paper>
  )
}
