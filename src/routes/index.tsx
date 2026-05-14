import { createFileRoute } from "@tanstack/react-router";
import { Scissors, Sparkles, Hand, Eye, Clock, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import hairImg from "@/assets/hair.jpg";
import nailsImg from "@/assets/nails.jpg";
import lashesImg from "@/assets/lashes.jpg";
import spaImg from "@/assets/spa.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: Scissors, title: "Hair", desc: "Treatments, styling, cuts & barbing for all hair types.", img: hairImg },
  { icon: Sparkles, title: "Nails", desc: "Manicures, pedicures and bespoke nail artistry.", img: nailsImg },
  { icon: Eye, title: "Lashes", desc: "Classic, hybrid & volume lash extensions.", img: lashesImg },
  { icon: Hand, title: "Spa & Pampering", desc: "Restorative treatments crafted to unwind.", img: spaImg },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <a href="#top" className="font-display text-2xl text-background tracking-wide">Brieanna's</a>
          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-background/90">
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#visit" className="hover:text-gold transition-colors">Visit</a>
          </div>
          <a href="tel:+2347067786186" className="hidden md:inline-flex items-center gap-2 text-sm border border-background/40 text-background px-5 py-2.5 rounded-full hover:bg-background hover:text-foreground transition-all">
            <Phone className="w-3.5 h-3.5" /> Book
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <img src={heroImg} alt="Brieanna's Salon & Spa" className="absolute inset-0 w-full h-full object-cover" width={1600} height={1200} />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/80" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-end pb-24">
          <p className="text-gold text-xs uppercase tracking-[0.4em] mb-6">Yaba · Lagos</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-background max-w-4xl leading-[1.05]">
            Where style meets <em className="text-gold">convenience</em>.
          </h1>
          <p className="mt-8 text-background/85 max-w-xl text-lg leading-relaxed">
            A unisex sanctuary for hair, nails, lashes and quiet, considered pampering — moments away from Westerfield College.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="tel:+2347067786186" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-gold transition-colors">
              Book an appointment
            </a>
            <a href="#services" className="inline-flex items-center gap-2 border border-background/50 text-background px-8 py-4 rounded-full text-sm uppercase tracking-[0.2em] hover:bg-background/10 transition-colors">
              Explore services
            </a>
          </div>
        </div>
      </section>

      {/* Tagline strip */}
      <section className="border-y border-border py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span>Let Us Pamper You</span>
          <span className="text-gold">✦</span>
          <span>Hair · Nails · Lashes</span>
          <span className="text-gold">✦</span>
          <span>Unisex Salon</span>
          <span className="text-gold">✦</span>
          <span>Open 7 Days</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 lg:py-40 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">A quiet retreat in the heart of Yaba.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Brieanna's was founded on a simple belief — that beauty rituals deserve more than a chair and a mirror. They deserve time, attention, and a space that feels like your own.
            </p>
            <p>
              Tucked inside Rock Haven Suites on Hughes Avenue, we welcome busy mothers, students, and professionals into an unhurried experience built around skilled hands and warm hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Services</p>
              <h2 className="font-display text-4xl md:text-6xl">The full ritual.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">From a fresh cut to a slow afternoon of pampering — every service finished to the same standard.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {services.map((s) => (
              <article key={s.title} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-card shadow-soft">
                  <img src={s.img} alt={s.title} loading="lazy" width={900} height={1100} className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <s.icon className="absolute top-4 left-4 w-5 h-5 text-gold" />
                </div>
                <div className="pt-5">
                  <h3 className="font-display text-2xl lg:text-3xl mb-1.5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-28 lg:py-36 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">The Brieanna Difference</p>
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl mx-auto leading-tight">Crafted for the way you live.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {[
            { n: "01", t: "Skilled Hands", d: "A senior team trained across hair, nails and lash artistry — every guest, every time." },
            { n: "02", t: "Unhurried Time", d: "Generous appointment windows so your visit feels like a pause, not an errand." },
            { n: "03", t: "Quietly Luxurious", d: "Clean linens, warm lighting, and the small details that make pampering feel personal." },
          ].map((f) => (
            <div key={f.n} className="border-t border-border pt-8">
              <p className="font-display text-gold text-2xl mb-6">{f.n}</p>
              <h3 className="font-display text-2xl mb-3">{f.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-secondary py-28 lg:py-36">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <Sparkles className="w-6 h-6 text-gold mx-auto mb-8" />
          <blockquote className="font-display text-3xl md:text-5xl leading-tight italic">
            "Walked in tired, walked out feeling like an entirely new person. Brieanna's is my little secret in Yaba."
          </blockquote>
          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-muted-foreground">— A regular guest</p>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="bg-foreground text-background py-28 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">Visit</p>
            <h2 className="font-display text-4xl md:text-6xl mb-10">Come and be pampered.</h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-background/60 mb-2">Address</p>
                  <p className="text-lg">4 Hughes Avenue, Alagomeji,<br/>Yaba, Lagos<br/><span className="text-background/60 text-sm">(Rock Haven Suites — near Westerfield College)</span></p>
                </div>
              </div>
              <div className="flex gap-5">
                <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-background/60 mb-2">Phone</p>
                  <a href="tel:+2347067786186" className="text-lg hover:text-gold">0706 778 6186</a>
                </div>
              </div>
              <div className="flex gap-5">
                <Mail className="w-5 h-5 text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-background/60 mb-2">Email</p>
                  <a href="mailto:info@brieannas.com" className="text-lg hover:text-gold">info@brieannas.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12 lg:border-l border-background/10">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-5 h-5 text-gold" />
              <p className="text-xs uppercase tracking-[0.3em] text-background/60">Opening Hours</p>
            </div>
            <ul className="divide-y divide-background/10 text-lg">
              <li className="flex justify-between py-5"><span>Monday — Saturday</span><span className="text-gold">9:00 — 20:00</span></li>
              <li className="flex justify-between py-5"><span>Sunday</span><span className="text-gold">12:00 — 19:00</span></li>
            </ul>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.3em] text-background/60 mb-5">Follow the journey</p>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/brieannassalonandspa/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-foreground transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-foreground transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-foreground transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background/60 border-t border-background/10 py-8 text-center text-xs uppercase tracking-[0.3em]">
        © {new Date().getFullYear()} Brieanna's Salon & Spa
      </footer>
    </div>
  );
}
