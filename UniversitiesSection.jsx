import { useState, useMemo } from 'react'

const TELEGRAM = 'https://t.me/upnex_admin'
function telegramLink(message) {
  return `${TELEGRAM}?text=${encodeURIComponent(message)}`
}

const COUNTRIES = ['All', 'USA', 'UK', 'Canada', 'Australia']
const TAGS = ['All', 'Affordable', 'Top Ranked', 'Scholarship', 'Fast Admissions', 'Technology', 'Business', 'Health', 'Arts', 'Research']

export default function UniversitiesSection({ universities }) {
  const [search, setSearch] = useState('')
  const [country, setCountry] = useState('All')
  const [tag, setTag] = useState('All')
  const [expanded, setExpanded] = useState(null)
  const [visibleCount, setVisibleCount] = useState(12)

  const filtered = useMemo(() => {
    return universities.filter((u) => {
      const matchSearch =
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.location.toLowerCase().includes(search.toLowerCase()) ||
        (u.programs || []).some((p) => p.toLowerCase().includes(search.toLowerCase()))
      const matchCountry = country === 'All' || u.country === country
      const matchTag = tag === 'All' || u.tag === tag
      return matchSearch && matchCountry && matchTag
    })
  }, [universities, search, country, tag])

  const visible = filtered.slice(0, visibleCount)

  const countryFlag = { USA: '🇺🇸', UK: '🇬🇧', Canada: '🇨🇦', Australia: '🇦🇺' }

  return (
    <section id="universities" className="bg-slate-900/60 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-400">Universities</p>
          <h2 className="text-4xl font-bold">Find Your University</h2>
          <p className="mt-4 text-slate-400">Browse {universities.length}+ universities across 4 countries. Search by name, location, or program.</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-lg">🔍</span>
          <input
            type="text"
            placeholder="Search by university name, city, or program..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setVisibleCount(12) }}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/70 py-4 pl-14 pr-6 text-white placeholder-slate-500 outline-none transition focus:border-blue-500/50 focus:bg-slate-900"
          />
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          {/* Country filter */}
          <div className="flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <button
                key={c}
                onClick={() => { setCountry(c); setVisibleCount(12) }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  country === c
                    ? 'bg-blue-600 text-white'
                    : 'border border-white/10 bg-white/5 text-slate-300 hover:border-blue-500/40 hover:text-white'
                }`}
              >
                {c !== 'All' ? countryFlag[c] + ' ' : ''}{c}
              </button>
            ))}
          </div>

          {/* Tag filter */}
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => { setTag(t); setVisibleCount(12) }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  tag === t
                    ? 'bg-slate-600 text-white'
                    : 'border border-white/10 bg-white/5 text-slate-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="mb-6 text-sm text-slate-500">
          Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} universities
          {search && ` for "${search}"`}
          {country !== 'All' && ` in ${country}`}
        </p>

        {/* University Cards */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-slate-400">
            <p className="text-5xl mb-4">🎓</p>
            <p className="text-xl font-semibold">No universities found</p>
            <p className="mt-2 text-sm">Try a different search or filter</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((university) => (
              <div
                key={university.name}
                className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-1 hover:border-blue-500/40"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300">
                    {university.tag}
                  </span>
                  <span className="text-xl">{countryFlag[university.country]}</span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-tight">{university.name}</h3>
                <p className="mt-1 text-sm text-slate-400">📍 {university.location}</p>

                {/* Info */}
                <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tuition</span>
                    <span className="text-right">{university.tuition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Scholarship</span>
                    <span className="text-right text-green-400">{university.scholarship}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">English</span>
                    <span className="text-right">{university.ielts}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Intakes</span>
                    <span className="text-right">{university.intakes}</span>
                  </div>
                </div>

                {/* Expanded programs */}
                {expanded === university.name && university.programs && (
                  <div className="mt-4 rounded-xl bg-white/5 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Popular Programs</p>
                    <div className="flex flex-wrap gap-2">
                      {university.programs.map((p) => (
                        <span key={p} className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300">{p}</span>
                      ))}
                    </div>
                    {university.website && (
                      <a
                        href={university.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 block text-xs text-slate-400 hover:text-blue-400 transition"
                      >
                        🌐 {university.website.replace('https://', '')}
                      </a>
                    )}
                  </div>
                )}

                {/* Buttons */}
                <div className="mt-5 flex gap-2">
                  <button
                    onClick={() => setExpanded(expanded === university.name ? null : university.name)}
                    className="flex-1 rounded-xl border border-white/20 py-2.5 text-sm font-medium transition hover:border-blue-400 hover:text-blue-400"
                  >
                    {expanded === university.name ? 'Hide' : 'Details'}
                  </button>
                  <a
                    href={telegramLink(`Hello! I'm interested in applying to ${university.name} in ${university.country}. Can you help me?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-xl bg-blue-600 py-2.5 text-center text-sm font-medium transition hover:bg-blue-500"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load more */}
        {visibleCount < filtered.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((v) => v + 12)}
              className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold transition hover:border-blue-400 hover:text-blue-400"
            >
              Load More ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
