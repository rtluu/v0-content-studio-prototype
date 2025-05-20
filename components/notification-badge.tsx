"use client"

import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function NotificationBadge() {
  return (
    <Button variant="ghost" size="icon" className="relative" asChild>
      <Link href="/notifications">
        <Bell className="h-5 w-5" />
        <span className="absolute top-1 right-1 flex h-2 w-2 rounded-full bg-primary"></span>
        <span className="sr-only">Notifications</span>
      </Link>
    </Button>
  )
}
