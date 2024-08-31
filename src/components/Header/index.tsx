import Link from "next/link"
import { FaRegUserCircle } from "react-icons/fa"
import { IoFitness } from "react-icons/io5"

export const Header = () => {
    return (
        <header className="w-full bg-neutral-100 drop-shadow-md" >
            <div className="max-w-5xl m-auto h-14 flex justify-between items-center" >
                <div className="flex items-center gap-1" >
                    <h1 className="text-3xl text-[#34495e] font-bold" >
                        WiseFit
                    </h1>
                    <IoFitness
                        size={28}
                        color="#FF4136" />
                </div>
                <div>
                    <nav className="flex gap-3" >
                        <Link
                            className="hover:text-[#1abc9c] transition-all"
                            href="/">
                            Home
                        </Link>
                        <Link
                            className="hover:text-[#1abc9c] transition-all"
                            href="/">
                            Treinos
                        </Link>
                        <Link
                            className="hover:text-[#1abc9c] transition-all"
                            href="/">
                            Cardio
                        </Link>
                        <Link
                            className="hover:text-[#1abc9c] transition-all"
                            href="/">
                            Histórico
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center cursor-pointer" >
                    <button>
                        <FaRegUserCircle
                            size={28}
                            color="#34495e" />
                    </button>
                </div>
            </div>
        </header>
    )
}