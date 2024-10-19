'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, bottom: -100 }}
          animate={{ opacity: 1, bottom: 20 }}
          exit={{ opacity: 0, bottom: -100 }}
          transition={{ duration: 0.3 }}
          className="justify-center z-50 pt-4 pb-4"
          style={{ bottom: '20px' }}
        >
          <Button
            onClick={scrollToTop}
            className="rounded-2xl h-12 bg-[#9C6DFF] text-primary-foreground hover:bg-[#9C6DFF]/90 shadow-lg text-white"
            aria-label="Scroll to top"
          >
            Go to Waitlist
            <ChevronUp className="ml-2 h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  )
}