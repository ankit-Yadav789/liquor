import { HeroSliderSection } from "@/features/home/hero-slider-section"
import { HeroModernSection } from "@/features/home/hero-modern-section"
import { HeroPremiumSection } from "@/features/home/hero-premium-section"
import { HeroUltraModernSection } from "@/features/home/hero-ultra-modern-section"

/**
 * Example page demonstrating all hero sections
 * 
 * Usage:
 * 1. Use ONE of these hero sections on your home page
 * 2. Simply import and render the component you prefer
 * 3. All are fully responsive and SEO-optimized
 */

export default function HeroExamplesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section 1: Slider Section */}
      <div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">Hero Slider Section</h2>
          <p className="text-muted-foreground mb-8">
            Clean, elegant slider with automatic rotation and stats display.
            Perfect for showcasing multiple product categories.
          </p>
        </div>
        <HeroSliderSection />
      </div>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-border" />
      </div>

      {/* Hero Section 2: Modern Section */}
      <div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">Hero Modern Section</h2>
          <p className="text-muted-foreground mb-8">
            Advanced animations with manual controls, trust indicators, and featured product card.
            Ideal for premium brand presentation.
          </p>
        </div>
        <HeroModernSection />
      </div>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-border" />
      </div>

      {/* Hero Section 3: Premium Section */}
      <div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">Hero Premium Section</h2>
          <p className="text-muted-foreground mb-8">
            Eye-catching design with parallax effects, animated particles, rotating testimonials, and advanced SEO.
            Best for maximum visitor engagement and conversion.
          </p>
        </div>
        <HeroPremiumSection />
      </div>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-border" />
      </div>

      {/* Hero Section 4: Ultra-Modern Section */}
      <div>
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">Hero Ultra-Modern Section (LATEST!)</h2>
          <p className="text-muted-foreground mb-8">
            Cutting-edge design with 3D mouse-tracking, bento grid layout, animated gradient blobs, and cursor follower.
            The most modern and eye-catching option.
          </p>
        </div>
        <HeroUltraModernSection />
      </div>
    </div>
  )
}


