import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Wine, Award, Users, Truck } from "lucide-react"

export const metadata = {
  title: "About Us - JaipurWines",
  description: "Learn about JaipurWines - Your trusted partner for premium beverages in Jaipur",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="border-b bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">About JaipurWines</h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground max-w-3xl">
              Your trusted partner for premium liquor, wines, and beer in Jaipur
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded in 2020, JaipurWines has become the leading online liquor store in Jaipur, Rajasthan. We started
                with a simple mission: to provide authentic, premium beverages with exceptional service and convenience.
              </p>
              <p className="mt-4 text-muted-foreground">
                Today, we serve thousands of satisfied customers across Jaipur, offering an extensive collection of
                wines, spirits, beers, and more. Our commitment to quality and customer satisfaction has made us the
                preferred choice for beverage enthusiasts.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                To provide our customers with the finest selection of authentic beverages, delivered with exceptional
                service, while promoting responsible drinking and maintaining the highest standards of quality and
                compliance.
              </p>
              <div className="mt-8 rounded-lg border bg-card p-6">
                <h3 className="font-semibold">Our Values</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>✓ Authenticity in every product</li>
                  <li>✓ Customer satisfaction first</li>
                  <li>✓ Legal compliance and responsibility</li>
                  <li>✓ Fast and reliable delivery</li>
                  <li>✓ Competitive pricing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6 text-center">
              <Wine className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-2xl font-bold">500+</h3>
              <p className="mt-2 text-sm text-muted-foreground">Premium Products</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center">
              <Users className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-2xl font-bold">10,000+</h3>
              <p className="mt-2 text-sm text-muted-foreground">Happy Customers</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center">
              <Truck className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-2xl font-bold">2 Hours</h3>
              <p className="mt-2 text-sm text-muted-foreground">Average Delivery Time</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center">
              <Award className="mx-auto h-12 w-12 text-primary" />
              <h3 className="mt-4 text-2xl font-bold">100%</h3>
              <p className="mt-2 text-sm text-muted-foreground">Authentic Products</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
