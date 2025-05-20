"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  MapPin,
  LinkIcon,
  Calendar,
  Edit,
  Camera,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Save,
} from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container mx-auto py-6 px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Brand Profile</h2>
            <p className="text-gray-500">Manage your public profile and brand information</p>
          </div>
          <Button
            variant={isEditing ? "outline" : "default"}
            onClick={() => (isEditing ? setIsEditing(false) : setIsEditing(true))}
            className={isEditing ? "border-gray-200" : "bg-purple-600 hover:bg-purple-700 text-white"}
          >
            {isEditing ? (
              <>Cancel Editing</>
            ) : (
              <>
                <Edit className="mr-2 h-4 w-4" /> Edit Profile
              </>
            )}
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-7">
          {/* Profile Sidebar */}
          <Card className="md:col-span-2 border-gray-200">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Jane Doe" />
                    <AvatarFallback className="text-lg">JD</AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute bottom-0 right-0 h-8 w-8 rounded-full border-gray-200 bg-white"
                    >
                      <Camera className="h-4 w-4" />
                      <span className="sr-only">Change avatar</span>
                    </Button>
                  )}
                </div>
                <h3 className="text-xl font-bold">Jane Doe</h3>
                <p className="text-sm text-gray-500 mt-1">Content Creator & Digital Marketer</p>
                <div className="flex items-center mt-2">
                  <Badge variant="outline" className="text-xs border-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1 h-3 w-3 text-green-500"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Verified Creator
                  </Badge>
                </div>
                <div className="w-full mt-6 space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">jane@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center">
                    <LinkIcon className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">janedoe.com</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-sm">Joined April 2022</span>
                  </div>
                </div>

                <div className="w-full border-t border-gray-200 my-6 pt-6">
                  <h4 className="font-medium text-sm mb-4">Social Profiles</h4>
                  <div className="flex justify-center space-x-2">
                    <Button variant="outline" size="icon" className="rounded-full border-gray-200">
                      <Twitter className="h-4 w-4 text-[#1DA1F2]" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-gray-200">
                      <Instagram className="h-4 w-4 text-[#E4405F]" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-gray-200">
                      <Youtube className="h-4 w-4 text-[#FF0000]" />
                      <span className="sr-only">YouTube</span>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-gray-200">
                      <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Content */}
          <div className="md:col-span-5 space-y-6">
            {/* Personal Information */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" defaultValue="Jane" disabled={!isEditing} className="border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" defaultValue="Doe" disabled={!isEditing} className="border-gray-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="jane@example.com"
                    disabled={!isEditing}
                    className="border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    defaultValue="Content creator specializing in digital marketing, social media strategy, and brand development. Passionate about helping businesses grow their online presence."
                    disabled={!isEditing}
                    className="min-h-[100px] border-gray-200"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      defaultValue="San Francisco, CA"
                      disabled={!isEditing}
                      className="border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      defaultValue="https://janedoe.com"
                      disabled={!isEditing}
                      className="border-gray-200"
                    />
                  </div>
                </div>
              </CardContent>
              {isEditing && (
                <CardFooter>
                  <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {isSaving ? (
                      <>
                        <span className="animate-spin mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </svg>
                        </span>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </CardFooter>
              )}
            </Card>

            {/* Social Profiles */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Social Profiles</CardTitle>
                <CardDescription>Connect your social media accounts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="twitter" className="flex items-center gap-2">
                      <Twitter className="h-4 w-4 text-[#1DA1F2]" /> Twitter
                    </Label>
                    <Input id="twitter" defaultValue="@janedoe" disabled={!isEditing} className="border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instagram" className="flex items-center gap-2">
                      <Instagram className="h-4 w-4 text-[#E4405F]" /> Instagram
                    </Label>
                    <Input id="instagram" defaultValue="@janedoe" disabled={!isEditing} className="border-gray-200" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="youtube" className="flex items-center gap-2">
                      <Youtube className="h-4 w-4 text-[#FF0000]" /> YouTube
                    </Label>
                    <Input
                      id="youtube"
                      defaultValue="@janedoecreates"
                      disabled={!isEditing}
                      className="border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin" className="flex items-center gap-2">
                      <Linkedin className="h-4 w-4 text-[#0A66C2]" /> LinkedIn
                    </Label>
                    <Input id="linkedin" defaultValue="jane-doe" disabled={!isEditing} className="border-gray-200" />
                  </div>
                </div>
              </CardContent>
              {isEditing && (
                <CardFooter>
                  <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                </CardFooter>
              )}
            </Card>

            {/* Brand Information */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Brand Information</CardTitle>
                <CardDescription>Customize your brand appearance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="brand-name">Brand Name</Label>
                  <Input
                    id="brand-name"
                    defaultValue="Jane Doe Creative"
                    disabled={!isEditing}
                    className="border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tagline">Tagline</Label>
                  <Input
                    id="tagline"
                    defaultValue="Creating digital experiences that inspire"
                    disabled={!isEditing}
                    className="border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="brand-description">Brand Description</Label>
                  <Textarea
                    id="brand-description"
                    defaultValue="Jane Doe Creative is a digital content studio specializing in creating engaging content for brands looking to establish a strong online presence. We focus on authentic storytelling and data-driven strategies to help businesses connect with their audience."
                    disabled={!isEditing}
                    className="min-h-[100px] border-gray-200"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input
                      id="industry"
                      defaultValue="Digital Marketing"
                      disabled={!isEditing}
                      className="border-gray-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="founded">Founded</Label>
                    <Input id="founded" defaultValue="2020" disabled={!isEditing} className="border-gray-200" />
                  </div>
                </div>
              </CardContent>
              {isEditing && (
                <CardFooter>
                  <Button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    {isSaving ? "Saving..." : "Save Changes"}
                  </Button>
                </CardFooter>
              )}
            </Card>

            {/* Account Stats */}
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Account Stats</CardTitle>
                <CardDescription>Overview of your account performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Total Content</p>
                    <p className="text-2xl font-bold">42</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Total Views</p>
                    <p className="text-2xl font-bold">245.8K</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Followers</p>
                    <p className="text-2xl font-bold">12.4K</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Avg. Engagement</p>
                    <p className="text-2xl font-bold">8.2%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
