import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  Shield,
  HeartHandshake,
  GraduationCap,
  Users,
  Mail,
  Briefcase,
  BookOpenCheck,
  Workflow,
  Lightbulb,
  ArrowRight,
  Award,
  Building2,
  Phone,
} from "lucide-react";

// Brand palette (reference)
// cream: #f4f1eb | gold: #d0893e | sand: #c39b6a | cocoa: #4b2e1d | black: #000000

export default function Site() {
  return (
    <div className="min-h-screen bg-[#f4f1eb] text-slate-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-[#f4f1eb]/90 border-b border-[#c39b6a]/40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="SVTC logo" className="h-8 w-8 rounded" />
            <span className="font-[Nunito] text-lg tracking-tight font-bold">
              Sexual Violence Training & Consultancy
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-[Poppins]">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#programmes" className="hover:opacity-70">Programmes</a>
            <a href="#approach" className="hover:opacity-70">Approach</a>
            <a href="#sectors" className="hover:opacity-70">Sectors</a>
            <a href="#testimonials" className="hover:opacity-70">Testimonials</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="#contact" className="md:inline-block hidden">
            <Button className="rounded-2xl bg-[#d0893e] hover:bg-[#c39b6a] text-black font-[Poppins]">
              Book a discovery call
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#f4f1eb] via-[#c39b6a]/25 to-[#4b2e1d]/10"
          aria-hidden
        />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-700 bg-white/70 px-3 py-1 rounded-full shadow-sm border border-[#c39b6a]/40 font-[Poppins]">
              <Shield className="h-4 w-4" /> Safeguarding • Trauma-informed • Evidence-led
            </span>
            <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#000] font-[Nunito]">
              Specialist Sexual Violence Training & Consultancy
            </h1>
            <p className="mt-4 text-lg text-slate-800 max-w-prose font-[Poppins]">
              We equip healthcare and allied professionals with the knowledge, confidence, and practical tools to provide safe, effective, and compassionate care for survivors of sexual violence.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact">
                <Button size="lg" className="rounded-2xl bg-[#d0893e] hover:bg-[#c39b6a] text-black font-[Poppins]">
                  Request a proposal <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#programmes">
                <Button size="lg" variant="outline" className="rounded-2xl border-[#d0893e] text-[#4b2e1d] font-[Poppins]">
                  View training programmes
                </Button>
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-800">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> NHS-proven training</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Trauma-informed pedagogy</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Practical, scenario-based</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Aligned with UK guidance</li>
            </ul>
          </div>
          <div className="md:pl-6 font-[Poppins]">
            <Card className="rounded-2xl shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" /> Popular Programmes
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <Programme title="Effective Handling of Disclosures" duration="1 day" level="All staff" />
                <Programme title="Preventing Workplace Sexual Harassment & New Legal Duties" duration="1 day" level="Leads & managers" />
                <Programme title="Sexual Violence Awareness Training" duration="1 day" level="All staff" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-[#c39b6a]/40 bg-[#f4f1eb]">
        <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6 text-sm">
          <TrustItem icon={<Building2 className="h-5 w-5" />} title="NHS & public sector" desc="Experience across trusts & ICS" />
          <TrustItem icon={<Award className="h-5 w-5" />} title="Evidence-informed" desc="Grounded in psych & psychiatry" />
          <TrustItem icon={<Workflow className="h-5 w-5" />} title="Practical tools" desc="Checklists, scripts, pathways" />
          <TrustItem icon={<HeartHandshake className="h-5 w-5" />} title="Survivor-centred" desc="Compassionate & safe practice" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#4b2e1d] font-[Nunito]">
              Consultancy & Training Services
            </h2>
            <p className="mt-4 text-slate-800 max-w-prose font-[Poppins]">
              From bite-size workshops to whole-system transformation, we help organisations raise confidence, competence, and consistency in sexual violence response. Engagements can be delivered on-site or online across the UK.
            </p>
            <ul className="mt-6 space-y-3 text-slate-800">
              <li className="flex items-start gap-3"><Briefcase className="mt-1 h-5 w-5" /> Bespoke consultancy: pathway mapping, policy & SOPs, referral routes, and quality improvement.</li>
              <li className="flex items-start gap-3"><Users className="mt-1 h-5 w-5" /> Team training & CPD: interactive, scenario-based sessions tailored to role and cohort.</li>
              <li className="flex items-start gap-3"><BookOpenCheck className="mt-1 h-5 w-5" /> Supervision & reflective practice for teams working with survivors.</li>
              <li className="flex items-start gap-3"><Lightbulb className="mt-1 h-5 w-5" /> Service design: survivor-centred improvement projects and implementation support.</li>
            </ul>
            <div className="mt-6">
              <a href="#contact">
                <Button className="rounded-2xl bg-[#d0893e] hover:bg-[#c39b6a] text-black font-[Poppins]">Enquire about availability</Button>
              </a>
            </div>
          </div>
          <div className="grid gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Outcomes you can expect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-800">
                  <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-4 w-4" /> Staff equipped to respond to disclosures confidently and safely</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-4 w-4" /> Clear local pathways and referral options understood by all</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-4 w-4" /> Reduced re-traumatisation via trauma-informed communication</li>
                  <li className="flex items-start gap-2"><CheckCircle className="mt-1 h-4 w-4" /> Better data capture and documentation aligned to guidance</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>Who we train</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-800">
                Primary & acute care, urgent care, mental health, safeguarding teams, school nursing, social care, charities, police partners, and university health services.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="bg-[#f4f1eb] border-y border-[#c39b6a]/40">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-[#4b2e1d] font-[Nunito]">Training Programmes</h2>
          <p className="mt-3 text-slate-800 max-w-prose">
            Modular content tailored by role, level, and local policy. Each programme includes slide deck, facilitator guide, handouts, pathways, and evaluation tools.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <ProgrammeCard
              title="Effective Handling of Disclosures"
              subtitle="Recognise, respond, refer"
              bullets={[
                "Indicators & first response",
                "Do/Don't when discussing options",
                "Documentation & onward referral",
              ]}
              duration="1 day"
            />
            <ProgrammeCard
              title="Preventing Workplace Sexual Harassment & New Legal Duties"
              subtitle="Culture, policy, compliance"
              bullets={[
                "Legal duties & employer obligations",
                "Reporting routes & bystander intervention",
                "Investigation principles & support",
              ]}
              duration="1 day"
            />
            <ProgrammeCard
              title="Sexual Violence Awareness Training"
              subtitle="Foundations for all staff"
              bullets={[
                "Forms & prevalence",
                "Impact & trauma-informed care",
                "Local pathways & support",
              ]}
              duration="1 day"
            />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Approach icon={<Shield className="h-6 w-6" />} title="Trauma-informed" desc="Psychological safety is baked into our content and facilitation." />
          <Approach icon={<GraduationCap className="h-6 w-6" />} title="Evidence-led" desc="Grounded in psychiatry & psychology, aligned with UK guidance." />
          <Approach icon={<Users className="h-6 w-6" />} title="Co-designed" desc="Developed with practitioners and survivor input where appropriate." />
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="bg-[#f4f1eb] border-y border-[#c39b6a]/40">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-[#4b2e1d] font-[Nunito]">Sectors we support</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-slate-800">
            {[
              "NHS trusts & ICS",
              "Primary care & PCNs",
              "Mental health services",
              "Urgent & emergency care",
              "Safeguarding teams",
              "Universities & colleges",
              "Local authorities",
              "Charities & NGOs",
              "Police & partner agencies",
            ].map((s) => (
              <div key={s} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#c39b6a]/40 shadow-sm">
                <CheckCircle className="h-4 w-4" /> {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-[#4b2e1d] font-[Nunito]">What clients say</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Testimonial quote="One of the most impactful trainings our team has had—practical, compassionate, and immediately applicable." name="Clinical Lead" org="NHS Trust" />
          <Testimonial quote="Clear pathways and scripts transformed the confidence of frontline staff." name="Service Manager" org="Integrated Care System" />
          <Testimonial quote="Expertly facilitated with sensitivity to staff and survivor wellbeing." name="Safeguarding Lead" org="University Health" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#000000] text-[#f4f1eb]">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight font-[Nunito]">Let’s talk</h2>
            <p className="mt-3 text-[#f4f1eb]/80 max-w-prose">
              Tell us about your team, cohort and goals. We’ll suggest a right-sized option and share a draft outline.
            </p>
            <p className="mt-4 text-sm text-[#f4f1eb]/70">Email address is being set up — please use the form for now.</p>
            <div className="mt-6 space-y-2 text-sm text-[#f4f1eb]/80">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@svtc.example</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +44 (0)20 0000 0000</div>
            </div>
          </div>
          <Card className="bg-white text-slate-900 rounded-2xl">
            <CardHeader>
              <CardTitle>Request a proposal</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Replace action with Formspree/Formspark endpoint */}
              <form action="#" method="POST" className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="org" className="text-sm font-medium">Organisation</label>
                  <Input id="org" name="organisation" placeholder="e.g., NHS Trust / University" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">Work email</label>
                  <Input id="email" type="email" name="email" placeholder="you@organisation.nhs.uk" required />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">What do you need?</label>
                  <Textarea id="message" name="message" placeholder="Team size, roles, preferred dates, goals…" rows={5} />
                </div>
                <Button type="submit" className="rounded-2xl bg-[#d0893e] hover:bg-[#c39b6a] text-black">Send</Button>
                <p className="text-xs text-slate-500">
                  By submitting, you consent to being contacted about your enquiry. Please avoid sharing identifiable survivor information.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#c39b6a]/40 bg-[#f4f1eb]">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-700 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <Shield className="h-5 w-5" /> Sexual Violence Training & Consultancy
            </div>
            <p className="mt-2">London • UK-wide delivery</p>
          </div>
          <div className="space-y-2">
            <a href="#" className="hover:opacity-70">Privacy</a><br />
            <a href="#" className="hover:opacity-70">Safeguarding statement</a><br />
            <a href="#" className="hover:opacity-70">Terms</a>
          </div>
          <div className="text-slate-600">
            © {new Date().getFullYear()} Sexual Violence Training & Consultancy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Small components ---------- */

type ProgrammeProps = { title: string; duration: string; level: string };
function Programme({ title, duration, level }: ProgrammeProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1"><CheckCircle className="h-4 w-4" /></div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-slate-600">{duration} • {level}</p>
      </div>
    </div>
  );
}

type TrustItemProps = { icon: React.ReactNode; title: string; desc: string };
function TrustItem({ icon, title, desc }: TrustItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

type ProgrammeCardProps = { title: string; subtitle: string; bullets: string[]; duration: string };
function ProgrammeCard({ title, subtitle, bullets, duration }: ProgrammeCardProps) {
  return (
    <Card className="rounded-2xl h-full">
      <CardHeader>
        <CardTitle className="leading-tight">
          <span className="block text-slate-500 text-sm">{title}</span>
          {subtitle}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-slate-800">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2"><CheckCircle className="mt-1 h-4 w-4" /> {b}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-600">Typical duration: {duration}</p>
      </CardContent>
    </Card>
  );
}

type ApproachProps = { icon: React.ReactNode; title: string; desc: string };
function Approach({ icon, title, desc }: ApproachProps) {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-center gap-3">
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-slate-800">{desc}</CardContent>
    </Card>
  );
}

type TestimonialProps = { quote: string; name: string; org: string };
function Testimonial({ quote, name, org }: TestimonialProps) {
  return (
    <Card className="rounded-2xl h-full">
      <CardContent className="pt-6">
        <p className="italic">“{quote}”</p>
        <p className="mt-4 text-sm text-slate-600">{name} — {org}</p>
      </CardContent>
    </Card>
  );
}
