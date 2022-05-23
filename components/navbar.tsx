import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar pt-2 pb-2">
      <nav className="container">
        <header className="text-white">
          RIDWANULLAHI <span>YAHYAH</span>
        </header>
        <ul className="display-f text-white">
          <li className="ml-1 active">
            <Link href="#">Home</Link>
          </li>
          <li className="ml-1">
            <Link href="#">About</Link>
          </li>
          <li className="ml-1">
            <Link href="#">Portfolio</Link>
          </li>
          <li className="ml-1">
            <Link href="#">Blog</Link>
          </li>
          <li className="ml-1">
            <Link href="#">Newsletter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
