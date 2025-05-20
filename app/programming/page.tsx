"use client"

import { useState } from "react"
import { Calendar, Clock, Filter, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProgrammingPage() {
  const [activeTab, setActiveTab] = useState("schedule")

  return (
    <div className="flex flex-col h-full">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 gap-4">
          <h1 className="text-xl font-semibold">Programming</h1>
          <div className="ml-auto flex items-center gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search programming..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[320px]"
              />
            </div>
            <Button className="gap-1">
              <Plus className="h-4 w-4" />
              <span>New Schedule</span>
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="schedule" className="flex-1">
        <div className="border-b px-4">
          <TabsList className="mt-2">
            <TabsTrigger value="schedule" onClick={() => setActiveTab("schedule")}>
              Schedule
            </TabsTrigger>
            <TabsTrigger value="calendar" onClick={() => setActiveTab("calendar")}>
              Calendar
            </TabsTrigger>
            <TabsTrigger value="templates" onClick={() => setActiveTab("templates")}>
              Templates
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="schedule" className="p-4 flex-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Schedules</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Clock className="h-4 w-4 mr-2" />
                Today
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                This Week
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Prime Time {i}</CardTitle>
                    <Badge variant={i % 2 === 0 ? "default" : "outline"}>{i % 2 === 0 ? "Active" : "Draft"}</Badge>
                  </div>
                  <CardDescription>Updated 2 days ago</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-muted-foreground">Time Slot:</span>
                      <span>8:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-muted-foreground">Frequency:</span>
                      <span>Weekdays</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Content:</span>
                      <span>{i * 3} articles</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    View Schedule
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="p-4">
          <div className="border rounded-lg p-4 h-[600px] flex items-center justify-center">
            <p className="text-muted-foreground">Calendar view coming soon</p>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="p-4">
          <div className="border rounded-lg p-4 h-[600px] flex items-center justify-center">
            <p className="text-muted-foreground">Templates view coming soon</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
