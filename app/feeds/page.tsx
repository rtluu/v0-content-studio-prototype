"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, CheckCircle, Clock, Edit, ExternalLink, Plus, RefreshCw, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

// Mock data for feeds
const feedsData = [
  {
    id: "feed-1",
    name: "Tech News Daily",
    url: "https://technewsdaily.com/rss",
    category: "Technology",
    status: "healthy",
    lastUpdate: "10 minutes ago",
    items: 24,
    errors: 0,
  },
  {
    id: "feed-2",
    name: "Science Weekly",
    url: "https://scienceweekly.org/feed",
    category: "Science",
    status: "warning",
    lastUpdate: "3 hours ago",
    items: 12,
    errors: 2,
  },
  {
    id: "feed-3",
    name: "Entertainment Today",
    url: "https://entertainmenttoday.com/rss",
    category: "Entertainment",
    status: "healthy",
    lastUpdate: "45 minutes ago",
    items: 18,
    errors: 0,
  },
  {
    id: "feed-4",
    name: "Sports Updates",
    url: "https://sportsupdate.net/feed",
    category: "Sports",
    status: "error",
    lastUpdate: "2 days ago",
    items: 0,
    errors: 5,
  },
  {
    id: "feed-5",
    name: "Business Insider",
    url: "https://businessinsider.com/rss",
    category: "Business",
    status: "healthy",
    lastUpdate: "2 hours ago",
    items: 15,
    errors: 0,
  },
]

// Mock data for feed health metrics
const healthMetrics = {
  totalFeeds: 5,
  activeFeeds: 4,
  totalItems: 69,
  healthyFeeds: 3,
  warningFeeds: 1,
  errorFeeds: 1,
  averageUpdateTime: "1.2 hours",
}

export default function FeedsPage() {
  const [selectedTab, setSelectedTab] = useState("all")

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "healthy":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3.5 w-3.5 mr-1" />
            Healthy
          </Badge>
        )
      case "warning":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            <Clock className="h-3.5 w-3.5 mr-1" />
            Warning
          </Badge>
        )
      case "error":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            <AlertCircle className="h-3.5 w-3.5 mr-1" />
            Error
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  // Filter feeds based on selected tab
  const getFilteredFeeds = () => {
    if (selectedTab === "all") return feedsData
    return feedsData.filter((feed) => feed.status === selectedTab)
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Feeds</h1>
          <p className="text-muted-foreground">Monitor and manage RSS feed configurations and health</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New Feed
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Feeds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{healthMetrics.totalFeeds}</div>
            <p className="text-xs text-muted-foreground">{healthMetrics.activeFeeds} active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Feed Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <div className="text-sm">{healthMetrics.healthyFeeds} healthy</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <div className="text-sm">{healthMetrics.warningFeeds} warning</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <div className="text-sm">{healthMetrics.errorFeeds} error</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{healthMetrics.totalItems}</div>
            <p className="text-xs text-muted-foreground">Across all feeds</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Update Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{healthMetrics.averageUpdateTime}</div>
            <p className="text-xs text-muted-foreground">Between refreshes</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedTab}>
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="all">All Feeds</TabsTrigger>
            <TabsTrigger value="healthy">Healthy</TabsTrigger>
            <TabsTrigger value="warning">Warnings</TabsTrigger>
            <TabsTrigger value="error">Errors</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh All
            </Button>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feed Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Errors</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getFilteredFeeds().map((feed) => (
                    <TableRow key={feed.id}>
                      <TableCell className="font-medium">
                        <div className="flex flex-col">
                          {feed.name}
                          <span className="text-xs text-muted-foreground truncate max-w-[200px]">{feed.url}</span>
                        </div>
                      </TableCell>
                      <TableCell>{feed.category}</TableCell>
                      <TableCell>{getStatusBadge(feed.status)}</TableCell>
                      <TableCell>{feed.lastUpdate}</TableCell>
                      <TableCell>{feed.items}</TableCell>
                      <TableCell>{feed.errors}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="healthy" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feed Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Errors</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getFilteredFeeds().map((feed) => (
                    <TableRow key={feed.id}>
                      <TableCell className="font-medium">
                        <div className="flex flex-col">
                          {feed.name}
                          <span className="text-xs text-muted-foreground truncate max-w-[200px]">{feed.url}</span>
                        </div>
                      </TableCell>
                      <TableCell>{feed.category}</TableCell>
                      <TableCell>{getStatusBadge(feed.status)}</TableCell>
                      <TableCell>{feed.lastUpdate}</TableCell>
                      <TableCell>{feed.items}</TableCell>
                      <TableCell>{feed.errors}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="warning" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feed Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Errors</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getFilteredFeeds().map((feed) => (
                    <TableRow key={feed.id}>
                      <TableCell className="font-medium">
                        <div className="flex flex-col">
                          {feed.name}
                          <span className="text-xs text-muted-foreground truncate max-w-[200px]">{feed.url}</span>
                        </div>
                      </TableCell>
                      <TableCell>{feed.category}</TableCell>
                      <TableCell>{getStatusBadge(feed.status)}</TableCell>
                      <TableCell>{feed.lastUpdate}</TableCell>
                      <TableCell>{feed.items}</TableCell>
                      <TableCell>{feed.errors}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="error" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feed Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Update</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Errors</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getFilteredFeeds().map((feed) => (
                    <TableRow key={feed.id}>
                      <TableCell className="font-medium">
                        <div className="flex flex-col">
                          {feed.name}
                          <span className="text-xs text-muted-foreground truncate max-w-[200px]">{feed.url}</span>
                        </div>
                      </TableCell>
                      <TableCell>{feed.category}</TableCell>
                      <TableCell>{getStatusBadge(feed.status)}</TableCell>
                      <TableCell>{feed.lastUpdate}</TableCell>
                      <TableCell>{feed.items}</TableCell>
                      <TableCell>{feed.errors}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Feed Configuration</CardTitle>
          <CardDescription>Configure global feed settings and defaults</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="refresh-interval">Default Refresh Interval</Label>
              <Select defaultValue="60">
                <SelectTrigger id="refresh-interval">
                  <SelectValue placeholder="Select interval" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                  <SelectItem value="120">2 hours</SelectItem>
                  <SelectItem value="360">6 hours</SelectItem>
                  <SelectItem value="720">12 hours</SelectItem>
                  <SelectItem value="1440">24 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-items">Maximum Items Per Feed</Label>
              <Select defaultValue="50">
                <SelectTrigger id="max-items">
                  <SelectValue placeholder="Select max items" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 items</SelectItem>
                  <SelectItem value="25">25 items</SelectItem>
                  <SelectItem value="50">50 items</SelectItem>
                  <SelectItem value="100">100 items</SelectItem>
                  <SelectItem value="200">200 items</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-import">Auto-import new items</Label>
              <Switch id="auto-import" defaultChecked />
            </div>
            <p className="text-sm text-muted-foreground">
              Automatically import new items from feeds as they are discovered
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="error-notifications">Error notifications</Label>
              <Switch id="error-notifications" defaultChecked />
            </div>
            <p className="text-sm text-muted-foreground">Receive notifications when feeds encounter errors</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="default-category">Default Category</Label>
            <Select defaultValue="uncategorized">
              <SelectTrigger id="default-category">
                <SelectValue placeholder="Select default category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uncategorized">Uncategorized</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="science">Science</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Reset to Defaults</Button>
          <Button className="bg-purple-600 hover:bg-purple-700">Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
