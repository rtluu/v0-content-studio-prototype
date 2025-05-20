import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-72 mt-2" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <CardTitle>
                  <Skeleton className="h-4 w-24" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-6 w-12 mb-2" />
                <Skeleton className="h-4 w-20" />
              </CardContent>
            </Card>
          ))}
      </div>

      <div>
        <Skeleton className="h-10 w-full mb-6" />
        <Card>
          <CardContent className="p-0">
            <Skeleton className="h-[400px] w-full" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-48 mb-2" />
          <Skeleton className="h-4 w-72" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-20 w-full" />
          </div>
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-16 w-full" />
          <Skeleton className="h-20 w-full" />
        </CardContent>
        <div className="p-6 flex justify-between">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </Card>
    </div>
  )
}
