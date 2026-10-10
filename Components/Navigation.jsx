import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-blue-600 text-slate-100 p-4">
      <ul className="flex space-x-4">
        <li className="bg-sky-400 text-sky-50 backdrop-blur-sm backdrop box shadow border border-sky-500"><Link href="/">Home</Link></li>
        <li className="bg-sky-400 text-sky-50 backdrop-blur-sm backdrop box shadow border border-sky-500"><Link href="/notiq">About</Link></li>
        <li className="bg-sky-400 text-sky-50 backdrop-blur-sm backdrop box shadow border border-sky-500"><Link href="/Ibrahim">Contact</Link></li>
      </ul>
    </nav>
  );
}