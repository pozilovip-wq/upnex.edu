import { useState } from 'react'
import logo from './IMG_4167.JPG'
import oyatilloImage from './IMG_4405.jpeg'
import nurislomImage from './IMG_5404.JPG'

const TELEGRAM = 'https://t.me/upnex_admin'

function telegramLink(message) {
  return `${TELEGRAM}?text=${encodeURIComponent(message)}`
}

const countryDetails = {
  USA: {
    flag: '🇺🇸',
    tagline: 'Top Universities & Big Scholarships',
    about: 'The USA is home to the world\'s best universities. Upnex works directly with universities in New York and across the US to get Uzbek students admitted with generous scholarships — many without IELTS or SAT.',
    services: [
      'University selection based on your GPA and budget',
      'Scholarship applications up to $32,000/year',
      'No IELTS or SAT required at many partner universities',
      'DS-160 visa form filling support',
      'Embassy interview coaching and mock practice',
      'F-1 student visa preparation',
      'Accommodation search in the USA',
      'Post-arrival support in New York',
    ],
    universities: ['Hartwick College', 'Pace University', 'Monroe University'],
    visa: 'F-1 Student Visa',
    scholarship: 'Up to $32,000 / year',
    ielts: 'Not required at many universities',
  },
  UK: {
    flag: '🇬🇧',
    tagline: 'Prestigious Degrees in Less Time',
    about: 'The UK offers world-class education with Bachelor\'s degrees in just 3 years and Master\'s in 1 year. Upnex helps students get into top UK universities with scholarship support and full visa preparation.',
    services: [
      'University selection and application support',
      'Scholarship and bursary assistance',
      'UCAS application guidance',
      'UK Student visa (Tier 4) preparation',
      'English language test guidance (IELTS/Duolingo)',
      'Accommodation support in the UK',
      'CAS letter assistance',
      'Pre-departure orientation',
    ],
    universities: ['University of East London', 'Coventry University', 'Northumbria University'],
    visa: 'UK Student Visa (Tier 4)',
    scholarship: 'Partial to full scholarships available',
    ielts: 'IELTS 5.5–6.5 or Duolingo accepted',
  },
  Canada: {
    flag: '🇨🇦',
    tagline: 'Affordable Tuition & Work Rights',
    about: 'Canada is one of the safest and most welcoming countries for international students. With affordable tuition, the right to work 20 hours/week during studies, and a path to permanent residency, it\'s a top choice. Upnex guides you from application to arrival.',
    services: [
      'College and university selection',
      'Scholarship and grant applications',
      'Student visa (Study Permit) preparation',
      'Letter of Acceptance support',
      'IELTS preparation guidance',
      'Work permit information (20hrs/week)',
      'Post-Graduation Work Permit (PGWP) advice',
      'Settlement support after arrival',
    ],
    universities: ['Seneca College', 'Humber College', 'Toronto Metropolitan University'],
    visa: 'Canadian Study Permit',
    scholarship: 'Up to 50% tuition scholarships',
    ielts: 'IELTS 6.0 or equivalent required',
  },
  Australia: {
    flag: '🇦🇺',
    tagline: 'Modern Education & High Quality of Life',
    about: 'Australia offers a high standard of living, modern universities, and excellent career opportunities after graduation. International students can work up to 48 hours per fortnight. Upnex helps with the full process from choosing a university to getting your visa approved.',
    services: [
      'University and course selection',
      'Scholarship research and applications',
      'Student visa (Subclass 500) preparation',
      'Genuine Temporary Entrant (GTE) statement help',
      'IELTS / PTE guidance',
      'Health insurance (OSHC) registration',
      'Accommodation search in Australia',
      'Pre-departure support and orientation',
    ],
    universities: ['RMIT University', 'Griffith University', 'University of Southern Queensland'],
    visa: 'Student Visa Subclass 500',
    scholarship: 'Merit-based scholarships available',
    ielts: 'IELTS 5.5–6.5 or PTE accepted',
  },
}

const universities = [
  {
    name: 'Hartwick College',
    location: 'Oneonta, New York, USA',
    tuition: '$25,000–$35,000 / year',
    scholarship: 'Up to $32,000 / year',
    tag: 'Affordable',
    details: 'Hartwick College is a small liberal arts college in upstate New York offering generous merit scholarships to international students. No SAT required. Programs in business, science, arts, nursing and more. Upnex has direct contacts at the admissions office.',
  },
  {
    name: 'Pace University',
    location: 'New York City, New York, USA',
    tuition: '$48,000–$55,000 / year',
    scholarship: 'Up to $30,000 / year',
    tag: 'NYC',
    details: 'Pace University is in the heart of Manhattan and Westchester. Strong programs in business, law, nursing, and technology. Incredible internship and career opportunities in New York City. Upnex helps with full application and scholarship process.',
  },
  {
    name: 'Monroe University',
    location: 'Bronx, New York, USA',
    tuition: '$15,000–$25,000 / year',
    scholarship: 'Up to $3,500 / semester',
    tag: 'Fast Admissions',
    details: 'Monroe University offers fast admissions (often within days) and very affordable tuition. Located in the Bronx, New York. Focus on business, criminal justice, and computer science. Great option for students who want to start quickly.',
  },
]

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [expandedUniversity, setExpandedUniversity] = useState(null)

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* COUNTRY MODAL */}
      {selectedCountry && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setSelectedCountry(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[32px] border border-white/10 bg-slate-900 p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCountry(null)}
              className="absolute right-6 top-6 text-slate-400 hover:text-white text-2xl leading-none"
            >
              ✕
            </button>

            <div className="text-5xl mb-3">{countryDetails[selectedCountry].flag}</div>
            <h2 className="text-3xl font-bold">{selectedCountry}</h2>
            <p className="mt-1 text-blue-400 font-medium">{countryDetails[selectedCountry].tagline}</p>

            <p className="mt-5 leading-8 text-slate-300">{countryDetails[selectedCountry].about}</p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-white/5 p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Visa</p>
                <p className="text-sm font-semibold">{countryDetails[selectedCountry].visa}</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">Scholarship</p>
                <p className="text-sm font-semibold">{countryDetails[selectedCountry].scholarship}</p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-center">
                <p className="text-xs text-slate-400 mb-1">IELTS</p>
                <p className="text-sm font-semibold">{countryDetails[selectedCountry].ielts}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">What Upnex does for you:</h3>
              <ul className="space-y-2">
                {countryDetails[selectedCountry].services.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-1 text-blue-400">✦</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Partner Universities:</h3>
              <div className="flex flex-wrap gap-2">
                {countryDetails[selectedCountry].universities.map((u) => (
                  <span key={u} className="rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-300">{u}</span>
                ))}
              </div>
            </div>

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
              Upnex helps students receive high scholarships in the USA, UK, Canada, and Australia. Many students can apply without IELTS or SAT and begin their study abroad journey faster.
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
          <p className="mt-4 text-slate-400">Click any country to see how Upnex can help you get there.</p>
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
              <p className="mt-4 leading-7 text-slate-400">{data.tagline}</p>
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
              { name: 'University Admissions', desc: 'We help you find and apply to the right university based on your goals, GPA, and budget.' },
              { name: 'Scholarship Assistance', desc: 'Get guidance on scholarships covering up to 80–100% of your tuition fees.' },
              { name: 'Visa Preparation', desc: 'Step-by-step support for preparing your student visa application documents.' },
              { name: 'DS-160 Help', desc: 'Accurate and complete DS-160 form filling for US visa applicants.' },
              { name: 'Embassy Interview Practice', desc: 'Mock interviews and coaching to help you confidently face embassy interviews.' },
              { name: 'Accommodation Support', desc: 'Assistance finding safe and affordable housing near your university.' },
              { name: 'English Courses', desc: 'Improve your English to meet university and visa language requirements.' },
              { name: 'Post-Arrival Support', desc: 'We stay with you after arrival — orientation, local tips, and ongoing help.' },
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
                Oyatillo is based in New York and helps students with university selection, scholarship planning, and full support for studying in the USA. He has personal experience navigating the US education system.
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
                Nurislom runs the Upnex office in Tashkent and guides students through the entire application process — from document preparation and IELTS guidance to visa interviews and departure.
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

      {/* UNIVERSITIES */}
      <section id="universities" className="bg-slate-900/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">Universities</p>
            <h2 className="text-4xl font-bold">Popular University Options</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {universities.map((university) => (
              <div key={university.name} className="rounded-[30px] border border-white/10 bg-slate-950/70 p-7 transition hover:-translate-y-2 hover:border-blue-500/40">
                <span className="rounded-full bg-blue-500/20 px-4 py-2 text-xs font-medium text-blue-300">{university.tag}</span>
                <h3 className="mt-6 text-2xl font-bold">{university.name}</h3>
                <p className="mt-2 text-slate-400">{university.location}</p>

                <div className="mt-6 space-y-4 border-t border-white/10 pt-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tuition</span>
                    <span>{university.tuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Scholarship</span>
                    <span>{university.scholarship}</span>
                  </div>
                </div>

                {expandedUniversity === university.name && (
                  <div className="mt-5 rounded-2xl bg-white/5 p-4 text-sm leading-7 text-slate-300">
                    {university.details}
                  </div>
                )}

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setExpandedUniversity(expandedUniversity === university.name ? null : university.name)}
                    className="flex-1 rounded-2xl border border-white/20 py-3 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400"
                  >
                    {expandedUniversity === university.name ? 'Hide Info' : 'View Details'}
                  </button>
                  <a
                    href={telegramLink(`Hello! I'm interested in applying to ${university.name}. Can you help me?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-2xl bg-blue-600 py-3 text-center text-sm font-semibold transition hover:bg-blue-500"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
