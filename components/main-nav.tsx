"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Library, BarChart3, Upload, Settings, Sparkles, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Content Library",
    href: "/content",
    icon: Library,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Create Content",
    href: "/create",
    icon: Upload,
  },
  {
    name: "AI Tools",
    href: "/ai-tools",
    icon: Sparkles,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function MainNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile Navigation */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <div className="flex items-center mb-6">
            <div className="relative w-8 h-8 mr-2">
              <div className="absolute inset-0 bg-primary rounded-md rotate-6"></div>
              <div className="absolute inset-0 bg-background rounded-md flex items-center justify-center border">
                <span className="text-sm font-bold text-primary">CS</span>
              </div>
            </div>
            <span className="font-bold text-lg">Content Studio</span>
          </div>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium",
                  pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              pathname === item.href ? "bg-primary text-primary-foreground" : "hover:bg-muted",
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  )
}
