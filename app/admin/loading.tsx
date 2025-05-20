import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[200px]" />
        <div className="flex gap-2">
          <Skeleton className="h-10 w-[300px]" />
          <Skeleton className="h-10 w-[120px]" />
        </div>
      </div>

      <Skeleton className="h-10 w-[300px]" />

      <Skeleton className="h-[600px] w-full" />
    </div>
  )
}
