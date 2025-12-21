import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "FAQs - JaipurWines",
  description: "Frequently asked questions about JaipurWines services, delivery, and policies",
}

const faqs = [
  {
    question: "What are your delivery timings?",
    answer:
      "We deliver from 10 AM to 10 PM, Monday through Sunday. Same-day delivery is available for orders placed before 6 PM.",
  },
  {
    question: "Do you deliver to all areas in Jaipur?",
    answer:
      "We currently deliver to most areas within Jaipur city limits. Enter your pincode at checkout to check delivery availability in your area.",
  },
  {
    question: "What is the minimum order value?",
    answer: "The minimum order value is ₹500. Orders above ₹2000 qualify for free delivery.",
  },
  {
    question: "Are all products genuine?",
    answer:
      "Yes, we source all our products directly from authorized distributors and manufacturers, ensuring 100% authenticity.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Cash on Delivery (COD), Credit/Debit Cards, UPI, Net Banking, and digital wallets.",
  },
  {
    question: "Can I return or exchange products?",
    answer:
      "Due to the nature of alcoholic beverages, we do not accept returns or exchanges unless the product is damaged or defective. Please check your order upon delivery.",
  },
  {
    question: "Do I need to show ID proof during delivery?",
    answer:
      "Yes, you must be 21 years or older to receive alcohol deliveries. Our delivery personnel will verify your age with a valid government-issued ID.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order is confirmed, you'll receive a tracking link via SMS and email. You can also track your order from the 'My Orders' section in your account.",
  },
  {
    question: "What if I receive a damaged product?",
    answer:
      "If you receive a damaged or defective product, please contact us immediately with photos. We'll arrange a replacement within 24 hours.",
  },
  {
    question: "Do you offer gift packaging?",
    answer:
      "Yes, we offer premium gift packaging for special occasions. You can select this option during checkout for an additional charge.",
  },
]

export default function FAQsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="border-b bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">Frequently Asked Questions</h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground max-w-3xl">
              Find answers to common questions about our services
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border bg-card px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 rounded-lg border bg-muted/30 p-8 text-center">
              <h2 className="text-xl font-bold">Still have questions?</h2>
              <p className="mt-2 text-muted-foreground">
                Can't find the answer you're looking for? Please contact our customer support team.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-block rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
