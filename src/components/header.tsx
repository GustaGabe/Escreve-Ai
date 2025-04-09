import Logo from '../assets/logo.png'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className="border-b bg-[#0a0a0a] border-b-neutral-800 p-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <span className="font-bold flex gap-2 text-xl items-center">
          <Image width={45} src={Logo} alt="Logo" /> Escreve Ai
        </span>

        <button
          className="rounded-lg font-bold bg-violet-500 p-2 w-full max-w-[120px]"
          type="button"
        >
          Sign in
        </button>
      </div>
    </div>
  )
}
