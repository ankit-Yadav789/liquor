"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SITE_CONFIG } from "@/lib/constants"

export function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const isVerified = localStorage.getItem("daruaala-age-verified")
    if (!isVerified) {
      setIsOpen(true)
    }
  }, [])

  const handleVerify = (verified: boolean) => {
    if (verified) {
      localStorage.setItem("daruaala-age-verified", "true")
      setIsOpen(false)
    } else {
      window.location.href = "https://www.google.com"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent
        className="sm:max-w-md"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Image 
              src="/logo1.png" 
              alt="DaruAala Logo" 
              width={40} 
              height={40} 
              className="h-10 w-10 object-contain" 
            />
          </div>
          <DialogTitle className="text-center font-serif text-2xl">Age Verification</DialogTitle>
          <DialogDescription className="text-center">
            You must be {SITE_CONFIG.legalAge} years or older to access this website.
            <br />
            Please verify your age to continue.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 flex flex-col gap-3">
          <Button onClick={() => handleVerify(true)} size="lg" className="w-full">
            I am {SITE_CONFIG.legalAge}+ years old
          </Button>
          <Button onClick={() => handleVerify(false)} variant="outline" size="lg" className="w-full">
            I am under {SITE_CONFIG.legalAge}
          </Button>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          By entering this site, you accept our terms and conditions and privacy policy.
        </p>
      </DialogContent>
    </Dialog>
  )
}
