import { Header } from '@/components/header'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-[1280px]">
        <div>
          <h1 className="font-bold text-center mt-20 text-6xl max-w-96">
            Write & Wire your ideas with <span className="text-violet-500">Anota AI</span>
          </h1>
          <p>Description</p>
        </div>
        <div className='flex gap-4'>
          <button type='submit' className="border p-2 rounded-md">Get Started</button>
          <button type='submit' className="bg-gray-500 border border-gray-500 p-2 rounded-md">Button 2</button>
        </div>
      </main>
    </div>
  )
}
