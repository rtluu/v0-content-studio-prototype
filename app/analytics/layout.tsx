import type React from "react"
import { BrandProvider } from "@/components/brand-context"

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <BrandProvider>{children}</BrandProvider>
}
