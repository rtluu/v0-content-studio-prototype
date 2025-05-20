import type React from "react"
import { BrandProvider } from "@/components/brand-context"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <BrandProvider>
      <div className="flex min-h-screen">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </BrandProvider>
  )
}
