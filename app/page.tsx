import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart } from "@/components/ui/chart"
import Link from "next/link"
import { ArrowUpRight, BarChart2, Eye, MessageSquare, ThumbsUp, Upload, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 space-y-6 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-gray-500">Welcome back, Jane! Here's an overview of your content performance.</p>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/create">
              <Upload className="mr-2 h-4 w-4" /> Create New Content
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45,231</div>
              <p className="text-xs text-green-600">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card className="border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <ThumbsUp className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.2%</div>
              <p className="text-xs text-green-600">+1.2% from last month</p>
            </CardContent>
          </Card>
          <Card className="border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Comments</CardTitle>
              <MessageSquare className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,324</div>
              <p className="text-xs text-green-600">+4.6% from last month</p>
            </CardContent>
          </Card>
          <Card className="border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Followers</CardTitle>
              <Users className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-green-600">+12.3% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-gray-100 text-gray-900">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-white">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-white">
              Reports
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4 border-gray-200">
                <CardHeader>
                  <CardTitle>Content Performance</CardTitle>
                  <CardDescription>Views and engagement over the last 30 days</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <LineChart
                    data={[
                      {
                        name: "Jan 1",
                        views: 1200,
                        engagement: 240,
                        viewsFormatted: "1,200",
                        engagementFormatted: "240",
                      },
                      {
                        name: "Jan 5",
                        views: 1800,
                        engagement: 320,
                        viewsFormatted: "1,800",
                        engagementFormatted: "320",
                      },
                      {
                        name: "Jan 10",
                        views: 2400,
                        engagement: 480,
                        viewsFormatted: "2,400",
                        engagementFormatted: "480",
                      },
                      {
                        name: "Jan 15",
                        views: 2800,
                        engagement: 560,
                        viewsFormatted: "2,800",
                        engagementFormatted: "560",
                      },
                      {
                        name: "Jan 20",
                        views: 3200,
                        engagement: 620,
                        viewsFormatted: "3,200",
                        engagementFormatted: "620",
                      },
                      {
                        name: "Jan 25",
                        views: 3600,
                        engagement: 700,
                        viewsFormatted: "3,600",
                        engagementFormatted: "700",
                      },
                      {
                        name: "Jan 30",
                        views: 4000,
                        engagement: 800,
                        viewsFormatted: "4,000",
                        engagementFormatted: "800",
                      },
                    ]}
                    index="name"
                    categories={["views", "engagement"]}
                    colors={["#8b5cf6", "#3b82f6"]}
                    className="aspect-[4/3]"
                  />
                </CardContent>
              </Card>
              <Card className="lg:col-span-3 border-gray-200">
                <CardHeader>
                  <CardTitle>Content Distribution</CardTitle>
                  <CardDescription>Breakdown by content type</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={[
                      { name: "Articles", value: 45, valueFormatted: "45%" },
                      { name: "Videos", value: 30, valueFormatted: "30%" },
                      { name: "Images", value: 15, valueFormatted: "15%" },
                      { name: "Audio", value: 10, valueFormatted: "10%" },
                    ]}
                    index="name"
                    categories={["value"]}
                    colors={["#8b5cf6"]}
                    className="aspect-[4/3]"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>Detailed metrics about your content performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-10 text-gray-500">
                  <BarChart2 className="mx-auto h-10 w-10 mb-3" />
                  <h3 className="text-lg font-medium mb-1">Analytics Dashboard</h3>
                  <p>Detailed analytics will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>Download and export reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-10 text-gray-500">
                  <BarChart2 className="mx-auto h-10 w-10 mb-3" />
                  <h3 className="text-lg font-medium mb-1">Reports Dashboard</h3>
                  <p>Your reports will appear here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="md:col-span-2 lg:col-span-1 border-gray-200">
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
                      <p className="text-sm text-gray-500">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1 border-gray-200">
            <CardHeader>
              <CardTitle>Top Performing Content</CardTitle>
              <CardDescription>Your best content by views</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "10 Tips for Better Content",
                    views: "12.5K views",
                    type: "Article",
                  },
                  {
                    title: "Content Creation Masterclass",
                    views: "8.2K views",
                    type: "Video",
                  },
                  {
                    title: "The Future of Digital Media",
                    views: "6.7K views",
                    type: "Article",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.type}</p>
                    </div>
                    <div className="text-sm font-medium">{item.views}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-1 border-gray-200">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center border-gray-200"
                  asChild
                >
                  <Link href="/create">
                    <Upload className="h-5 w-5 mb-1 text-primary" />
                    <span>New Content</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center border-gray-200"
                  asChild
                >
                  <Link href="/analytics">
                    <BarChart2 className="h-5 w-5 mb-1 text-primary" />
                    <span>Analytics</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center border-gray-200"
                  asChild
                >
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
                <Button
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center border-gray-200"
                  asChild
                >
                  <Link href="/settings">
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
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <span>Settings</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
