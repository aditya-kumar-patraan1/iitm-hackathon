import React, { use, useEffect, useRef, useState } from "react"
import { Leaf, Menu, X } from "lucide-react"
import gsap from "gsap";
import CounterStats from "./CounterStats";

export default function HeaderPage() {
  const [open, setOpen] = useState(false);

  const [isAnimate,setisAnimate] = useState(false);
  const headRef=useRef(null);

  const stats=[
    {value:15,label:'Experienced Teachers',suffix:'+'},
    {value:200,label:'Guided Sessions',suffix:'+'},
    {value:98,label:'User Satisfaction',suffix:'%'}
  ]

  const AllTexts = [
    "Calm breath. Quiet mind.",
    "Release tension. Embrace peace.",
    "Observe thoughts. Discover silence.",
    "Seek balance. Welcome harmony.",
    "Breathe deeply. Live mindfully."
  ]

  useEffect(()=>{
    setisAnimate(true);
  },[]);

  useEffect(()=>{
    if(isAnimate){
      gsap.fromTo(
        headRef.current,
        { y: 50, opacity: 0 },   // 👈 start: niche + invisible
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" } 
      );
    }
  },[isAnimate]);

  const navItems = [
    { href: "#", label: "Home" },
    { href: "#programs", label: "Programs" },
    { href: "#teachers", label: "Teachers" },
    { href: "#articles", label: "Articles" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:shadow-lg focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-lg supports-[backdrop-filter]:bg-white/75 border-b border-slate-200/60 shadow-sm">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12"
        >
          <div className="flex items-center gap-3 animate-[slideInLeft_0.6s_ease-out]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg">
              <Leaf className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">StillMind</span>
          </div>

          <div className="hidden items-center gap-10 md:flex">
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <li key={item.label} className="animate-[fadeInDown_0.6s_ease-out]" style={{animationDelay: `${0.1 + index * 0.1}s`}}>
                  <a
                    href={item.href}
                    className="relative text-sm font-medium text-slate-600 transition-all duration-300 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:rounded-md px-2 py-1 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-slate-900 before:transition-all before:duration-300 hover:before:w-full"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 animate-[slideInRight_0.6s_ease-out] ${isAnimate ? "scale-100" : "scale-0"} `}
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
            className="inline-flex items-center justify-center rounded-lg p-2.5 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 md:hidden transition-all duration-200"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <div id="mobile-menu" className={`md:hidden transition-all duration-300 ease-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"} border-t border-slate-200 bg-white/95 backdrop-blur-lg`}>
          <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-12">
            <ul className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <li key={item.label} className="animate-[slideInLeft_0.4s_ease-out]" style={{animationDelay: open ? `${index * 0.1}s` : '0s'}}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 transition-all duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="#book"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                >
                  Book a Session
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="relative overflow-hidden h-fit bg-tranparent">
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 sm:px-8 md:py-9 lg:grid-cols-2 bg-transparent">
            <div className="order-2 max-w-2xl lg:order-1 bg-transparent">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-slate-600 to-slate-800 animate-pulse" aria-hidden="true" />
                Meditation & Mindfulness
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Find stillness.<br />
                <span className="bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  Cultivate clarity.
                </span>
              </h1>
              <p className={`mt-6 text-lg leading-8 text-slate-600 sm:text-xl max-w-xl`} ref={headRef}>
                Guided sessions and thoughtful programs to help you slow down, breathe, and build a calm, 
                Designed by experienced teachers for busy modern life.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#start"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                >
                  Start a Free Session
                </a>
                <a
                  href="#programs"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-8 py-4 text-base font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 backdrop-blur-sm"
                >
                  View Programs
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-6 text-center sm:grid-cols-3 sm:max-w-2xl">
               {stats.map((stat, index) => (
                  <CounterStats
                    value={stat.value}
                    label={stat.label}
                    suffix={stat.suffix}
                    index={stat.index}
                  />
                  
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-[slideInRight_0.8s_ease-out]">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-102">
                <div className="aspect-[4/3] w-full">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                    width="880"
                    height="640"
                    alt="A calm meditation space with soft light and natural elements"
                    className="h-full w-full object-cover transition-all duration-700 hover:scale-110"
                    loading="eager"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-900/5 via-transparent to-white/10"
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6">
                  <p className="text-sm font-medium text-white/90">
                    Transform your daily routine with mindfulness
                  </p>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-slate-500">Real practice. Real calm. Begin in minutes.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}