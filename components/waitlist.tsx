'use client'

import { useState, FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { createClient } from '@supabase/supabase-js'
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Waitlist() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')

    const supabase = createClient(
      "https://amtcdvfirhobcqgvqbiy.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtdGNkdmZpcmhvYmNxZ3ZxYml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzMDEyOTcsImV4cCI6MjA0NDg3NzI5N30.9fbFVqzKMAI2ZHkzCgSZJjW4BQgMVuZF9PADpYaFlIQ"
    )

    try {
      const { error } = await supabase.from('emails').insert([{ email: email }])
      if (error) throw error
      setSubmitStatus('success')
    } catch (error) {
      console.error("Error submitting email:", error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRetry = () => {
    setSubmitStatus('idle')
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <h1 className="font-bold text-2xl text-center">Want to try it out when it is ready?</h1>
      <div className="min-h-[100px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {submitStatus === 'idle' && (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 w-full"
            >
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:w-2/3"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                className="w-full sm:w-1/3 bg-gray-900 text-white hover:bg-gray-800"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Notify me"
                )}
              </Button>
            </motion.form>
          )}
          {submitStatus === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center text-green-600"
            >
              <CheckCircle className="mr-2" />
              <span>Successfully added to the waitlist!</span>
            </motion.div>
          )}
          {submitStatus === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center text-red-600"
            >
              <AlertCircle className="mr-2" />
              <span>Failed to add email. </span>
              <Button 
                variant="link" 
                className="text-red-600 underline" 
                onClick={handleRetry}
              >
                Retry
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}