import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AlertCircle } from "lucide-react"

export const metadata = {
  title: "Refund & Cancellation Policy - JaipurWines",
  description: "Refund and cancellation policy for JaipurWines",
}

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="border-b bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">Refund & Cancellation Policy</h1>
            <p className="mt-4 text-muted-foreground">Last updated: December 2024</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="mb-8 rounded-lg border border-warning/50 bg-warning/10 p-6">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 shrink-0 text-warning" />
              <div>
                <h3 className="font-semibold text-warning-foreground">Important Notice</h3>
                <p className="mt-2 text-sm text-warning-foreground/80">
                  Due to the nature of alcoholic beverages, our refund and cancellation policy has specific restrictions
                  as per legal regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-gray mx-auto max-w-4xl dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-2xl font-bold">Order Cancellation</h2>

              <h3 className="mt-6 text-xl font-semibold">Before Order Confirmation</h3>
              <p className="mt-4 text-muted-foreground">
                You can cancel your order anytime before it is confirmed by our system. Once you place an order, you
                have approximately 5-10 minutes to cancel it before it enters the processing stage.
              </p>

              <h3 className="mt-6 text-xl font-semibold">After Order Confirmation</h3>
              <p className="mt-4 text-muted-foreground">
                Once an order is confirmed and enters the processing stage, it cannot be cancelled. However, you may
                refuse to accept the delivery when it arrives, but no refund will be processed for COD orders.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Refund Policy</h2>

              <h3 className="mt-6 text-xl font-semibold">General Policy</h3>
              <p className="mt-4 text-muted-foreground">
                We do not offer refunds or accept returns on alcoholic beverages unless the product is:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Damaged or broken during delivery</li>
                <li>Defective or expired</li>
                <li>Incorrect product delivered (different from what was ordered)</li>
                <li>Missing items from the order</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold">Eligible Refunds</h3>
              <p className="mt-4 text-muted-foreground">
                If your order qualifies for a refund under the above conditions:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Contact us within 24 hours of delivery with photos of the issue</li>
                <li>Our team will verify the claim</li>
                <li>Once approved, refund will be processed within 5-7 business days</li>
                <li>Refunds will be credited to the original payment method</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Replacement Policy</h2>
              <p className="mt-4 text-muted-foreground">
                For damaged, defective, or incorrect products, we offer replacements:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Report the issue within 24 hours with photos</li>
                <li>Replacement will be arranged within 24-48 hours</li>
                <li>No additional charges for replacement delivery</li>
                <li>Original product must be returned to the delivery personnel</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Non-Refundable Situations</h2>
              <p className="mt-4 text-muted-foreground">No refunds will be provided if:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>You change your mind after delivery</li>
                <li>You did not like the taste or quality (subjective preference)</li>
                <li>Delivery address was incorrect (provided by you)</li>
                <li>You were unavailable to receive the order</li>
                <li>Product was refused without valid reason</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">How to Request Refund/Cancellation</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted-foreground">
                <li>Contact us immediately at support@jaipurwines.com or +91 9876543210</li>
                <li>Provide your order number and details</li>
                <li>Share clear photos of the issue (if applicable)</li>
                <li>Our team will review and respond within 24 hours</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Refund Timeline</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Credit/Debit Card: 5-7 business days</li>
                <li>UPI/Digital Wallets: 3-5 business days</li>
                <li>Net Banking: 5-7 business days</li>
                <li>COD Orders: Bank transfer within 7-10 business days (bank details required)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p className="mt-4 text-muted-foreground">
                For refund or cancellation requests:
                <br />
                Email: support@jaipurwines.com
                <br />
                Phone: +91 9876543210
                <br />
                Hours: Mon-Sun, 9 AM - 10 PM
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
