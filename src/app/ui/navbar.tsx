import Link from "next/link"

export function Navbar() {
    return (
        <header className="fixed w-full backdrop-blur-md top-0 left-0">
            <nav className="flex justify-between p-2 max-w-5xl mx-auto">
                <h2>Series y Peliculas</h2>
                <ul className="flex gap-2">
                    <li>
                        <Link href="/" className="px-2 py-1 peer">Home</Link>
                        <div className="h-[2px] bg-white w-0 peer-hover:w-full transition-all duration-500"></div>
                    </li>
                    <li>
                        <Link href="/movies" className="px-2 py-1 peer">Subscriptions</Link>
                        <div className="h-[2px] bg-white w-0 peer-hover:w-full transition-all duration-500"></div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}