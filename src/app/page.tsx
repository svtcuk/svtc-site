// src/app/page.tsx
import Link from "next/link";

/* ---------- small internal components (not exported) ---------- */

function TrustItem({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
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

function ProgrammeCard({
  eyebrow,
  title,
  bullets,
  duration,
}: {
  eyebrow: string;
  title: string;
  bullets: string[];
  duration: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-[#c39b6a]/40 shadow-sm h-full">
      <div className="p-5 border-b border-[#c39b6a]/30">
        <p className="text-sm text-slate-500">{eyebrow}</p>
        <h3 className="mt-1 font-semibold">{title}</h3>
      </div>
      <div className="p-5">
        <ul className="space-y-2 text-slate-800">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#c39b6a]" />
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-slate-600">Typical duration: {duration}</p>
      </div>
    </div>
  );
}

function ApproachCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white border border-[#c39b6a]/40 p-5 shadow-sm">
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-slate-800">{desc}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-[#c39b6a]/40 p-5 shadow-sm h-full">
      <p className="italic">“{quote}”</p>
      <p className="mt-4 text-sm text-slate-600">
        {name} — {role}
      </p>
    </div>
  );
}

/* ---------- page ---------- */

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f1eb] text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-[#f4f1eb]/90 border-b border-[#c39b6a]/40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/favicon.ico" alt="SVTC" className="h-6 w-6 rounded" />
            <span className="font-[Nunito] tracking-tight font-bold">
              Sexual Violence Training & Consultancy
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-[Poppins]">
            <a href="#services" className="hover:opacity-70">
              Services
            </a>
            <a href="#programmes" className="hover:opacity-70">
              Programmes
            </a>
            <a href="#approach" className="hover:opacity-70">
              Approach
            </a>
            <a href="#sectors" className="hover:opacity-70">
              Sectors
            </a>
            <a href="#testimonials" className="hover:opacity-70">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
          </nav>
          <a href="#contact" className="md:inline-block hidden">
            <span className="rounded-2xl bg-[#d0893e] hover:bg-[#c39b6a] text-black px-4 py-2 font-[Poppins]">
              Book a discovery call
            </span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#f4f1eb] via-[#c39b6a]/20 to-[#4b2e1d]/10"
          aria-hidden
        />
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-28 grid md:grid-cols-1 gap-10 items-center">
          <div className="text-center">
            <h1 className="mt-2 text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#4b2e1d] font-[Nunito]">
              Specialist Sexual Violence Training & Consultancy
            </h1>
            <p className="mt-5 text-lg text-slate-800 max-w-3xl mx-auto font-[Poppins]">
              We support public, education, charity and corporate organisations
              to build safer cultures. Programmes and consultancy cover trauma-informed
              practice, sexual harassment prevention & response, and survivor-centred
              systems. Delivery available **in-person, online, and on-demand**.
            </p>
            <div className="mt-7 flex items-center justify-center gap-3">
              <a href="#contact">
                <span className="inline-flex rounded-2xl bg-[#d0893e] hover:bg-[#c39b6a] text-black px-5 py-3 font-[Poppins]">
                  Request a proposal
                </span>
              </a>
              <a href="#programmes">
                <span className="inline-flex rounded-2xl border border-[#d0893e] text-[#4b2e1d] px-5 py-3 font-[Poppins]">
                  View training programmes
                </span>
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-slate-800 max-w-3xl mx-auto">
              <li className="flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c39b6a]" /> Sector-experienced
                facilitators
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c39b6a]" /> Trauma-informed pedagogy
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c39b6a]" /> Practical & scenario-based
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c39b6a]" /> Aligned with UK guidance
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-[#c39b6a]/40 bg-[#f4f1eb]">
        <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-4 gap-6 text-sm">
          <TrustItem
            icon={<div className="h-5 w-5 rounded bg-[#c39b6a] opacity-70" />}
            title="Public & corporate"
            desc="Experience across NHS, education, local gov & industry"
          />
          <TrustItem
            icon={<div className="h-5 w-5 rounded bg-[#c39b6a] opacity-70" />}
            title="Evidence-informed"
            desc="Grounded in psychology & best practice"
          />
          <TrustItem
            icon={<div className="h-5 w-5 rounded bg-[#c39b6a] opacity-70" />}
            title="Practical tools"
            desc="Org development, assessment, reporting & language tools"
          />
          <TrustItem
            icon={<div className="h-5 w-5 rounded bg-[#c39b6a] opacity-70" />}
            title="Survivor-centred"
            desc="Compassionate, safe, integrity-led"
          />
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
              From short workshops to whole-system change. We help organisations
              embed trauma-informed, survivor-centred practice across policies,
              pathways, leadership and everyday behaviours.
            </p>
            <ul className="mt-6 space-y-3 text-slate-800">
              <li>
                <b>Specialist Training & CPD</b> — interactive, evidence-based sessions
                tailored to role, sector and goals.
              </li>
              <li>
                <b>Strategic Consultancy</b> — policy development, risk audits,
                cultural change and leadership coaching.
              </li>
              <li>
                <b>Supervision & Reflective Practice</b> — structured support for teams
                working with survivors.
              </li>
              <li>
                <b>Service Design & Policy</b> — survivor-centred pathways, SOPs and
                safeguarding strategies.
              </li>
              <li>
                <b>Resources & Toolkits</b> — organisational development tools, assessment &
                response tools, documentation & reporting tools, knowledge reinforcement
                tools, and communication & language tools.
              </li>
            </ul>
            <div className="mt-6">
              <a href="#contact">
                <span className="rounded-2xl bg-[#d0893e] hover:bg-[#c39b6a] text-black px-4 py-2 font-[Poppins]">
                  Enquire about availability
                </span>
              </a>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-2xl bg-white border border-[#c39b6a]/40 shadow-sm p-5">
              <h3 className="font-semibold">Outcomes you can expect</h3>
              <ul className="mt-3 space-y-2 text-slate-800">
                <li>• Confident, trauma-informed responses to disclosure</li>
                <li>• Clear pathways & referral routes understood by all</li>
                <li>• Reduced re-traumatisation via language & behaviour change</li>
                <li>• Sustainable culture shift with data-aligned documentation</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white border border-[#c39b6a]/40 shadow-sm p-5">
              <h3 className="font-semibold">Who we partner with</h3>
              <p className="mt-2 text-slate-800">
                Corporate organisations, NHS trusts, primary & acute care, mental health,
                safeguarding and social care teams, universities & colleges, charities,
                police & partner agencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="bg-[#f4f1eb] border-y border-[#c39b6a]/40">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-[#4b2e1d] font-[Nunito]">
            Training Programmes
          </h2>
          <p className="mt-3 text-slate-800 max-w-prose">
            CPD-accredited training that builds confidence, competence and culture change.
            Delivered in-person, online or hybrid.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <ProgrammeCard
              eyebrow="Effective Handling of Disclosures"
              title="Recognise · Respond · Refer"
              bullets={[
                "Psychologically safe first responses",
                "Confidentiality, safeguarding & legal duties",
                "Mapping referral pathways",
              ]}
              duration="1 day"
            />
            <ProgrammeCard
              eyebrow="Preventing Workplace Sexual Harassment"
              title="Culture · Policy · Compliance"
              bullets={[
                "Employer duties & investigation principles",
                "Reporting routes & by-stander intervention",
                "Leadership accountability & prevention strategy",
              ]}
              duration="1 day"
            />
            <ProgrammeCard
              eyebrow="Sexual Violence Awareness"
              title="Foundations for all staff"
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
          <ApproachCard
            icon={<div className="h-6 w-6 rounded bg-[#c39b6a] opacity-70" />}
            title="Trauma-informed"
            desc="Psychological safety is baked into our content and facilitation."
          />
          <ApproachCard
            icon={<div className="h-6 w-6 rounded bg-[#c39b6a] opacity-70" />}
            title="Evidence-led"
            desc="Grounded in psychology & aligned with UK guidance."
          />
          <ApproachCard
            icon={<div className="h-6 w-6 rounded bg-[#c39b6a] opacity-70" />}
            title="Co-designed"
            desc="Developed with practitioners and survivor input where appropriate."
          />
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="bg-[#f4f1eb] border-y border-[#c39b6a]/40">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold tracking-tight text-[#4b2e1d] font-[Nunito]">
            Sectors we support
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-slate-800">
            {[
              "Corporate & Industry",
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
              <div
                key={s}
                className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#c39b6a]/40 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#c39b6a]" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-[#4b2e1d] font-[Nunito]">
          What clients say
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <TestimonialCard
            quote="One of the most impactful trainings our team has had — practical, compassionate, and immediately applicable."
            name="Clinical Lead"
            role="Acute Care"
          />
          <TestimonialCard
            quote="Clear pathways and language transformed the confidence of frontline staff."
            name="Service Manager"
            role="Health & Care"
          />
          <TestimonialCard
            quote="Our managers now feel confident having difficult conversations; we’ve already seen safer team dynamics."
            name="Head of HR"
            role="Corporate"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#000000] text-[#f4f1eb]">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight font-[Nunito]">Let’s talk</h2>
            <p className="mt-3 text-[#f4f1eb]/80 max-w-prose">
              Tell us about your team, cohort and goals. We’ll suggest a right-sized
              option and share a draft outline.
            </p>
            <p className="mt-4 text-sm text-[#f4f1eb]/70">
              Prefer email? <span className="font-semibold">hello@svtc.uk</span>
            </p>
          </div>

          {/* Netlify Forms — emails hello@svtc.uk and redirects to /thanks */}
          <div className="rounded-2xl bg-white text-slate-900 shadow-sm">
            <div className="p-5 border-b border-slate-200">
              <h3 className="font-semibold">Request a proposal</h3>
            </div>
            <div className="p-5">
              <form
                name="contact"
                method="POST"
                action="/thanks"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="grid gap-4"
              >
                {/* Netlify hidden form name + honeypot */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="rounded-md border border-slate-300 px-3 py-2"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="org" className="text-sm font-medium">
                    Organisation
                  </label>
                  <input
                    id="org"
                    name="organisation"
                    className="rounded-md border border-slate-300 px-3 py-2"
                    placeholder="e.g., Corporate / NHS Trust / University"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Work email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="rounded-md border border-slate-300 px-3 py-2"
                    placeholder="you@organisation.co.uk"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    What do you need?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="rounded-md border border-slate-300 px-3 py-2"
                    placeholder="Team size, roles, preferred dates, goals…"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-2xl bg-[#d0893e] hover:bg-[#c39b6a] text-black px-5 py-3"
                >
                  Send
                </button>
                <p className="text-xs text-slate-500 mt-1">
                  By submitting, you consent to being contacted about your enquiry. Please
                  avoid sharing identifiable survivor information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#c39b6a]/40 bg-[#f4f1eb]">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-700 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <div className="h-5 w-5 rounded bg-[#c39b6a]" /> Sexual Violence Training & Consultancy
            </div>
            <p className="mt-2">London • UK-wide delivery</p>
          </div>
          <div className="space-y-2">
            <a href="#" className="hover:opacity-70">
              Privacy
            </a>
            <br />
            <a href="#" className="hover:opacity-70">
              Safeguarding statement
            </a>
            <br />
            <a href="#" className="hover:opacity-70">
              Terms
            </a>
          </div>
          <div className="text-slate-600">
            © {new Date().getFullYear()} Sexual Violence Training & Consultancy. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
