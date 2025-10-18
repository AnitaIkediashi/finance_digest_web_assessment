import { DisplayContent } from "@/components/display-content"
import { Skeleton } from "@/components/skeleton"
import { Suspense } from "react"

const Home = () => {
  
  return (
    <section>
      <div className="lg:h-[112px] h-[44px] flex lg:items-center items-end mb-4">
        <h2 className="uppercase lg:font-medium font-bold lg:text-5xl text-2xl">news</h2>
      </div>
      <Suspense fallback={<Skeleton />}>
        <DisplayContent />
      </Suspense>
    </section>
  )
}

export default Home