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
    <main>
      <Interactive />
    </main>
  )

}
