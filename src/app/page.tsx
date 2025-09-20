"use client"

import { useState, useEffect } from "react"
import Button from "@/components/Button"
import { fetcher } from "@/lib/fetcher"
import Interactive from "@/components/Interactive"

export default function HomePage() {
  const [message, setMessage] = useState("Loading Page API Data...")

  useEffect(() => {
    console.log("use Effect page")

    fetcher<{ message: string }>("/api/hello")
    .then((data) => setMessage(data.message))
   .catch((error) => {
        console.log(`Error fetching API page ${error.message}`) 
        setMessage(`Error fetching API page ${error.message}`)
      })
  }, [])

    return (
    // <main>
    //   <Interactive />
    // </main>
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl font-extrabold text-indigo-600 mb-6">
          Welcome to My Next.js App
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          This is a simple standalone home page built with Next.js and Tailwind CSS. 
          You can customize it however you like.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/about"
            className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
          >
            Get Started
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-2xl bg-white text-indigo-600 border border-indigo-600 font-semibold shadow hover:bg-indigo-50 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
 
  )

}
