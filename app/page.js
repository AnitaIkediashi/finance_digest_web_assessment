import { DisplayContent } from "@/components/display-content"
import { Skeleton } from "@/components/skeleton"
import Image from "next/image"
import { Suspense } from "react"
import Logo from '../public/blott.png'

const Home = () => {
  
  return (
    <section className=" lg:max-w-[calc(100vw-48px)] lg:mx-auto w-full min-h-screen px-4 pb-[51px]">
      <header className="h-[72px] w-full flex items-center justify-center mb-4">
        <Image src={Logo} alt="company logo" className="w-[200px] h-[48.2px] self-end" />
      </header>
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