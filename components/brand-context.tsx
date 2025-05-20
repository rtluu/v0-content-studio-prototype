"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode } from "react"
import { Newspaper, Radio, Tv, Globe } from "lucide-react"

// Define brand type
export type Brand = {
  id: string
  name: string
  icon: React.ElementType
}

// Sample brands for partner view
export const partnerBrands: Brand[] = [
  {
    id: "news-daily",
    name: "News Daily",
    icon: Newspaper,
  },
  {
    id: "metro-radio",
    name: "Metro Radio",
    icon: Radio,
  },
  {
    id: "city-tv",
    name: "City TV",
    icon: Tv,
  },
  {
    id: "global-media",
    name: "Global Media",
    icon: Globe,
  },
]

type BrandContextType = {
  selectedBrand: Brand
  setSelectedBrand: (brand: Brand) => void
}

const BrandContext = createContext<BrandContextType | undefined>(undefined)

export function BrandProvider({ children }: { children: ReactNode }) {
  const [selectedBrand, setSelectedBrand] = useState<Brand>(partnerBrands[0])

  return <BrandContext.Provider value={{ selectedBrand, setSelectedBrand }}>{children}</BrandContext.Provider>
}

export function useBrand() {
  const context = useContext(BrandContext)
  if (context === undefined) {
    throw new Error("useBrand must be used within a BrandProvider")
  }
  return context
}
