"use client"
import { Group, Image, Text } from "@mantine/core"
import React, { useState } from "react"
import {
  List,
  MagnifyingGlass,
  ShoppingCart,
  User,
} from "@phosphor-icons/react"
import { useDisclosure } from "@mantine/hooks"
import Navigation from "./Navigation"
import Cart from "./Cart"
import { useRouter } from "next/navigation"
export default function Navbar() {
  const [opened, { open, close }] = useDisclosure(false)
  const [cart, setCart] = useState(false)
  const toggleCart = () => {
    setCart(!cart)
  }

  const router = useRouter()
  return (
    <>
      <Group
        justify="space-between"
        px="xl"
        align="center"
        style={{
          boxShadow: " 0px 5px 15px 2px rgba(1,186,254,0.5)",
          position: "fixed",
          zIndex: 10,
          top: 0,
        }}
        bg="#fff"
        w="100%"
      >
        <Image
          src="https://media.discordapp.net/attachments/971693348110872628/1214216106181664858/gizmos.png?ex=6601885e&is=65ef135e&hm=418a82536a4d572b8adbe004b18a22a879552c7c6ce132ec59c031a95e304071&=&format=webp&quality=lossless&width=1419&height=671"
          alt="logo"
          w={150}
          onClick={() => {
            router.push("/")
          }}
          visibleFrom="sm"
        />
        <Image
          src="https://media.discordapp.net/attachments/971693348110872628/1214216430971785216/gizmos_logo.png?ex=660ac32c&is=65f84e2c&hm=f7b81c634b40eef1f8030ca55a10753b5ed60fe6f679a07b0a13c3f2129235c4&=&format=webp&quality=lossless&width=1419&height=671"
          alt="logo"
          w={150}
          onClick={() => {
            router.push("/")
          }}
          hiddenFrom="sm"
        />

        <Group align="center" gap={35} visibleFrom="sm">
          <Text size="sm">Login / Register</Text>
          <ShoppingCart
            color="var(--mantine-color-brand-text)"
            size={30}
            onClick={toggleCart}
          />
          <MagnifyingGlass color="var(--mantine-color-brand-text)" size={30} />
          <List
            color="var(--mantine-color-brand-text)"
            size={30}
            onClick={open}
          />
        </Group>
        <Group align="center" gap={35} hiddenFrom="sm">
          <User color="var(--mantine-color-brand-text)" size={30} />
          <List
            color="var(--mantine-color-brand-text)"
            size={30}
            onClick={open}
          />
        </Group>
      </Group>
      <Navigation opened={opened} close={close} />
      <Cart opened={cart} close={toggleCart} />
    </>
  )
}
