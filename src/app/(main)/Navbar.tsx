import Link  from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

export default function Navbar(){
    return <header className="shadow-sm">
        <div className="max-w-7xl mx-auto p-3 flex items-center justify-between gap-3">
            <Link href="/resumes" className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={35} height={35}/>
            </Link>
            <span className="text-xl font-bold tracking-tight">Smart Resume Builder</span>
        </div>
    </header>
}