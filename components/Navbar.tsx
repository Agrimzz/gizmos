"use client"
import { Group, Image, Text } from "@mantine/core"
import React from "react"
import { List, MagnifyingGlass, ShoppingCart } from "@phosphor-icons/react"
import { useDisclosure } from "@mantine/hooks"
import Navigation from "./Navigation"
export default function Navbar() {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <>
      <Group
        justify="space-between"
        px="xl"
        align="center"
        style={{
          boxShadow: " 0px 5px 15px 2px rgba(1,186,254,0.5)",
          // position: "fixed",
          // zIndex: 10,
        }}
        bg="#fff"
        w="100%"
      >
        <Image
          src="https://media.discordapp.net/attachments/971693348110872628/1214216106181664858/gizmos.png?ex=6601885e&is=65ef135e&hm=418a82536a4d572b8adbe004b18a22a879552c7c6ce132ec59c031a95e304071&=&format=webp&quality=lossless&width=1419&height=671"
          alt="logo"
          w={150}
        />

        <Group align="center" gap={35}>
          <Text size="sm">Login / Register</Text>
          <ShoppingCart color="var(--mantine-color-brand-text)" size={30} />
          <MagnifyingGlass color="var(--mantine-color-brand-text)" size={30} />
          <List
            color="var(--mantine-color-brand-text)"
            size={30}
            onClick={open}
          />
        </Group>
      </Group>
      <Navigation opened={opened} close={close} />
    </>
  )
}
