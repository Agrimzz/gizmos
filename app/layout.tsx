import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import "./globals.css"
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  MantineColorsTuple,
  rem,
} from "@mantine/core"
import Navbar from "@/components/Navbar"
import { CartProvider } from "@/context/CartContext"

export const metadata = {
  title: "Gizmos",
  description: "Headpones ecommerce",
}

const brand: MantineColorsTuple = [
  "#e0fbff",
  "#cbf3ff",
  "#9ae4ff",
  "#65d5fe",
  "#3cc8fd",
  "#24c0fd",
  "#0abcfe",
  "#00a6e3",
  "#0094cd",
  "#007fb5",
]

const theme = createTheme({
  primaryColor: "brand",
  colors: { brand },

  fontFamily: "'Poppins', sans-serif",
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(18),
    lg: rem(24),
    xl: rem(32),
  },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        <MantineProvider theme={theme}>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
