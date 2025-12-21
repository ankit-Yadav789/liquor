import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Privacy Policy - JaipurWines",
  description: "Privacy policy for JaipurWines - How we collect, use, and protect your information",
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="border-b bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-muted-foreground">Last updated: December 2024</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="prose prose-gray mx-auto max-w-4xl dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-2xl font-bold">Introduction</h2>
              <p className="mt-4 text-muted-foreground">
                At JaipurWines, we are committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website and use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Information We Collect</h2>
              <p className="mt-4 text-muted-foreground">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Name, email address, phone number, and delivery address</li>
                <li>Date of birth (for age verification)</li>
                <li>Payment information (processed securely through payment gateways)</li>
                <li>Order history and preferences</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">How We Use Your Information</h2>
              <p className="mt-4 text-muted-foreground">We use the information we collect to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Process and fulfill your orders</li>
                <li>Verify your age and legal eligibility to purchase alcohol</li>
                <li>Communicate with you about your orders and account</li>
                <li>Send promotional offers and updates (with your consent)</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Information Sharing</h2>
              <p className="mt-4 text-muted-foreground">
                We do not sell or rent your personal information to third parties. We may share your information with:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Delivery partners to fulfill your orders</li>
                <li>Payment processors to handle transactions</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Data Security</h2>
              <p className="mt-4 text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Your Rights</h2>
              <p className="mt-4 text-muted-foreground">You have the right to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Cookies</h2>
              <p className="mt-4 text-muted-foreground">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and
                personalize content. You can control cookie settings through your browser.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p className="mt-4 text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4 text-muted-foreground">
                Email: privacy@jaipurwines.com
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
