"use client"

import { useState } from "react"
import { Search, DollarSign, TrendingUp, CreditCard, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const revenueData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4500 },
  { name: "May", revenue: 6000 },
  { name: "Jun", revenue: 5500 },
  { name: "Jul", revenue: 7000 },
]

const sourceData = [
  { name: "Subscriptions", value: 65 },
  { name: "Ads", value: 20 },
  { name: "Sponsorships", value: 10 },
  { name: "Donations", value: 5 },
]

export default function MonetizationPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col h-full">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 gap-4">
          <h1 className="text-xl font-semibold">Monetization</h1>
          <div className="ml-auto flex items-center gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search transactions..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[320px]"
              />
            </div>
            <Button className="gap-1">
              <DollarSign className="h-4 w-4" />
              <span>Withdraw Funds</span>
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="flex-1">
        <div className="border-b px-4">
          <TabsList className="mt-2">
            <TabsTrigger value="overview" onClick={() => setActiveTab("overview")}>
              Overview
            </TabsTrigger>
            <TabsTrigger value="revenue" onClick={() => setActiveTab("revenue")}>
              Revenue
            </TabsTrigger>
            <TabsTrigger value="payouts" onClick={() => setActiveTab("payouts")}>
              Payouts
            </TabsTrigger>
            <TabsTrigger value="settings" onClick={() => setActiveTab("settings")}>
              Settings
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="overview" className="p-4 flex-1">
          <div className="grid gap-4 md:grid-cols-3 mb-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total Revenue</CardDescription>
                <CardTitle className="text-2xl">$24,500.00</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  <span className="text-green-500 font-medium inline-flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    12% from last month
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Available Balance</CardDescription>
                <CardTitle className="text-2xl">$12,750.00</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm" className="mt-2">
                  <CreditCard className="h-3 w-3 mr-1" />
                  Withdraw
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Next Payout</CardDescription>
                <CardTitle className="text-2xl">$3,250.00</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  Scheduled for May 30, 2025
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue for the current year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Revenue Sources</CardTitle>
                <CardDescription>Breakdown by revenue stream</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={sourceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="p-4">
          <div className="border rounded-lg p-4 h-[600px] flex items-center justify-center">
            <p className="text-muted-foreground">Detailed revenue analytics coming soon</p>
          </div>
        </TabsContent>

        <TabsContent value="payouts" className="p-4">
          <div className="border rounded-lg p-4 h-[600px] flex items-center justify-center">
            <p className="text-muted-foreground">Payout history and settings coming soon</p>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="p-4">
          <div className="border rounded-lg p-4 h-[600px] flex items-center justify-center">
            <p className="text-muted-foreground">Monetization settings coming soon</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
