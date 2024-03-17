import { links } from "@/constants/constants"
import { Anchor, Divider, Drawer, Stack, Text } from "@mantine/core"
import React from "react"

interface NavigationProps {
  opened: boolean
  close: () => any
}

export default function Navigation({ opened, close }: NavigationProps) {
  const navlinks = links.map((item) => (
    <Anchor<"a"> href={item.link} key={item.label} fz="xl">
      {item.label}
    </Anchor>
  ))
  return (
    <Drawer
      opened={opened}
      onClose={close}
      size="100%"
      position="right"
      c="black"
    >
      <Stack align="center" gap={100} justify="center">
        {navlinks}
        <Divider my="md" color="red" />
      </Stack>
    </Drawer>
  )
}
