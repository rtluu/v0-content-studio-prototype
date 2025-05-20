"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Book,
  FileText,
  MessageSquare,
  Mail,
  Phone,
  HelpCircle,
  ChevronRight,
  ThumbsUp,
  ThumbsDown,
  ArrowRight,
  Clock,
  Users,
  Zap,
  Settings,
  BarChart2,
  Upload,
  AlertCircle,
  Calendar,
  Eye,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container mx-auto py-6 px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Help Center</h2>
            <p className="text-gray-500">Find answers, tutorials, and support for Content Studio</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <MessageSquare className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </div>

        {/* Hero Search */}
        <div className="relative mb-8 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 p-6 text-white shadow-md">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-2 text-2xl font-bold">How can we help you today?</h3>
            <p className="mb-6">Search our knowledge base for answers to your questions</p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for help articles, tutorials, and more..."
                className="h-12 bg-white pl-10 text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-bold">Popular Topics</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { icon: Upload, title: "Getting Started", description: "Learn the basics of Content Studio" },
              { icon: Settings, title: "Account Settings", description: "Manage your account and preferences" },
              { icon: BarChart2, title: "Analytics", description: "Understand your content performance" },
              { icon: Users, title: "Team Management", description: "Collaborate with team members" },
              { icon: Zap, title: "AI Tools", description: "Leverage AI to enhance your content" },
              { icon: AlertCircle, title: "Troubleshooting", description: "Solve common issues" },
              { icon: FileText, title: "Content Management", description: "Create and manage your content" },
              { icon: MessageSquare, title: "Comments", description: "Manage and respond to comments" },
            ].map((item, index) => (
              <Card key={index} className="border-gray-200 transition-all hover:border-purple-200 hover:shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <item.icon className="h-5 w-5 text-purple-600" />
                  </div>
                  <h4 className="mb-1 font-bold">{item.title}</h4>
                  <p className="mb-3 text-sm text-gray-500">{item.description}</p>
                  <Button variant="link" className="h-auto p-0 text-purple-600">
                    Learn more <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="documentation" className="space-y-6">
          <TabsList className="bg-gray-100 text-gray-900">
            <TabsTrigger value="documentation" className="data-[state=active]:bg-white">
              Documentation
            </TabsTrigger>
            <TabsTrigger value="tutorials" className="data-[state=active]:bg-white">
              Tutorials
            </TabsTrigger>
            <TabsTrigger value="faq" className="data-[state=active]:bg-white">
              FAQ
            </TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-white">
              Community
            </TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-white">
              Contact Us
            </TabsTrigger>
          </TabsList>

          {/* Documentation Tab */}
          <TabsContent value="documentation" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2 space-y-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Documentation</CardTitle>
                    <CardDescription>Comprehensive guides and reference materials</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        title: "Getting Started Guide",
                        description: "Learn the basics of Content Studio and set up your account",
                        icon: Book,
                        articles: [
                          "Creating your account",
                          "Setting up your profile",
                          "Understanding the dashboard",
                          "Creating your first content",
                        ],
                      },
                      {
                        title: "Content Management",
                        description: "Learn how to create, edit, and manage your content",
                        icon: FileText,
                        articles: [
                          "Content creation workflow",
                          "Organizing your content library",
                          "Publishing and scheduling content",
                          "Content versioning and history",
                        ],
                      },
                      {
                        title: "Analytics & Reporting",
                        description: "Understand your content performance and audience",
                        icon: BarChart2,
                        articles: [
                          "Understanding analytics dashboard",
                          "Content performance metrics",
                          "Audience insights",
                          "Creating custom reports",
                        ],
                      },
                    ].map((section, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                            <section.icon className="h-5 w-5 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-bold">{section.title}</h4>
                            <p className="text-sm text-gray-500">{section.description}</p>
                          </div>
                        </div>
                        <div className="ml-13 pl-13">
                          <ul className="ml-13 space-y-2 border-l border-gray-200 pl-6">
                            {section.articles.map((article, i) => (
                              <li key={i}>
                                <a href="#" className="flex items-center text-sm text-gray-700 hover:text-purple-600">
                                  <FileText className="mr-2 h-4 w-4 text-gray-400" />
                                  {article}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Button variant="link" className="ml-13 h-auto p-0 text-purple-600">
                          View all articles <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>API Documentation</CardTitle>
                    <CardDescription>Integrate with Content Studio API</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Our comprehensive API documentation provides everything you need to integrate Content Studio with
                      your applications and services.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        {
                          title: "API Reference",
                          description: "Complete API endpoints and parameters",
                        },
                        {
                          title: "Authentication",
                          description: "Secure your API requests",
                        },
                        {
                          title: "Webhooks",
                          description: "Real-time event notifications",
                        },
                        {
                          title: "Code Examples",
                          description: "Implementation samples in various languages",
                        },
                      ].map((item, index) => (
                        <div key={index} className="rounded-lg border border-gray-200 p-4">
                          <h4 className="mb-1 font-bold">{item.title}</h4>
                          <p className="mb-2 text-sm text-gray-500">{item.description}</p>
                          <Button variant="link" className="h-auto p-0 text-purple-600">
                            View documentation
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Recently Updated</CardTitle>
                    <CardDescription>Latest documentation updates</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "AI Tools Documentation",
                        date: "2 days ago",
                        badge: "New",
                      },
                      {
                        title: "Team Permissions Guide",
                        date: "1 week ago",
                        badge: "Updated",
                      },
                      {
                        title: "Analytics API Reference",
                        date: "2 weeks ago",
                        badge: "Updated",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{item.title}</h4>
                            {item.badge && (
                              <Badge
                                className={item.badge === "New" ? "bg-green-600 text-white" : "bg-blue-600 text-white"}
                              >
                                {item.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Popular Articles</CardTitle>
                    <CardDescription>Most viewed documentation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Getting started with Content Studio",
                      "Setting up team permissions",
                      "Understanding analytics metrics",
                      "Content creation best practices",
                      "API authentication guide",
                    ].map((article, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="mr-2 h-4 w-4 text-gray-400" />
                          <span className="text-sm">{article}</span>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-purple-50">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                      <HelpCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="mb-2 text-lg font-bold">Need more help?</h4>
                    <p className="mb-4 text-sm text-gray-700">
                      Can't find what you're looking for? Our support team is here to help.
                    </p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Contact Support</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Tutorials Tab */}
          <TabsContent value="tutorials" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2 space-y-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Video Tutorials</CardTitle>
                    <CardDescription>Learn through step-by-step video guides</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {[
                        {
                          title: "Getting Started with Content Studio",
                          duration: "10:23",
                          views: "5.2K",
                          thumbnail: "/placeholder.svg?height=180&width=320",
                        },
                        {
                          title: "Creating Your First Content",
                          duration: "8:45",
                          views: "4.8K",
                          thumbnail: "/placeholder.svg?height=180&width=320",
                        },
                        {
                          title: "Advanced Analytics Tutorial",
                          duration: "15:12",
                          views: "3.6K",
                          thumbnail: "/placeholder.svg?height=180&width=320",
                        },
                        {
                          title: "Team Collaboration Features",
                          duration: "12:30",
                          views: "2.9K",
                          thumbnail: "/placeholder.svg?height=180&width=320",
                        },
                      ].map((video, index) => (
                        <div key={index} className="group cursor-pointer">
                          <div className="relative mb-2 overflow-hidden rounded-lg">
                            <img
                              src={video.thumbnail || "/placeholder.svg"}
                              alt={video.title}
                              className="w-full transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                              {video.duration}
                            </div>
                          </div>
                          <h4 className="font-medium group-hover:text-purple-600">{video.title}</h4>
                          <p className="text-sm text-gray-500">{video.views} views</p>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full border-gray-200">
                      View All Video Tutorials
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Step-by-Step Guides</CardTitle>
                    <CardDescription>Detailed written tutorials with screenshots</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Setting Up Your Content Calendar",
                        description:
                          "Learn how to plan and schedule your content effectively using our calendar feature.",
                        steps: 8,
                        time: "15 min",
                      },
                      {
                        title: "Creating Custom Analytics Reports",
                        description:
                          "Build personalized reports to track the metrics that matter most to your business.",
                        steps: 6,
                        time: "12 min",
                      },
                      {
                        title: "Optimizing Content for Better Engagement",
                        description:
                          "Discover techniques to improve your content's performance and audience engagement.",
                        steps: 10,
                        time: "20 min",
                      },
                    ].map((guide, index) => (
                      <div key={index} className="rounded-lg border border-gray-200 p-4">
                        <h4 className="mb-1 font-bold">{guide.title}</h4>
                        <p className="mb-3 text-sm text-gray-500">{guide.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center text-sm text-gray-500">
                              <FileText className="mr-1 h-4 w-4" />
                              <span>{guide.steps} steps</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="mr-1 h-4 w-4" />
                              <span>{guide.time}</span>
                            </div>
                          </div>
                          <Button variant="link" className="h-auto p-0 text-purple-600">
                            View Guide
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Tutorial Series</CardTitle>
                    <CardDescription>Multi-part comprehensive guides</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Content Studio Masterclass",
                        parts: 5,
                        level: "Beginner to Advanced",
                      },
                      {
                        title: "Analytics Deep Dive",
                        parts: 3,
                        level: "Intermediate",
                      },
                      {
                        title: "Team Collaboration Essentials",
                        parts: 4,
                        level: "All Levels",
                      },
                    ].map((series, index) => (
                      <div key={index} className="rounded-lg border border-gray-200 p-4">
                        <h4 className="mb-1 font-bold">{series.title}</h4>
                        <div className="mb-3 flex items-center gap-3 text-sm text-gray-500">
                          <div className="flex items-center">
                            <FileText className="mr-1 h-4 w-4" />
                            <span>{series.parts} parts</span>
                          </div>
                          <div>{series.level}</div>
                        </div>
                        <Button variant="link" className="h-auto p-0 text-purple-600">
                          Start Series
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Featured Tutorial</CardTitle>
                    <CardDescription>Editor's pick</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="relative mb-3 overflow-hidden rounded-lg">
                      <img src="/placeholder.svg?height=180&width=320" alt="Featured Tutorial" className="w-full" />
                      <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                        18:45
                      </div>
                    </div>
                    <h4 className="font-bold">Mastering AI Content Tools</h4>
                    <p className="text-sm text-gray-500">
                      Learn how to leverage our AI-powered tools to enhance your content creation workflow and save
                      time.
                    </p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Watch Now</Button>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Learning Paths</CardTitle>
                    <CardDescription>Structured learning journeys</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Content Creator Path",
                        modules: 4,
                        time: "2 hours",
                      },
                      {
                        title: "Analytics Specialist Path",
                        modules: 5,
                        time: "3 hours",
                      },
                      {
                        title: "Team Manager Path",
                        modules: 3,
                        time: "1.5 hours",
                      },
                    ].map((path, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{path.title}</h4>
                          <p className="text-sm text-gray-500">
                            {path.modules} modules • {path.time}
                          </p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="space-y-6">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find answers to common questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 font-bold text-lg">Account & Billing</h3>
                      <div className="space-y-4">
                        {[
                          {
                            question: "How do I change my subscription plan?",
                            answer:
                              "You can change your subscription plan by going to Settings > Billing & Subscription > Change Plan. Select your desired plan and follow the prompts to complete the change.",
                          },
                          {
                            question: "Can I cancel my subscription at any time?",
                            answer:
                              "Yes, you can cancel your subscription at any time. Go to Settings > Billing & Subscription and click on 'Cancel Subscription'. Your access will continue until the end of your current billing period.",
                          },
                          {
                            question: "How do I update my payment method?",
                            answer:
                              "To update your payment method, go to Settings > Billing & Subscription > Payment Methods. Click on 'Add Payment Method' to add a new one or select an existing method to make changes.",
                          },
                          {
                            question: "Do you offer refunds?",
                            answer:
                              "We offer a 14-day money-back guarantee for new subscriptions. Please contact our support team if you're within this period and wish to request a refund.",
                          },
                        ].map((faq, index) => (
                          <div key={index} className="rounded-lg border border-gray-200 p-4">
                            <h4 className="mb-2 font-bold">{faq.question}</h4>
                            <p className="text-sm text-gray-700">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-4 font-bold text-lg">Content Management</h3>
                      <div className="space-y-4">
                        {[
                          {
                            question: "How do I schedule content for publication?",
                            answer:
                              "When creating or editing content, you'll find a 'Schedule' option in the publishing section. Select the date and time you want your content to be published, then save your changes.",
                          },
                          {
                            question: "Can I edit content after it's published?",
                            answer:
                              "Yes, you can edit published content at any time. Simply navigate to the content in your library, click on it to open, make your changes, and save or update the publication.",
                          },
                          {
                            question: "Is there a limit to how much content I can create?",
                            answer:
                              "The content limits depend on your subscription plan. Free plans have limited storage, while paid plans offer increased or unlimited content creation capabilities.",
                          },
                          {
                            question: "How do I organize my content into categories?",
                            answer:
                              "You can organize content by creating categories in the Content Library. Click on 'Categories' in the sidebar, create your categories, then assign content to these categories during creation or editing.",
                          },
                        ].map((faq, index) => (
                          <div key={index} className="rounded-lg border border-gray-200 p-4">
                            <h4 className="mb-2 font-bold">{faq.question}</h4>
                            <p className="text-sm text-gray-700">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 font-bold text-lg">Team & Collaboration</h3>
                      <div className="space-y-4">
                        {[
                          {
                            question: "How do I invite team members?",
                            answer:
                              "Go to Settings > Team Management and click on 'Invite Team Member'. Enter their email address, assign a role, and they'll receive an invitation to join your workspace.",
                          },
                          {
                            question: "What are the different team roles available?",
                            answer:
                              "We offer several roles including Owner, Admin, Editor, and Viewer. Each role has different permissions levels, which you can customize in the Team Management settings.",
                          },
                          {
                            question: "Can team members work on the same content simultaneously?",
                            answer:
                              "Yes, multiple team members can collaborate on content. We provide real-time editing notifications to prevent conflicts, and all changes are tracked in the content history.",
                          },
                          {
                            question: "How many team members can I add?",
                            answer:
                              "The number of team members you can add depends on your subscription plan. Check your plan details in the Billing section to see your specific limit.",
                          },
                        ].map((faq, index) => (
                          <div key={index} className="rounded-lg border border-gray-200 p-4">
                            <h4 className="mb-2 font-bold">{faq.question}</h4>
                            <p className="text-sm text-gray-700">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-4 font-bold text-lg">Analytics & Reporting</h3>
                      <div className="space-y-4">
                        {[
                          {
                            question: "How often is analytics data updated?",
                            answer:
                              "Analytics data is updated in near real-time for most metrics. Some more complex reports may have a delay of up to 24 hours for complete data processing.",
                          },
                          {
                            question: "Can I export analytics reports?",
                            answer:
                              "Yes, you can export reports in various formats including PDF, CSV, and Excel. Look for the export button in the top right corner of any analytics dashboard or report.",
                          },
                          {
                            question: "What metrics are tracked for my content?",
                            answer:
                              "We track a wide range of metrics including views, engagement rate, average time spent, audience demographics, traffic sources, and conversion rates.",
                          },
                          {
                            question: "Can I create custom reports?",
                            answer:
                              "Yes, custom reports are available on Professional and Enterprise plans. Go to Analytics > Custom Reports to create reports with the specific metrics and dimensions you need.",
                          },
                        ].map((faq, index) => (
                          <div key={index} className="rounded-lg border border-gray-200 p-4">
                            <h4 className="mb-2 font-bold">{faq.question}</h4>
                            <p className="text-sm text-gray-700">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start border-t px-6 py-4">
                <h4 className="mb-2 font-bold">Can't find what you're looking for?</h4>
                <p className="mb-4 text-sm text-gray-700">
                  Browse our complete knowledge base or contact our support team for assistance.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" className="border-gray-200">
                    Browse All FAQs
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">Contact Support</Button>
                </div>
              </CardFooter>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle>Was this helpful?</CardTitle>
                <CardDescription>Help us improve our help center</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center gap-4">
                  <Button variant="outline" className="border-gray-200">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Yes, it was helpful
                  </Button>
                  <Button variant="outline" className="border-gray-200">
                    <ThumbsDown className="mr-2 h-4 w-4" />
                    No, I need more help
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2 space-y-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Community Forum</CardTitle>
                        <CardDescription>Discussions, questions, and knowledge sharing</CardDescription>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">New Discussion</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Input type="search" placeholder="Search discussions..." className="border-gray-200" />
                      <Select defaultValue="recent">
                        <SelectTrigger className="w-[180px] border-gray-200">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="recent">Most Recent</SelectItem>
                          <SelectItem value="popular">Most Popular</SelectItem>
                          <SelectItem value="replies">Most Replies</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          title: "Best practices for content organization?",
                          author: {
                            name: "Sarah Johnson",
                            avatar: "/placeholder.svg?height=40&width=40",
                          },
                          category: "Content Management",
                          replies: 12,
                          views: 234,
                          time: "2 hours ago",
                          solved: true,
                        },
                        {
                          title: "How to interpret engagement metrics for video content?",
                          author: {
                            name: "Michael Brown",
                            avatar: "/placeholder.svg?height=40&width=40",
                          },
                          category: "Analytics",
                          replies: 8,
                          views: 156,
                          time: "1 day ago",
                          solved: false,
                        },
                        {
                          title: "Team workflow suggestions for content approval",
                          author: {
                            name: "Alex Rodriguez",
                            avatar: "/placeholder.svg?height=40&width=40",
                          },
                          category: "Team Management",
                          replies: 15,
                          views: 320,
                          time: "3 days ago",
                          solved: true,
                        },
                        {
                          title: "Integration with third-party analytics tools",
                          author: {
                            name: "Emily Wilson",
                            avatar: "/placeholder.svg?height=40&width=40",
                          },
                          category: "Integrations",
                          replies: 6,
                          views: 142,
                          time: "5 days ago",
                          solved: false,
                        },
                        {
                          title: "Tips for using AI content generation effectively",
                          author: {
                            name: "David Lee",
                            avatar: "/placeholder.svg?height=40&width=40",
                          },
                          category: "AI Tools",
                          replies: 24,
                          views: 567,
                          time: "1 week ago",
                          solved: true,
                        },
                      ].map((discussion, index) => (
                        <div key={index} className="rounded-lg border border-gray-200 p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-bold hover:text-purple-600">{discussion.title}</h4>
                                {discussion.solved && <Badge className="bg-green-600 text-white">Solved</Badge>}
                              </div>
                              <div className="mt-1 flex items-center gap-3">
                                <Badge variant="outline" className="border-gray-200 text-gray-700">
                                  {discussion.category}
                                </Badge>
                                <span className="text-xs text-gray-500">{discussion.time}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <div className="flex items-center">
                                <MessageSquare className="mr-1 h-4 w-4" />
                                <span>{discussion.replies}</span>
                              </div>
                              <div className="flex items-center">
                                <Eye className="mr-1 h-4 w-4" />
                                <span>{discussion.views}</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage
                                src={discussion.author.avatar || "/placeholder.svg"}
                                alt={discussion.author.name}
                              />
                              <AvatarFallback>
                                {discussion.author.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="text-xs text-gray-500">{discussion.author.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full border-gray-200">
                      View All Discussions
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Featured Community Resources</CardTitle>
                    <CardDescription>Helpful resources shared by community members</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        {
                          title: "Content Calendar Template",
                          description: "A ready-to-use template for planning your content strategy",
                          author: "Sarah Johnson",
                          downloads: 1245,
                        },
                        {
                          title: "Analytics Dashboard Setup Guide",
                          description: "Step-by-step guide to create custom analytics dashboards",
                          author: "Michael Brown",
                          downloads: 876,
                        },
                        {
                          title: "Content Audit Spreadsheet",
                          description: "Template for conducting a comprehensive content audit",
                          author: "Emily Wilson",
                          downloads: 654,
                        },
                        {
                          title: "SEO Checklist for Content",
                          description: "Optimize your content for better search visibility",
                          author: "David Lee",
                          downloads: 1032,
                        },
                      ].map((resource, index) => (
                        <div key={index} className="rounded-lg border border-gray-200 p-4">
                          <h4 className="mb-1 font-bold">{resource.title}</h4>
                          <p className="mb-2 text-sm text-gray-500">{resource.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-500">
                              By {resource.author} • {resource.downloads} downloads
                            </div>
                            <Button variant="link" className="h-auto p-0 text-purple-600">
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Community Guidelines</CardTitle>
                    <CardDescription>Rules for participating in our community</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 text-purple-600">
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
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold">Be Respectful</h4>
                          <p className="text-sm text-gray-500">
                            Treat others with respect. No personal attacks or harassment.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 text-purple-600">
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
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold">Stay On Topic</h4>
                          <p className="text-sm text-gray-500">
                            Keep discussions relevant to Content Studio and content management.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 text-purple-600">
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
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="M12 16v-4" />
                            <path d="M12 8h.01" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold">No Spam</h4>
                          <p className="text-sm text-gray-500">Don't post promotional content or spam the forums.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="rounded-full bg-purple-100 p-1 text-purple-600">
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
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                            <path d="M12 8v4" />
                            <path d="M12 16h.01" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold">Help Others</h4>
                          <p className="text-sm text-gray-500">
                            Share your knowledge and help fellow community members.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button variant="link" className="h-auto p-0 text-purple-600">
                      Read Full Guidelines
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Top Contributors</CardTitle>
                    <CardDescription>Community members helping others</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        name: "Sarah Johnson",
                        avatar: "/placeholder.svg?height=40&width=40",
                        posts: 156,
                        solutions: 48,
                      },
                      {
                        name: "Michael Brown",
                        avatar: "/placeholder.svg?height=40&width=40",
                        posts: 132,
                        solutions: 37,
                      },
                      {
                        name: "Emily Wilson",
                        avatar: "/placeholder.svg?height=40&width=40",
                        posts: 98,
                        solutions: 29,
                      },
                      {
                        name: "David Lee",
                        avatar: "/placeholder.svg?height=40&width=40",
                        posts: 87,
                        solutions: 25,
                      },
                      {
                        name: "Alex Rodriguez",
                        avatar: "/placeholder.svg?height=40&width=40",
                        posts: 76,
                        solutions: 22,
                      },
                    ].map((contributor, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={contributor.avatar || "/placeholder.svg"} alt={contributor.name} />
                            <AvatarFallback>
                              {contributor.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{contributor.name}</p>
                            <p className="text-xs text-gray-500">
                              {contributor.posts} posts • {contributor.solutions} solutions
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-purple-600 text-white">Top Contributor</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Community webinars and meetups</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Content Strategy Webinar",
                        date: "May 25, 2023",
                        time: "2:00 PM EST",
                        attendees: 156,
                      },
                      {
                        title: "Analytics Deep Dive",
                        date: "June 10, 2023",
                        time: "1:00 PM EST",
                        attendees: 98,
                      },
                      {
                        title: "Community Q&A Session",
                        date: "June 22, 2023",
                        time: "3:00 PM EST",
                        attendees: 124,
                      },
                    ].map((event, index) => (
                      <div key={index} className="rounded-lg border border-gray-200 p-4">
                        <h4 className="mb-1 font-bold">{event.title}</h4>
                        <div className="mb-2 flex items-center gap-3 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500">{event.attendees} attending</div>
                          <Button variant="link" className="h-auto p-0 text-purple-600">
                            Register
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Contact Us Tab */}
          <TabsContent value="contact" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2 space-y-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Contact Support</CardTitle>
                    <CardDescription>Get help from our support team</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border border-gray-200 p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                          <Mail className="h-6 w-6 text-purple-600" />
                        </div>
                        <h4 className="mb-2 text-lg font-bold">Email Support</h4>
                        <p className="mb-4 text-sm text-gray-500">
                          Send us an email and we'll get back to you within 24 hours.
                        </p>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Email Support</Button>
                      </div>
                      <div className="rounded-lg border border-gray-200 p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                          <MessageSquare className="h-6 w-6 text-purple-600" />
                        </div>
                        <h4 className="mb-2 text-lg font-bold">Live Chat</h4>
                        <p className="mb-4 text-sm text-gray-500">
                          Chat with our support team in real-time during business hours.
                        </p>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Start Chat</Button>
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-200 p-6">
                      <h4 className="mb-4 text-lg font-bold">Submit a Support Ticket</h4>
                      <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Name
                            </label>
                            <Input id="name" placeholder="Your name" className="border-gray-200" />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email
                            </label>
                            <Input id="email" type="email" placeholder="Your email" className="border-gray-200" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                          </label>
                          <Input id="subject" placeholder="Support ticket subject" className="border-gray-200" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="category" className="text-sm font-medium">
                            Category
                          </label>
                          <Select>
                            <SelectTrigger id="category" className="border-gray-200">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="account">Account Issues</SelectItem>
                              <SelectItem value="billing">Billing & Subscription</SelectItem>
                              <SelectItem value="technical">Technical Support</SelectItem>
                              <SelectItem value="feature">Feature Request</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Message
                          </label>
                          <textarea
                            id="message"
                            placeholder="Describe your issue in detail..."
                            className="min-h-[150px] w-full rounded-md border border-gray-200 p-3 text-sm focus:border-purple-500 focus:ring-purple-500"
                          ></textarea>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="attachments" className="text-sm font-medium">
                            Attachments (optional)
                          </label>
                          <div className="rounded-md border border-dashed border-gray-300 p-6 text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="mx-auto mb-2 h-8 w-8 text-gray-400"
                            >
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="17 8 12 3 7 8" />
                              <line x1="12" x2="12" y1="3" y2="15" />
                            </svg>
                            <p className="text-sm text-gray-500">
                              Drag and drop files here, or{" "}
                              <span className="text-purple-600 hover:underline">browse files</span>
                            </p>
                            <p className="mt-1 text-xs text-gray-400">Max file size: 10MB</p>
                          </div>
                        </div>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Submit Ticket</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Frequently Asked Support Questions</CardTitle>
                    <CardDescription>Quick answers to common support inquiries</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        question: "What are your support hours?",
                        answer:
                          "Our support team is available Monday through Friday, 9:00 AM to 6:00 PM EST. We offer limited support on weekends for urgent issues.",
                      },
                      {
                        question: "What's your typical response time?",
                        answer:
                          "We aim to respond to all support tickets within 24 hours. Premium plan subscribers receive priority support with faster response times.",
                      },
                      {
                        question: "Do you offer phone support?",
                        answer:
                          "Phone support is available for Enterprise plan subscribers. Other plans have access to email and chat support options.",
                      },
                      {
                        question: "How do I report a bug?",
                        answer:
                          "You can report bugs through our support ticket system. Please include detailed steps to reproduce the issue, screenshots, and your browser/device information.",
                      },
                    ].map((faq, index) => (
                      <div key={index} className="rounded-lg border border-gray-200 p-4">
                        <h4 className="mb-2 font-bold">{faq.question}</h4>
                        <p className="text-sm text-gray-700">{faq.answer}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Ways to reach our team</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-purple-100 p-2 text-purple-600">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold">Email</h4>
                        <p className="text-sm text-gray-500">support@contentstudio.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-purple-100 p-2 text-purple-600">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold">Phone</h4>
                        <p className="text-sm text-gray-500">+1 (800) 123-4567</p>
                        <p className="text-xs text-gray-500">
                          Available for Enterprise customers, Mon-Fri, 9AM-6PM EST
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-purple-100 p-2 text-purple-600">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold">Live Chat</h4>
                        <p className="text-sm text-gray-500">Available Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200">
                  <CardHeader>
                    <CardTitle>Support Plans</CardTitle>
                    <CardDescription>Support options by subscription level</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        plan: "Free",
                        features: ["Community forum access", "Email support (48hr response)", "Knowledge base access"],
                      },
                      {
                        plan: "Pro",
                        features: [
                          "Priority email support (24hr response)",
                          "Live chat support",
                          "Knowledge base access",
                          "Community forum access",
                        ],
                      },
                      {
                        plan: "Enterprise",
                        features: [
                          "Dedicated support manager",
                          "Phone support",
                          "Priority email support (4hr response)",
                          "24/7 emergency support",
                          "Custom onboarding",
                        ],
                      },
                    ].map((supportPlan, index) => (
                      <div key={index} className="rounded-lg border border-gray-200 p-4">
                        <h4 className="mb-2 font-bold">{supportPlan.plan} Plan</h4>
                        <ul className="space-y-1">
                          {supportPlan.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm">
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
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-purple-50">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                      <HelpCircle className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="mb-2 text-lg font-bold">Still Need Help?</h4>
                    <p className="mb-4 text-sm text-gray-700">
                      Our support team is ready to assist you with any questions or issues you may have.
                    </p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Contact Support</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
