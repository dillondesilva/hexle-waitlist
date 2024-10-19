'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
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
          className="fixed right-4 z-50"
          style={{ bottom: '20px' }}
        >
          <Button
            onClick={scrollToTop}
            className="rounded-full w-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  )
}