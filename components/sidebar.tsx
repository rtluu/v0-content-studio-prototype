"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Library,
  BarChart2,
  Upload,
  Settings,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Users,
  HelpCircle,
  Calendar,
  ChevronDown,
  Briefcase,
  Pencil,
  User,
  Rss,
  Shield,
  Share2,
  Newspaper,
  Radio,
  Tv,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Define user types
type UserType = "editor" | "partner" | "creator"

// Define brand type
type Brand = {
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

// Define navigation items for each user type
const editorNavItems = [
  {
    name: "Content",
    href: "/content",
    icon: Library,
  },
  {
    name: "Create",
    href: "/create",
    icon: Upload,
  },
  {
    name: "Programming",
    href: "/programming",
    icon: Calendar,
  },
  {
    name: "Syndication",
    href: "/syndication",
    icon: Share2,
  },
  {
    name: "Admin",
    href: "/admin",
    icon: Shield,
  },
]

// Partner role navigation items:
const partnerNavItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Content",
    href: "/content",
    icon: Library,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart2,
  },
  {
    name: "Feeds",
    href: "/feeds",
    icon: Rss,
  },
  {
    name: "Monetization",
    href: "/monetization",
    icon: Briefcase,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
]

// Creator role navigation items:
const creatorNavItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Create",
    href: "/create",
    icon: Upload,
  },
  {
    name: "Content",
    href: "/content",
    icon: Library,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart2,
  },
  {
    name: "Comments",
    href: "/comments",
    icon: Users,
  },
  {
    name: "AI Tools",
    href: "/ai-tools",
    icon: Sparkles,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: User,
  },
]

const bottomNavItems = [
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    name: "Help",
    href: "/help",
    icon: HelpCircle,
  },
]

// Create a context to share brand data across components
import { createContext, useContext } from "react"

type BrandContextType = {
  selectedBrand: Brand
  setSelectedBrand: (brand: Brand) => void
}

const BrandContext = createContext<BrandContextType | undefined>(undefined)

export function BrandProvider({ children }: { children: React.ReactNode }) {
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

export function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [userType, setUserType] = useState<UserType>("creator")
  const [selectedBrand, setSelectedBrand] = useState<Brand>(partnerBrands[0])

  // Get the appropriate nav items based on user type
  const getNavItems = () => {
    switch (userType) {
      case "editor":
        return editorNavItems
      case "partner":
        return partnerNavItems
      case "creator":
        return creatorNavItems
      default:
        return creatorNavItems
    }
  }

  const navItems = getNavItems()

  // Get the icon for the current user type
  const getUserTypeIcon = () => {
    switch (userType) {
      case "editor":
        return <Pencil className="h-4 w-4 mr-2" />
      case "partner":
        return <Briefcase className="h-4 w-4 mr-2" />
      case "creator":
        return <User className="h-4 w-4 mr-2" />
      default:
        return <User className="h-4 w-4 mr-2" />
    }
  }

  // Get the display name for the current user type (capitalized)
  const getUserTypeDisplayName = () => {
    return userType.charAt(0).toUpperCase() + userType.slice(1)
  }

  return (
    <BrandContext.Provider value={{ selectedBrand, setSelectedBrand }}>
      <TooltipProvider delayDuration={0}>
        <div
          className={cn(
            "flex flex-col border-r transition-all duration-300 dark:border-gray-800",
            collapsed ? "w-[72px]" : "w-[240px]",
            isDark ? "bg-gray-950" : "bg-white",
          )}
        >
          <div className="flex h-14 items-center border-b px-3 py-2 dark:border-gray-800">
            {!collapsed && (
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8">
                  <div className="absolute inset-0 bg-primary rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">CS</div>
                </div>
                <span className="font-semibold text-lg dark:text-white">Content Studio</span>
              </div>
            )}
            {collapsed && (
              <div className="flex w-full justify-center">
                <div className="relative h-8 w-8">
                  <div className="absolute inset-0 bg-primary rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">CS</div>
                </div>
              </div>
            )}
          </div>

          {/* User Type Switcher */}
          <div className="px-3 py-3 border-b dark:border-gray-800">
            {!collapsed ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between border-dashed">
                    <div className="flex items-center">
                      {getUserTypeIcon()}
                      <span>{getUserTypeDisplayName()}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[200px]">
                  <DropdownMenuItem onClick={() => setUserType("editor")} className="cursor-pointer">
                    <Pencil className="h-4 w-4 mr-2" />
                    <span>Editor</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setUserType("partner")} className="cursor-pointer">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>Partner</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setUserType("creator")} className="cursor-pointer">
                    <User className="h-4 w-4 mr-2" />
                    <span>Creator</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-full h-10 border-dashed"
                    onClick={() => setCollapsed(false)}
                  >
                    {getUserTypeIcon()}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>Switch user type (currently {getUserTypeDisplayName()})</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>

          {/* Brand Switcher - Only visible for Partner view */}
          {userType === "partner" && (
            <div className="px-3 py-3">
              {!collapsed ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between border-dashed">
                      <div className="flex items-center">
                        <selectedBrand.icon className="h-4 w-4 mr-2" />
                        <span>{selectedBrand.name}</span>
                      </div>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[200px]">
                    {partnerBrands.map((brand) => (
                      <DropdownMenuItem
                        key={brand.id}
                        onClick={() => setSelectedBrand(brand)}
                        className="cursor-pointer"
                      >
                        <brand.icon className="h-4 w-4 mr-2" />
                        <span>{brand.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-full h-10 border-dashed"
                      onClick={() => setCollapsed(false)}
                    >
                      <selectedBrand.icon className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>Switch brand (currently {selectedBrand.name})</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          )}

          <div className="flex-1 overflow-auto py-2">
            <nav className="flex flex-col gap-0.5 px-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Tooltip key={item.href} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex h-10 items-center rounded-lg px-3 gap-3 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground"
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100",
                        )}
                      >
                        <item.icon
                          className={cn(
                            "h-5 w-5",
                            isActive ? "text-primary dark:text-primary-foreground" : "text-gray-500 dark:text-gray-400",
                          )}
                        />
                        {!collapsed && <span>{item.name}</span>}
                      </Link>
                    </TooltipTrigger>
                    {collapsed && <TooltipContent side="right">{item.name}</TooltipContent>}
                  </Tooltip>
                )
              })}
            </nav>
          </div>

          <div className="mt-auto border-t py-2 dark:border-gray-800">
            <nav className="flex flex-col gap-0.5 px-2">
              {bottomNavItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Tooltip key={item.href} delayDuration={0}>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex h-10 items-center rounded-lg px-3 gap-3 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground"
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100",
                        )}
                      >
                        <item.icon
                          className={cn(
                            "h-5 w-5",
                            isActive ? "text-primary dark:text-primary-foreground" : "text-gray-500 dark:text-gray-400",
                          )}
                        />
                        {!collapsed && <span>{item.name}</span>}
                      </Link>
                    </TooltipTrigger>
                    {collapsed && <TooltipContent side="right">{item.name}</TooltipContent>}
                  </Tooltip>
                )
              })}

              <div className="my-1 px-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                  onClick={() => setCollapsed(!collapsed)}
                >
                  {collapsed ? (
                    <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  )}
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </TooltipProvider>
    </BrandContext.Provider>
  )
}
