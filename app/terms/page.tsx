import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Terms & Conditions - DaruAala",
  description: "Terms and conditions for using DaruAala services",
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="border-b bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">Terms & Conditions</h1>
            <p className="mt-4 text-muted-foreground">Last updated: December 2024</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="prose prose-gray mx-auto max-w-4xl dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
              <p className="mt-4 text-muted-foreground">
                By accessing and using DaruAala website and services, you accept and agree to be bound by these Terms
                and Conditions. If you do not agree with any part of these terms, you must not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">2. Age Restriction</h2>
              <p className="mt-4 text-muted-foreground">
                You must be at least 21 years of age to purchase alcohol from DaruAala. By placing an order, you
                confirm that you meet this age requirement. We reserve the right to verify your age through
                government-issued identification at the time of delivery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">3. Product Information</h2>
              <p className="mt-4 text-muted-foreground">
                We strive to provide accurate product descriptions, prices, and availability information. However, we do
                not warrant that product descriptions or other content is error-free. We reserve the right to correct
                errors and update information at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">4. Orders and Payment</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>All orders are subject to acceptance and availability</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Prices are subject to change without notice</li>
                <li>Payment must be completed before delivery</li>
                <li>We accept COD, cards, UPI, and other digital payment methods</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">5. Delivery</h2>
              <p className="mt-4 text-muted-foreground">
                Delivery is available only within our service areas in Jaipur. Delivery times are estimates and not
                guaranteed. The recipient must present valid age verification upon delivery.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">6. Returns and Refunds</h2>
              <p className="mt-4 text-muted-foreground">
                Due to the nature of alcoholic beverages, we do not accept returns or offer refunds except in cases of
                damaged or defective products. Claims must be made within 24 hours of delivery with photographic
                evidence.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">7. Responsible Drinking</h2>
              <p className="mt-4 text-muted-foreground">
                DaruAala promotes responsible consumption of alcohol. We encourage our customers to drink responsibly
                and never drink and drive. Excessive alcohol consumption is harmful to health.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">8. Legal Compliance</h2>
              <p className="mt-4 text-muted-foreground">
                We operate in full compliance with all applicable laws and regulations governing the sale and delivery
                of alcoholic beverages in Rajasthan. Customers must also comply with all applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">9. Limitation of Liability</h2>
              <p className="mt-4 text-muted-foreground">
                DaruAala shall not be liable for any indirect, incidental, special, or consequential damages arising
                from the use of our services or products.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">10. Contact Information</h2>
              <p className="mt-4 text-muted-foreground">
                For questions about these Terms & Conditions, contact us at:
                <br />
                Email: legal@daruaala.com
                <br />
                Phone: +91 9876543210
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
