import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import PersonaSection from '@/components/PersonaSection'
import ProjectsSection from '@/components/ProjectsSection'
import FeaturesSection from '@/components/FeaturesSection'
import EducationSection from '@/components/EducationSection'
import PartnersSection from '@/components/PartnersSection'
import CommunitySection from '@/components/CommunitySection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <HeroSection />
      <PersonaSection />
      <ProjectsSection />
      <FeaturesSection />
      <EducationSection />
      <PartnersSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
