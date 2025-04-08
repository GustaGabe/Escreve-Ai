import { Header } from '@/components/header'
import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '../assets/full-logo.png'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-[1280px]">
        <div className="flex items-center gap-15 ">
          <div>
            <h1 className="font-bold text-left mt-20 text-6xl max-w-120">
              Write & Wire your ideas with <span className="text-violet-500">Anota AI</span>
            </h1>
            <p className="p-2 text-xl max-w-118">
              Write, and visualize your ideas freely with Anota AI your personal space for thoughts
              and creativity.
            </p>
            <div className="flex gap-4 mt-4">
              <Link
                href="#"
                className="w-full max-w-[180px] gap-2 flex justify-center items-center shadow-md bg-[#0a0a0a] border border-violet-500 p-2 rounded-md text-white hover:bg-violet-500 ease-in-out duration-600"
              >
                Get Started
                <ArrowRight />
              </Link>
              <Link
                href="https://github.com/GustaGabe"
                target="_blank"
                className="w-full shadow-lg max-w-[180px] gap-2 flex justify-center items-center bg-violet-500 border border-violet-500 p-2 rounded-md hover:bg-violet-600"
              >
                View on Github <SquareArrowOutUpRight />
              </Link>
            </div>
          </div>

          <div className="">
            <Image src={Hero} alt="hero" />
          </div>
        </div>
      </main>
    </div>
  )
}
