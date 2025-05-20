import { Header } from "@/components/header"
import { Skeleton } from "@/components/ui/skeleton"
import { Bell } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationsLoading() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
            <p className="text-muted-foreground">Stay updated with comments, mentions, and system alerts</p>
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-8 w-32" />
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-red-600" />
                  <CardTitle>All Notifications</CardTitle>
                </div>
                <Skeleton className="h-9 w-[180px]" />
              </div>
              <CardDescription>
                <Skeleton className="h-4 w-64" />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="unread">Unread</TabsTrigger>
                  <TabsTrigger value="archived">Archived</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-4 space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="relative flex items-start space-x-4 rounded-lg border p-4">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <Skeleton className="h-4 w-32" />
                          <Skeleton className="h-4 w-16" />
                        </div>
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <div className="pt-2">
                          <Skeleton className="h-8 w-32" />
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t pt-4">
              <Skeleton className="h-4 w-48" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-40" />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
