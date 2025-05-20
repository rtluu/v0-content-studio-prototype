import { Header } from "@/components/header"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function ProfileLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 container mx-auto py-6 px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <Skeleton className="h-8 w-64 mb-2" />
            <Skeleton className="h-4 w-48" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>

        <div className="grid gap-6 md:grid-cols-7">
          {/* Profile Sidebar Skeleton */}
          <Card className="md:col-span-2 border-gray-200">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Skeleton className="h-24 w-24 rounded-full mb-4" />
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-48 mb-2" />
                <Skeleton className="h-6 w-24 mb-6" />

                <div className="w-full space-y-4">
                  <div className="flex items-center">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <div className="flex items-center">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <div className="flex items-center">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <div className="flex items-center">
                    <Skeleton className="h-4 w-4 mr-2" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>

                <div className="w-full border-t border-gray-200 my-6 pt-6">
                  <Skeleton className="h-4 w-24 mx-auto mb-4" />
                  <div className="flex justify-center space-x-2">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-8 w-8 rounded-full" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profile Content Skeleton */}
          <div className="md:col-span-5 space-y-6">
            {/* Personal Information Skeleton */}
            <Card className="border-gray-200">
              <CardHeader>
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-64" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-32 w-full" />
                </div>
              </CardContent>
            </Card>

            {/* Social Profiles Skeleton */}
            <Card className="border-gray-200">
              <CardHeader>
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-64" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Stats Skeleton */}
            <Card className="border-gray-200">
              <CardHeader>
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-64" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
