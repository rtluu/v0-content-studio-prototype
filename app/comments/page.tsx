"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertCircle,
  CheckCircle,
  ChevronDown,
  Filter,
  Flag,
  MessageCircle,
  MoreHorizontal,
  Search,
  Trash2,
  ThumbsUp,
} from "lucide-react"

// Mock data for comments
const mockComments = [
  {
    id: "1",
    author: {
      name: "John Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      isVerified: true,
    },
    content: "This is such a helpful article! I've been looking for this information for a while.",
    date: "2023-05-16T14:30:00",
    likes: 24,
    status: "approved",
    contentTitle: "10 Tips for Better Content Creation",
    contentType: "Article",
    hasReplies: true,
    replies: [
      {
        id: "1-1",
        author: {
          name: "Jane Doe",
          avatar: "/placeholder.svg?height=40&width=40",
          isVerified: true,
          isOwner: true,
        },
        content: "Thank you, John! I'm glad you found it helpful. Let me know if you have any questions.",
        date: "2023-05-16T15:45:00",
        likes: 5,
      },
    ],
  },
  {
    id: "2",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "I disagree with point #3. In my experience, quality is more important than consistency.",
    date: "2023-05-17T09:15:00",
    likes: 8,
    status: "approved",
    contentTitle: "10 Tips for Better Content Creation",
    contentType: "Article",
    hasReplies: false,
    replies: [],
  },
  {
    id: "3",
    author: {
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Great video! Could you do a follow-up on advanced techniques?",
    date: "2023-05-18T11:20:00",
    likes: 15,
    status: "approved",
    contentTitle: "Content Creation Masterclass",
    contentType: "Video",
    hasReplies: true,
    replies: [
      {
        id: "3-1",
        author: {
          name: "Jane Doe",
          avatar: "/placeholder.svg?height=40&width=40",
          isVerified: true,
          isOwner: true,
        },
        content: "That's a great suggestion, Michael! I'm planning to release an advanced techniques video next month.",
        date: "2023-05-18T13:10:00",
        likes: 7,
      },
    ],
  },
  {
    id: "4",
    author: {
      name: "Emily Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "This content seems outdated. Many of these tools have been replaced by newer alternatives.",
    date: "2023-05-19T16:45:00",
    likes: 3,
    status: "approved",
    contentTitle: "Essential Tools for Content Creators",
    contentType: "Article",
    hasReplies: false,
    replies: [],
  },
  {
    id: "5",
    author: {
      name: "David Lee",
      avatar: "/placeholder.svg?height=40&width=40",
      isVerified: true,
    },
    content: "Buy cheap followers at spamsite.com!",
    date: "2023-05-20T08:30:00",
    likes: 0,
    status: "spam",
    contentTitle: "Growing Your Audience",
    contentType: "Article",
    hasReplies: false,
    replies: [],
  },
  {
    id: "6",
    author: {
      name: "Alex Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "I've implemented these strategies and seen a 30% increase in engagement already. Thanks!",
    date: "2023-05-21T10:15:00",
    likes: 19,
    status: "approved",
    contentTitle: "Engagement Strategies",
    contentType: "Article",
    hasReplies: true,
    replies: [
      {
        id: "6-1",
        author: {
          name: "Jane Doe",
          avatar: "/placeholder.svg?height=40&width=40",
          isVerified: true,
          isOwner: true,
        },
        content: "That's amazing to hear, Alex! Would you be interested in being featured in a case study?",
        date: "2023-05-21T11:30:00",
        likes: 4,
      },
      {
        id: "6-2",
        author: {
          name: "Alex Rodriguez",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content: "I'd be happy to share my experience.",
        date: "2023-05-21T12:45:00",
        likes: 2,
      },
    ],
  },
  {
    id: "7",
    author: {
      name: "Olivia Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    content: "Waiting for approval to publish my comment.",
    date: "2023-05-22T14:20:00",
    likes: 0,
    status: "pending",
    contentTitle: "Content Strategy Guide",
    contentType: "PDF",
    hasReplies: false,
    replies: [],
  },
]

export default function CommentsPage() {
  const [selectedComments, setSelectedComments] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [replyingTo, setReplyingTo] = useState<string | null>(null)
  const [replyContent, setReplyContent] = useState("")
  const [expandedComments, setExpandedComments] = useState<string[]>([])

  // Filter comments based on tab and search query
  const filterComments = (comments: typeof mockComments, status: string) => {
    return comments.filter(
      (comment) =>
        (status === "all" || comment.status === status) &&
        (searchQuery === "" ||
          comment.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          comment.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          comment.contentTitle.toLowerCase().includes(searchQuery.toLowerCase())),
    )
  }

  const toggleSelectComment = (commentId: string) => {
    setSelectedComments((prev) =>
      prev.includes(commentId) ? prev.filter((id) => id !== commentId) : [...prev, commentId],
    )
  }

  const selectAllComments = (comments: typeof mockComments) => {
    if (selectedComments.length === comments.length) {
      setSelectedComments([])
    } else {
      setSelectedComments(comments.map((comment) => comment.id))
    }
  }

  const toggleExpandComment = (commentId: string) => {
    setExpandedComments((prev) =>
      prev.includes(commentId) ? prev.filter((id) => id !== commentId) : [...prev, commentId],
    )
  }

  const handleReply = (commentId: string) => {
    if (replyingTo === commentId && replyContent.trim()) {
      // In a real app, this would send the reply to an API
      console.log(`Replying to comment ${commentId}: ${replyContent}`)
      setReplyingTo(null)
      setReplyContent("")
    } else {
      setReplyingTo(commentId)
      setReplyContent("")
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
            <CheckCircle className="mr-1 h-3 w-3" /> Approved
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="outline" className="border-amber-200 text-amber-700 bg-amber-50">
            <AlertCircle className="mr-1 h-3 w-3" /> Pending
          </Badge>
        )
      case "spam":
        return (
          <Badge variant="outline" className="border-red-200 text-red-700 bg-red-50">
            <Flag className="mr-1 h-3 w-3" /> Spam
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <>
      <Header />
      <div className="flex-1">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Comments</h1>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="newest">
              <SelectTrigger className="w-[180px] border-gray-200">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="likes">Most Likes</SelectItem>
                <SelectItem value="replies">Most Replies</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-gray-200">
              <Filter className="mr-2 h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-8 space-y-6">
          {/* Comment Stats Card - Now full width and above comments */}
          <Card className="border-gray-200 w-full">
            <CardHeader>
              <CardTitle>Comment Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Comment Counts */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">Comment Counts</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Total Comments</span>
                      <span className="font-medium ml-8">{mockComments.length}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Approved</span>
                      <span className="font-medium ml-8">
                        {mockComments.filter((c) => c.status === "approved").length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Pending</span>
                      <span className="font-medium ml-8">
                        {mockComments.filter((c) => c.status === "pending").length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Spam</span>
                      <span className="font-medium ml-8">{mockComments.filter((c) => c.status === "spam").length}</span>
                    </div>
                  </div>
                </div>

                {/* Top Commented Content */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">Top Commented Content</h3>
                  <div className="space-y-3">
                    {[
                      { title: "10 Tips for Better Content Creation", count: 2 },
                      { title: "Content Creation Masterclass", count: 1 },
                      { title: "Engagement Strategies", count: 1 },
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm truncate max-w-[65%]">{item.title}</span>
                        <Badge variant="outline" className="border-gray-200 ml-4">
                          {item.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comments Section - Now full width */}
          <div className="w-full space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search comments..."
                  className="pl-8 border-gray-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {selectedComments.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{selectedComments.length} selected</span>
                  <Button variant="outline" size="sm" className="border-gray-200">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Approve
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-200">
                    <Flag className="mr-2 h-4 w-4" />
                    Mark as Spam
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-200 text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              )}
            </div>

            <Tabs defaultValue="all" className="space-y-4">
              <TabsList className="bg-gray-100 text-gray-900">
                <TabsTrigger value="all" className="data-[state=active]:bg-white">
                  All Comments
                </TabsTrigger>
                <TabsTrigger value="approved" className="data-[state=active]:bg-white">
                  Approved
                </TabsTrigger>
                <TabsTrigger value="pending" className="data-[state=active]:bg-white">
                  Pending
                </TabsTrigger>
                <TabsTrigger value="spam" className="data-[state=active]:bg-white">
                  Spam
                </TabsTrigger>
              </TabsList>

              {["all", "approved", "pending", "spam"].map((status) => (
                <TabsContent key={status} value={status} className="space-y-4">
                  <Card className="border-gray-200">
                    <CardHeader className="py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id={`select-all-${status}`}
                            checked={
                              filterComments(mockComments, status).length > 0 &&
                              selectedComments.length === filterComments(mockComments, status).length
                            }
                            onCheckedChange={() => selectAllComments(filterComments(mockComments, status))}
                          />
                          <label htmlFor={`select-all-${status}`} className="text-sm font-medium cursor-pointer">
                            Select All
                          </label>
                        </div>
                        <CardTitle className="text-base">
                          {filterComments(mockComments, status).length} Comments
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {filterComments(mockComments, status).length === 0 ? (
                        <div className="text-center py-8">
                          <MessageCircle className="mx-auto h-12 w-12 text-gray-300" />
                          <h3 className="mt-2 text-lg font-medium">No comments found</h3>
                          <p className="text-gray-500">
                            {status === "all" ? "There are no comments yet." : `There are no ${status} comments.`}
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {filterComments(mockComments, status).map((comment) => (
                            <div key={comment.id} className="space-y-4">
                              <div className="flex gap-4">
                                <div className="flex items-start gap-2">
                                  <Checkbox
                                    id={`select-${comment.id}`}
                                    checked={selectedComments.includes(comment.id)}
                                    onCheckedChange={() => toggleSelectComment(comment.id)}
                                  />
                                  <Avatar className="h-10 w-10">
                                    <AvatarImage
                                      src={comment.author.avatar || "/placeholder.svg"}
                                      alt={comment.author.name}
                                    />
                                    <AvatarFallback>
                                      {comment.author.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                </div>
                                <div className="flex-1 space-y-2">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="font-medium">{comment.author.name}</span>
                                    {comment.author.isVerified && (
                                      <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                                        Verified
                                      </Badge>
                                    )}
                                    <span className="text-sm text-gray-500">on {comment.contentTitle}</span>
                                    <Badge variant="outline" className="border-gray-200">
                                      {comment.contentType}
                                    </Badge>
                                    {getStatusBadge(comment.status)}
                                  </div>
                                  <p className="text-sm">{comment.content}</p>
                                  <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span>{formatDate(comment.date)}</span>
                                    <div className="flex items-center">
                                      <ThumbsUp className="mr-1 h-3 w-3" />
                                      <span>{comment.likes}</span>
                                    </div>
                                    {comment.hasReplies && (
                                      <button
                                        onClick={() => toggleExpandComment(comment.id)}
                                        className="flex items-center hover:text-gray-900"
                                      >
                                        <MessageCircle className="mr-1 h-3 w-3" />
                                        <span>
                                          {comment.replies.length} {comment.replies.length === 1 ? "Reply" : "Replies"}
                                        </span>
                                        <ChevronDown
                                          className={`ml-1 h-3 w-3 transition-transform ${
                                            expandedComments.includes(comment.id) ? "rotate-180" : ""
                                          }`}
                                        />
                                      </button>
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                        <span className="sr-only">More options</span>
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem onClick={() => handleReply(comment.id)}>Reply</DropdownMenuItem>
                                      {comment.status !== "approved" && <DropdownMenuItem>Approve</DropdownMenuItem>}
                                      {comment.status !== "spam" && <DropdownMenuItem>Mark as Spam</DropdownMenuItem>}
                                      <DropdownMenuSeparator />
                                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>
                              </div>

                              {/* Reply form */}
                              {replyingTo === comment.id && (
                                <div className="ml-12 space-y-2">
                                  <Textarea
                                    placeholder="Write a reply..."
                                    value={replyContent}
                                    onChange={(e) => setReplyContent(e.target.value)}
                                    className="min-h-[80px] border-gray-200"
                                  />
                                  <div className="flex justify-end gap-2">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => setReplyingTo(null)}
                                      className="border-gray-200"
                                    >
                                      Cancel
                                    </Button>
                                    <Button
                                      size="sm"
                                      onClick={() => handleReply(comment.id)}
                                      disabled={!replyContent.trim()}
                                      className="bg-primary hover:bg-primary/90 text-white"
                                    >
                                      Reply
                                    </Button>
                                  </div>
                                </div>
                              )}

                              {/* Replies */}
                              {expandedComments.includes(comment.id) && comment.replies.length > 0 && (
                                <div className="ml-12 space-y-4 border-l-2 border-gray-100 pl-4">
                                  {comment.replies.map((reply) => (
                                    <div key={reply.id} className="flex gap-4">
                                      <Avatar className="h-8 w-8">
                                        <AvatarImage
                                          src={reply.author.avatar || "/placeholder.svg"}
                                          alt={reply.author.name}
                                        />
                                        <AvatarFallback>{reply.author.name.split(" ").map((n) => n[0])}</AvatarFallback>
                                      </Avatar>
                                      <div className="flex-1 space-y-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                          <span className="font-medium">{reply.author.name}</span>
                                          {reply.author.isVerified && (
                                            <Badge
                                              variant="outline"
                                              className="border-blue-200 text-blue-700 bg-blue-50"
                                            >
                                              Verified
                                            </Badge>
                                          )}
                                          {reply.author.isOwner && (
                                            <Badge className="bg-primary text-white">Author</Badge>
                                          )}
                                        </div>
                                        <p className="text-sm">{reply.content}</p>
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                          <span>{formatDate(reply.date)}</span>
                                          <div className="flex items-center">
                                            <ThumbsUp className="mr-1 h-3 w-3" />
                                            <span>{reply.likes}</span>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon">
                                              <MoreHorizontal className="h-4 w-4" />
                                              <span className="sr-only">More options</span>
                                            </Button>
                                          </DropdownMenuTrigger>
                                          <DropdownMenuContent align="end">
                                            <DropdownMenuItem>Edit</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                                          </DropdownMenuContent>
                                        </DropdownMenu>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Comment Settings Card - Now below comments */}
          <Card className="border-gray-200 w-full">
            <CardHeader>
              <CardTitle>Comment Settings</CardTitle>
              <CardDescription>Configure how comments work on your content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="justify-start border-gray-200">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Comment Preferences
                </Button>
                <Button variant="outline" className="justify-start border-gray-200">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Moderation Rules
                </Button>
                <Button variant="outline" className="justify-start border-gray-200">
                  <Flag className="mr-2 h-4 w-4" />
                  Blocked Words
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
