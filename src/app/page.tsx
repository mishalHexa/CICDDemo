"use client"

import { useState, useEffect } from "react"
import Button from "@/components/Button"
import { fetcher } from "@/lib/fetcher"
import Interactive from "@/components/Interactive"

export default function HomePage() {
  const [message, setMessage] = useState("Loading API Data...")

  useEffect(() => {
    fetcher<{ message: string }>("/api/hello").then((data) => setMessage(data.message))
  }, [])

    return (
    <main>
      <Interactive />
    </main>
  )

}
