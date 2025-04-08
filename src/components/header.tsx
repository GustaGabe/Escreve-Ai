import { Notebook } from "lucide-react"

export const Header = () => {
  return (
    <div className="border-b border-b-neutral-800 p-4">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between">
        <span className="font-bold flex gap-2 text-xl items-center"><Notebook /> Anota Ai</span>

        <button className="rounded-lg font-bold bg-violet-500 p-2 w-full max-w-[120px]" type="button">Sign in</button>
      </div>
    </div>
  )
}
