"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart } from "@/components/ui/chart"
import { useRouter } from "next/navigation"
import { ArrowLeft, Edit, Eye, MessageSquare, Share2, ThumbsUp, Trash2 } from "lucide-react"
import Link from "next/link"

// Mock data for content details
const contentDetails = {
  id: "1",
  title: "10 Tips for Better Content Creation",
  type: "Article",
  status: "Published",
  date: "2023-05-15",
  views: 12500,
  likes: 843,
  comments: 156,
  shares: 324,
  thumbnail: "/placeholder.svg?height=400&width=600",
  content: `
    <h2>Introduction</h2>
    <p>Creating engaging content is essential for any content creator or publisher. In this article, we'll explore 10 tips to help you create better content that resonates with your audience.</p>
    
    <h2>1. Know Your Audience</h2>
    <p>Understanding who you're creating content for is the first step to creating content that resonates. Research your audience's interests, pain points, and preferences.</p>
    
    <h2>2. Create a Content Calendar</h2>
    <p>Planning your content in advance helps maintain consistency and ensures you're covering a variety of topics that interest your audience.</p>
    
    <h2>3. Focus on Quality Over Quantity</h2>
    <p>It's better to publish one high-quality piece of content than several mediocre ones. Take the time to research, write, and edit your content thoroughly.</p>
    
    <h2>4. Use Visuals</h2>
    <p>Incorporating images, videos, and infographics can make your content more engaging and easier to understand.</p>
    
    <h2>5. Write Compelling Headlines</h2>
    <p>Your headline is the first thing people see. Make it attention-grabbing and clear about what the content offers.</p>
    
    <h2>6. Optimize for SEO</h2>
    <p>Use relevant keywords, meta descriptions, and alt text to help your content rank higher in search results.</p>
    
    <h2>7. Make It Scannable</h2>
    <p>Use headings, bullet points, and short paragraphs to make your content easy to scan and digest.</p>
    
    <h2>8. Add Value</h2>
    <p>Every piece of content should provide value to your audience, whether it's solving a problem, answering a question, or entertaining them.</p>
    
    <h2>9. Include a Call to Action</h2>
    <p>Guide your audience on what to do next, whether it's subscribing to your newsletter, sharing the content, or exploring related topics.</p>
    
    <h2>10. Analyze and Iterate</h2>
    <p>Use analytics to understand what content performs well and why, then use those insights to improve future content.</p>
    
    <h2>Conclusion</h2>
    <p>Creating better content is an ongoing process of learning and improvement. By implementing these tips, you'll be well on your way to creating content that engages your audience and achieves your goals.</p>
  `,
  comments: [
    {
      id: "c1",
      author: "John Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2023-05-16",
      content:
        "Great article! I especially liked the tip about creating a content calendar. That's something I've been meaning to implement.",
    },
    {
      id: "c2",
      author: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2023-05-17",
      content:
        "These tips are really helpful. I've been struggling with consistency, and I think focusing on quality over quantity will help me a lot.",
    },
    {
      id: "c3",
      author: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2023-05-18",
      content:
        "I'd add one more tip: collaborate with other creators. It's a great way to reach new audiences and get fresh perspectives.",
    },
  ],
}

export default function ContentDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const { id } = params

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Button>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{contentDetails.title}</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{contentDetails.type}</span>
              <span>•</span>
              <span>{contentDetails.status}</span>
              <span>•</span>
              <span>{new Date(contentDetails.date).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/content/${id}/edit`}>
              <Edit className="mr-2 h-4 w-4" /> Edit
            </Link>
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="mr-2 h-4 w-4" /> Delete
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-0">
              <img
                src={contentDetails.thumbnail || "/placeholder.svg"}
                alt={contentDetails.title}
                className="w-full h-auto object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div
                  className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: contentDetails.content }}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Comments ({contentDetails.comments.length})</h3>
              <div className="space-y-4">
                {contentDetails.comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <img
                      src={comment.avatar || "/placeholder.svg"}
                      alt={comment.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(comment.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Performance</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Views</span>
                  </div>
                  <p className="text-2xl font-bold">{contentDetails.views.toLocaleString()}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Likes</span>
                  </div>
                  <p className="text-2xl font-bold">{contentDetails.likes.toLocaleString()}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Comments</span>
                  </div>
                  <p className="text-2xl font-bold">{contentDetails.comments.length.toLocaleString()}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Share2 className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Shares</span>
                  </div>
                  <p className="text-2xl font-bold">{contentDetails.shares.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Analytics</h3>
              <Tabs defaultValue="views">
                <TabsList className="w-full">
                  <TabsTrigger value="views" className="flex-1">
                    Views
                  </TabsTrigger>
                  <TabsTrigger value="engagement" className="flex-1">
                    Engagement
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="views" className="pt-4">
                  <LineChart
                    data={[
                      { date: "May 15", views: 1200 },
                      { date: "May 16", views: 1800 },
                      { date: "May 17", views: 2400 },
                      { date: "May 18", views: 2800 },
                      { date: "May 19", views: 3200 },
                      { date: "May 20", views: 3600 },
                      { date: "May 21", views: 4000 },
                    ]}
                    index="date"
                    categories={["views"]}
                    colors={["#2563eb"]}
                    valueFormatter={(value) => `${value.toLocaleString()}`}
                    className="aspect-[4/3]"
                  />
                </TabsContent>
                <TabsContent value="engagement" className="pt-4">
                  <LineChart
                    data={[
                      { date: "May 15", likes: 80, comments: 12, shares: 24 },
                      { date: "May 16", likes: 120, comments: 18, shares: 36 },
                      { date: "May 17", likes: 160, comments: 24, shares: 48 },
                      { date: "May 18", likes: 200, comments: 30, shares: 60 },
                      { date: "May 19", likes: 240, comments: 36, shares: 72 },
                      { date: "May 20", likes: 280, comments: 42, shares: 84 },
                      { date: "May 21", likes: 320, comments: 48, shares: 96 },
                    ]}
                    index="date"
                    categories={["likes", "comments", "shares"]}
                    colors={["#2563eb", "#10b981", "#f59e0b"]}
                    valueFormatter={(value) => `${value.toLocaleString()}`}
                    className="aspect-[4/3]"
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Metadata</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Content Type</span>
                  <span className="text-sm font-medium">{contentDetails.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <span className="text-sm font-medium">{contentDetails.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Published Date</span>
                  <span className="text-sm font-medium">{new Date(contentDetails.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Last Updated</span>
                  <span className="text-sm font-medium">{new Date(contentDetails.date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Author</span>
                  <span className="text-sm font-medium">Jane Doe</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Word Count</span>
                  <span className="text-sm font-medium">1,245</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
