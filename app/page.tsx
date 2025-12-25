import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/features/home/hero-section"
import { FeaturedCategories } from "@/features/home/featured-categories"
import { FeaturedProducts } from "@/features/home/featured-products"
import { AgeVerificationModal } from "@/features/auth/age-verification-modal"
import { BestSellers } from "@/features/home/best-sellers"
import { TrustSection } from "@/features/home/trust-section"
import { SpecialOffers } from "@/features/home/special-offers"
import { PopularBrands } from "@/features/home/popular-brands"
import { NewArrivals } from "@/features/home/new-arrivals"
import { CustomerReviews } from "@/features/home/customer-reviews"
import { DeliveryBanner } from "@/features/home/delivery-banner"
import { Newsletter } from "@/features/home/newsletter"
import { ResponsibleDrinking } from "@/features/home/responsible-drinking"
import { HeroSliderSection } from "@/features/home/hero-slider-section"
import { HeroModernSection } from "@/features/home/hero-modern-section"
import { HeroPremiumSection } from "@/features/home/hero-premium-section"
import { HeroUltraModernSection } from "@/features/home/hero-ultra-modern-section"
export default function HomePage() {
  return (
    <>
      <AgeVerificationModal />
      <Navbar />
      <main>
      <HeroSliderSection/>

        {/* <FeaturedCategories /> */}
       <BestSellers />
       <FeaturedProducts />
        <TrustSection />
        <SpecialOffers />
        <PopularBrands />
        <NewArrivals />
        <CustomerReviews />
        <DeliveryBanner />
        <Newsletter />
        <ResponsibleDrinking />
      </main>
      <Footer />
    </>
  )
}
