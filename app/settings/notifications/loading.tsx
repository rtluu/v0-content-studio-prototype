import { Header } from "@/components/header"
import { Skeleton } from "@/components/ui/skeleton"
import { Bell } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationSettingsLoading() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Notification Settings</h1>
              <p className="text-muted-foreground">Customize how and when you receive notifications</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-32" />
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-red-600" />
                  <CardTitle>Notification Preferences</CardTitle>
                </div>
                <Skeleton className="h-9 w-[180px]" />
              </div>
              <CardDescription>
                <Skeleton className="h-4 w-96" />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="engagement">Engagement</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="system">System</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-4 space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-col space-y-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
                    >
                      <div className="space-y-1">
                        <Skeleton className="h-5 w-48" />
                        <Skeleton className="h-4 w-64" />
                      </div>
                      <div className="flex items-center space-x-4">
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-6 w-24" />
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t pt-4">
              <Skeleton className="h-4 w-64" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-9 w-32" />
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Schedule</CardTitle>
              <CardDescription>
                <Skeleton className="h-4 w-80" />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-9 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-9 w-full" />
                  </div>
                </div>
                <Skeleton className="h-6 w-40" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
