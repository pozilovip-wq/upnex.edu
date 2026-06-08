import { useEffect, useState } from 'react'

function AnimatedWords({ text, className, baseDelay = 0 }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="hero-word"
          style={{ animationDelay: `${baseDelay + i * 0.1}s`, marginRight: '0.28em' }}
        >
          {word}
        </span>
      ))}
    </span>
  )
}

export default function HeroHeadline() {
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // hide cursor after animation finishes
    const t = setTimeout(() => setShowCursor(false), 3200)
    return () => clearTimeout(t)
  }, [])

  return (
    <h2 className="mb-6 text-5xl font-bold leading-tight lg:text-7xl" style={{ perspective: '600px' }}>
      <AnimatedWords text="We Are Upnex." baseDelay={0.2} />
      <br />
      <AnimatedWords
        text="You Are Going To Be Next."
        className="text-blue-400"
        baseDelay={0.6}
      />
      {showCursor && <span className="cursor" />}
    </h2>
  )
}
