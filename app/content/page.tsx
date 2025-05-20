"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import { Filter, Grid3X3, List, MoreHorizontal, Plus, Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"

// Mock data for content items
const contentItems = [
  {
    id: "1",
    title: "10 Tips for Better Content Creation",
    type: "Article",
    status: "Published",
    date: "2023-05-15",
    views: 12500,
    engagement: "High",
    thumbnail: "/images/content-writing.png",
  },
  {
    id: "2",
    title: "Content Creation Masterclass",
    type: "Video",
    status: "Published",
    date: "2023-06-02",
    views: 8200,
    engagement: "Medium",
    thumbnail: "/images/video-production.png",
  },
  {
    id: "3",
    title: "The Future of Digital Media",
    type: "Article",
    status: "Draft",
    date: "2023-06-10",
    views: 0,
    engagement: "None",
    thumbnail: "/images/digital-media.png",
  },
  {
    id: "4",
    title: "Social Media Strategy Guide",
    type: "PDF",
    status: "Published",
    date: "2023-05-20",
    views: 6700,
    engagement: "Medium",
    thumbnail: "/images/social-media-strategy.png",
  },
  {
    id: "5",
    title: "Content Studio Tutorial",
    type: "Video",
    status: "Published",
    date: "2023-05-28",
    views: 4500,
    engagement: "High",
    thumbnail: "/images/tutorial-screencast.png",
  },
  {
    id: "6",
    title: "Audience Growth Strategies",
    type: "Article",
    status: "Scheduled",
    date: "2023-06-15",
    views: 0,
    engagement: "None",
    thumbnail: "/images/audience-growth.png",
  },
]

export default function ContentLibraryPage() {
  const router = useRouter()
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredContent = contentItems.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))

  // Render content grid
  const renderGridContent = (items) => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden border-gray-200 dark:border-gray-700">
          <div
            className="aspect-video bg-gray-100 dark:bg-gray-800 relative cursor-pointer"
            onClick={() => router.push(`/content/${item.id}`)}
          >
            <img src={item.thumbnail || "/placeholder.svg"} alt={item.title} className="object-cover w-full h-full" />
            <div className="absolute top-2 right-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => router.push(`/content/${item.id}`)}>View</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push(`/content/${item.id}/edit`)}>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {item.status !== "Published" && (
              <div className="absolute top-2 left-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded">
                {item.status}
              </div>
            )}
            <div className="absolute bottom-2 right-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded">
              {item.type}
            </div>
          </div>
          <CardContent className="p-4">
            <div className="space-y-2">
              <h3
                className="font-medium line-clamp-1 cursor-pointer hover:underline"
                onClick={() => router.push(`/content/${item.id}`)}
              >
                {item.title}
              </h3>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{new Date(item.date).toLocaleDateString()}</span>
                <span>{item.views.toLocaleString()} views</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  // Render content list
  const renderListContent = (items) => (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer"
          onClick={() => router.push(`/content/${item.id}`)}
        >
          <div className="w-16 h-16 rounded overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
            <img src={item.thumbnail || "/placeholder.svg"} alt={item.title} className="object-cover w-full h-full" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium line-clamp-1">{item.title}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
              <span>{item.type}</span>
              <span>{item.status}</span>
              <span>{new Date(item.date).toLocaleDateString()}</span>
              <span>{item.views.toLocaleString()} views</span>
            </div>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation()
                    router.push(`/content/${item.id}`)
                  }}
                >
                  View
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) => {
                    e.stopPropagation()
                    router.push(`/content/${item.id}/edit`)
                  }}
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(e) => e.stopPropagation()}>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600" onClick={(e) => e.stopPropagation()}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 space-y-6 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Content Library</h2>
            <p className="text-gray-500 dark:text-gray-400">Manage and organize all your content in one place</p>
          </div>
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
            <Link href="/create">
              <Plus className="mr-2 h-4 w-4" /> Create
            </Link>
          </Button>
        </div>

        {/* Search and Filter Controls - ONLY ONE SEARCH BOX */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1" data-testid="content-search">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              type="search"
              placeholder="Search content..."
              className="pl-8 border-gray-200 dark:border-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 border-gray-200 dark:border-gray-700">
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline-block">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Filter By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Content Type</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Date Range</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Performance</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 border-gray-200 dark:border-gray-700">
                  <SlidersHorizontal className="h-4 w-4" />
                  <span className="hidden sm:inline-block">Sort</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Newest First</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Oldest First</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Most Views</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Highest Engagement</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Tabs and Content */}
        <Tabs defaultValue="all" className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <TabsList className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
              <TabsTrigger value="all" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950">
                All Content
              </TabsTrigger>
              <TabsTrigger
                value="published"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950"
              >
                Published
              </TabsTrigger>
              <TabsTrigger value="drafts" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950">
                Drafts
              </TabsTrigger>
              <TabsTrigger
                value="scheduled"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-950"
              >
                Scheduled
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                <Grid3X3 className="h-4 w-4" />
                <span className="sr-only">Grid view</span>
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                <List className="h-4 w-4" />
                <span className="sr-only">List view</span>
              </Button>
            </div>
          </div>

          <TabsContent value="all" className="space-y-4">
            {viewMode === "grid" ? renderGridContent(filteredContent) : renderListContent(filteredContent)}
          </TabsContent>

          <TabsContent value="published" className="space-y-4">
            {viewMode === "grid"
              ? renderGridContent(filteredContent.filter((item) => item.status === "Published"))
              : renderListContent(filteredContent.filter((item) => item.status === "Published"))}
          </TabsContent>

          <TabsContent value="drafts" className="space-y-4">
            {viewMode === "grid"
              ? renderGridContent(filteredContent.filter((item) => item.status === "Draft"))
              : renderListContent(filteredContent.filter((item) => item.status === "Draft"))}
          </TabsContent>

          <TabsContent value="scheduled" className="space-y-4">
            {viewMode === "grid"
              ? renderGridContent(filteredContent.filter((item) => item.status === "Scheduled"))
              : renderListContent(filteredContent.filter((item) => item.status === "Scheduled"))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
