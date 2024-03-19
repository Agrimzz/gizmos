"use client"

import { ReactNode, createContext, useContext, useReducer } from "react"

type CartProviderProps = {
  children: ReactNode
}

type CartContext = {
  dispatch: any
  items: any
}

const CartContext = createContext({} as CartContext)

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
  function reducer(items: any, action: any) {
    switch (action.type) {
      case "add": {
        const existingItem = items.find(
          (item: any) => item.id === action.payload.id
        )
        if (existingItem) {
          return items
        } else {
          return [
            ...items,
            {
              id: action.payload.id,
              title: action.payload.name,
              price: action.payload.price,
              image: action.payload.image,
              brand: action.payload.brand,
              quantity: 1,
            },
          ]
        }
      }

      case "addQuantity": {
        // return items.map((item: any) => {
        //   item.id === action.payload.id
        //     ? { ...item, quantity: item.quantity + 1 }
        //     : item
        // })

        const existingItem = items.find(
          (item: any) => item.id === action.payload.id
        )
        if (existingItem) {
          return items.map((item: any) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        } else {
          return items
        }
      }

      case "subQuantity": {
        const existingItem = items.find(
          (item: any) => item.id === action.payload.id
        )
        if (existingItem) {
          if (existingItem.quantity < 2) {
            return items.filter((item: any) => item.id !== action.payload.id)
          } else {
            return items.map((item: any) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          }
        }
      }

      case "delete": {
        return items.filter((item: any) => item.id !== action.payload.id)
      }

      default:
        return items
    }
  }

  const [items, dispatch] = useReducer(reducer, [] as any)
  return (
    <CartContext.Provider value={{ items, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
