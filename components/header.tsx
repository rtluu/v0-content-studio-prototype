"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { NotificationBadge } from "@/components/notification-badge"
import { useTheme } from "next-themes"

export function Header() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-white px-4 lg:px-6 dark:bg-gray-950 dark:border-gray-800">
      <div className="flex items-center gap-4 lg:gap-6">{/* Search input removed as requested */}</div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <NotificationBadge />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none dark:text-white">Jane Doe</p>
                <p className="text-xs leading-none text-gray-500 dark:text-gray-400">jane@example.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Help & Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
