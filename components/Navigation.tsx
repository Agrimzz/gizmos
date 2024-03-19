import { links } from "@/constants/constants"
import { Anchor, Divider, Drawer, Overlay, Stack, Text } from "@mantine/core"
import React from "react"
import classes from "./navigation.module.css"

interface NavigationProps {
  opened: boolean
  close: () => any
}

export default function Navigation({ opened, close }: NavigationProps) {
  const navlinks = links.map((item) => (
    <>
      <Anchor<"a">
        href={item.link}
        key={item.label}
        fz="xl"
        style={{ borderBottom: "2px solid black" }}
        w="100%"
        ta="center"
        pb="30"
      >
        {item.label}
      </Anchor>
    </>
  ))
  return (
    <Drawer
      opened={opened}
      onClose={close}
      size="100%"
      position="top"
      className={classes.bg}
    >
      <Stack align="center" gap={100} justify="center">
        {navlinks}
      </Stack>
    </Drawer>
  )
}
