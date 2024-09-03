"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { ShoppingCart } from "lucide-react"

export default function Header(){
    return <header className="sticky top-0 p-4 bg-slate-50 shadow-lg flex justify-between items-center z-50">
    <div className="text-black text-3xl font-bold">
      <ShoppingCart />
    </div>
    <nav className="flex gap-3 items-center">
      <Link className="font-semibold text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out" href={'/'}>
        Products
      </Link>
      <Link className="font-semibold text-gray-700 hover:text-blue-500 transition duration-300 ease-in-out" href={'/cart'}>
        Cart
      </Link>
      <Button className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md transition duration-300 ease-in-out">
        Login
      </Button>
    </nav>
  </header>
  
}