import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AlertTriangle, Heart, Car, Users } from "lucide-react"

export const metadata = {
  title: "Responsible Drinking - DaruAala",
  description: "Information about responsible alcohol consumption and drinking guidelines",
}

export default function ResponsibleDrinkingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="border-b bg-warning/10 py-16">
          <div className="container mx-auto px-4 text-center">
            <AlertTriangle className="mx-auto h-16 w-16 text-warning" />
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight lg:text-5xl">Drink Responsibly</h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground max-w-3xl mx-auto">
              Your health and safety matter to us. Please enjoy alcohol responsibly.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6 text-center">
              <Heart className="mx-auto h-12 w-12 text-destructive" />
              <h3 className="mt-4 font-semibold">Health First</h3>
              <p className="mt-2 text-sm text-muted-foreground">Protect your health</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center">
              <Car className="mx-auto h-12 w-12 text-destructive" />
              <h3 className="mt-4 font-semibold">Don't Drink & Drive</h3>
              <p className="mt-2 text-sm text-muted-foreground">Stay safe on roads</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center">
              <Users className="mx-auto h-12 w-12 text-destructive" />
              <h3 className="mt-4 font-semibold">Age Restriction</h3>
              <p className="mt-2 text-sm text-muted-foreground">21+ years only</p>
            </div>
            <div className="rounded-lg border bg-card p-6 text-center">
              <AlertTriangle className="mx-auto h-12 w-12 text-destructive" />
              <h3 className="mt-4 font-semibold">Know Your Limits</h3>
              <p className="mt-2 text-sm text-muted-foreground">Drink in moderation</p>
            </div>
          </div>

          <div className="prose prose-gray mx-auto max-w-4xl dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-2xl font-bold">Why Responsible Drinking Matters</h2>
              <p className="mt-4 text-muted-foreground">
                At DaruAala, we are committed to promoting responsible consumption of alcoholic beverages. While
                alcohol can be enjoyed as part of social occasions and celebrations, it's essential to understand the
                risks associated with excessive or irresponsible consumption.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Health Guidelines</h2>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-destructive/50 bg-destructive/5 p-4">
                  <h3 className="font-semibold text-destructive">⚠️ Health Warning</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Excessive alcohol consumption is harmful to your health and can lead to serious medical conditions
                    including liver disease, heart problems, and addiction.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-muted-foreground">Recommended safe limits:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Men: No more than 2 standard drinks per day</li>
                <li>Women: No more than 1 standard drink per day</li>
                <li>Have alcohol-free days each week</li>
                <li>Never binge drink (consuming multiple drinks rapidly)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Never Drink and Drive</h2>
              <p className="mt-4 text-muted-foreground">
                Drinking and driving is illegal and extremely dangerous. Even small amounts of alcohol can impair your
                judgment, reaction time, and driving ability.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Always designate a sober driver</li>
                <li>Use taxi services or ride-sharing apps</li>
                <li>Stay overnight if you've been drinking</li>
                <li>Keep emergency contact numbers handy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Who Should Not Drink</h2>
              <p className="mt-4 text-muted-foreground">Certain individuals should avoid alcohol completely:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Pregnant women or those trying to conceive</li>
                <li>Individuals under 21 years of age</li>
                <li>People with certain medical conditions</li>
                <li>Those taking medications that interact with alcohol</li>
                <li>Individuals recovering from alcohol addiction</li>
                <li>People operating machinery or vehicles</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Signs of Problem Drinking</h2>
              <p className="mt-4 text-muted-foreground">
                Be aware of these warning signs that may indicate problematic alcohol use:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Drinking more or longer than intended</li>
                <li>Unable to cut down despite wanting to</li>
                <li>Spending significant time drinking or recovering</li>
                <li>Cravings or strong urges to drink</li>
                <li>Neglecting responsibilities due to drinking</li>
                <li>Continuing to drink despite problems it causes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Tips for Responsible Drinking</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Pace yourself - sip slowly and alternate with water</li>
                <li>Eat before and while drinking</li>
                <li>Know what's in your drink and track your consumption</li>
                <li>Avoid peer pressure - it's okay to say no</li>
                <li>Stay with friends and look out for each other</li>
                <li>Have a plan to get home safely</li>
                <li>Know your limits and respect them</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Need Help?</h2>
              <p className="mt-4 text-muted-foreground">
                If you or someone you know is struggling with alcohol, help is available:
              </p>
              <div className="mt-4 rounded-lg border bg-muted/30 p-6">
                <h3 className="font-semibold">Helpline Numbers</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>
                    <strong>National Helpline:</strong> 1800-11-0031 (Toll-free)
                  </li>
                  <li>
                    <strong>Alcoholics Anonymous India:</strong> +91-9899-88-7849
                  </li>
                  <li>
                    <strong>Mental Health Helpline:</strong> +91-9152-987821
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold">Our Commitment</h2>
              <p className="mt-4 text-muted-foreground">DaruAala is committed to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Verifying age of all customers (21+ years)</li>
                <li>Promoting responsible drinking messages</li>
                <li>Complying with all legal regulations</li>
                <li>Refusing service when necessary</li>
                <li>Educating customers about safe consumption</li>
              </ul>
            </section>

            <div className="mt-12 rounded-lg border-2 border-warning bg-warning/10 p-8 text-center">
              <h2 className="text-2xl font-bold text-warning-foreground">Remember</h2>
              <p className="mt-4 text-lg text-warning-foreground/80">
                "Drink Responsibly. Don't Drink and Drive. Your life matters."
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
