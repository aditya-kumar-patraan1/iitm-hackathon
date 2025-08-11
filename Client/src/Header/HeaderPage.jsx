import React from "react"
import { Leaf } from "lucide-react"
import HeroImage from "../assets/HeroImage.png"

export default function HeaderPage() {
  const [open, setOpen] = React.useState(false)

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#programs", label: "Programs" },
    { href: "#teachers", label: "Teachers" },
    { href: "#articles", label: "Articles" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <div className="min-h-auto bg-white text-neutral-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 w-full  bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-emerald-600" aria-hidden="true" />
            <span className="text-base font-semibold tracking-tight">StillMind</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              Book a Session
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 md:hidden"
          >
          </button>
        </nav>

        <div id="mobile-menu" className={`md:hidden ${open ? "block" : "hidden"} border-t bg-white`}>
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  Book a Session
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50/60 to-white" />

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
            <div className="order-2 max-w-xl lg:order-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/70 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
                Meditation & Mindfulness
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
                Find stillness. Cultivate clarity.
              </h1>
              <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg">
                Guided sessions and thoughtful programs to help you slow down, breathe, and build a calm, focused mind.
                Designed by experienced teachers for busy modern life.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#start"
                  className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  Start a Free Session
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  View Programs
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6 text-center sm:max-w-md">
                <div className="rounded-lg border bg-white px-3 py-4">
                  <div className="text-2xl font-semibold text-neutral-900">15+</div>
                  <div className="mt-1 text-xs text-neutral-600">Experienced Teachers</div>
                </div>
                <div className="rounded-lg border bg-white px-3 py-4">
                  <div className="text-2xl font-semibold text-neutral-900">200#43;</div>
                  <div className="mt-1 text-xs text-neutral-600">Guided Sessions</div>
                </div>
                <div className="rounded-lg border bg-white px-3 py-4">
                  <div className="text-2xl font-semibold text-neutral-900">98%</div>
                  <div className="mt-1 text-xs text-neutral-600">User Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl border bg-white shadow-sm">
                <img
                  src={HeroImage}
                  width="880"
                  height="640"
                  alt="A calm meditation space with soft light and a cushion"
                  className="h-full w-full object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 text-center text-xs text-neutral-500">Real practice. Real calm. Begin in minutes.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}