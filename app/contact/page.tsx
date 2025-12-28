import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Contact Us - DaruAala",
  description: "Get in touch with DaruAala for any queries, support, or feedback",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="border-b bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">Contact Us</h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground max-w-3xl">
              We're here to help! Reach out to us for any questions or concerns
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Get In Touch</h2>
              <p className="mt-4 text-muted-foreground">
                Have a question or need assistance? Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="mt-1 text-sm text-muted-foreground">+91 7340050070</p>
                    <p className="text-xs text-muted-foreground">Mon-Sun, 9 AM - 10 PM</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Aaladaru8@gmail.com</p>
                    <p className="text-xs text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                       17, Tonk Rd, Barkat Nagar, Lalkothi,
                      <br />
                      Jaipur, Rajasthan 302015
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Monday - Sunday: 9:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-md border bg-background px-4 py-2"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-md border bg-background px-4 py-2"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-2 w-full rounded-md border bg-background px-4 py-2"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-2 w-full rounded-md border bg-background px-4 py-2"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 w-full rounded-md border bg-background px-4 py-2"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
