"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  Search,
  Plus,
  Share2,
  Globe,
  ExternalLink,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle,
  Clock,
  FileText,
  BarChart,
} from "lucide-react"

// Mock data for syndication partners
const syndicationPartners = [
  {
    id: "partner-1",
    name: "Global News Network",
    website: "https://globalnews.com",
    status: "active",
    contentCount: 42,
    lastSyndicated: "2 hours ago",
    revenue: "$1,245.00",
  },
  {
    id: "partner-2",
    name: "Tech Insider",
    website: "https://techinsider.com",
    status: "active",
    contentCount: 28,
    lastSyndicated: "1 day ago",
    revenue: "$876.50",
  },
  {
    id: "partner-3",
    name: "Science Daily",
    website: "https://sciencedaily.org",
    status: "pending",
    contentCount: 0,
    lastSyndicated: "Never",
    revenue: "$0.00",
  },
  {
    id: "partner-4",
    name: "Business Journal",
    website: "https://businessjournal.com",
    status: "inactive",
    contentCount: 15,
    lastSyndicated: "3 months ago",
    revenue: "$432.25",
  },
  {
    id: "partner-5",
    name: "Entertainment Weekly",
    website: "https://entertainmentweekly.com",
    status: "active",
    contentCount: 36,
    lastSyndicated: "5 days ago",
    revenue: "$921.75",
  },
]

// Mock data for syndicated content
const syndicatedContent = [
  {
    id: "content-1",
    title: "10 Emerging Technologies to Watch in 2023",
    type: "Article",
    partners: 3,
    views: 12450,
    revenue: "$342.80",
    date: "2023-05-15",
  },
  {
    id: "content-2",
    title: "The Future of Renewable Energy",
    type: "Article",
    partners: 2,
    views: 8320,
    revenue: "$215.40",
    date: "2023-05-10",
  },
  {
    id: "content-3",
    title: "Interview with Tech Industry Leader",
    type: "Video",
    partners: 4,
    views: 15680,
    revenue: "$521.60",
    date: "2023-05-08",
  },
  {
    id: "content-4",
    title: "Global Economic Outlook for Q3",
    type: "Article",
    partners: 2,
    views: 6240,
    revenue: "$187.20",
    date: "2023-05-05",
  },
  {
    id: "content-5",
    title: "New Scientific Breakthrough in Medicine",
    type: "Article",
    partners: 3,
    views: 9870,
    revenue: "$296.10",
    date: "2023-05-01",
  },
]

// Mock data for syndication metrics
const syndicationMetrics = {
  totalPartners: 5,
  activePartners: 3,
  totalSyndicated: 121,
  totalViews: 254680,
  totalRevenue: "$7,642.50",
  topPerformer: "Interview with Tech Industry Leader",
}

export default function SyndicationPage() {
  const [activeTab, setActiveTab] = useState("partners")

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <CheckCircle className="h-3.5 w-3.5 mr-1" />
            Active
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            <Clock className="h-3.5 w-3.5 mr-1" />
            Pending
          </Badge>
        )
      case "inactive":
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
            <AlertCircle className="h-3.5 w-3.5 mr-1" />
            Inactive
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Syndication</h1>
          <p className="text-muted-foreground">Manage content syndication partners and distribution</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Add New Partner
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Partners</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{syndicationMetrics.totalPartners}</div>
            <p className="text-xs text-muted-foreground">{syndicationMetrics.activePartners} active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Syndicated Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{syndicationMetrics.totalSyndicated}</div>
            <p className="text-xs text-muted-foreground">Pieces of content</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{syndicationMetrics.totalViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all partners</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{syndicationMetrics.totalRevenue}</div>
            <p className="text-xs text-muted-foreground">From syndication</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="partners" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="partners">
              <Globe className="h-4 w-4 mr-2" />
              Partners
            </TabsTrigger>
            <TabsTrigger value="content">
              <FileText className="h-4 w-4 mr-2" />
              Content
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Share2 className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[320px]"
              />
            </div>
          </div>
        </div>

        <TabsContent value="partners" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Partner Name</TableHead>
                    <TableHead>Website</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Content Count</TableHead>
                    <TableHead>Last Syndicated</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {syndicationPartners.map((partner) => (
                    <TableRow key={partner.id}>
                      <TableCell className="font-medium">{partner.name}</TableCell>
                      <TableCell>
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:underline"
                        >
                          {partner.website.replace(/^https?:\/\//, "")}
                          <ExternalLink className="h-3.5 w-3.5 ml-1" />
                        </a>
                      </TableCell>
                      <TableCell>{getStatusBadge(partner.status)}</TableCell>
                      <TableCell>{partner.contentCount}</TableCell>
                      <TableCell>{partner.lastSyndicated}</TableCell>
                      <TableCell>{partner.revenue}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
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

        <TabsContent value="content" className="mt-6">
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Content Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Partners</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {syndicatedContent.map((content) => (
                    <TableRow key={content.id}>
                      <TableCell className="font-medium">{content.title}</TableCell>
                      <TableCell>{content.type}</TableCell>
                      <TableCell>{content.partners}</TableCell>
                      <TableCell>{content.views.toLocaleString()}</TableCell>
                      <TableCell>{content.revenue}</TableCell>
                      <TableCell>{content.date}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Share2 className="h-4 w-4" />
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

        <TabsContent value="analytics" className="mt-6">
          <div className="border rounded-lg p-4 h-[400px] flex items-center justify-center">
            <p className="text-muted-foreground">Syndication analytics coming soon</p>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Syndication Settings</CardTitle>
              <CardDescription>Configure global syndication settings and defaults</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-syndicate">Auto-syndicate new content</Label>
                  <Switch id="auto-syndicate" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Automatically syndicate new content to all active partners
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="require-approval">Require approval</Label>
                  <Switch id="require-approval" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">Require editorial approval before content is syndicated</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="default-license">Default License</Label>
                <Select defaultValue="cc-by">
                  <SelectTrigger id="default-license">
                    <SelectValue placeholder="Select license" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cc-by">Creative Commons (CC BY)</SelectItem>
                    <SelectItem value="cc-by-sa">Creative Commons (CC BY-SA)</SelectItem>
                    <SelectItem value="cc-by-nc">Creative Commons (CC BY-NC)</SelectItem>
                    <SelectItem value="cc-by-nd">Creative Commons (CC BY-ND)</SelectItem>
                    <SelectItem value="custom">Custom License</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="revenue-model">Revenue Model</Label>
                <Select defaultValue="revenue-share">
                  <SelectTrigger id="revenue-model">
                    <SelectValue placeholder="Select revenue model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="revenue-share">Revenue Share (70/30)</SelectItem>
                    <SelectItem value="flat-fee">Flat Fee per Article</SelectItem>
                    <SelectItem value="view-based">View-based Compensation</SelectItem>
                    <SelectItem value="subscription">Subscription Model</SelectItem>
                    <SelectItem value="custom">Custom Agreement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Defaults</Button>
              <Button className="bg-purple-600 hover:bg-purple-700">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
