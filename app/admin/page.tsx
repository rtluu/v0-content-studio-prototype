"use client"

import { useState } from "react"
import { Search, Plus, UserCog, Shield, Settings, Users, Database, Pencil, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("users")

  return (
    <div className="flex flex-col h-full">
      <div className="border-b">
        <div className="flex h-16 items-center px-4 gap-4">
          <h1 className="text-xl font-semibold">Admin</h1>
          <div className="ml-auto flex items-center gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-background pl-8 md:w-[300px] lg:w-[320px]"
              />
            </div>
            <Button className="gap-1">
              <Plus className="h-4 w-4" />
              <span>Add User</span>
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="users" className="flex-1">
        <div className="border-b px-4">
          <TabsList className="mt-2">
            <TabsTrigger value="users" onClick={() => setActiveTab("users")}>
              <Users className="h-4 w-4 mr-2" />
              Users
            </TabsTrigger>
            <TabsTrigger value="roles" onClick={() => setActiveTab("roles")}>
              <UserCog className="h-4 w-4 mr-2" />
              Roles
            </TabsTrigger>
            <TabsTrigger value="permissions" onClick={() => setActiveTab("permissions")}>
              <Shield className="h-4 w-4 mr-2" />
              Permissions
            </TabsTrigger>
            <TabsTrigger value="system" onClick={() => setActiveTab("system")}>
              <Settings className="h-4 w-4 mr-2" />
              System
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="users" className="p-4 flex-1">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage users and their access to the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { name: "Jane Doe", email: "jane@example.com", role: "Editor", status: "Active" },
                    { name: "John Smith", email: "john@example.com", role: "Creator", status: "Active" },
                    { name: "Alice Johnson", email: "alice@example.com", role: "Partner", status: "Inactive" },
                    { name: "Bob Williams", email: "bob@example.com", role: "Editor", status: "Active" },
                    { name: "Carol Brown", email: "carol@example.com", role: "Creator", status: "Pending" },
                  ].map((user, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            user.role === "Editor"
                              ? "bg-purple-100 text-purple-800 hover:bg-purple-100"
                              : user.role === "Creator"
                                ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                : "bg-green-100 text-green-800 hover:bg-green-100"
                          }
                        >
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            user.status === "Active" ? "default" : user.status === "Inactive" ? "secondary" : "outline"
                          }
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {["2 hours ago", "1 day ago", "3 days ago", "1 week ago", "2 weeks ago"][i]}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="p-4">
          <Card>
            <CardHeader>
              <CardTitle>Role Management</CardTitle>
              <CardDescription>Define and manage user roles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { name: "Editor", description: "Can manage all content and programming", icon: Pencil },
                  { name: "Partner", description: "Can publish and monetize content", icon: Briefcase },
                  { name: "Creator", description: "Can create and manage their own content", icon: Users },
                  { name: "Viewer", description: "Can view content but not edit", icon: Users },
                  { name: "Admin", description: "Has full system access", icon: Shield },
                  { name: "API", description: "System integration access", icon: Database },
                ].map((role, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-primary/10">
                          <role.icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle>{role.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button variant="outline" size="sm" className="w-full">
                        Edit Permissions
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissions" className="p-4">
          <div className="border rounded-lg p-4 h-[600px] flex items-center justify-center">
            <p className="text-muted-foreground">Permissions management coming soon</p>
          </div>
        </TabsContent>

        <TabsContent value="system" className="p-4">
          <div className="border rounded-lg p-4 h-[600px] flex items-center justify-center">
            <p className="text-muted-foreground">System settings coming soon</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
