import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  CheckCheck,
  ChevronRight,
  Clock,
  Heart,
  MessageSquare,
  Settings,
  Trash2,
  UserPlus,
  AlertCircle,
  BarChart2,
  ThumbsUp,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Notifications | Content Studio",
  description: "Manage your notifications in Content Studio",
}

interface Notification {
  id: string
  type: "comment" | "mention" | "like" | "follow" | "milestone" | "system" | "analytics"
  title: string
  description: string
  time: string
  read: boolean
  actionUrl?: string
  actionText?: string
  icon: React.ReactNode
}

export default function NotificationsPage() {
  // Mock notifications data
  const notifications: Notification[] = [
    {
      id: "1",
      type: "comment",
      title: "New Comment",
      description: "John Smith commented on your article 'Content Marketing Strategies'",
      time: "5 minutes ago",
      read: false,
      actionUrl: "/content/123",
      actionText: "View Comment",
      icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
    },
    {
      id: "2",
      type: "like",
      title: "Content Liked",
      description: "Your article 'SEO Best Practices' received 10 new likes",
      time: "30 minutes ago",
      read: false,
      actionUrl: "/analytics/123",
      actionText: "View Analytics",
      icon: <ThumbsUp className="h-5 w-5 text-red-500" />,
    },
    {
      id: "3",
      type: "analytics",
      title: "Traffic Spike",
      description: "Your content 'Video Marketing Tips' is trending with 500+ views in the last hour",
      time: "1 hour ago",
      read: true,
      actionUrl: "/analytics/456",
      actionText: "View Details",
      icon: <BarChart2 className="h-5 w-5 text-green-500" />,
    },
    {
      id: "4",
      type: "system",
      title: "System Update",
      description: "Content Studio has been updated with new AI features",
      time: "3 hours ago",
      read: true,
      actionUrl: "/help/updates",
      actionText: "Learn More",
      icon: <AlertCircle className="h-5 w-5 text-purple-500" />,
    },
    {
      id: "5",
      type: "mention",
      title: "You were mentioned",
      description: "Alex Johnson mentioned you in a comment on 'Digital Marketing Trends'",
      time: "5 hours ago",
      read: true,
      actionUrl: "/content/789",
      actionText: "View Mention",
      icon: <UserPlus className="h-5 w-5 text-orange-500" />,
    },
    {
      id: "6",
      type: "milestone",
      title: "Milestone Reached",
      description: "Congratulations! Your content has reached 10,000 total views",
      time: "1 day ago",
      read: true,
      actionUrl: "/analytics/overview",
      actionText: "View Analytics",
      icon: <Heart className="h-5 w-5 text-pink-500" />,
    },
    {
      id: "7",
      type: "follow",
      title: "New Follower",
      description: "Sarah Williams started following your content",
      time: "2 days ago",
      read: true,
      actionUrl: "/profile/followers",
      actionText: "View Profile",
      icon: <UserPlus className="h-5 w-5 text-cyan-500" />,
    },
    {
      id: "8",
      type: "comment",
      title: "Comment Thread",
      description: "There are 5 new replies to a comment thread you're participating in",
      time: "3 days ago",
      read: true,
      actionUrl: "/comments/thread/123",
      actionText: "View Thread",
      icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
    },
  ]

  const unreadCount = notifications.filter((n) => !n.read).length

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
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <CheckCheck className="h-4 w-4" />
              Mark all as read
            </Button>
            <Link href="/settings/notifications">
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-red-600" />
                  <CardTitle>All Notifications</CardTitle>
                  {unreadCount > 0 && (
                    <Badge variant="destructive" className="ml-2">
                      {unreadCount} new
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Notifications</SelectItem>
                      <SelectItem value="comment">Comments</SelectItem>
                      <SelectItem value="mention">Mentions</SelectItem>
                      <SelectItem value="like">Likes</SelectItem>
                      <SelectItem value="follow">Follows</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                      <SelectItem value="analytics">Analytics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <CardDescription>
                You have {notifications.length} notifications, {unreadCount} unread
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="unread">
                    Unread
                    {unreadCount > 0 && (
                      <Badge variant="destructive" className="ml-2">
                        {unreadCount}
                      </Badge>
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="archived">Archived</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-4 space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`relative flex items-start space-x-4 rounded-lg border p-4 ${
                        !notification.read ? "bg-muted/50" : ""
                      }`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                        {notification.icon}
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium leading-none">
                            {notification.title}
                            {!notification.read && (
                              <span className="ml-2 inline-flex h-2 w-2 rounded-full bg-red-600"></span>
                            )}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <span className="sr-only">Open menu</span>
                                  <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                  >
                                    <path
                                      d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  {notification.read ? "Mark as unread" : "Mark as read"}
                                </DropdownMenuItem>
                                <DropdownMenuItem>Archive</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{notification.description}</p>
                        {notification.actionUrl && (
                          <div className="pt-2">
                            <Link href={notification.actionUrl}>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8 text-xs text-red-600 hover:bg-red-50 hover:text-red-700"
                              >
                                {notification.actionText}
                                <ChevronRight className="ml-1 h-3 w-3" />
                              </Button>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="unread" className="mt-4 space-y-4">
                  {notifications
                    .filter((n) => !n.read)
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className="relative flex items-start space-x-4 rounded-lg border bg-muted/50 p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                          {notification.icon}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="font-medium leading-none">
                              {notification.title}
                              <span className="ml-2 inline-flex h-2 w-2 rounded-full bg-red-600"></span>
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <svg
                                      width="15"
                                      height="15"
                                      viewBox="0 0 15 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4"
                                    >
                                      <path
                                        d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>Mark as read</DropdownMenuItem>
                                  <DropdownMenuItem>Archive</DropdownMenuItem>
                                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                          {notification.actionUrl && (
                            <div className="pt-2">
                              <Link href={notification.actionUrl}>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 text-xs text-red-600 hover:bg-red-50 hover:text-red-700"
                                >
                                  {notification.actionText}
                                  <ChevronRight className="ml-1 h-3 w-3" />
                                </Button>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  {unreadCount === 0 && (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <CheckCheck className="h-12 w-12 text-muted-foreground" />
                      <h3 className="mt-4 text-lg font-medium">All caught up!</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        You have no unread notifications at the moment.
                      </p>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="archived" className="mt-4">
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Clock className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No archived notifications</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Archived notifications will appear here.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t pt-4">
              <p className="text-sm text-muted-foreground">
                Showing {notifications.length} of {notifications.length} notifications
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Trash2 className="h-4 w-4" />
                  Clear All
                </Button>
                <Link href="/settings/notifications">
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <Settings className="h-4 w-4" />
                    Notification Preferences
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
