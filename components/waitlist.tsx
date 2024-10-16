"use client";

import { useState, FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Waitlist() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email)
    setEmail("")
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <h1 className="font-bold mb-4 text-2xl">Want to try it out when it is ready?</h1>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow bg-gray-100 border-gray-300"
        />
        <Button type="submit" className="bg-gray-900 text-white hover:bg-gray-800">
          Notify me
        </Button>
      </form>
    </div>
  )
}