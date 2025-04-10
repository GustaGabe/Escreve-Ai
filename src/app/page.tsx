
import { Header } from '@/components/header'
import { ArrowRight, SquareArrowOutUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '../assets/full-logo.png'
import { FlowCard } from '@/components/flowCard'



export default function Home() {
  return (
    <div>
      <Header />
      <main className="">
        <div className="flex justify-between items-center ">
          <div>
            <h1 className="font-bold text-left mt-20 text-6xl max-w-120">
              Wire your ideas with <span className="text-violet-500">Escreve AI</span>
            </h1>
            <p className="p-2 text-xl max-w-118">
              Write, and visualize your ideas freely with Escreve AI your personal space for thoughts
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
                href="https://github.com/GustaGabe/anotai"
                target="_blank"
                className="w-full shadow-lg max-w-[180px] gap-2 flex justify-center items-center bg-violet-500 border border-violet-500 p-2 rounded-md hover:bg-violet-600"
              >
                View on Github <SquareArrowOutUpRight />
              </Link>
            </div>
          </div>

          <div className="">
            <Image width={550} src={Hero} alt="hero" />
          </div>
        </div>
        <div className="bg-[#0a0a0a] roudend-md h-[100vh] mt-35">
          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-15 text-6xl font-bold">Why Escreve Ai?</h1>
            <div className="mt-25 flex gap-20">
              <div className='flex flex-col'>
              <h1 className="text-6xl text-neutral-400 max-w-[600px]">
                Make your own Flow <span className="text-violet-500 font-bold">Fast</span> and
                <span className="text-violet-500 font-bold"> simple</span>
              </h1>
              <p className='mt-2 text-neutral-400 max-w-[550px]'>Start small, think big. This is your space to create, plan, and turn ideas into reality one word at a time. </p>
              </div>
              <FlowCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
