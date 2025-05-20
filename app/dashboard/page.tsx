"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart } from "@/components/ui/chart"
import Link from "next/link"
import { ArrowUpRight, BarChart3, Eye, MessageSquare, ThumbsUp, Upload, Users, Settings } from "lucide-react"
import { useBrand } from "@/components/brand-context"

// Brand-specific data
const brandData = {
  "news-daily": {
    title: "News Daily Dashboard",
    stats: {
      views: "78,432",
      viewsChange: "+15.3%",
      engagement: "7.8%",
      engagementChange: "+0.8%",
      comments: "2,156",
      commentsChange: "+12.4%",
      followers: "+892",
      followersChange: "+18.7%",
    },
    performanceData: [
      { name: "Jan 1", views: 2200, engagement: 440, viewsFormatted: "2,200", engagementFormatted: "440" },
      { name: "Jan 5", views: 2800, engagement: 520, viewsFormatted: "2,800", engagementFormatted: "520" },
      { name: "Jan 10", views: 3400, engagement: 680, viewsFormatted: "3,400", engagementFormatted: "680" },
      { name: "Jan 15", views: 3800, engagement: 760, viewsFormatted: "3,800", engagementFormatted: "760" },
      { name: "Jan 20", views: 4200, engagement: 820, viewsFormatted: "4,200", engagementFormatted: "820" },
      { name: "Jan 25", views: 4600, engagement: 900, viewsFormatted: "4,600", engagementFormatted: "900" },
      { name: "Jan 30", views: 5000, engagement: 1000, viewsFormatted: "5,000", engagementFormatted: "1,000" },
    ],
    distributionData: [
      { name: "Articles", value: 65, formattedValue: "65%" },
      { name: "Videos", value: 20, formattedValue: "20%" },
      { name: "Images", value: 10, formattedValue: "10%" },
      { name: "Audio", value: 5, formattedValue: "5%" },
    ],
    topContent: [
      {
        title: "Breaking News: Major Policy Change",
        views: "18.3K",
        change: "+32%",
        positive: true,
        type: "Article",
      },
      {
        title: "Analysis: Economic Impact Report",
        views: "12.7K",
        change: "+24%",
        positive: true,
        type: "Article",
      },
      {
        title: "Interview with Industry Leader",
        views: "9.5K",
        change: "+18%",
        positive: true,
        type: "Video",
      },
    ],
  },
  "metro-radio": {
    title: "Metro Radio Dashboard",
    stats: {
      views: "42,156",
      viewsChange: "+8.7%",
      engagement: "9.2%",
      engagementChange: "+1.5%",
      comments: "1,845",
      commentsChange: "+7.2%",
      followers: "+423",
      followersChange: "+5.3%",
    },
    performanceData: [
      { name: "Jan 1", views: 1000, engagement: 200, viewsFormatted: "1,000", engagementFormatted: "200" },
      { name: "Jan 5", views: 1500, engagement: 300, viewsFormatted: "1,500", engagementFormatted: "300" },
      { name: "Jan 10", views: 2000, engagement: 400, viewsFormatted: "2,000", engagementFormatted: "400" },
      { name: "Jan 15", views: 2500, engagement: 500, viewsFormatted: "2,500", engagementFormatted: "500" },
      { name: "Jan 20", views: 3000, engagement: 600, viewsFormatted: "3,000", engagementFormatted: "600" },
      { name: "Jan 25", views: 3500, engagement: 700, viewsFormatted: "3,500", engagementFormatted: "700" },
      { name: "Jan 30", views: 4000, engagement: 800, viewsFormatted: "4,000", engagementFormatted: "800" },
    ],
    distributionData: [
      { name: "Podcasts", value: 55, formattedValue: "55%" },
      { name: "Live Shows", value: 30, formattedValue: "30%" },
      { name: "Articles", value: 10, formattedValue: "10%" },
      { name: "Videos", value: 5, formattedValue: "5%" },
    ],
    topContent: [
      {
        title: "Morning Drive Show Highlights",
        views: "15.2K",
        change: "+18%",
        positive: true,
        type: "Podcast",
      },
      {
        title: "Celebrity Interview Special",
        views: "12.1K",
        change: "+22%",
        positive: true,
        type: "Podcast",
      },
      {
        title: "Live Music Performance",
        views: "8.7K",
        change: "+15%",
        positive: true,
        type: "Live Show",
      },
    ],
  },
  "city-tv": {
    title: "City TV Dashboard",
    stats: {
      views: "125,789",
      viewsChange: "+22.4%",
      engagement: "6.5%",
      engagementChange: "+0.9%",
      comments: "3,421",
      commentsChange: "+15.8%",
      followers: "+1,245",
      followersChange: "+27.3%",
    },
    performanceData: [
      { name: "Jan 1", views: 3000, engagement: 600, viewsFormatted: "3,000", engagementFormatted: "600" },
      { name: "Jan 5", views: 4500, engagement: 900, viewsFormatted: "4,500", engagementFormatted: "900" },
      { name: "Jan 10", views: 6000, engagement: 1200, viewsFormatted: "6,000", engagementFormatted: "1,200" },
      { name: "Jan 15", views: 7500, engagement: 1500, viewsFormatted: "7,500", engagementFormatted: "1,500" },
      { name: "Jan 20", views: 9000, engagement: 1800, viewsFormatted: "9,000", engagementFormatted: "1,800" },
      { name: "Jan 25", views: 10500, engagement: 2100, viewsFormatted: "10,500", engagementFormatted: "2,100" },
      { name: "Jan 30", views: 12000, engagement: 2400, viewsFormatted: "12,000", engagementFormatted: "2,400" },
    ],
    distributionData: [
      { name: "Shows", value: 45, formattedValue: "45%" },
      { name: "News", value: 30, formattedValue: "30%" },
      { name: "Movies", value: 15, formattedValue: "15%" },
      { name: "Clips", value: 10, formattedValue: "10%" },
    ],
    topContent: [
      {
        title: "Season Finale: Drama Series",
        views: "32.5K",
        change: "+45%",
        positive: true,
        type: "Show",
      },
      {
        title: "Evening News Special Report",
        views: "24.8K",
        change: "+28%",
        positive: true,
        type: "News",
      },
      {
        title: "Weekend Movie Premiere",
        views: "18.3K",
        change: "+22%",
        positive: true,
        type: "Movie",
      },
    ],
  },
  "global-media": {
    title: "Global Media Dashboard",
    stats: {
      views: "215,678",
      viewsChange: "+18.9%",
      engagement: "8.1%",
      engagementChange: "+1.2%",
      comments: "5,789",
      commentsChange: "+20.3%",
      followers: "+2,156",
      followersChange: "+32.7%",
    },
    performanceData: [
      { name: "Jan 1", views: 5000, engagement: 1000, viewsFormatted: "5,000", engagementFormatted: "1,000" },
      { name: "Jan 5", views: 7500, engagement: 1500, viewsFormatted: "7,500", engagementFormatted: "1,500" },
      { name: "Jan 10", views: 10000, engagement: 2000, viewsFormatted: "10,000", engagementFormatted: "2,000" },
      { name: "Jan 15", views: 12500, engagement: 2500, viewsFormatted: "12,500", engagementFormatted: "2,500" },
      { name: "Jan 20", views: 15000, engagement: 3000, viewsFormatted: "15,000", engagementFormatted: "3,000" },
      { name: "Jan 25", views: 17500, engagement: 3500, viewsFormatted: "17,500", engagementFormatted: "3,500" },
      { name: "Jan 30", views: 20000, engagement: 4000, viewsFormatted: "20,000", engagementFormatted: "4,000" },
    ],
    distributionData: [
      { name: "Articles", value: 35, formattedValue: "35%" },
      { name: "Videos", value: 30, formattedValue: "30%" },
      { name: "Podcasts", value: 20, formattedValue: "20%" },
      { name: "Shows", value: 15, formattedValue: "15%" },
    ],
    topContent: [
      {
        title: "Global News Roundup",
        views: "45.7K",
        change: "+38%",
        positive: true,
        type: "Article",
      },
      {
        title: "Documentary Series: World Cultures",
        views: "38.2K",
        change: "+32%",
        positive: true,
        type: "Video",
      },
      {
        title: "Global Business Podcast",
        views: "29.5K",
        change: "+25%",
        positive: true,
        type: "Podcast",
      },
    ],
  },
}

// Default data for non-partner views
const defaultData = {
  title: "Dashboard",
  stats: {
    views: "45,231",
    viewsChange: "+20.1%",
    engagement: "8.2%",
    engagementChange: "+1.2%",
    comments: "1,324",
    commentsChange: "+4.6%",
    followers: "+573",
    followersChange: "+12.3%",
  },
  performanceData: [
    { name: "Jan 1", views: 1200, engagement: 240, viewsFormatted: "1,200", engagementFormatted: "240" },
    { name: "Jan 5", views: 1800, engagement: 320, viewsFormatted: "1,800", engagementFormatted: "320" },
    { name: "Jan 10", views: 2400, engagement: 480, viewsFormatted: "2,400", engagementFormatted: "480" },
    { name: "Jan 15", views: 2800, engagement: 560, viewsFormatted: "2,800", engagementFormatted: "560" },
    { name: "Jan 20", views: 3200, engagement: 620, viewsFormatted: "3,200", engagementFormatted: "620" },
    { name: "Jan 25", views: 3600, engagement: 700, viewsFormatted: "3,600", engagementFormatted: "700" },
    { name: "Jan 30", views: 4000, engagement: 800, viewsFormatted: "4,000", engagementFormatted: "800" },
  ],
  distributionData: [
    { name: "Articles", value: 45, formattedValue: "45%" },
    { name: "Videos", value: 30, formattedValue: "30%" },
    { name: "Images", value: 15, formattedValue: "15%" },
    { name: "Audio", value: 10, formattedValue: "10%" },
  ],
  topContent: [
    {
      title: "10 Tips for Better Content",
      views: "12.5K",
      change: "+24%",
      positive: true,
      type: "Article",
    },
    {
      title: "Content Creation Masterclass",
      views: "8.2K",
      change: "+18%",
      positive: true,
      type: "Video",
    },
    {
      title: "The Future of Digital Media",
      views: "6.7K",
      change: "+12%",
      positive: true,
      type: "Article",
    },
  ],
}

export default function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [data, setData] = useState(defaultData)
  const { selectedBrand } = useBrand()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      try {
        if (selectedBrand && brandData[selectedBrand.id]) {
          setData(brandData[selectedBrand.id])
        }
      } catch (error) {
        console.error("Error accessing brand context:", error)
      }
    }
  }, [isMounted, selectedBrand])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{data.title}</h2>
          <p className="text-muted-foreground">Welcome back, Jane! Here's an overview of your content performance.</p>
        </div>
        <Button asChild>
          <Link href="/create">
            <Upload className="mr-2 h-4 w-4" /> Create
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.stats.views}</div>
            <p className="text-xs text-muted-foreground">{data.stats.viewsChange} from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.stats.engagement}</div>
            <p className="text-xs text-muted-foreground">{data.stats.engagementChange} from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Comments</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.stats.comments}</div>
            <p className="text-xs text-muted-foreground">{data.stats.commentsChange} from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Followers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.stats.followers}</div>
            <p className="text-xs text-muted-foreground">{data.stats.followersChange} from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
                <CardDescription>Views and engagement over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                {isMounted && (
                  <LineChart
                    data={data.performanceData}
                    index="name"
                    categories={["views", "engagement"]}
                    colors={["#8b5cf6", "#10b981"]}
                    className="aspect-[4/3]"
                  />
                )}
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Content Distribution</CardTitle>
                <CardDescription>Breakdown by content type</CardDescription>
              </CardHeader>
              <CardContent>
                {isMounted && (
                  <BarChart
                    data={data.distributionData}
                    index="name"
                    categories={["value"]}
                    colors={["#8b5cf6"]}
                    className="aspect-[4/3]"
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Analytics</CardTitle>
              <CardDescription>Detailed metrics about your content performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10 text-muted-foreground">
                <BarChart3 className="mx-auto h-10 w-10 mb-3" />
                <h3 className="text-lg font-medium mb-1">Analytics Dashboard</h3>
                <p>Detailed analytics will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Download and export reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-10 text-muted-foreground">
                <BarChart3 className="mx-auto h-10 w-10 mb-3" />
                <h3 className="text-lg font-medium mb-1">Reports Dashboard</h3>
                <p>Your reports will appear here</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates on your content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "New comment on 'Getting Started with Content Studio'",
                  time: "2 hours ago",
                },
                {
                  title: "Your video 'Content Creation Tips' reached 1,000 views",
                  time: "5 hours ago",
                },
                {
                  title: "New follower: John Smith",
                  time: "Yesterday",
                },
                {
                  title: "Your article was featured in the weekly digest",
                  time: "2 days ago",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Top Performing Content</CardTitle>
            <CardDescription>Your best content by views</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.topContent.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.type}</p>
                  </div>
                  <div className="text-sm font-medium">{item.views} views</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center" asChild>
                <Link href="/create">
                  <Upload className="h-5 w-5 mb-1 text-primary" />
                  <span>New Content</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center" asChild>
                <Link href="/analytics">
                  <BarChart3 className="h-5 w-5 mb-1 text-primary" />
                  <span>Analytics</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center" asChild>
                <Link href="/ai-tools">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-1 text-primary"
                  >
                    <path d="M12 2v8"></path>
                    <path d="m4.93 10.93 1.41 1.41"></path>
                    <path d="M2 18h2"></path>
                    <path d="M20 18h2"></path>
                    <path d="m19.07 10.93-1.41 1.41"></path>
                    <path d="M22 22H2"></path>
                    <path d="m16 6-4 4-4-4"></path>
                    <path d="M16 18a4 4 0 0 0 0-8H8a4 4 0 0 0 0 8"></path>
                  </svg>
                  <span>AI Tools</span>
                </Link>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center" asChild>
                <Link href="/settings">
                  <Settings className="h-5 w-5 mb-1 text-primary" />
                  <span>Settings</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
