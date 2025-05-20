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

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-[200px] w-full" />
          ))}
      </div>
    </div>
  )
}
