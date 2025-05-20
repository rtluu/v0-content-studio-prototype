"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, ChevronRight, Newspaper, Video, ImageIcon, Mic, User } from "lucide-react"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const totalSteps = 4

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/40">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold mb-2">Welcome to Content Studio</h1>
          <p className="text-muted-foreground">Let's set up your account in a few steps</p>
          <Progress value={(step / totalSteps) * 100} className="mt-4" />
          <p className="text-sm text-muted-foreground mt-2">
            Step {step} of {totalSteps}
          </p>
        </div>

        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>What type of content do you create?</CardTitle>
              <CardDescription>This helps us customize your experience</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="articles" className="grid gap-4">
                <div>
                  <RadioGroupItem value="articles" id="articles" className="peer sr-only" />
                  <Label
                    htmlFor="articles"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Newspaper className="mb-3 h-6 w-6" />
                    <div className="space-y-1 text-center">
                      <p className="text-sm font-medium leading-none">Articles & Blogs</p>
                      <p className="text-sm text-muted-foreground">Written content and long-form text</p>
                    </div>
                  </Label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <RadioGroupItem value="videos" id="videos" className="peer sr-only" />
                    <Label
                      htmlFor="videos"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <Video className="mb-3 h-6 w-6" />
                      <div className="space-y-1 text-center">
                        <p className="text-sm font-medium leading-none">Videos</p>
                        <p className="text-sm text-muted-foreground">Video content</p>
                      </div>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="images" id="images" className="peer sr-only" />
                    <Label
                      htmlFor="images"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <ImageIcon className="mb-3 h-6 w-6" />
                      <div className="space-y-1 text-center">
                        <p className="text-sm font-medium leading-none">Images</p>
                        <p className="text-sm text-muted-foreground">Photos and graphics</p>
                      </div>
                    </Label>
                  </div>
                </div>

                <div>
                  <RadioGroupItem value="podcasts" id="podcasts" className="peer sr-only" />
                  <Label
                    htmlFor="podcasts"
                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Mic className="mb-3 h-6 w-6" />
                    <div className="space-y-1 text-center">
                      <p className="text-sm font-medium leading-none">Podcasts & Audio</p>
                      <p className="text-sm text-muted-foreground">Audio content and podcasts</p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter>
              <Button onClick={handleNext} className="w-full">
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Tell us about yourself</CardTitle>
              <CardDescription>This information will be displayed on your profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="display-name">Display Name</Label>
                <Input id="display-name" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us a bit about yourself and your content" rows={4} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website (optional)</Label>
                <Input id="website" placeholder="https://yourwebsite.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleNext} className="w-full">
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Customize your experience</CardTitle>
              <CardDescription>Choose the features that matter most to you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md border border-primary">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <Label>Content Analytics</Label>
                    <p className="text-sm text-muted-foreground">Track performance metrics for your content</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md border border-primary">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <Label>AI Content Assistance</Label>
                    <p className="text-sm text-muted-foreground">Get AI-powered suggestions for your content</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md border border-primary">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <Label>Audience Insights</Label>
                    <p className="text-sm text-muted-foreground">Understand who is engaging with your content</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md border border-muted">
                    <Check className="h-4 w-4 text-muted" />
                  </div>
                  <div>
                    <Label>Monetization Tools</Label>
                    <p className="text-sm text-muted-foreground">Tools to help you monetize your content</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleNext} className="w-full">
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {step === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>You're all set!</CardTitle>
              <CardDescription>Your Content Studio account is ready to use</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-6">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Welcome aboard!</h3>
              <p className="text-center text-muted-foreground mb-6">
                You're ready to start creating and managing your content with Content Studio. Explore the dashboard to
                get started.
              </p>
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="flex flex-col items-center p-4 rounded-lg border bg-card">
                  <User className="h-8 w-8 mb-2 text-primary" />
                  <span className="text-sm font-medium">Profile Complete</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-lg border bg-card">
                  <Check className="h-8 w-8 mb-2 text-primary" />
                  <span className="text-sm font-medium">Ready to Create</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleNext} className="w-full">
                Go to Dashboard
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  )
}
