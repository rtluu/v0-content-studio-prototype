import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Bell, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: "Notification Settings | Content Studio",
  description: "Customize your notification preferences in Content Studio",
}

interface NotificationSetting {
  id: string
  title: string
  description: string
  enabled: boolean
  category: "content" | "engagement" | "system" | "marketing"
  channels: {
    email: boolean
    push: boolean
    inApp: boolean
  }
}

export default function NotificationSettingsPage() {
  // Mock notification settings data
  const notificationSettings: NotificationSetting[] = [
    {
      id: "1",
      title: "New Comments",
      description: "When someone comments on your content",
      enabled: true,
      category: "engagement",
      channels: {
        email: true,
        push: true,
        inApp: true,
      },
    },
    {
      id: "2",
      title: "Comment Replies",
      description: "When someone replies to your comments",
      enabled: true,
      category: "engagement",
      channels: {
        email: true,
        push: true,
        inApp: true,
      },
    },
    {
      id: "3",
      title: "Mentions",
      description: "When someone mentions you in a comment",
      enabled: true,
      category: "engagement",
      channels: {
        email: true,
        push: true,
        inApp: true,
      },
    },
    {
      id: "4",
      title: "New Followers",
      description: "When someone follows your content",
      enabled: true,
      category: "engagement",
      channels: {
        email: true,
        push: false,
        inApp: true,
      },
    },
    {
      id: "5",
      title: "Content Milestones",
      description: "When your content reaches view milestones",
      enabled: true,
      category: "content",
      channels: {
        email: true,
        push: true,
        inApp: true,
      },
    },
    {
      id: "6",
      title: "Content Performance",
      description: "Weekly performance reports for your content",
      enabled: true,
      category: "content",
      channels: {
        email: true,
        push: false,
        inApp: true,
      },
    },
    {
      id: "7",
      title: "Trending Topics",
      description: "Alerts about trending topics in your niche",
      enabled: false,
      category: "content",
      channels: {
        email: false,
        push: false,
        inApp: true,
      },
    },
    {
      id: "8",
      title: "System Updates",
      description: "Important updates about Content Studio",
      enabled: true,
      category: "system",
      channels: {
        email: true,
        push: true,
        inApp: true,
      },
    },
    {
      id: "9",
      title: "Security Alerts",
      description: "Important security notifications",
      enabled: true,
      category: "system",
      channels: {
        email: true,
        push: true,
        inApp: true,
      },
    },
    {
      id: "10",
      title: "Feature Announcements",
      description: "New features and improvements",
      enabled: true,
      category: "system",
      channels: {
        email: true,
        push: false,
        inApp: true,
      },
    },
    {
      id: "11",
      title: "Tips & Tutorials",
      description: "Tips to help you get the most out of Content Studio",
      enabled: false,
      category: "marketing",
      channels: {
        email: false,
        push: false,
        inApp: true,
      },
    },
    {
      id: "12",
      title: "Special Offers",
      description: "Special offers and promotions",
      enabled: false,
      category: "marketing",
      channels: {
        email: false,
        push: false,
        inApp: false,
      },
    },
  ]

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex-1 space-y-4 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/settings">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Notification Settings</h1>
              <p className="text-muted-foreground">Customize how and when you receive notifications</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/notifications">
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <Bell className="h-4 w-4" />
                View Notifications
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
                  <CardTitle>Notification Preferences</CardTitle>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Notification channel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Channels</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="push">Push</SelectItem>
                    <SelectItem value="inApp">In-App</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CardDescription>Choose which notifications you want to receive and how you receive them</CardDescription>
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
                  <div className="space-y-4">
                    {notificationSettings.map((setting) => (
                      <div
                        key={setting.id}
                        className="flex flex-col space-y-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{setting.title}</h4>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Info className="h-4 w-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{setting.description}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <p className="text-sm text-muted-foreground">{setting.description}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-muted-foreground">Email</span>
                            <Switch id={`${setting.id}-email`} checked={setting.channels.email} />
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-muted-foreground">Push</span>
                            <Switch id={`${setting.id}-push`} checked={setting.channels.push} />
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-muted-foreground">In-App</span>
                            <Switch id={`${setting.id}-inapp`} checked={setting.channels.inApp} />
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-muted-foreground">Enabled</span>
                            <Switch id={`${setting.id}-enabled`} checked={setting.enabled} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="engagement" className="mt-4 space-y-4">
                  <div className="space-y-4">
                    {notificationSettings
                      .filter((setting) => setting.category === "engagement")
                      .map((setting) => (
                        <div
                          key={setting.id}
                          className="flex flex-col space-y-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{setting.title}</h4>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{setting.description}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <p className="text-sm text-muted-foreground">{setting.description}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">Email</span>
                              <Switch id={`${setting.id}-email`} checked={setting.channels.email} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">Push</span>
                              <Switch id={`${setting.id}-push`} checked={setting.channels.push} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">In-App</span>
                              <Switch id={`${setting.id}-inapp`} checked={setting.channels.inApp} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">Enabled</span>
                              <Switch id={`${setting.id}-enabled`} checked={setting.enabled} />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="content" className="mt-4 space-y-4">
                  <div className="space-y-4">
                    {notificationSettings
                      .filter((setting) => setting.category === "content")
                      .map((setting) => (
                        <div
                          key={setting.id}
                          className="flex flex-col space-y-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{setting.title}</h4>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{setting.description}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <p className="text-sm text-muted-foreground">{setting.description}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">Email</span>
                              <Switch id={`${setting.id}-email`} checked={setting.channels.email} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">Push</span>
                              <Switch id={`${setting.id}-push`} checked={setting.channels.push} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">In-App</span>
                              <Switch id={`${setting.id}-inapp`} checked={setting.channels.inApp} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">Enabled</span>
                              <Switch id={`${setting.id}-enabled`} checked={setting.enabled} />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="system" className="mt-4 space-y-4">
                  <div className="space-y-4">
                    {notificationSettings
                      .filter((setting) => setting.category === "system")
                      .map((setting) => (
                        <div
                          key={setting.id}
                          className="flex flex-col space-y-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{setting.title}</h4>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{setting.description}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <p className="text-sm text-muted-foreground">{setting.description}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">Email</span>
                              <Switch id={`${setting.id}-email`} checked={setting.channels.email} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">Push</span>
                              <Switch id={`${setting.id}-push`} checked={setting.channels.push} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">In-App</span>
                              <Switch id={`${setting.id}-inapp`} checked={setting.channels.inApp} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">Enabled</span>
                              <Switch id={`${setting.id}-enabled`} checked={setting.enabled} />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="marketing" className="mt-4 space-y-4">
                  <div className="space-y-4">
                    {notificationSettings
                      .filter((setting) => setting.category === "marketing")
                      .map((setting) => (
                        <div
                          key={setting.id}
                          className="flex flex-col space-y-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{setting.title}</h4>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Info className="h-4 w-4 text-muted-foreground" />
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{setting.description}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <p className="text-sm text-muted-foreground">{setting.description}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">Email</span>
                              <Switch id={`${setting.id}-email`} checked={setting.channels.email} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">Push</span>
                              <Switch id={`${setting.id}-push`} checked={setting.channels.push} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">In-App</span>
                              <Switch id={`${setting.id}-inapp`} checked={setting.channels.inApp} />
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">Enabled</span>
                              <Switch id={`${setting.id}-enabled`} checked={setting.enabled} />
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t pt-4">
              <p className="text-sm text-muted-foreground">
                You can also manage notification settings from your profile
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-red-600 hover:bg-red-700">Save Changes</Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Schedule</CardTitle>
              <CardDescription>Set quiet hours when you don't want to receive push notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Quiet Hours Start</h4>
                    <Select defaultValue="22:00">
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                        <SelectItem value="21:00">9:00 PM</SelectItem>
                        <SelectItem value="22:00">10:00 PM</SelectItem>
                        <SelectItem value="23:00">11:00 PM</SelectItem>
                        <SelectItem value="00:00">12:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Quiet Hours End</h4>
                    <Select defaultValue="07:00">
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="06:00">6:00 AM</SelectItem>
                        <SelectItem value="07:00">7:00 AM</SelectItem>
                        <SelectItem value="08:00">8:00 AM</SelectItem>
                        <SelectItem value="09:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="quiet-hours-enabled" defaultChecked />
                  <label htmlFor="quiet-hours-enabled" className="text-sm font-medium">
                    Enable quiet hours
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Email Digest</CardTitle>
              <CardDescription>Receive a summary of your notifications instead of individual emails</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Digest Frequency</h4>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Real-time (Individual emails)</SelectItem>
                      <SelectItem value="daily">Daily Digest</SelectItem>
                      <SelectItem value="weekly">Weekly Digest</SelectItem>
                      <SelectItem value="never">Never (No emails)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="digest-enabled" defaultChecked />
                  <label htmlFor="digest-enabled" className="text-sm font-medium">
                    Enable email digest
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end border-t pt-4">
              <Button className="bg-red-600 hover:bg-red-700">Save Preferences</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
