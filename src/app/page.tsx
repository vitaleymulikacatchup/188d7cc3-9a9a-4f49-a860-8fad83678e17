"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Camera, Headphones, Heart, MessageCircle, Monitor, Package, Phone, Shield, Smartphone, Star, Wrench, Zap } from 'lucide-react';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="animatedAurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Resbarry"
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Latest Smartphones & Accessories"
          description="Discover the newest mobile phones, cases, chargers, and accessories at unbeatable prices. Your one-stop mobile store."
          tag="Mobile Store"
          tagIcon={Smartphone}
          buttons={[
            {
              text: "Browse Phones",
              href: "products"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          imageSrc="https://pixabay.com/get/g6f46cf6ac1f39896d11a6e29a1e57288d21b3d499d9a1a9ae111386aaa70685eabcb5b358d7ebd46fb9d33bfe9c10a87e437ae47eb926edac56a86e8e1df806e_1280.jpg"
          imageAlt="Latest smartphone collection"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Why choose Resbarry for your mobile needs? We offer premium smartphones, expert service, and unmatched customer support."
          features={[
            {
              icon: Smartphone,
              title: "Latest Models",
              description: "Get access to the newest smartphone releases from top brands like Apple, Samsung, and Google."
            },
            {
              icon: Shield,
              title: "Warranty Protection",
              description: "All our phones come with comprehensive warranty coverage and free repair services."
            },
            {
              icon: Zap,
              title: "Quick Service",
              description: "Fast phone repairs, instant activation, and same-day pickup available for your convenience."
            },
            {
              icon: Heart,
              title: "Customer Care",
              description: "Dedicated support team to help you choose the perfect phone and accessories for your lifestyle."
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <FeatureCardFive
          title="Featured Products"
          description="Explore our collection of premium smartphones and accessories"
          tag="Products"
          tagIcon={Package}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          showIconBoxBackground={true}
          features={[
            {
              title: "iPhone 15 Series",
              icon: Smartphone
            },
            {
              title: "Samsung Galaxy S24",
              icon: Monitor
            },
            {
              title: "Google Pixel 8",
              icon: Camera
            },
            {
              title: "Phone Accessories",
              icon: Headphones
            },
            {
              title: "Repair Services",
              icon: Wrench
            }
          ]}
        />
      </div>

      <div id="product-showcase" data-section="product-showcase">
        <ProductCardTwo
          title="Best Selling Phones"
          description="Top-rated smartphones with excellent customer reviews"
          tag="Best Sellers"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Apple",
              name: "iPhone 15 Pro Max",
              price: "$1,199.00",
              rating: 5,
              reviewCount: "2.4k",
              imageSrc: "https://pixabay.com/get/g7ff251776f72f2d03e2f1b7f5248479ea6ce0c685dbf2766b5a96d782bf3cba2dd7ffbe2eb1079df097caaa4a3cec788e9edc0d472fa054f6ab7fff7b3daf414_1280.jpg",
              imageAlt: "iPhone 15 Pro Max"
            },
            {
              id: "2",
              brand: "Samsung",
              name: "Galaxy S24 Ultra",
              price: "$1,299.00",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://pixabay.com/get/g5d267538dd031fe7b15e05cdf4a4c580391d2a7c0cc36ff419682b0426cd4dd6ee212f6ca733d21ae60162544ad0b3d4b637d70bf4b5cf20b4c513990863ca89_1280.jpg",
              imageAlt: "Samsung Galaxy S24 Ultra"
            },
            {
              id: "3",
              brand: "Google",
              name: "Pixel 8 Pro",
              price: "$999.00",
              rating: 4,
              reviewCount: "956",
              imageSrc: "https://pixabay.com/get/g7042afa05c353d60eb172f8d30f5866546dc4998604c76e3f4c0f818a61f7594ab82ef1e396e99ed77d4ce2f99073a419edc7a9355dd012a5dd48fd67d6088aa_1280.jpg",
              imageAlt: "Google Pixel 8 Pro"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from satisfied customers who trust Resbarry"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Michael Chen",
              role: "Software Engineer",
              company: "TechCorp",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gfeb6ea680f5fb1b1ff85c28e54f04063f0d1254beca703bc84efe447c19046c0a9f6013c3ffcfe37db00126368500b278dc2236ab4c44206f5233f12a8996ae3_1280.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "2",
              name: "Sarah Johnson",
              role: "Marketing Manager",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g34790cfc74b873d7d7c6a92a154c9d172dc3d05905a65b4f11c0915705c9e7de2b40d6cd477a1521ebdc89313c60f918869967adb128310fb4cbcaf104034f69_1280.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Business Owner",
              company: "Local Business",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g351294b7365e028fa61f63c18680e661e672581acdb450fac894d14b81a2ce4c67b7d31cc3f5a4efd6b5f0bf2999cfff29b794c0f31e3eb07a246aee44cdb2e6_1280.jpg",
              imageAlt: "David Rodriguez portrait"
            },
            {
              id: "4",
              name: "Emma Wilson",
              role: "Designer",
              company: "Design Studio",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g67569866276c06009e0f025ec62a525631f9033d4a81294262ab03d743c1b159d7e20aae083a33b5acd72d8834b4dd5a36a719ae61e576d47effbd58ee86d6b7_1280.jpg",
              imageAlt: "Emma Wilson portrait"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact Us"
          tagIcon={Phone}
          title="Visit Our Mobile Store Today"
          description="Get the latest phones and expert advice from our knowledgeable staff. Subscribe for exclusive deals and new product updates."
          imageSrc="https://pixabay.com/get/g4ff04a8b5f4e44a08c198ebef17a4e7695beaae70f2a480752fd22f219cc1cd703bb47d288f89dc7717f0376ce4d5eb0a11e7e42a2b1c8fffb473369d93524f7_1280.jpg"
          imageAlt="Resbarry mobile store interior"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Get Updates"
          termsText="By subscribing, you agree to receive promotional emails and can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Resbarry"
          columns={[
            {
              items: [
                { label: "Home", href: "hero" },
                { label: "Products", href: "products" },
                { label: "About Us", href: "about" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Support", href: "contact" },
                { label: "Repairs", href: "products" }
              ]
            },
            {
              items: [
                { label: "iPhone", href: "products" },
                { label: "Samsung", href: "products" },
                { label: "Accessories", href: "products" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}