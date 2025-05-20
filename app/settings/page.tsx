"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  CreditCard,
  HelpCircle,
  Key,
  Lock,
  Mail,
  Palette,
  Save,
  Shield,
  User,
  Users,
  Zap,
  Clock,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container mx-auto py-6 px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
            <p className="text-gray-500">Manage your account settings and preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
          {/* Settings Navigation - Mobile Tabs */}
          <div className="md:hidden">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="bg-gray-100 text-gray-900 grid grid-cols-3 h-auto">
                <TabsTrigger value="account" className="data-[state=active]:bg-white py-2">
                  Account
                </TabsTrigger>
                <TabsTrigger value="appearance" className="data-[state=active]:bg-white py-2">
                  Appearance
                </TabsTrigger>
                <TabsTrigger value="notifications" className="data-[state=active]:bg-white py-2">
                  Notifications
                </TabsTrigger>
                <TabsTrigger value="privacy" className="data-[state=active]:bg-white py-2">
                  Privacy
                </TabsTrigger>
                <TabsTrigger value="integrations" className="data-[state=active]:bg-white py-2">
                  Integrations
                </TabsTrigger>
                <TabsTrigger value="billing" className="data-[state=active]:bg-white py-2">
                  Billing
                </TabsTrigger>
              </TabsList>

              <MobileTabContent />
            </Tabs>
          </div>

          {/* Settings Navigation - Desktop Sidebar */}
          <div className="hidden md:block">
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <nav className="space-y-1">
                  {[
                    { icon: User, label: "Account", href: "#account" },
                    { icon: Palette, label: "Appearance", href: "#appearance" },
                    { icon: Bell, label: "Notifications", href: "#notifications" },
                    { icon: Shield, label: "Privacy & Security", href: "#privacy" },
                    { icon: Zap, label: "Integrations", href: "#integrations" },
                    { icon: CreditCard, label: "Billing", href: "#billing" },
                    { icon: Users, label: "Team", href: "#team" },
                    { icon: HelpCircle, label: "Help & Support", href: "#help" },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      <item.icon className="h-5 w-5 text-gray-500" />
                      {item.label}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Settings Content - Desktop */}
          <div className="space-y-6 hidden md:block">
            <AccountSettings handleSave={handleSave} isSaving={isSaving} />
            <AppearanceSettings handleSave={handleSave} isSaving={isSaving} />
            <NotificationSettings handleSave={handleSave} isSaving={isSaving} />
            <PrivacySettings handleSave={handleSave} isSaving={isSaving} />
            <IntegrationSettings handleSave={handleSave} isSaving={isSaving} />
            <BillingSettings />
            <TeamSettings />
            <HelpSettings />
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileTabContent() {
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
    }, 1000)
  }

  return (
    <>
      <TabsContent value="account" className="mt-4 space-y-4">
        <AccountSettings handleSave={handleSave} isSaving={isSaving} />
      </TabsContent>
      <TabsContent value="appearance" className="mt-4 space-y-4">
        <AppearanceSettings handleSave={handleSave} isSaving={isSaving} />
      </TabsContent>
      <TabsContent value="notifications" className="mt-4 space-y-4">
        <NotificationSettings handleSave={handleSave} isSaving={isSaving} />
      </TabsContent>
      <TabsContent value="privacy" className="mt-4 space-y-4">
        <PrivacySettings handleSave={handleSave} isSaving={isSaving} />
      </TabsContent>
      <TabsContent value="integrations" className="mt-4 space-y-4">
        <IntegrationSettings handleSave={handleSave} isSaving={isSaving} />
      </TabsContent>
      <TabsContent value="billing" className="mt-4 space-y-4">
        <BillingSettings />
      </TabsContent>
    </>
  )
}

function AccountSettings({ handleSave, isSaving }: { handleSave: () => void; isSaving: boolean }) {
  return (
    <div id="account" className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Account Settings</h3>
          <p className="text-sm text-gray-500">Manage your account information</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving} className="bg-purple-600 hover:bg-purple-700 text-white">
          {isSaving ? (
            <>
              <span className="animate-spin mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              </span>
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Update your password</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current password</Label>
            <Input id="current-password" type="password" className="border-gray-200" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="new-password">New password</Label>
              <Input id="new-password" type="password" className="border-gray-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm password</Label>
              <Input id="confirm-password" type="password" className="border-gray-200" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Connected Accounts</CardTitle>
          <CardDescription>Connect your social media accounts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: "Google", connected: true, email: "jane@gmail.com" },
            { name: "Twitter", connected: true, username: "@janedoe" },
            { name: "Facebook", connected: false },
            { name: "LinkedIn", connected: false },
          ].map((account, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
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
                    className="text-gray-500"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">{account.name}</p>
                  {account.connected && (
                    <p className="text-sm text-gray-500">{account.email || account.username || "Connected"}</p>
                  )}
                </div>
              </div>
              <Button variant="outline" className="border-gray-200">
                {account.connected ? "Disconnect" : "Connect"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="text-red-600">Danger Zone</CardTitle>
          <CardDescription>Irreversible and destructive actions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Delete Account</p>
              <p className="text-sm text-gray-500">Permanently delete your account and all of your content</p>
            </div>
            <Button variant="destructive">Delete Account</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function AppearanceSettings({ handleSave, isSaving }: { handleSave: () => void; isSaving: boolean }) {
  return (
    <div id="appearance" className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Appearance</h3>
          <p className="text-sm text-gray-500">Customize how Content Studio looks</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving} className="bg-purple-600 hover:bg-purple-700 text-white">
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Theme</CardTitle>
          <CardDescription>Select your preferred theme</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="relative rounded-md border-2 border-purple-600 p-1">
              <div className="absolute -top-2 -right-2">
                <Badge className="bg-purple-600 text-white">Active</Badge>
              </div>
              <div className="space-y-2 rounded-md bg-white p-3">
                <div className="h-4 w-full rounded bg-gray-100"></div>
                <div className="h-20 w-full rounded bg-gray-50"></div>
                <div className="h-4 w-1/2 rounded bg-gray-100"></div>
              </div>
              <p className="mt-2 text-center text-sm font-medium">Light</p>
            </div>
            <div className="relative rounded-md border-2 border-gray-200 p-1">
              <div className="space-y-2 rounded-md bg-gray-900 p-3">
                <div className="h-4 w-full rounded bg-gray-700"></div>
                <div className="h-20 w-full rounded bg-gray-800"></div>
                <div className="h-4 w-1/2 rounded bg-gray-700"></div>
              </div>
              <p className="mt-2 text-center text-sm font-medium">Dark</p>
            </div>
            <div className="relative rounded-md border-2 border-gray-200 p-1">
              <div className="space-y-2 rounded-md bg-white p-3">
                <div className="h-4 w-full rounded bg-gray-100"></div>
                <div className="h-20 w-full rounded bg-gray-50"></div>
                <div className="h-4 w-1/2 rounded bg-gray-100"></div>
              </div>
              <p className="mt-2 text-center text-sm font-medium">System</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Accent Color</CardTitle>
          <CardDescription>Choose your accent color</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-6">
            {[
              { color: "bg-purple-600", name: "Purple", active: true },
              { color: "bg-red-600", name: "Red" },
              { color: "bg-green-600", name: "Green" },
              { color: "bg-blue-600", name: "Blue" },
              { color: "bg-orange-600", name: "Orange" },
              { color: "bg-pink-600", name: "Pink" },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div
                  className={`relative h-12 w-full rounded-md ${item.color} ${
                    item.active ? "ring-2 ring-offset-2 ring-purple-600" : ""
                  }`}
                >
                  {item.active && (
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
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  )}
                </div>
                <p className="text-center text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Layout</CardTitle>
          <CardDescription>Customize your dashboard layout</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Compact Mode</p>
              <p className="text-sm text-gray-500">Use a more compact layout to fit more content</p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Sidebar Position</p>
              <p className="text-sm text-gray-500">Choose the position of the sidebar</p>
            </div>
            <Select defaultValue="left">
              <SelectTrigger className="w-[180px] border-gray-200">
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="left">Left</SelectItem>
                <SelectItem value="right">Right</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Content Density</p>
              <p className="text-sm text-gray-500">Adjust the density of content</p>
            </div>
            <Select defaultValue="comfortable">
              <SelectTrigger className="w-[180px] border-gray-200">
                <SelectValue placeholder="Select density" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="comfortable">Comfortable</SelectItem>
                <SelectItem value="compact">Compact</SelectItem>
                <SelectItem value="expanded">Expanded</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function NotificationSettings({ handleSave, isSaving }: { handleSave: () => void; isSaving: boolean }) {
  return (
    <div id="notifications" className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Notifications</h3>
          <p className="text-sm text-gray-500">Manage your notification preferences</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving} className="bg-purple-600 hover:bg-purple-700 text-white">
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Manage email notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              title: "Comments",
              description: "Receive emails when someone comments on your content",
              defaultChecked: true,
            },
            {
              title: "Mentions",
              description: "Receive emails when someone mentions you",
              defaultChecked: true,
            },
            {
              title: "Followers",
              description: "Receive emails when someone follows you",
              defaultChecked: false,
            },
            {
              title: "Content Performance",
              description: "Receive weekly performance reports for your content",
              defaultChecked: true,
            },
            {
              title: "Product Updates",
              description: "Receive updates about new features and improvements",
              defaultChecked: true,
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <Switch defaultChecked={item.defaultChecked} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
          <CardDescription>Manage push notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              title: "Comments",
              description: "Receive push notifications when someone comments on your content",
              defaultChecked: true,
            },
            {
              title: "Mentions",
              description: "Receive push notifications when someone mentions you",
              defaultChecked: true,
            },
            {
              title: "Followers",
              description: "Receive push notifications when someone follows you",
              defaultChecked: true,
            },
            {
              title: "Content Performance",
              description: "Receive push notifications about significant performance milestones",
              defaultChecked: true,
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <Switch defaultChecked={item.defaultChecked} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Notification Schedule</CardTitle>
          <CardDescription>Set your preferred notification times</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Quiet Hours</p>
              <p className="text-sm text-gray-500">Don't send notifications during these hours</p>
            </div>
            <Switch defaultChecked={true} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="quiet-start">Start Time</Label>
              <Select defaultValue="22:00">
                <SelectTrigger id="quiet-start" className="border-gray-200">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20:00">8:00 PM</SelectItem>
                  <SelectItem value="21:00">9:00 PM</SelectItem>
                  <SelectItem value="22:00">10:00 PM</SelectItem>
                  <SelectItem value="23:00">11:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quiet-end">End Time</Label>
              <Select defaultValue="07:00">
                <SelectTrigger id="quiet-end" className="border-gray-200">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="06:00">6:00 AM</SelectItem>
                  <SelectItem value="07:00">7:00 AM</SelectItem>
                  <SelectItem value="08:00">8:00 AM</SelectItem>
                  <SelectItem value="09:00">9:00 AM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function PrivacySettings({ handleSave, isSaving }: { handleSave: () => void; isSaving: boolean }) {
  return (
    <div id="privacy" className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Privacy & Security</h3>
          <p className="text-sm text-gray-500">Manage your privacy and security settings</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving} className="bg-purple-600 hover:bg-purple-700 text-white">
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Privacy</CardTitle>
          <CardDescription>Control your privacy settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              title: "Profile Visibility",
              description: "Make your profile visible to everyone",
              defaultChecked: true,
            },
            {
              title: "Show Email Address",
              description: "Display your email address on your public profile",
              defaultChecked: false,
            },
            {
              title: "Content Analytics Sharing",
              description: "Share your content analytics with collaborators",
              defaultChecked: true,
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
              <Switch defaultChecked={item.defaultChecked} />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>Enhance your account security</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
            </div>
            <Button variant="outline" className="border-gray-200">
              <Shield className="mr-2 h-4 w-4" />
              Setup 2FA
            </Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Active Sessions</p>
              <p className="text-sm text-gray-500">Manage your active sessions</p>
            </div>
            <Button variant="outline" className="border-gray-200">
              <Lock className="mr-2 h-4 w-4" />
              Manage
            </Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Login History</p>
              <p className="text-sm text-gray-500">View your recent login activity</p>
            </div>
            <Button variant="outline" className="border-gray-200">
              <Clock className="mr-2 h-4 w-4" />
              View
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Data & Privacy</CardTitle>
          <CardDescription>Manage your data and privacy preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Data Collection</p>
              <p className="text-sm text-gray-500">Allow us to collect usage data to improve our service</p>
            </div>
            <Switch defaultChecked={true} />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Personalized Recommendations</p>
              <p className="text-sm text-gray-500">Receive content recommendations based on your activity</p>
            </div>
            <Switch defaultChecked={true} />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Download Your Data</p>
              <p className="text-sm text-gray-500">Download a copy of your data</p>
            </div>
            <Button variant="outline" className="border-gray-200">
              Download
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function IntegrationSettings({ handleSave, isSaving }: { handleSave: () => void; isSaving: boolean }) {
  return (
    <div id="integrations" className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Integrations & API</h3>
          <p className="text-sm text-gray-500">Manage your integrations and API access</p>
        </div>
        <Button onClick={handleSave} disabled={isSaving} className="bg-purple-600 hover:bg-purple-700 text-white">
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Connected Services</CardTitle>
          <CardDescription>Manage third-party service connections</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: "Google Analytics", connected: true, status: "Connected on May 15, 2023" },
            { name: "Mailchimp", connected: true, status: "Connected on June 2, 2023" },
            { name: "Zapier", connected: false },
            { name: "Slack", connected: false },
          ].map((service, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
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
                    className="text-gray-500"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" y1="22" x2="12" y2="12" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">{service.name}</p>
                  {service.connected && <p className="text-sm text-gray-500">{service.status}</p>}
                </div>
              </div>
              <Button variant="outline" className="border-gray-200">
                {service.connected ? "Disconnect" : "Connect"}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>Manage your API keys</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Production API Key</p>
                <p className="text-sm text-gray-500">Last used: 2 hours ago</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-gray-200">
                  <Key className="mr-2 h-4 w-4" />
                  Show
                </Button>
                <Button variant="outline" size="sm" className="border-gray-200">
                  Regenerate
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Development API Key</p>
                <p className="text-sm text-gray-500">Last used: 5 days ago</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-gray-200">
                  <Key className="mr-2 h-4 w-4" />
                  Show
                </Button>
                <Button variant="outline" size="sm" className="border-gray-200">
                  Regenerate
                </Button>
              </div>
            </div>
          </div>
          <Button variant="outline" className="border-gray-200">
            <Key className="mr-2 h-4 w-4" />
            Create New API Key
          </Button>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Webhooks</CardTitle>
          <CardDescription>Manage your webhook endpoints</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Content Published</p>
                <p className="text-sm text-gray-500">https://example.com/webhooks/content</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-gray-200">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="border-gray-200 text-purple-600">
                  Delete
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">New Comment</p>
                <p className="text-sm text-gray-500">https://example.com/webhooks/comments</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-gray-200">
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="border-gray-200 text-purple-600">
                  Delete
                </Button>
              </div>
            </div>
          </div>
          <Button variant="outline" className="border-gray-200">
            Add Webhook
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

function BillingSettings() {
  return (
    <div id="billing" className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Billing & Subscription</h3>
          <p className="text-sm text-gray-500">Manage your subscription and payment methods</p>
        </div>
      </div>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>Your current subscription plan</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md bg-gray-50 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-lg">Pro Plan</h4>
                  <Badge className="bg-purple-600 text-white">Current</Badge>
                </div>
                <p className="text-sm text-gray-500">$19.99/month, billed monthly</p>
                <ul className="mt-2 space-y-1 text-sm">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Unlimited content
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    AI content tools
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <Button variant="outline" className="border-gray-200">
                  Change Plan
                </Button>
                <Button variant="outline" className="border-gray-200 text-red-600">
                  Cancel Subscription
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 border-t px-6 py-4">
          <p className="text-sm">
            Your next billing date is <strong>June 15, 2023</strong>
          </p>
          <Button variant="link" className="h-auto p-0 text-purple-600">
            View billing history
          </Button>
        </CardFooter>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Manage your payment methods</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md bg-gray-50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <CreditCard className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-sm text-gray-500">Expires 04/2025</p>
                </div>
              </div>
              <Badge>Default</Badge>
            </div>
          </div>
          <Button variant="outline" className="border-gray-200">
            <CreditCard className="mr-2 h-4 w-4" />
            Add Payment Method
          </Button>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Billing Information</CardTitle>
          <CardDescription>Manage your billing information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="billing-name">Name</Label>
              <Input id="billing-name" defaultValue="Jane Doe" className="border-gray-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-email">Email</Label>
              <Input id="billing-email" defaultValue="jane@example.com" className="border-gray-200" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="billing-address">Address</Label>
            <Input id="billing-address" defaultValue="123 Main St" className="border-gray-200" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="billing-city">City</Label>
              <Input id="billing-city" defaultValue="San Francisco" className="border-gray-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-state">State</Label>
              <Input id="billing-state" defaultValue="CA" className="border-gray-200" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-zip">ZIP</Label>
              <Input id="billing-zip" defaultValue="94103" className="border-gray-200" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="billing-country">Country</Label>
            <Select defaultValue="us">
              <SelectTrigger id="billing-country" className="border-gray-200">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Save Billing Information</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function TeamSettings() {
  return (
    <div id="team" className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Team Management</h3>
          <p className="text-sm text-gray-500">Manage your team members and permissions</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Users className="mr-2 h-4 w-4" />
          Invite Team Member
        </Button>
      </div>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Manage your team members</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: "Jane Doe", email: "jane@example.com", role: "Owner", joined: "Apr 2022" },
            { name: "John Smith", email: "john@example.com", role: "Admin", joined: "May 2022" },
            { name: "Sarah Johnson", email: "sarah@example.com", role: "Editor", joined: "Jun 2022" },
            { name: "Michael Brown", email: "michael@example.com", role: "Viewer", joined: "Jul 2022" },
          ].map((member, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium">{member.role}</p>
                  <p className="text-xs text-gray-500">Joined {member.joined}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
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
                        className="text-gray-500"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Role</DropdownMenuItem>
                    <DropdownMenuItem>Resend Invitation</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Roles & Permissions</CardTitle>
          <CardDescription>Manage roles and permissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              role: "Owner",
              description: "Full access to all settings and content",
              permissions: ["Create, edit, and delete content", "Manage team members", "Billing and subscription"],
            },
            {
              role: "Admin",
              description: "Access to most settings and content",
              permissions: ["Create, edit, and delete content", "Manage team members", "View analytics"],
            },
            {
              role: "Editor",
              description: "Create and manage content",
              permissions: ["Create and edit content", "View analytics", "Comment on content"],
            },
            {
              role: "Viewer",
              description: "View-only access",
              permissions: ["View content", "View analytics", "Comment on content"],
            },
          ].map((role, index) => (
            <div key={index} className="rounded-md border border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold">{role.role}</h4>
                  <p className="text-sm text-gray-500">{role.description}</p>
                </div>
                <Button variant="outline" size="sm" className="border-gray-200">
                  Edit
                </Button>
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium">Permissions:</p>
                <ul className="mt-1 space-y-1 text-sm text-gray-500">
                  {role.permissions.map((permission, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {permission}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

function HelpSettings() {
  return (
    <div id="help" className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">Help & Support</h3>
          <p className="text-sm text-gray-500">Get help and support for Content Studio</p>
        </div>
      </div>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Documentation</CardTitle>
          <CardDescription>Access our documentation and guides</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Getting Started Guide",
                description: "Learn the basics of Content Studio",
              },
              {
                title: "API Documentation",
                description: "Integrate with our API",
              },
              {
                title: "Feature Guides",
                description: "Detailed guides for each feature",
              },
              {
                title: "Tutorials",
                description: "Step-by-step tutorials",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-md border border-gray-200 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gray-100 p-2">
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
                      className="text-gray-500"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
                <Button variant="link" className="mt-2 h-auto p-0 text-purple-600">
                  View Documentation
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>Get help from our support team</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gray-100 p-2">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <h4 className="font-medium">Email Support</h4>
                <p className="text-sm text-gray-500">Get help via email</p>
              </div>
            </div>
            <Button variant="link" className="mt-2 h-auto p-0 text-purple-600">
              Contact Support
            </Button>
          </div>
          <div className="rounded-md bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gray-100 p-2">
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
                  className="text-gray-500"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Live Chat</h4>
                <p className="text-sm text-gray-500">Chat with our support team</p>
              </div>
            </div>
            <Button variant="link" className="mt-2 h-auto p-0 text-purple-600">
              Start Chat
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle>Feedback</CardTitle>
          <CardDescription>Share your feedback and suggestions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="feedback">Your Feedback</Label>
            <Textarea
              id="feedback"
              placeholder="Share your thoughts, suggestions, or report issues..."
              className="min-h-[100px] border-gray-200"
            />
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Submit Feedback</Button>
        </CardContent>
      </Card>
    </div>
  )
}
