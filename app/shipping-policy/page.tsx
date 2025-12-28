import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Truck, Clock, MapPin, Package } from "lucide-react"

export const metadata = {
  title: "Shipping Policy - DaruAala",
  description: "Delivery and shipping policy for DaruAala",
}

export default function ShippingPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="border-b bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">Shipping & Delivery Policy</h1>
            <p className="mt-4 text-muted-foreground">Last updated: December 2024</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6 text-center">
              <Truck className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 font-semibold">Fast Delivery</h3>
              <p className="mt-2 text-sm text-muted-foreground">Same-day & next-day options</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center">
              <Clock className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 font-semibold">Delivery Hours</h3>
              <p className="mt-2 text-sm text-muted-foreground">10 AM - 10 PM daily</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center">
              <MapPin className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 font-semibold">Service Area</h3>
              <p className="mt-2 text-sm text-muted-foreground">All across Jaipur</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center">
              <Package className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 font-semibold">Secure Packaging</h3>
              <p className="mt-2 text-sm text-muted-foreground">Safe & discreet</p>
            </div>
          </div>

          <div className="prose prose-gray mx-auto max-w-4xl dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-2xl font-bold">Delivery Areas</h2>
              <p className="mt-4 text-muted-foreground">We currently deliver to the following areas in Jaipur:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>C-Scheme, MI Road, and surrounding areas</li>
                <li>Vaishali Nagar, Malviya Nagar, Mansarovar</li>
                <li>Jagatpura, Nirman Nagar, Tonk Road</li>
                <li>Raja Park, Civil Lines, JLN Marg</li>
                <li>Sitapura, Jhotwara, Sanganer</li>
                <li>And many more areas across Jaipur</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Enter your pincode at checkout to verify delivery availability in your area.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Delivery Timings</h2>
              <p className="mt-4 text-muted-foreground">
                We deliver from <strong>10:00 AM to 10:00 PM</strong>, Monday through Sunday.
              </p>
              <div className="mt-4 rounded-lg border bg-muted/30 p-4">
                <h3 className="font-semibold">Same-Day Delivery</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Orders placed before 6:00 PM will be delivered the same day. Orders after 6:00 PM will be delivered
                  the next day.
                </p>
              </div>
              <div className="mt-4 rounded-lg border bg-muted/30 p-4">
                <h3 className="font-semibold">Express Delivery</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Express delivery available for orders above ₹2000. Get your order within 2 hours!
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Delivery Charges</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Orders below ₹500: Not available (minimum order value)</li>
                <li>Orders ₹500 - ₹1999: ₹50 delivery charge</li>
                <li>Orders ₹2000 and above: FREE delivery</li>
                <li>Express Delivery: Additional ₹100 charge</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Order Tracking</h2>
              <p className="mt-4 text-muted-foreground">Once your order is confirmed, you can track it in real-time:</p>
              <ol className="mt-4 list-decimal space-y-2 pl-6 text-muted-foreground">
                <li>Order Confirmed - Your order is being prepared</li>
                <li>Out for Delivery - Delivery partner is on the way</li>
                <li>Delivered - Order successfully delivered</li>
              </ol>
              <p className="mt-4 text-muted-foreground">You'll receive SMS and email notifications at each stage.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Age Verification</h2>
              <p className="mt-4 text-muted-foreground">
                As per legal requirements, our delivery personnel will verify the age of the recipient at the time of
                delivery. You must:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Be at least 21 years of age</li>
                <li>Present a valid government-issued photo ID</li>
                <li>Be present in person to receive the order</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                If age cannot be verified, the order will not be delivered and no refund will be issued.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Packaging</h2>
              <p className="mt-4 text-muted-foreground">All orders are carefully packaged to ensure safe delivery:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Bubble wrap and protective packaging for glass bottles</li>
                <li>Discreet, unmarked packaging for privacy</li>
                <li>Temperature-controlled delivery vehicles</li>
                <li>Gift packaging available upon request</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Delivery Instructions</h2>
              <p className="mt-4 text-muted-foreground">
                You can provide specific delivery instructions during checkout:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Landmarks near delivery address</li>
                <li>Preferred delivery time slot</li>
                <li>Gate code or security instructions</li>
                <li>Contact alternate phone number</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Failed Delivery</h2>
              <p className="mt-4 text-muted-foreground">
                If delivery fails due to unavailability, incorrect address, or age verification issues:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>We will attempt delivery up to 2 times</li>
                <li>You will be contacted for rescheduling</li>
                <li>Additional delivery charges may apply</li>
                <li>Order will be cancelled if delivery fails after 2 attempts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Contact Delivery Support</h2>
              <p className="mt-4 text-muted-foreground">
                For delivery-related queries:
                <br />
                Phone: +91 9876543210
                <br />
                Email: delivery@daruaala.com
                <br />
                Hours: 9 AM - 10 PM (Daily)
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
