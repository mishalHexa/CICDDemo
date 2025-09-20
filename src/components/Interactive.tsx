"use client"

import { useState, useEffect } from "react"
import Button from "@/components/Button"
import { fetcher } from "@/lib/fetcher"

export default function Interactive() {
  const [message, setMessage] = useState("Loading Interactive API Data...")

  useEffect(() => {
    console.log("use Effect Interactive")
    fetcher<{ message: string }>("/api/hello")
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.log(`Error fetching API Interactive ${error.message}`) 
        setMessage(`Error fetching API Interactive ${error.message}`)
      })

  }, [])

  return (
    <div>
      <h1>{message}</h1>
      <Button label="Click Me" onClick={() => alert("Clicked!")} />
    </div>
  )
}
