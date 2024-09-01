import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import Link from "next/link"
import { FaRegUserCircle } from "react-icons/fa"
import { FiUserPlus } from "react-icons/fi"
import { IoEnterOutline, IoFitness } from "react-icons/io5"

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
                    <Menu >
                        <MenuButton>
                            <FaRegUserCircle size={28} color="#34495e" />
                        </MenuButton>
                        <MenuItems
                            anchor="bottom"
                            className="bg-neutral-100 w-[140px] rounded-[6px] font-bold flex items-center justify-center flex-col mt-1 drop-shadow border border-neutral-300"
                        >
                            <MenuItem>
                                <Link href="/login" className="flex justify-between w-full hover:bg-brand-100 px-1 py-2 border-0 border-b border-neutral-300 transition-colors">
                                    Registre-se
                                    <FiUserPlus size={20} />
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Link href="/register" className="flex justify-between w-full hover:bg-brand-100 px-1 py-2 border-0 transition-colors">
                                    Entrar
                                    <IoEnterOutline size={20} />
                                </Link>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>
            </div>
        </header >
    )
}