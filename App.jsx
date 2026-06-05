import { useState } from 'react'
import logo from './IMG_4167.JPG'
import oyatilloImage from './IMG_4405.jpeg'
import nurislomImage from './IMG_5404.JPG'
import UniversitiesSection from './UniversitiesSection.jsx'
import universitiesData from './universities.js'

const TELEGRAM = 'https://t.me/upnex_admin'

function telegramLink(message) {
  return `${TELEGRAM}?text=${encodeURIComponent(message)}`
}

const countryDetails = {
  USA: {
    flag: '🇺🇸',
    tagline: 'Your Path to Studying in America Starts Here',
    about: 'Study in the United States with personalized support from UPNEX. We help students find affordable universities, secure scholarships, complete applications, and prepare for their student visa journey. Many partner universities offer admission pathways without IELTS or SAT requirements.',
    infoCards: [
      { label: 'Visa', value: 'F-1 Student Visa' },
      { label: 'Scholarships', value: 'Merit Scholarships — Up to $35,000+ / year' },
      { label: 'English Test', value: 'IELTS, Duolingo, TOEFL Accepted' },
      { label: 'Work Opportunities', value: 'Up to 20 hrs/week on campus' },
    ],
    services: [
      'University matching based on your GPA and budget',
      'Scholarship application assistance',
      'Application and admission support',
      'Student visa preparation',
      'Embassy interview coaching',
      'Accommodation assistance',
      'Pre-departure guidance',
      'Post-arrival support',
    ],
    whyStudy: [
      '🎓 Home to many of the world\'s top-ranked universities',
      '💰 Generous merit scholarships available for international students',
      '💼 On-campus work opportunities during studies',
      '🌍 Diverse and multicultural campus environments',
      '📈 Strong career and internship opportunities',
      '🏙 Campuses in major cities including New York',
    ],
    keyFacts: [
      { label: 'Intakes', value: 'Fall (September) · Spring (January)' },
      { label: 'Tuition', value: 'From $15,000 – $55,000 / year' },
      { label: 'Living Costs', value: 'Varies by state and city' },
      { label: 'After Graduation', value: 'OPT — Work up to 3 years post-graduation' },
    ],
    universities: ['Hartwick College', 'Pace University', 'Monroe University'],
  },
  UK: {
    flag: '🇬🇧',
    tagline: 'Study at Top UK Universities with Scholarships',
    about: 'The United Kingdom is home to some of the world\'s most respected universities. UPNEX helps students apply to UK universities, explore scholarship opportunities, and navigate the student visa process with confidence. Many universities offer flexible English language options and multiple intakes throughout the year.',
    infoCards: [
      { label: 'Visa', value: 'UK Student Visa' },
      { label: 'Scholarships', value: 'Up to £10,000+ / year' },
      { label: 'English Requirements', value: 'Flexible English Language Options' },
      { label: 'Work Opportunities', value: 'Up to 20 hrs/week during studies' },
    ],
    services: [
      'University selection based on your GPA and budget',
      'Scholarship application assistance',
      'Application and admission support',
      'Student visa guidance',
      'CAS and document preparation support',
      'Accommodation assistance',
      'Pre-departure guidance',
      'Post-arrival support',
    ],
    whyStudy: [
      '🎓 World-renowned universities',
      '📅 September and January intakes',
      '⏱ Bachelor\'s degrees typically completed in 3 years',
      '🎯 Master\'s degrees often completed in 1 year',
      '💼 Part-time work opportunities while studying',
      '🌍 Graduate Route visa available after graduation',
    ],
    keyFacts: [
      { label: 'Degree Duration', value: 'Bachelor\'s: 3 Years · Master\'s: 1 Year' },
      { label: 'Average Tuition', value: '£10,000 – £25,000 / year' },
      { label: 'Living Costs', value: '£800 – £1,500 / month (varies by city)' },
      { label: 'After Graduation', value: 'Graduate Route — Stay & work in the UK' },
    ],
    universities: [
      'University of Hertfordshire',
      'University of Chester',
      'De Montfort University',
      'University of East London',
      'Middlesex University',
    ],
  },
  Canada: {
    flag: '🇨🇦',
    tagline: 'Affordable Education & Pathways to a Global Career',
    about: 'Canada is one of the most popular destinations for international students thanks to its high-quality education, welcoming environment, and excellent career opportunities. UPNEX helps students find affordable universities, apply for scholarships, and navigate the study permit process from start to finish.',
    infoCards: [
      { label: 'Study Permit', value: 'Canadian Study Permit' },
      { label: 'Scholarships', value: 'Scholarships Available' },
      { label: 'English Requirements', value: 'Flexible English Language Options' },
      { label: 'Work Opportunities', value: 'Work While You Study' },
    ],
    services: [
      'University selection based on GPA and budget',
      'Scholarship application assistance',
      'Application and admission support',
      'Study permit guidance',
      'Financial document preparation support',
      'Accommodation assistance',
      'Pre-departure guidance',
      'Post-arrival support',
    ],
    whyStudy: [
      '🎓 High-quality education recognized worldwide',
      '🌍 Safe and welcoming environment',
      '💼 Work opportunities during studies',
      '🏫 Affordable university and college options',
      '📈 Strong career opportunities after graduation',
      '🍁 Multicultural communities across the country',
    ],
    keyFacts: [
      { label: 'Intakes', value: 'Fall (Sep) · Winter (Jan) · Summer (May)' },
      { label: 'Tuition', value: 'Affordable options available across Canada' },
      { label: 'Living Costs', value: 'Vary by province and city' },
      { label: 'After Graduation', value: 'Post-Graduation Work Permit (PGWP)' },
    ],
    universities: [
      'Seneca Polytechnic',
      'Humber College',
      'Algonquin College',
      'Conestoga College',
    ],
  },
  Australia: {
    flag: '🇦🇺',
    tagline: 'World-Class Education & Amazing Student Experience',
    about: 'Australia is a leading destination for international students, offering globally recognized degrees, modern campuses, and excellent career opportunities. UPNEX helps students choose the right university, secure scholarships, and complete the student visa process with confidence.',
    infoCards: [
      { label: 'Visa', value: 'Student Visa (Subclass 500)' },
      { label: 'Scholarships', value: 'Scholarships Available' },
      { label: 'English Requirements', value: 'Flexible English Language Options' },
      { label: 'Work Opportunities', value: 'Work While You Study' },
    ],
    services: [
      'University selection based on GPA and budget',
      'Scholarship application assistance',
      'Application and admission support',
      'Student visa guidance',
      'Document preparation support',
      'Accommodation assistance',
      'Pre-departure guidance',
      'Post-arrival support',
    ],
    whyStudy: [
      '🎓 Globally recognized universities',
      '🌏 Diverse and welcoming international community',
      '💼 Work opportunities during studies',
      '🏖 High quality of life and safe cities',
      '📈 Strong career opportunities after graduation',
      '🔬 Innovative and industry-focused education',
    ],
    keyFacts: [
      { label: 'Intakes', value: 'February · July · Additional intakes available' },
      { label: 'Tuition', value: 'Affordable and premium options available' },
      { label: 'Living Costs', value: 'Vary by city and lifestyle' },
      { label: 'After Graduation', value: 'Career & graduate work opportunities' },
    ],
    universities: [
      'RMIT University',
      'Griffith University',
      'University of Southern Queensland',
      'Charles Darwin University',
    ],
  },
}

const universities = [
  {
    name: 'Hartwick College',
    location: 'Oneonta, New York, USA',
    tuition: '$25,000–$35,000 / year',
    scholarship: 'Up to $32,000 / year',
    tag: 'Affordable',
    details: 'Hartwick College is a small liberal arts college in upstate New York offering generous merit scholarships to international students. No SAT required. Programs in business, science, arts, nursing and more. UPNEX has direct contacts at the admissions office to help fast-track your application.',
  },
  {
    name: 'Pace University',
    location: 'New York City, New York, USA',
    tuition: '$48,000–$55,000 / year',
    scholarship: 'Up to $30,000 / year',
    tag: 'NYC',
    details: 'Pace University is in the heart of Manhattan and Westchester. Strong programs in business, law, nursing, and technology. Incredible internship and career opportunities in New York City. UPNEX helps with the full application and scholarship process.',
  },
  {
    name: 'Monroe University',
    location: 'Bronx, New York, USA',
    tuition: '$15,000–$25,000 / year',
    scholarship: 'Up to $3,500 / semester',
    tag: 'Fast Admissions',
    details: 'Monroe University offers fast admissions (often within days) and very affordable tuition. Located in the Bronx, New York. Focus on business, criminal justice, and computer science. A great option for students who want to start their studies quickly.',
  },
]

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(null)

  const country = selectedCountry ? countryDetails[selectedCountry] : null

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* COUNTRY MODAL */}
      {country && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-sm px-4 py-8"
          onClick={() => setSelectedCountry(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-[32px] border border-white/10 bg-slate-900 p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedCountry(null)}
              className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-400 hover:bg-white/20 hover:text-white transition text-lg"
            >
              ✕
            </button>

            {/* Header */}
            <div className="text-5xl mb-3">{country.flag}</div>
            <h2 className="text-3xl font-bold">{selectedCountry}</h2>
            <p className="mt-1 text-blue-400 font-medium">{country.tagline}</p>
            <p className="mt-5 leading-8 text-slate-300 text-sm">{country.about}</p>

            {/* Info Cards — 2x2 grid */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {country.infoCards.map((card) => (
                <div key={card.label} className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs text-slate-400 mb-1">{card.label}</p>
                  <p className="text-sm font-semibold leading-6">{card.value}</p>
                </div>
              ))}
            </div>

            {/* What Upnex does */}
            <div className="mt-7">
              <h3 className="text-lg font-semibold mb-3">What UPNEX Does For You</h3>
              <ul className="space-y-2">
                {country.services.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 text-blue-400 font-bold">✓</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Study */}
            <div className="mt-7">
              <h3 className="text-lg font-semibold mb-3">Why Study in {selectedCountry}?</h3>
              <ul className="space-y-2">
                {country.whyStudy.map((s) => (
                  <li key={s} className="text-sm text-slate-300">{s}</li>
                ))}
              </ul>
            </div>

            {/* Key Facts */}
            <div className="mt-7">
              <h3 className="text-lg font-semibold mb-3">Key Facts</h3>
              <div className="space-y-3">
                {country.keyFacts.map((f) => (
                  <div key={f.label} className="flex justify-between border-b border-white/10 pb-3 text-sm">
                    <span className="text-slate-400">{f.label}</span>
                    <span className="text-right font-medium max-w-[55%]">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Universities */}
            <div className="mt-7">
              <h3 className="text-lg font-semibold mb-3">Partner Universities</h3>
              <div className="flex flex-wrap gap-2">
                {country.universities.map((u) => (
                  <span key={u} className="rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-300">{u}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={telegramLink(`Hello! I'm interested in studying in ${selectedCountry}. Can you help me?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full rounded-2xl bg-blue-600 py-4 text-center font-semibold transition hover:bg-blue-500"
            >
              Get Free Consultation for {selectedCountry} →
            </a>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Upnex Logo" className="h-14 w-14 rounded-2xl object-cover" />
            <div>
              <h1 className="text-2xl font-bold tracking-wide">UPNEX</h1>
              <p className="text-xs text-slate-400">You Are Going To Be Next</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
            <a href="#home" className="transition hover:text-white">Home</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#universities" className="transition hover:text-white">Universities</a>
            <a href="#team" className="transition hover:text-white">Team</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition hover:border-white hover:bg-white hover:text-slate-950"
            >
              Telegram
            </a>
            <a
              href={telegramLink('Hello! I would like a free consultation from Upnex.')}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold transition hover:bg-blue-500"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 via-slate-950 to-slate-950" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              Trusted By Students In USA, UK, Canada & Australia
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-tight lg:text-7xl">
              We Are Upnex. <br />
              <span className="text-blue-400">You Are Going To Be Next.</span>
            </h2>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              Upnex helps students receive high scholarships in the USA, UK, Canada, and Australia. Many partner universities offer admission pathways without IELTS or SAT requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={telegramLink('Hello! I would like to book a free consultation with Upnex.')}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold transition hover:bg-blue-500"
              >
                Book Free Consultation
              </a>
              <a
                href="#universities"
                className="rounded-full border border-white/20 px-7 py-4 text-sm font-semibold transition hover:border-white hover:bg-white hover:text-slate-950"
              >
                Explore Universities
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                { stat: '500+', label: 'Students Guided' },
                { stat: '80–100%', label: 'Scholarship Opportunities' },
                { stat: '4', label: 'Countries Covered' },
                { stat: 'NY + UZ', label: 'International Team' },
              ].map(({ stat, label }) => (
                <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <h3 className="text-2xl font-bold">{stat}</h3>
                  <p className="mt-2 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
            <img src={oyatilloImage} alt="Oyatillo" className="h-[650px] w-full object-cover" />
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">Countries</p>
          <h2 className="text-4xl font-bold">Study In Top Countries</h2>
          <p className="mt-4 text-slate-400">Click any country to see full details and how UPNEX can help you.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(countryDetails).map(([name, data]) => (
            <button
              key={name}
              onClick={() => setSelectedCountry(name)}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-left transition hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10 cursor-pointer"
            >
              <div className="mb-5 text-5xl">{data.flag}</div>
              <h3 className="text-2xl font-semibold">{name}</h3>
              <p className="mt-4 leading-7 text-slate-400 text-sm">{data.tagline}</p>
              <p className="mt-5 text-sm text-blue-400 font-medium">Learn more →</p>
            </button>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-900/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">Services</p>
            <h2 className="text-4xl font-bold">Everything Students Need</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              { name: 'University Admissions', desc: 'We match you with the right university based on your GPA, goals, and budget — and manage the full application process.' },
              { name: 'Scholarship Assistance', desc: 'We identify and apply for scholarships that can cover up to 80–100% of your tuition fees.' },
              { name: 'Visa Preparation', desc: 'Full step-by-step support for preparing your student visa application and required documents.' },
              { name: 'DS-160 Help', desc: 'Accurate and complete DS-160 form filling for students applying for a US student visa.' },
              { name: 'Embassy Interview Practice', desc: 'Mock interviews and personalized coaching to help you face your embassy interview with confidence.' },
              { name: 'Accommodation Support', desc: 'We help you find safe, affordable housing near your university before you arrive.' },
              { name: 'English Courses', desc: 'Guidance on improving your English to meet university admission and visa language requirements.' },
              { name: 'Post-Arrival Support', desc: 'Our support doesn\'t stop at departure — we guide you through orientation and settling in abroad.' },
            ].map((service) => (
              <a
                key={service.name}
                href={telegramLink(`Hello! I need help with: ${service.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6 transition hover:border-blue-500/40 hover:bg-slate-900 cursor-pointer"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-xl text-blue-300">✦</div>
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{service.desc}</p>
                <p className="mt-4 text-sm text-blue-400 font-medium">Get help →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">Meet The Team</p>
          <h2 className="text-4xl font-bold">The People Behind Upnex</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/60">
            <img src={oyatilloImage} alt="Oyatillo" className="h-[420px] w-full object-cover object-top" />
            <div className="p-8">
              <h3 className="text-3xl font-bold">Oyatillo</h3>
              <p className="mt-2 text-blue-400">USA-Based Consultant • New York</p>
              <p className="mt-5 leading-8 text-slate-300">
                Oyatillo is based in New York and helps students with university selection, scholarship planning, and full support for studying in the USA. He has personal experience navigating the US education system and guides students every step of the way.
              </p>
              <a
                href={telegramLink('Hello Oyatillo! I would like to get consultation about studying in the USA.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
              >
                Message on Telegram
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/60">
            <img src={nurislomImage} alt="Nurislom" className="h-[420px] w-full object-cover object-top" />
            <div className="p-8">
              <h3 className="text-3xl font-bold">Nurislom</h3>
              <p className="mt-2 text-blue-400">Uzbekistan-Based Consultant • Tashkent</p>
              <p className="mt-5 leading-8 text-slate-300">
                Nurislom runs the Upnex office in Tashkent and guides students through the entire application process — from document preparation and language test guidance to visa interviews and pre-departure support.
              </p>
              <a
                href={telegramLink('Hello! I would like to get consultation from Upnex Tashkent office.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
              >
                Message on Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      <UniversitiesSection universities={universitiesData} />

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">Contact</p>
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-slate-400">Ready to start your journey? We're here to help.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <a
            href={TELEGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center transition hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/10"
          >
            <div className="mb-4 text-5xl">✈️</div>
            <h3 className="text-xl font-semibold">Telegram</h3>
            <p className="mt-3 text-slate-400">@upnex_admin</p>
            <p className="mt-4 text-sm text-blue-400 font-medium">Message us →</p>
          </a>
          <a
            href="https://instagram.com/upnex.uz"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center transition hover:-translate-y-2 hover:border-pink-500/40 hover:bg-white/10"
          >
            <div className="mb-4 text-5xl">📸</div>
            <h3 className="text-xl font-semibold">Instagram</h3>
            <p className="mt-3 text-slate-400">@upnex.uz</p>
            <p className="mt-4 text-sm text-pink-400 font-medium">Follow us →</p>
          </a>
          <a
            href={telegramLink('Hello! I would like a free consultation from Upnex.')}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[28px] border border-blue-600/30 bg-blue-600/10 p-8 text-center transition hover:-translate-y-2 hover:border-blue-500/60 hover:bg-blue-600/20"
          >
            <div className="mb-4 text-5xl">🎓</div>
            <h3 className="text-xl font-semibold">Free Consultation</h3>
            <p className="mt-3 text-slate-400">Talk to our team today</p>
            <p className="mt-4 text-sm text-blue-400 font-medium">Book now →</p>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-500">
        <p>© 2025 Upnex Consulting. All rights reserved.</p>
        <p className="mt-2">New York, USA • Tashkent, Uzbekistan</p>
      </footer>
    </div>
  )
}
