"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft, Github, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function SignInPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const mode = searchParams.get("mode") || "signup"
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      router.push(mode === "signin" ? "/dashboard" : "/onboarding")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/40">
      <Link
        href="/"
        className="absolute top-8 left-8 flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>

      <div className="flex justify-center mb-6">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 bg-primary rounded-lg rotate-6"></div>
          <div className="absolute inset-0 bg-background rounded-lg flex items-center justify-center border">
            <span className="text-xl font-bold text-primary">CS</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue={mode} className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="signin">Sign In</TabsTrigger>
        </TabsList>

        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>Enter your email below to create your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" onClick={() => router.push("/onboarding")}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" onClick={() => router.push("/onboarding")}>
                  <Mail className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input id="signin-email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="signin-password">Password</Label>
                    <Link href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="signin-password" type="password" required />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </form>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" onClick={() => router.push("/dashboard")}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button variant="outline" onClick={() => router.push("/dashboard")}>
                  <Mail className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
