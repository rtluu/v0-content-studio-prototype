"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calendar, FileText, ImageIcon, Mic, Save, Upload, Video, Wand2, LinkIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export default function CreateContentPage() {
  const router = useRouter()
  const [contentType, setContentType] = useState<string>("article")
  const [date, setDate] = useState<Date>()
  const [metadataOpen, setMetadataOpen] = useState(false)

  return (
    <div className="space-y-6 max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Button>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Create</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setMetadataOpen(true)}>
            Configure Metadata
          </Button>
          <Button onClick={() => setMetadataOpen(true)}>Publish</Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Content Type Selection - Smaller and in a row */}
            <div>
              <h3 className="text-sm font-medium mb-3">Content Type</h3>
              <RadioGroup
                defaultValue="article"
                onValueChange={setContentType}
                className="flex flex-wrap gap-2 justify-between"
              >
                <div className="w-[18%]">
                  <RadioGroupItem value="article" id="article" className="peer sr-only" />
                  <Label
                    htmlFor="article"
                    className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <FileText className="h-4 w-4 mb-1" />
                    <p className="text-xs font-medium">Article</p>
                  </Label>
                </div>

                <div className="w-[18%]">
                  <RadioGroupItem value="video" id="video" className="peer sr-only" />
                  <Label
                    htmlFor="video"
                    className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Video className="h-4 w-4 mb-1" />
                    <p className="text-xs font-medium">Video</p>
                  </Label>
                </div>

                <div className="w-[18%]">
                  <RadioGroupItem value="image" id="image" className="peer sr-only" />
                  <Label
                    htmlFor="image"
                    className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <ImageIcon className="h-4 w-4 mb-1" />
                    <p className="text-xs font-medium">Image</p>
                  </Label>
                </div>

                <div className="w-[18%]">
                  <RadioGroupItem value="audio" id="audio" className="peer sr-only" />
                  <Label
                    htmlFor="audio"
                    className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <Mic className="h-4 w-4 mb-1" />
                    <p className="text-xs font-medium">Audio</p>
                  </Label>
                </div>

                <div className="w-[18%]">
                  <RadioGroupItem value="link" id="link" className="peer sr-only" />
                  <Label
                    htmlFor="link"
                    className="flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  >
                    <LinkIcon className="h-4 w-4 mb-1" />
                    <p className="text-xs font-medium">Link</p>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            {/* Title Field */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <div className="flex gap-2">
                <Input id="title" placeholder="Enter a title" className="text-lg" />
                <Button variant="outline" size="icon" title="AI Title Suggestions">
                  <Wand2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Content Editor based on type */}
            <div className="space-y-4">
              {contentType === "article" && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Content</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Wand2 className="mr-2 h-4 w-4" />
                        AI Assist
                      </Button>
                      <Button variant="outline" size="sm">
                        <Save className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                    </div>
                  </div>
                  <Textarea placeholder="Start writing your article here..." className="min-h-[400px]" />
                </div>
              )}

              {contentType === "video" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Video Upload</h3>
                  <div className="border-2 border-dashed rounded-md p-10 flex flex-col items-center justify-center gap-4">
                    <Upload className="h-12 w-12 text-muted-foreground" />
                    <div className="text-center">
                      <p className="text-muted-foreground">Drag and drop your video file here or click to browse</p>
                      <p className="text-sm text-muted-foreground mt-1">Supports MP4, MOV, AVI up to 2GB</p>
                    </div>
                    <Button>Upload Video</Button>
                  </div>
                </div>
              )}

              {contentType === "image" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Image Upload</h3>
                  <div className="border-2 border-dashed rounded-md p-10 flex flex-col items-center justify-center gap-4">
                    <ImageIcon className="h-12 w-12 text-muted-foreground" />
                    <div className="text-center">
                      <p className="text-muted-foreground">Drag and drop your image files here or click to browse</p>
                      <p className="text-sm text-muted-foreground mt-1">Supports JPG, PNG, GIF up to 10MB</p>
                    </div>
                    <Button>Upload Images</Button>
                  </div>
                </div>
              )}

              {contentType === "audio" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Audio Upload</h3>
                  <div className="border-2 border-dashed rounded-md p-10 flex flex-col items-center justify-center gap-4">
                    <Mic className="h-12 w-12 text-muted-foreground" />
                    <div className="text-center">
                      <p className="text-muted-foreground">Drag and drop your audio file here or click to browse</p>
                      <p className="text-sm text-muted-foreground mt-1">Supports MP3, WAV, AAC up to 100MB</p>
                    </div>
                    <Button>Upload Audio</Button>
                  </div>
                </div>
              )}

              {contentType === "link" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Add Link</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="url">URL</Label>
                      <div className="flex gap-2">
                        <Input id="url" placeholder="https://example.com" />
                        <Button variant="outline">Fetch Info</Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Enter a URL and we'll automatically fetch the title, description and thumbnail
                      </p>
                    </div>

                    <div className="p-4 border rounded-md">
                      <div className="flex items-start gap-4">
                        <div className="w-24 h-24 bg-muted rounded-md flex items-center justify-center">
                          <ImageIcon className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">Link Preview</h4>
                          <p className="text-sm text-muted-foreground">Enter a URL to see a preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Side Rail for Metadata and Publishing Options */}
      <Sheet open={metadataOpen} onOpenChange={setMetadataOpen}>
        <SheetContent className="sm:max-w-md overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Content Details & Publishing</SheetTitle>
            <SheetDescription>Configure metadata and publishing options for your content</SheetDescription>
          </SheetHeader>
          <div className="py-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Metadata</h3>

              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <div className="flex gap-2">
                    <Textarea id="description" placeholder="Enter a description" rows={3} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <div className="flex gap-2">
                    <Input id="tags" placeholder="Enter tags separated by commas" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="news">News</SelectItem>
                      <SelectItem value="tutorial">Tutorial</SelectItem>
                      <SelectItem value="review">Review</SelectItem>
                      <SelectItem value="opinion">Opinion</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Thumbnail</Label>
                  <div className="border-2 border-dashed rounded-md p-4 flex flex-col items-center justify-center gap-2">
                    <Upload className="h-6 w-6 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground text-center">
                      Drag and drop an image or click to browse
                    </p>
                    <Button variant="outline" size="sm">
                      Upload Thumbnail
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Publishing Options</h3>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="schedule">Schedule Publication</Label>
                  <p className="text-xs text-muted-foreground">Set a future date for publication</p>
                </div>
                <Switch id="schedule" />
              </div>

              <div className="flex items-center gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <Calendar className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9:00">9:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="18:00">6:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="comments">Allow Comments</Label>
                  <p className="text-xs text-muted-foreground">Let users comment on your content</p>
                </div>
                <Switch id="comments" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="featured">Featured Content</Label>
                  <p className="text-xs text-muted-foreground">Highlight this content on your profile</p>
                </div>
                <Switch id="featured" />
              </div>
            </div>

            <div className="pt-4 space-x-2 flex">
              <Button variant="outline" onClick={() => setMetadataOpen(false)} className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1">Publish</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
