"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import { CheckCircle, Mail, MapPin, LinkIcon, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

interface ProfilePreviewProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProfilePreview({ open, onOpenChange }: ProfilePreviewProps) {
  const router = useRouter()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Profile Preview</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center text-center p-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Jane Doe" />
            <AvatarFallback className="text-lg">JD</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold mt-4">Jane Doe</h3>
          <p className="text-sm text-muted-foreground mt-1">Content Creator & Digital Marketer</p>
          <div className="flex items-center mt-2">
            <Badge variant="outline" className="text-xs">
              <CheckCircle className="mr-1 h-3 w-3 text-green-500" /> Verified Creator
            </Badge>
          </div>

          <div className="w-full mt-6 space-y-3">
            <div className="flex items-center">
              <Mail className="h-4 w-4 text-muted-foreground mr-2" />
              <span className="text-sm">jane@example.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
              <span className="text-sm">San Francisco, CA</span>
            </div>
            <div className="flex items-center">
              <LinkIcon className="h-4 w-4 text-muted-foreground mr-2" />
              <span className="text-sm">janedoe.com</span>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="w-full grid grid-cols-2 gap-2 text-center">
            <div>
              <p className="text-2xl font-bold">42</p>
              <p className="text-xs text-muted-foreground">Content Items</p>
            </div>
            <div>
              <p className="text-2xl font-bold">12.4K</p>
              <p className="text-xs text-muted-foreground">Followers</p>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="flex justify-center space-x-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter className="h-4 w-4 text-[#1DA1F2]" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Instagram className="h-4 w-4 text-[#E4405F]" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Youtube className="h-4 w-4 text-[#FF0000]" />
              <span className="sr-only">YouTube</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-4 w-4 text-[#0A66C2]" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>

          <div className="flex gap-2 mt-6 w-full">
            <Button
              className="flex-1 bg-red-600 hover:bg-red-700 text-white"
              onClick={() => {
                onOpenChange(false)
                router.push("/profile")
              }}
            >
              View Full Profile
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                onOpenChange(false)
                router.push("/profile")
              }}
            >
              Edit Profile
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
