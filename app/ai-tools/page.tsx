"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Bot, ImageIcon, MessageSquare, Sparkles, Wand2 } from "lucide-react"

export default function AIToolsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container mx-auto py-8 px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">AI Tools</h1>
            <p className="text-muted-foreground">Enhance your content creation with AI-powered tools</p>
          </div>
        </div>

        <Tabs defaultValue="text" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-lg">
            <TabsTrigger value="text">Text Generation</TabsTrigger>
            <TabsTrigger value="image">Image Generation</TabsTrigger>
            <TabsTrigger value="chat">AI Chat</TabsTrigger>
            <TabsTrigger value="summary">Summarizer</TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-purple-100 p-2">
                    <Sparkles className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle>AI Text Generation</CardTitle>
                    <CardDescription>Generate high-quality content with AI assistance</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="prompt">Prompt</Label>
                  <Textarea id="prompt" placeholder="Describe what you want to generate..." className="min-h-[100px]" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="tone">Tone</Label>
                    <Select defaultValue="professional">
                      <SelectTrigger id="tone">
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                        <SelectItem value="friendly">Friendly</SelectItem>
                        <SelectItem value="authoritative">Authoritative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="length">Length</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="length">
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short (100-200 words)</SelectItem>
                        <SelectItem value="medium">Medium (300-500 words)</SelectItem>
                        <SelectItem value="long">Long (600-1000 words)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="creativity">Creativity</Label>
                    <span className="text-sm text-gray-500">Medium</span>
                  </div>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Save as Template</Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Generate</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Generations</CardTitle>
                <CardDescription>Your recently generated content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Blog Introduction: Content Marketing Trends",
                      date: "2 hours ago",
                      preview:
                        "Content marketing continues to evolve at a rapid pace. In this article, we explore the latest trends that are shaping the industry in 2023...",
                    },
                    {
                      title: "Product Description: Smart Home Device",
                      date: "Yesterday",
                      preview:
                        "Introducing the next generation of smart home technology. Our latest device combines cutting-edge AI with seamless integration...",
                    },
                    {
                      title: "Email Newsletter: Weekly Update",
                      date: "3 days ago",
                      preview:
                        "Hello subscribers! We're excited to share this week's top stories and updates. From industry news to exclusive tips...",
                    },
                  ].map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">{item.title}</h4>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500 line-clamp-2">{item.preview}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 text-purple-600">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 text-purple-600">
                          Copy
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 text-purple-600">
                          Use as Template
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="image" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-purple-100 p-2">
                    <ImageIcon className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle>AI Image Generation</CardTitle>
                    <CardDescription>Create custom images with AI</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md bg-gray-50 p-4 text-center">
                  <Badge className="mb-2 bg-purple-600">Coming Soon</Badge>
                  <h3 className="text-lg font-medium">Image Generation</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Our AI image generation tool is currently in development. Stay tuned for updates!
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="chat" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-purple-100 p-2">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle>AI Chat Assistant</CardTitle>
                    <CardDescription>Chat with our AI to get instant help</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border border-gray-200 p-4 h-[400px] overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-purple-100 p-2 mt-1">
                        <Bot className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          Hello! I'm your Content Studio AI assistant. How can I help you today with your content
                          creation?
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 justify-end">
                      <div className="bg-purple-100 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          I need help coming up with ideas for a blog post about digital marketing trends.
                        </p>
                      </div>
                      <div className="rounded-full bg-gray-200 p-2 mt-1">
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
                          className="text-gray-600"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-purple-100 p-2 mt-1">
                        <Bot className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                        <p className="text-sm">
                          Great topic! Here are some digital marketing trends you could explore in your blog post:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                          <li>AI-powered content creation and personalization</li>
                          <li>Voice search optimization strategies</li>
                          <li>Video marketing evolution and short-form content</li>
                          <li>Privacy-first marketing in a cookieless world</li>
                          <li>Social commerce and integrated shopping experiences</li>
                        </ul>
                        <p className="mt-2 text-sm">Would you like me to elaborate on any of these topics?</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Input placeholder="Type your message..." className="flex-1" />
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="summary" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-purple-100 p-2">
                    <Wand2 className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle>Content Summarizer</CardTitle>
                    <CardDescription>Generate concise summaries of long content</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="content">Content to Summarize</Label>
                  <Textarea id="content" placeholder="Paste your content here..." className="min-h-[200px]" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="length">Summary Length</Label>
                    <Select defaultValue="medium">
                      <SelectTrigger id="length">
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short (1-2 sentences)</SelectItem>
                        <SelectItem value="medium">Medium (3-5 sentences)</SelectItem>
                        <SelectItem value="long">Long (1-2 paragraphs)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="format">Format</Label>
                    <Select defaultValue="paragraph">
                      <SelectTrigger id="format">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paragraph">Paragraph</SelectItem>
                        <SelectItem value="bullets">Bullet Points</SelectItem>
                        <SelectItem value="numbered">Numbered List</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="keywords" />
                  <Label htmlFor="keywords">Include key phrases</Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Summarize</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
