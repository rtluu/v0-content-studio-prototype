"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"
import { ResponsivePie } from "@nivo/pie"
import { useBrand } from "@/components/brand-context"

// Brand-specific analytics data
const brandAnalyticsData = {
  "news-daily": {
    title: "News Daily Analytics",
    stats: {
      views: "78,432",
      viewsChange: "+15.3%",
      watchTime: "2,156 hrs",
      watchTimeChange: "+12.7%",
      engagement: "7.8%",
      engagementChange: "+0.8%",
      subscribers: "+892",
      subscribersChange: "+18.7%",
    },
    viewsData: [
      { date: "Apr 1", views: 2200, formattedValue: "2,200" },
      { date: "Apr 5", views: 2800, formattedValue: "2,800" },
      { date: "Apr 10", views: 3400, formattedValue: "3,400" },
      { date: "Apr 15", views: 3800, formattedValue: "3,800" },
      { date: "Apr 20", views: 4200, formattedValue: "4,200" },
      { date: "Apr 25", views: 4600, formattedValue: "4,600" },
      { date: "Apr 30", views: 5000, formattedValue: "5,000" },
    ],
    trafficData: [
      { source: "Search", value: 55, formattedValue: "55%" },
      { source: "Direct", value: 25, formattedValue: "25%" },
      { source: "Social", value: 15, formattedValue: "15%" },
      { source: "Referral", value: 5, formattedValue: "5%" },
    ],
    topContent: [
      {
        title: "Breaking News: Major Policy Change",
        views: "18.3K",
        change: "+32%",
        positive: true,
      },
      {
        title: "Analysis: Economic Impact Report",
        views: "12.7K",
        change: "+24%",
        positive: true,
      },
      {
        title: "Interview with Industry Leader",
        views: "9.5K",
        change: "+18%",
        positive: true,
      },
      {
        title: "Opinion: Future Trends",
        views: "7.2K",
        change: "+12%",
        positive: true,
      },
      {
        title: "Local News Roundup",
        views: "5.8K",
        change: "-3%",
        positive: false,
      },
    ],
  },
  "metro-radio": {
    title: "Metro Radio Analytics",
    stats: {
      views: "42,156",
      viewsChange: "+8.7%",
      watchTime: "3,845 hrs",
      watchTimeChange: "+22.3%",
      engagement: "9.2%",
      engagementChange: "+1.5%",
      subscribers: "+423",
      subscribersChange: "+5.3%",
    },
    viewsData: [
      { date: "Apr 1", views: 1000, formattedValue: "1,000" },
      { date: "Apr 5", views: 1500, formattedValue: "1,500" },
      { date: "Apr 10", views: 2000, formattedValue: "2,000" },
      { date: "Apr 15", views: 2500, formattedValue: "2,500" },
      { date: "Apr 20", views: 3000, formattedValue: "3,000" },
      { date: "Apr 25", views: 3500, formattedValue: "3,500" },
      { date: "Apr 30", views: 4000, formattedValue: "4,000" },
    ],
    trafficData: [
      { source: "Direct", value: 45, formattedValue: "45%" },
      { source: "App", value: 35, formattedValue: "35%" },
      { source: "Social", value: 15, formattedValue: "15%" },
      { source: "Search", value: 5, formattedValue: "5%" },
    ],
    topContent: [
      {
        title: "Morning Drive Show Highlights",
        views: "15.2K",
        change: "+18%",
        positive: true,
      },
      {
        title: "Celebrity Interview Special",
        views: "12.1K",
        change: "+22%",
        positive: true,
      },
      {
        title: "Live Music Performance",
        views: "8.7K",
        change: "+15%",
        positive: true,
      },
      {
        title: "Evening Talk Show",
        views: "7.3K",
        change: "+8%",
        positive: true,
      },
      {
        title: "Weekend Special",
        views: "5.2K",
        change: "-2%",
        positive: false,
      },
    ],
  },
  "city-tv": {
    title: "City TV Analytics",
    stats: {
      views: "125,789",
      viewsChange: "+22.4%",
      watchTime: "8,756 hrs",
      watchTimeChange: "+18.9%",
      engagement: "6.5%",
      engagementChange: "+0.9%",
      subscribers: "+1,245",
      subscribersChange: "+27.3%",
    },
    viewsData: [
      { date: "Apr 1", views: 3000, formattedValue: "3,000" },
      { date: "Apr 5", views: 4500, formattedValue: "4,500" },
      { date: "Apr 10", views: 6000, formattedValue: "6,000" },
      { date: "Apr 15", views: 7500, formattedValue: "7,500" },
      { date: "Apr 20", views: 9000, formattedValue: "9,000" },
      { date: "Apr 25", views: 10500, formattedValue: "10,500" },
      { date: "Apr 30", views: 12000, formattedValue: "12,000" },
    ],
    trafficData: [
      { source: "Cable", value: 50, formattedValue: "50%" },
      { source: "Streaming", value: 30, formattedValue: "30%" },
      { source: "Website", value: 15, formattedValue: "15%" },
      { source: "Social", value: 5, formattedValue: "5%" },
    ],
    topContent: [
      {
        title: "Season Finale: Drama Series",
        views: "32.5K",
        change: "+45%",
        positive: true,
      },
      {
        title: "Evening News Special Report",
        views: "24.8K",
        change: "+28%",
        positive: true,
      },
      {
        title: "Weekend Movie Premiere",
        views: "18.3K",
        change: "+22%",
        positive: true,
      },
      {
        title: "Morning Talk Show",
        views: "15.7K",
        change: "+18%",
        positive: true,
      },
      {
        title: "Sports Highlights",
        views: "12.3K",
        change: "-5%",
        positive: false,
      },
    ],
  },
  "global-media": {
    title: "Global Media Analytics",
    stats: {
      views: "215,678",
      viewsChange: "+18.9%",
      watchTime: "12,345 hrs",
      watchTimeChange: "+25.7%",
      engagement: "8.1%",
      engagementChange: "+1.2%",
      subscribers: "+2,156",
      subscribersChange: "+32.7%",
    },
    viewsData: [
      { date: "Apr 1", views: 5000, formattedValue: "5,000" },
      { date: "Apr 5", views: 7500, formattedValue: "7,500" },
      { date: "Apr 10", views: 10000, formattedValue: "10,000" },
      { date: "Apr 15", views: 12500, formattedValue: "12,500" },
      { date: "Apr 20", views: 15000, formattedValue: "15,000" },
      { date: "Apr 25", views: 17500, formattedValue: "17,500" },
      { date: "Apr 30", views: 20000, formattedValue: "20,000" },
    ],
    trafficData: [
      { source: "Website", value: 40, formattedValue: "40%" },
      { source: "Apps", value: 30, formattedValue: "30%" },
      { source: "Social", value: 20, formattedValue: "20%" },
      { source: "Partners", value: 10, formattedValue: "10%" },
    ],
    topContent: [
      {
        title: "Global News Roundup",
        views: "45.7K",
        change: "+38%",
        positive: true,
      },
      {
        title: "Documentary Series: World Cultures",
        views: "38.2K",
        change: "+32%",
        positive: true,
      },
      {
        title: "Global Business Podcast",
        views: "29.5K",
        change: "+25%",
        positive: true,
      },
      {
        title: "Travel Show: Hidden Gems",
        views: "22.8K",
        change: "+18%",
        positive: true,
      },
      {
        title: "Technology Review",
        views: "18.3K",
        change: "-2%",
        positive: false,
      },
    ],
  },
}

// Default analytics data
const defaultAnalyticsData = {
  title: "Analytics",
  stats: {
    views: "45,231",
    viewsChange: "+20.1%",
    watchTime: "1,245 hrs",
    watchTimeChange: "+15.3%",
    engagement: "8.2%",
    engagementChange: "+1.2%",
    subscribers: "+573",
    subscribersChange: "-2.5%",
  },
  viewsData: [
    { date: "Apr 1", views: 1200, formattedValue: "1,200" },
    { date: "Apr 5", views: 1800, formattedValue: "1,800" },
    { date: "Apr 10", views: 2400, formattedValue: "2,400" },
    { date: "Apr 15", views: 2800, formattedValue: "2,800" },
    { date: "Apr 20", views: 3200, formattedValue: "3,200" },
    { date: "Apr 25", views: 3600, formattedValue: "3,600" },
    { date: "Apr 30", views: 4000, formattedValue: "4,000" },
  ],
  trafficData: [
    { source: "Search", value: 45, formattedValue: "45%" },
    { source: "Direct", value: 30, formattedValue: "30%" },
    { source: "Social", value: 15, formattedValue: "15%" },
    { source: "Referral", value: 10, formattedValue: "10%" },
  ],
  topContent: [
    {
      title: "10 Tips for Better Content",
      views: "12.5K",
      change: "+24%",
      positive: true,
    },
    {
      title: "Content Creation Masterclass",
      views: "8.2K",
      change: "+18%",
      positive: true,
    },
    {
      title: "The Future of Digital Media",
      views: "6.7K",
      change: "+12%",
      positive: true,
    },
    {
      title: "Social Media Strategy Guide",
      views: "5.3K",
      change: "-5%",
      positive: false,
    },
    {
      title: "Content Studio Tutorial",
      views: "4.1K",
      change: "+8%",
      positive: true,
    },
  ],
}

// Pre-formatted data for charts that doesn't change with brand
const demographicsData = [
  { age: "18-24", male: 15, female: 20, maleFormatted: "15%", femaleFormatted: "20%" },
  { age: "25-34", male: 25, female: 30, maleFormatted: "25%", femaleFormatted: "30%" },
  { age: "35-44", male: 20, female: 15, maleFormatted: "20%", femaleFormatted: "15%" },
  { age: "45-54", male: 10, female: 5, maleFormatted: "10%", femaleFormatted: "5%" },
  { age: "55+", male: 5, female: 5, maleFormatted: "5%", femaleFormatted: "5%" },
]

const impressionsData = [
  { date: "Apr 1", impressions: 5200, formattedValue: "5,200" },
  { date: "Apr 5", impressions: 6800, formattedValue: "6,800" },
  { date: "Apr 10", impressions: 8400, formattedValue: "8,400" },
  { date: "Apr 15", impressions: 9800, formattedValue: "9,800" },
  { date: "Apr 20", impressions: 10200, formattedValue: "10,200" },
  { date: "Apr 25", impressions: 11600, formattedValue: "11,600" },
  { date: "Apr 30", impressions: 12000, formattedValue: "12,000" },
]

const ctrData = [
  { date: "Apr 1", ctr: 4.2, formattedValue: "4.2%" },
  { date: "Apr 5", ctr: 4.8, formattedValue: "4.8%" },
  { date: "Apr 10", ctr: 5.4, formattedValue: "5.4%" },
  { date: "Apr 15", ctr: 5.8, formattedValue: "5.8%" },
  { date: "Apr 20", ctr: 6.2, formattedValue: "6.2%" },
  { date: "Apr 25", ctr: 5.6, formattedValue: "5.6%" },
  { date: "Apr 30", ctr: 5.7, formattedValue: "5.7%" },
]

const engagementRateData = [
  { date: "Apr 1", rate: 6.2, formattedValue: "6.2%" },
  { date: "Apr 5", rate: 6.8, formattedValue: "6.8%" },
  { date: "Apr 10", rate: 7.4, formattedValue: "7.4%" },
  { date: "Apr 15", rate: 7.8, formattedValue: "7.8%" },
  { date: "Apr 20", rate: 8.2, formattedValue: "8.2%" },
  { date: "Apr 25", rate: 7.6, formattedValue: "7.6%" },
  { date: "Apr 30", rate: 8.0, formattedValue: "8.0%" },
]

const interactionsData = [
  { type: "Likes", count: 3245, formattedValue: "3,245" },
  { type: "Comments", count: 1324, formattedValue: "1,324" },
  { type: "Shares", count: 876, formattedValue: "876" },
  { type: "Saves", count: 542, formattedValue: "542" },
]

export default function AnalyticsPage() {
  // Use state to store the data and only access the brand context on the client side
  const [data, setData] = useState(defaultAnalyticsData)
  const [isMounted, setIsMounted] = useState(false)
  const { selectedBrand } = useBrand()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Only try to access the brand context when the component is mounted on the client
  useEffect(() => {
    if (isMounted) {
      try {
        if (selectedBrand && brandAnalyticsData[selectedBrand.id]) {
          setData(brandAnalyticsData[selectedBrand.id])
        }
      } catch (error) {
        console.error("Error accessing brand context:", error)
        // Fallback to default data if there's an error
        setData(defaultAnalyticsData)
      }
    }
  }, [isMounted, selectedBrand])

  return (
    <div className="flex flex-col gap-4 p-4 md:p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{data.title}</h1>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.stats.views}</div>
                <p className="text-xs text-muted-foreground">{data.stats.viewsChange} from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Watch Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.stats.watchTime}</div>
                <p className="text-xs text-muted-foreground">{data.stats.watchTimeChange} from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.stats.engagement}</div>
                <p className="text-xs text-muted-foreground">{data.stats.engagementChange} from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Subscribers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data.stats.subscribers}</div>
                <p className="text-xs text-muted-foreground">{data.stats.subscribersChange} from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Views Over Time</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                {isMounted && (
                  <ResponsiveLine
                    data={[
                      {
                        id: "Views",
                        data: data.viewsData.map((item) => ({
                          x: item.date,
                          y: item.views,
                        })),
                      },
                    ]}
                    margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                    xScale={{ type: "point" }}
                    yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
                    curve="monotoneX"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Date",
                      legendOffset: 36,
                      legendPosition: "middle",
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Views",
                      legendOffset: -40,
                      legendPosition: "middle",
                    }}
                    colors={["#8b5cf6"]}
                    pointSize={10}
                    pointColor={{ theme: "background" }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: "serieColor" }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                  />
                )}
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                {isMounted && (
                  <ResponsivePie
                    data={data.trafficData.map((item) => ({
                      id: item.source,
                      label: item.source,
                      value: item.value,
                    }))}
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    colors={["#8b5cf6", "#a78bfa", "#c4b5fd", "#ddd6fe"]}
                    borderWidth={1}
                    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: "color" }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
                    legends={[]}
                  />
                )}
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Demographics</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                {isMounted && (
                  <ResponsiveBar
                    data={demographicsData}
                    keys={["male", "female"]}
                    indexBy="age"
                    margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                    padding={0.3}
                    groupMode="grouped"
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={["#8b5cf6", "#c4b5fd"]}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Age Group",
                      legendPosition: "middle",
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Percentage",
                      legendPosition: "middle",
                      legendOffset: -40,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    legends={[
                      {
                        dataFrom: "keys",
                        anchor: "bottom",
                        direction: "row",
                        justify: false,
                        translateX: 0,
                        translateY: 40,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                          {
                            on: "hover",
                            style: {
                              itemOpacity: 1,
                            },
                          },
                        ],
                      },
                    ]}
                  />
                )}
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Top Performing Content</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.topContent.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-lg font-bold text-purple-700 dark:text-purple-300">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.title}</h3>
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.views} views</p>
                          <span className={`text-xs ${item.positive ? "text-green-500" : "text-red-500"}`}>
                            {item.change}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="content" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Impressions</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                {isMounted && (
                  <ResponsiveLine
                    data={[
                      {
                        id: "Impressions",
                        data: impressionsData.map((item) => ({
                          x: item.date,
                          y: item.impressions,
                        })),
                      },
                    ]}
                    margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                    xScale={{ type: "point" }}
                    yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
                    curve="monotoneX"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Date",
                      legendOffset: 36,
                      legendPosition: "middle",
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Impressions",
                      legendOffset: -40,
                      legendPosition: "middle",
                    }}
                    colors={["#8b5cf6"]}
                    pointSize={10}
                    pointColor={{ theme: "background" }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: "serieColor" }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                  />
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Click-Through Rate</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                {isMounted && (
                  <ResponsiveLine
                    data={[
                      {
                        id: "CTR",
                        data: ctrData.map((item) => ({
                          x: item.date,
                          y: item.ctr,
                        })),
                      },
                    ]}
                    margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                    xScale={{ type: "point" }}
                    yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
                    curve="monotoneX"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Date",
                      legendOffset: 36,
                      legendPosition: "middle",
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "CTR (%)",
                      legendOffset: -40,
                      legendPosition: "middle",
                    }}
                    colors={["#8b5cf6"]}
                    pointSize={10}
                    pointColor={{ theme: "background" }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: "serieColor" }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                  />
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Engagement Rate</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                {isMounted && (
                  <ResponsiveLine
                    data={[
                      {
                        id: "Engagement",
                        data: engagementRateData.map((item) => ({
                          x: item.date,
                          y: item.rate,
                        })),
                      },
                    ]}
                    margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                    xScale={{ type: "point" }}
                    yScale={{ type: "linear", min: "auto", max: "auto", stacked: false, reverse: false }}
                    curve="monotoneX"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Date",
                      legendOffset: 36,
                      legendPosition: "middle",
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Rate (%)",
                      legendOffset: -40,
                      legendPosition: "middle",
                    }}
                    colors={["#8b5cf6"]}
                    pointSize={10}
                    pointColor={{ theme: "background" }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: "serieColor" }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                  />
                )}
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Content Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded">
                <p className="text-muted-foreground">Detailed content performance metrics coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="audience" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Audience Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center border rounded">
                  <p className="text-muted-foreground">Audience growth metrics coming soon</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Audience Interactions</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                {isMounted && (
                  <ResponsiveBar
                    data={interactionsData}
                    keys={["count"]}
                    indexBy="type"
                    margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
                    padding={0.3}
                    valueScale={{ type: "linear" }}
                    indexScale={{ type: "band", round: true }}
                    colors={["#8b5cf6"]}
                    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Interaction Type",
                      legendPosition: "middle",
                      legendOffset: 32,
                    }}
                    axisLeft={{
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                      legend: "Count",
                      legendPosition: "middle",
                      legendOffset: -40,
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
                  />
                )}
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Audience Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded">
                <p className="text-muted-foreground">Detailed audience insights coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Analytics</CardTitle>
              <CardDescription>Detailed analytics for your revenue will appear here.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded">
                <p className="text-muted-foreground">Revenue analytics dashboard coming soon</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
