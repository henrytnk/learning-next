import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex gap-4 max-w-3xl mx-auto py-4 px-4 text-white font-medium border-b-2">
      <Link href="/">Home Page</Link>
      <Link href="/about">About Page</Link>
      <Link href="/counter">Counter Page</Link>
      <Link href="/pokemon">Pokemon Page</Link>
      <Link href="/contact">Contact Page</Link>
    </nav>
  )
}

export default Navbar