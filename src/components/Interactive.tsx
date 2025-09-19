"use client"

import { useState, useEffect } from "react"
import Button from "@/components/Button"
import { fetcher } from "@/lib/fetcher"

export default function Interactive() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    fetcher<{ message: string }>("/api/hello")
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error fetching API"))
  }, [])

  return (
    <div>
      <h1>{message}</h1>
      <Button label="Click Me" onClick={() => alert("Clicked!")} />
    </div>
  )
}
