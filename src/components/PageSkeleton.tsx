import { Skeleton } from "@/components/ui/skeleton";

const PageSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Skeleton className="h-4 w-12" />
          <div className="hidden md:flex items-center space-x-12">
            <Skeleton className="h-3 w-14" />
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-3 w-14" />
          </div>
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="pt-16 h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <Skeleton className="h-3 w-24 mb-6" />
            <Skeleton className="h-16 w-full max-w-2xl mb-4" />
            <Skeleton className="h-16 w-3/4 mb-8" />
            <Skeleton className="h-5 w-96" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSkeleton;
