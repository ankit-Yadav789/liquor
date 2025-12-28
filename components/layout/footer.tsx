import Link from "next/link"
import { Wine, Facebook, Twitter, Instagram, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Wine className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">DaruAala</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium liquor, wines, and beer delivered to your doorstep. Quality guaranteed.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

         

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/responsible-drinking" className="text-muted-foreground hover:text-primary">
                  Responsible Drinking
                </Link>
              </li>
            </ul>
          </div>


          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-muted-foreground hover:text-primary">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="text-muted-foreground hover:text-primary">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe to get updates on new arrivals and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-md border bg-background px-3 py-2 text-sm"
              />
              <button className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground transition-colors hover:bg-primary/90">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} DaruAala. All rights reserved.</p>
          <p className="mt-2">Please drink responsibly. Must be 21+ years old to purchase.</p>
        </div>
      </div>
    </footer>
  )
}
