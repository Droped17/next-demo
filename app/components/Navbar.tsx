import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-primary sticky top-0 z-10 text-black">
      <div>
        <h1>HotCoffee</h1>
      </div>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/">Article</Link>
      </div>
    </nav>
  );
}
