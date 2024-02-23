import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between border p-4">
      <div>
        <p>hotcoffee 2020 copyright all rights reserved</p>
      </div>
      <div>
        <Link href="/">ig</Link>
        <Link href="/">x</Link>
        <Link href="/">link</Link>
      </div>
    </footer>
  );
}
