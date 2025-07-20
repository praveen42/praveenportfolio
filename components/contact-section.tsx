import { SectionWrapper } from "@/components/section-wrapper"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      title="Let's Connect"
      subtitle="Ready to discuss opportunities or collaborate on exciting projects"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </SectionWrapper>
  )
}
