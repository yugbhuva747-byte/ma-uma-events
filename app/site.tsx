'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import {
  Sparkles,
  X,
  Plus,
  Check,
  Download,
  Flower2,
  Music2,
  Camera,
  MapPin,
  Pause,
  Play,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ChevronUp,
  Phone,
  Mail,
  Clock,
  Send,
  Award
} from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      <path d="M9.5 9a.5.5 0 0 0 0 1c.5 1 1.5 2 2.5 2.5a.5.5 0 0 0 1 0l1-1a.5.5 0 0 0 0-.5l-1.5-1.5a.5.5 0 0 0-.5 0l-.5.5c-.2 0-.8-.3-1.5-1s-1-1.3-1-1.5l.5-.5a.5.5 0 0 0 0-.5L9.5 8a.5.5 0 0 0-.5 0z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

const categories = [
  {
    name: 'Weddings',
    sub: 'YOUR FOREVER, BEAUTIFULLY BEGUN',
    desc: 'From the first yes to the last dance. Celebrations that feel unmistakably yours.',
    items: ['Destination weddings', 'Bachelor parties', 'Ring ceremonies', 'Wedding theme décor', 'Sangeet sandhya', 'Marriage functions', 'Reception ceremonies', 'Honeymoon planning'],
    image: 'wedding'
  },
  {
    name: 'Corporate',
    sub: 'PURPOSE MEETS PRESENCE',
    desc: 'Bring people together around an idea. Thoughtfully produced experiences with a clear purpose.',
    items: ['Conferences', 'Product launches', 'Exhibitions', 'Dealer meets', 'Award ceremonies', 'Promotional activities', 'Motivational programs', 'Team building'],
    image: 'gala'
  },
  {
    name: 'Birthdays',
    sub: 'A LITTLE WONDER. A LOT OF JOY.',
    desc: 'Playful details, personal touches and a day made for your favourite people.',
    items: ['Birthday décor', 'Theme décor', 'Kids zones', 'Photo booths', 'Special effects', 'Fun eatables', 'Return gifts', 'Party activities'],
    image: 'wedding'
  },
  {
    name: 'Concerts',
    sub: 'TURN THE MOMENT UP',
    desc: 'The lights. The sound. The feeling of being there. Live experiences with an electric heartbeat.',
    items: ['Live concerts', 'Movie launches', 'New Year parties', 'DJ parties'],
    image: 'concert'
  },
  {
    name: 'Social & public',
    sub: 'EVERY REASON TO CELEBRATE',
    desc: 'Big milestones and meaningful traditions, brought to life with care.',
    items: ['Baby showers', 'Anniversaries', 'Housewarmings', 'Reunions', 'Festival celebrations', 'Cooking & fashion shows', 'Sports events', 'Kitty parties'],
    image: 'gala'
  }
];

const services = [
  ['Event concept', 'A story, mood and creative direction for your occasion.'],
  ['Venue sourcing', 'Spaces chosen around your guest count, setting and schedule.'],
  ['Social activations', 'Participatory experiences that bring your guests together.'],
  ['Budget management', 'A clear allocation across the elements that matter to you.'],
  ['Custom design', 'Personal details developed around your event concept.'],
  ['Logistics management', 'Transport, arrivals, vendor access and movement planning.'],
  ['Décor atelier', 'Floral styling, woodcraft, fabrication and backdrop frames.'],
  ['AV equipment', 'Sound, PA systems, screens, projectors, truss and power.'],
  ['Catering', 'Menus, service formats and dining experiences.'],
  ['Photo & videography', 'Event, wedding, corporate and creative visual coverage.'],
  ['Entry concepts', 'Bride and groom arrivals, vehicle entries and custom reveals.'],
  ['Artist management', 'Live bands, performers, hosts and entertainment.'],
  ['Balloon decoration', 'Sculptural colour and playful installations.'],
  ['Theme decoration', 'A visual language carried through every corner.'],
  ['3D event setup', 'Spatial concepts to help visualise the experience.'],
  ['Lighting setup', 'Ambient, stage and dance-floor lighting.'],
  ['Event staffing', 'Guest welcome, coordination and on-ground support.'],
  ['Kids zone', 'Activities and dedicated spaces for younger guests.'],
  ['Stage layout', 'Thoughtful sightlines, performance space and movement.'],
  ['Stall design', 'Exhibition spaces and carefully planned displays.'],
  ['Special effects', 'Production moments planned with venue permissions and safety.'],
  ['Photo booth', 'An interactive corner for keepsake photographs.']
];

const process = [
  ['Listen', 'Your occasion, your people, your priorities. We start with a conversation.'],
  ['Imagine', 'A considered concept, a visual direction and details with personality.'],
  ['Plan', 'Venue, partners, budgets and timelines come together in one clear plan.'],
  ['Celebrate', 'On-ground coordination lets you be present for every beautiful moment.']
];

function Img({ name, alt, className = '' }: { name: string; alt: string; className?: string }) {
  return <img src={'/images/' + name + '.jpg'} alt={alt} className={className} loading={className.includes('hero') ? 'eager' : 'lazy'} />;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow">
      <span /> {children}
    </div>
  );
}

function CTA() {
  return (
    <section className="cta section reveal">
      <Eyebrow>YOUR NEXT BEAUTIFUL CHAPTER</Eyebrow>
      <h2>
        Have a moment<br />in <em>mind?</em>
      </h2>
      <Link className="button light" href="/contact">
        Let’s bring it to life <Sparkles size={17} />
      </Link>
      <span className="cta-word" aria-hidden="true">
        celebrate
      </span>
    </section>
  );
}

function Process() {
  return (
    <section className="section process">
      <div className="section-head reveal">
        <div>
          <Eyebrow>FROM A THOUGHT TO A THOUSAND MEMORIES</Eyebrow>
          <h2>
            The art of<br /><em>bringing it together.</em>
          </h2>
        </div>
        <p>
          A clear journey. A shared vision.<br />And a little magic along the way.
        </p>
      </div>
      <div className="process-grid">
        {process.map(([n, d], i) => (
          <article className="reveal" key={n}>
            <span className="step">0{i + 1}</span>
            <h3>{n}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq reveal">
      <div>
        <Eyebrow>A FEW THINGS YOU MAY WONDER</Eyebrow>
        <h2>
          Before the<br /><em>celebration.</em>
        </h2>
      </div>
      <Accordion type="single" collapsible className="questions">
        {[
          ['How early should we start planning?', 'For a wedding or a large production, start several months ahead where possible. For smaller celebrations, the right timeline depends on the venue, date and scope.'],
          ['Can we choose only the services we need?', 'Yes. Your brief can focus on a single production requirement or a complete event, from concept through coordination.'],
          ['Can you work with our venue and ideas?', 'Share your venue, references and must-haves in your event brief. These help shape a practical concept around your vision.'],
          ['How is an event budget decided?', 'Guest count, location, date, décor, food and production all affect the scope. A detailed proposal should confirm inclusions before any booking.']
        ].map(([q, a], i) => (
          <AccordionItem key={q} value={'' + i}>
            <AccordionTrigger>{q}</AccordionTrigger>
            <AccordionContent>{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link className="brand brand-v2" href="/" aria-label="Maa Uma Events home">
      <img src={footer ? '/brand/logo-light.svg' : '/brand/logo-dark.svg'} width="218" height="56" alt="Maa Uma Events" />
    </Link>
  );
}

const scenes = [
  {
    tag: 'THE WEDDING EDIT',
    category: 'Weddings',
    title: 'Made for your',
    word: 'forever.',
    desc: 'From royal palace mandaps to intimate starlit vows. We craft deeply personal weddings that feel unmistakably yours.',
    caption: 'Intimate details. Infinite memories.',
    highlight: 'Royal Mandaps & Destination Décor',
    location: 'Udaipur · Goa · Surat · Worldwide',
    stat: '350+ Celebrations',
    statLabel: 'Bespoke Weddings',
    image: 'wedding'
  },
  {
    tag: 'THE CORPORATE EDIT',
    category: 'Corporate',
    title: 'Ideas deserve',
    word: 'a stage.',
    desc: 'Bring people together around ambition. Thoughtfully produced conferences, brand galas, and summits with immaculate precision.',
    caption: 'Meaningful connections. Remarkable experiences.',
    highlight: 'Global Summits & Product Reveals',
    location: 'Mumbai · Ahmedabad · Delhi NCR',
    stat: '120+ Corporate Galas',
    statLabel: 'Executive Experiences',
    image: 'gala'
  },
  {
    tag: 'THE LIVE SPECTACLE',
    category: 'Concerts',
    title: 'Feel every',
    word: 'heartbeat.',
    desc: 'The lights, the sound, the collective roar of the crowd. Electric live concerts and spectacles crafted with pulse-raising production.',
    caption: 'Big energy. The kind you take home.',
    highlight: 'Arena Stage Architecture & Intelligent Lighting',
    location: 'Pan-India Stadiums & Arenas',
    stat: '80+ Live Concerts',
    statLabel: 'Large-Scale Productions',
    image: 'concert'
  }
];

function Opening() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % scenes.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [paused]);

  const scene = scenes[index];
  const nextScene = scenes[(index + 1) % scenes.length];

  return (
    <section className="opening">
      {/* Ambient luxury lighting */}
      <div className="hero-ambient-glow" aria-hidden="true" />

      

      <div className="opening-grid">
        {/* Left Column: Editorial Copy & Interactive Elements */}
        <div className="opening-copy">
          {/* Quick Category Selector Tabs */}
          <div className="hero-tabs" role="tablist" aria-label="Event category preview">
            {scenes.map((s, i) => (
              <button
                key={s.category}
                role="tab"
                aria-selected={i === index}
                className={`hero-tab-pill ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
              >
                <span className="hero-tab-num">0{i + 1}</span>
                <span className="hero-tab-name">{s.category}</span>
              </button>
            ))}
          </div>

          <div className="edition">
            <span className="edition-line" />
            <span className="edition-tag-text">{scene.tag}</span>
            <span className="edition-location-badge">{scene.location}</span>
          </div>

          <h1 key={scene.word} className="hero-headline">
            {scene.title}
            <br />
            <em className="hero-accent-word">{scene.word}</em>
          </h1>

          <p className="hero-description">{scene.desc}</p>

          {/* Luxury Social Proof Bar */}
          <div className="hero-proof-bar">
            <div className="hero-proof-item">
              <Sparkles size={14} className="hero-proof-icon" />
              <span><strong>500+</strong> Bespoke Celebrations</span>
            </div>
            <div className="hero-proof-sep" />
            <div className="hero-proof-item">
              <Award size={14} className="hero-proof-icon" />
              <span><strong>10+</strong> Years of Artistry</span>
            </div>
            <div className="hero-proof-sep" />
            <div className="hero-proof-item">
              <span className="hero-stars">★★★★★</span>
              <span><strong>4.9/5</strong> Rating</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="opening-actions">
            <Link href="/contact" className="button citron hero-primary-cta">
              Plan your celebration <Sparkles size={17} />
            </Link>
            <Link href="/events" className="button outline hero-secondary-cta">
              Explore portfolio <ArrowRight size={16} />
            </Link>

          </div>


        </div>

        {/* Right Column: Visual Stage with Arched Frame & Luxury Accents */}
        <div className="scene-stage">
          <div className="scene-orbit" aria-hidden="true" />

          {/* Main Arched Architectural Frame */}
          <div className="scene-frame" key={scene.image}>
            <Img name={scene.image} alt={scene.category + ' event design inspiration'} className="hero-scene" />
            <div className="scene-shade" />
            <div className="scene-highlight-chip">
              <span>✦ {scene.highlight}</span>
            </div>
            <div className="scene-caption">
              <div className="scene-counter-pill">
                <span>0{index + 1} / 03</span>
                <span className="scene-cat-badge">{scene.category.toUpperCase()}</span>
              </div>
              <p>{scene.caption}</p>
              <small className="scene-stat-tag">{scene.stat} · {scene.statLabel}</small>
            </div>
          </div>

          

          {/* Interactive Clickable 'Up Next' Floating Card */}
          <button
            type="button"
            className="scene-small tilt"
            onClick={() => setIndex((index + 1) % scenes.length)}
            aria-label={'Jump to next scene: ' + nextScene.category}
          >
            <Img name={nextScene.image} alt={'Preview next scene: ' + nextScene.category} />
            <div className="scene-small-overlay">
              <span className="small-upnext">UP NEXT ➔</span>
              <strong>{nextScene.category}</strong>
            </div>
          </button>

          {/* Carousel Controls with Slide Progress Bar */}
          <div className="scene-controls">
            <button aria-label="Previous event scene" onClick={() => setIndex((index + 2) % scenes.length)} className="ctrl-btn">
              <ChevronLeft size={18} />
            </button>

            {/* Slide Progress Bar */}
            <div className="scene-progress-container" aria-hidden="true">
              <div key={index + (paused ? '-paused' : '-running')} className={`scene-progress-bar ${paused ? 'paused' : ''}`} />
            </div>

            <div className="scene-dots" aria-label="Choose a scene">
              {scenes.map((x, i) => (
                <button
                  key={x.tag}
                  aria-label={x.category + ' scene'}
                  aria-pressed={i === index}
                  className={i === index ? 'scene-dot active' : 'scene-dot'}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>

            <button aria-label="Next event scene" onClick={() => setIndex((index + 1) % scenes.length)} className="ctrl-btn">
              <ChevronRight size={18} />
            </button>

            <button
              aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}
              onClick={() => setPaused(!paused)}
              className="ctrl-btn pause-btn"
            >
              {paused ? <Play size={13} /> : <Pause size={13} />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Scroll Indicator & Creative Pillars */}
      <div className="opening-bottom">



      </div>
    </section>
  );
}

function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-v2">
      

      {/* 2. Main 5-Column Grid */}
      <div className="footer-main-grid">
        {/* Col 1: Brand & Atelier */}
        <div className="footer-col footer-col-brand">
          <Brand footer />
          <p className="footer-brand-bio">
            Maa Uma Events is an award-winning event design and luxury production studio. We orchestrate
            extraordinary weddings, corporate galas, and live concerts with uncompromising artistry and heartfelt
            hospitality.
          </p>
          <div className="footer-trust-pills">
            <span>✦ Pan-India Execution</span>
            <span>✦ 10+ Years of Craft</span>
            <span>✦ 500+ Celebrations</span>
          </div>
          <div className="footer-social-row" aria-label="Social media channels">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
              <InstagramIcon />
            </a>
            <a href="https://wa.me/919825088990" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer-social-btn">
              <WhatsAppIcon />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-btn">
              <YouTubeIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn">
              <LinkedInIcon />
            </a>
            <a href="mailto:celebrations@maaumaevents.com" aria-label="Email" className="footer-social-btn">
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* Col 2: Signature Celebrations */}
        <div className="footer-col">
          <h4 className="footer-col-title">Signature Celebrations</h4>
          <ul className="footer-links-list">
            <li><Link href="/events?category=Weddings">Destination Weddings</Link></li>
            <li><Link href="/events?category=Weddings">Royal Palace Mandaps</Link></li>
            <li><Link href="/events?category=Weddings">Sangeet & Cocktail Galas</Link></li>
            <li><Link href="/events?category=Corporate">Corporate Galas & Summits</Link></li>
            <li><Link href="/events?category=Concerts">Live Concerts & DJ Arenas</Link></li>
            <li><Link href="/events?category=Birthdays">Milestone Birthdays & Kids Zones</Link></li>
            <li><Link href="/events?category=Social+%26+public">Anniversaries & Cultural Galas</Link></li>
          </ul>
        </div>

        {/* Col 3: Atelier Capabilities */}
        <div className="footer-col">
          <h4 className="footer-col-title">Atelier Capabilities</h4>
          <ul className="footer-links-list">
            <li><Link href="/events#services">3D Spatial & Stage Architecture</Link></li>
            <li><Link href="/events#services">Bespoke Floral & Structural Décor</Link></li>
            <li><Link href="/events#services">Intelligent Lighting & Concert Audio</Link></li>
            <li><Link href="/events#services">Artist & Celebrity Curation</Link></li>
            <li><Link href="/events#services">Grand Bride & Groom Entries</Link></li>
            <li><Link href="/events#services">Guest Hospitality & Logistics</Link></li>
            <li><Link href="/events#services">Complete On-Ground Coordination</Link></li>
          </ul>
        </div>

        {/* Col 4: Experience Studio & Inquiries */}
        <div className="footer-col">
          <h4 className="footer-col-title">Experience Studio</h4>
          <div className="footer-contact-block">
            <div className="footer-contact-item">
              <MapPin size={17} className="footer-contact-icon" />
              <div>
                <strong>Maa Uma Events Atelier</strong>
                <p>Ring Road / City Light, Surat,<br />Gujarat 395007, India</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <Phone size={17} className="footer-contact-icon" />
              <div>
                <a href="tel:+919825088990">+91 98250 88990</a>
                <br />
                <a href="tel:+919825011223">+91 98250 11223</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <Mail size={17} className="footer-contact-icon" />
              <div>
                <a href="mailto:celebrations@maaumaevents.com">celebrations@maaumaevents.com</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <Clock size={17} className="footer-contact-icon" />
              <div>
                <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
                <br />
                <small>Sunday: By Private Appointment</small>
              </div>
            </div>
          </div>
        </div>

        {/* Col 5: The Event Journal */}
        <div className="footer-col footer-col-journal">
          <h4 className="footer-col-title">The Event Journal</h4>
          <p className="footer-journal-desc">
            Receive private lookbooks, seasonal decor trends, and luxury destination venue curations delivered directly to your inbox.
          </p>
          {subscribed ? (
            <div className="footer-subscribed-msg" role="status">
              <Sparkles size={16} />
              <span>Thank you for joining our private circle.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="footer-journal-form">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address…"
                aria-label="Email address for event journal"
              />
              <button type="submit" aria-label="Subscribe to journal">
                <Send size={15} />
              </button>
            </form>
          )}
          <div className="footer-direct-consult">
            <Sparkles size={15} />
            <div>
              <span>Need a custom proposal?</span>
              <br />
              <Link href="/contact" className="footer-consult-link">
                Prepare your event brief →
              </Link>
            </div>
          </div>
        </div>
      </div>

      
      

      {/* 4. Footer Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-copy">
          <span>© {new Date().getFullYear()} Maa Uma Events LLP. All Rights Reserved.</span>
        
        </div>
        <div className="footer-bottom-links">
          <Link href="/about">Our Story</Link>
          <Link href="/events">Experiences</Link>
          <Link href="/contact">Contact Atelier</Link>
          <button onClick={scrollToTop} className="footer-back-to-top" aria-label="Scroll back to top of page">
            <span>Back to top</span>
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

function EventAtlas() {
  const [selected, setSelected] = useState(0);
  const c = categories[selected];
  return (
    <section className="section event-atlas">
      <div className="section-head reveal">
        <div>
          <Eyebrow>01 / FIND YOUR OCCASION</Eyebrow>
          <h2>
            Different days.<br /><em>The same devotion.</em>
          </h2>
        </div>
        <p>
          A room of twenty. A crowd of thousands.<br />The feeling is always personal.
        </p>
      </div>
      <div className="atlas-grid">
        <div className="atlas-list">
          {categories.map((x, i) => (
            <button key={x.name} aria-pressed={selected === i} onClick={() => setSelected(i)}>
              <span>0{i + 1}</span>
              <strong>{x.name}</strong>
              <Plus size={22} />
            </button>
          ))}
        </div>
        <div className="atlas-preview" key={c.name}>
          <Img name={c.image} alt={c.name + ' atmosphere'} />
          <div className="atlas-caption">
            <span>{c.sub}</span>
            <p>{c.desc}</p>
            <Link href={'/events?category=' + encodeURIComponent(c.name)}>
              Explore {c.name.toLowerCase()} <Plus size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SignatureDetails() {
  return (
    <section className="section signatures">
      <div className="signature-title reveal">
        <Eyebrow>04 / THE INVISIBLE ART</Eyebrow>
        <h2>
          The difference?<br /><em>It’s in the details.</em>
        </h2>
        <p>A celebration comes alive when every element speaks the same language.</p>
        <Link href="/events#services" className="text-link">
          Explore all 22 services <Plus size={18} />
        </Link>
      </div>
      <div className="signature-cards">
        {[
          { Icon: Flower2, n: '01', t: 'The setting', d: 'Décor that sets the feeling.', tags: 'Florals · Spatial design · Stage styling' },
          { Icon: Music2, n: '02', t: 'The atmosphere', d: 'A rhythm that fills the room.', tags: 'Lighting · Sound · Live entertainment' },
          { Icon: Camera, n: '03', t: 'The memories', d: 'The moments you keep forever.', tags: 'Photography · Film · Photo experiences' }
        ].map(({ Icon, n, t, d, tags }) => (
          <article className="signature-card tilt reveal" key={n}>
            <div>
              <Icon strokeWidth={1.2} />
              <span>{n}</span>
            </div>
            <h3>{t}</h3>
            <p>{d}</p>
            <small>{tags}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Opening />
      <div className="marquee" aria-hidden="true">
        <div>
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              Weddings <b>✳</b> Corporate experiences <b>✳</b> Celebrations <b>✳</b> Live events <b>✳</b>{' '}
            </span>
          ))}
        </div>
      </div>
      <section id="intro" className="section intro intro-v2">
        <div className="intro-label">
          <Eyebrow>A LITTLE ABOUT US</Eyebrow>
          <span className="intro-monogram" aria-hidden="true">
            MU.
          </span>
        </div>
        <div className="reveal">
          <h2>
            Anyone can fill a room.<br />We want to make it<br /><em>mean something.</em>
          </h2>
          <div className="intro-bottom">
            <p>
              The entrance that gives you goosebumps. The dinner that brings everyone closer. The last song nobody wants
              to end. We create the setting. You make the memories.
            </p>
            <Link href="/about" className="circle-link">
              Our<br />story <Plus size={17} />
            </Link>
          </div>
        </div>
      </section>
      <EventAtlas />
      <section className="immersive immersive-v2">
        <Img name="concert" alt="Purple concert light filling a live event" />
        <div className="immersive-shade" />
        <div className="immersive-copy reveal">
          <Eyebrow>02 / MORE THAN A MOMENT</Eyebrow>
          <h2>
            Some nights<br />become <em>stories.</em>
          </h2>
          <p>
            The lights go down. The feeling stays.<br />We bring every layer of the experience together.
          </p>
          <Link href="/events?category=Concerts" className="button light">
            Feel the possibilities
          </Link>
        </div>
        <div className="immersive-side">SOUND / LIGHT / ENERGY / EMOTION</div>
      </section>
      <Process />
      <SignatureDetails />
      <CTA />
    </>
  );
}

function About() {
  return (
    <>
      <section className="subhero about-hero">
        <Eyebrow>THE PEOPLE BEHIND THE FEELING</Eyebrow>
        <h1>
          We believe in<br /><em>beautiful beginnings.</em>
        </h1>
        <p>And all the little things that make them extraordinary.</p>
        <span className="giant-symbol" aria-hidden="true">
          ✧
        </span>
      </section>
      <section className="section story">
        <div className="image-frame tilt reveal">
          <Img name="gala" alt="Thoughtfully styled event table" />
        </div>
        <div className="reveal">
          <Eyebrow>OUR STORY</Eyebrow>
          <h2>
            A celebration.<br />A connection.<br /><em>A lasting memory.</em>
          </h2>
          <p>
            Maa Uma Events is built around a simple idea: the best celebrations feel personal. They reflect the people at
            their heart, their traditions and the things they love.
          </p>
          <p>
            Our approach connects creative event design with practical planning, so every detail has a purpose and every
            moment has room to unfold.
          </p>
        </div>
      </section>
      <section className="section philosophy">
        <Eyebrow>WHAT WE STAND FOR</Eyebrow>
        <h2 className="reveal">
          Thoughtful by nature.<br /><em>Extraordinary by design.</em>
        </h2>
        <div className="detail-grid">
          {[
            ['01', 'Your story first', 'We start by understanding what matters to you, before deciding how it should look.'],
            ['02', 'Creativity with care', 'Beautiful ideas work best when they are supported by realistic planning.'],
            ['03', 'Presence over pressure', 'A considered guest journey makes your celebration feel welcoming and natural.']
          ].map(([n, t, d]) => (
            <article className="reveal" key={n}>
              <span className="step">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <Process />
      <section className="section promise">
        <div className="reveal">
          <Eyebrow>OUR WAY OF WORKING</Eyebrow>
          <h2>
            Behind the magic,<br /><em>a considered plan.</em>
          </h2>
        </div>
        <div className="promise-list">
          {[
            'A concept that feels like you',
            'Clarity on scope and budget',
            'Carefully coordinated partners',
            'Attention to guest comfort',
            'Thoughtful on-site coordination',
            'A plan for the unexpected'
          ].map(x => (
            <div key={x} className="reveal">
              <Check size={19} />
              {x}
            </div>
          ))}
        </div>
      </section>
      <section className="quote-section reveal">
        <span>“</span>
        <h2>
          The most beautiful part of any event<br />is how it makes <em>people feel.</em>
        </h2>
        <p>THE MAA UMA PHILOSOPHY</p>
      </section>
      <CTA />
    </>
  );
}

function Events() {
  const [active, setActive] = useState('Weddings');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const q = new URLSearchParams(window.location.search).get('category');
      if (q && categories.some(c => c.name === q)) {
        setTimeout(() => setActive(q), 0);
      }
    }
  }, []);

  const c = categories.find(cat => cat.name === active) || categories[0];

  return (
    <>
      <section className="subhero">
        <Eyebrow>OCCASIONS, REIMAGINED</Eyebrow>
        <h1>
          Whatever the occasion.<br /><em>Make it yours.</em>
        </h1>
        <p>From intimate beginnings to a room full of applause.</p>
      </section>
      <section className="section category-section">
        <div className="category-buttons" aria-label="Event categories">
          {categories.map(x => (
            <button aria-pressed={active === x.name} onClick={() => setActive(x.name)} key={x.name}>
              {x.name}
            </button>
          ))}
        </div>
        <div className="category-feature" key={active}>
          <div className="category-image">
            <Img name={c.image} alt={c.name + ' celebration inspiration'} />
            <span>{String(categories.indexOf(c) + 1).padStart(2, '0')} / 05</span>
          </div>
          <div className="category-copy">
            <Eyebrow>{c.sub}</Eyebrow>
            <h2>
              {c.name}
              <em>,<br />with feeling.</em>
            </h2>
            <p>{c.desc}</p>
            <ul>
              {c.items.map(x => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <Link className="button dark" href={'/contact?event=' + encodeURIComponent(c.name)}>
              Plan this experience
            </Link>
          </div>
        </div>
      </section>
      <section className="section services" id="services">
        <div className="section-head reveal">
          <div>
            <Eyebrow>THE COMPLETE PICTURE</Eyebrow>
            <h2>
              Everything it takes.<br /><em>All brought together.</em>
            </h2>
          </div>
          <p>
            Explore individual services or create<br />a complete experience around your vision.
          </p>
        </div>
        <Accordion type="single" collapsible className="service-accordion">
          {services.map(([n, d], i) => (
            <AccordionItem key={n} value={n}>
              <AccordionTrigger>
                <span className="service-number">{String(i + 1).padStart(2, '0')}</span>
                {n}
              </AccordionTrigger>
              <AccordionContent>{d}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <section className="section mood">
        <Eyebrow>THE POSSIBILITIES</Eyebrow>
        <h2 className="reveal">
          A mood for<br /><em>every moment.</em>
        </h2>
        <div className="mood-grid">
          {[
            ['wedding', 'Romantic & timeless'],
            ['gala', 'Refined & intimate'],
            ['concert', 'Bold & electric']
          ].map(([img, t]) => (
            <figure className="tilt reveal" key={t}>
              <Img name={img} alt={t + ' event setting'} />
              <figcaption>{t}</figcaption>
            </figure>
          ))}
        </div>
        <p className="caption">Visual inspiration to help shape your own event.</p>
      </section>
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}

function Contact() {
  const [event, setEvent] = useState('Weddings');
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const q = new URLSearchParams(window.location.search).get('event');
      if (q && categories.some(c => c.name === q)) {
        setTimeout(() => setEvent(q), 0);
      }
    }
  }, []);

  function download(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    const f = new FormData(e.currentTarget);
    const text =
      'MAA UMA EVENTS — EVENT BRIEF\n\n' +
      Array.from(f.entries())
        .map(([k, v]) => k + ': ' + v)
        .join('\n') +
      '\nEvent type: ' +
      event +
      '\n\nPrepared locally. This brief has not been sent to Maa Uma Events.';
    const a = document.createElement('a');
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
    a.href = url;
    a.download = 'maa-uma-event-brief.txt';
    a.click();
    URL.revokeObjectURL(url);
    setDone(true);
    setBusy(false);
  }

  return (
    <>
      <section className="subhero contact-hero">
        <Eyebrow>EVERY GREAT EVENT STARTS WITH A CONVERSATION</Eyebrow>
        <h1>
          Tell us your dream.<br /><em>Let’s give it a stage.</em>
        </h1>
        <p>A date, an idea, or just a feeling. Start right here.</p>
      </section>
      <section className="section contact-form-section" id="brief">
        <div className="contact-intro reveal">
          <Eyebrow>YOUR EVENT, YOUR WAY</Eyebrow>
          <h2>
            A few details.<br /><em>Endless possibilities.</em>
          </h2>
          <p>Tell us what you have in mind and prepare a brief for your first planning conversation.</p>
          <div className="contact-note">
            <Sparkles size={26} />
            <p>
              You don’t need to have it all figured out.<br />That’s where the imagination begins.
            </p>
          </div>
          <p className="form-disclosure">This form creates a downloadable brief. It does not send an enquiry or confirm a booking.</p>
        </div>
        <form onSubmit={download} className="brief-form">
          <div className="form-grid">
            <label>
              Your name
              <input name="Name" required placeholder="How should we call you?" autoComplete="name" />
            </label>
            <label>
              Email address
              <input name="Email" type="email" required placeholder="you@example.com" autoComplete="email" />
            </label>
            <label>
              Phone number
              <input name="Phone" type="tel" placeholder="Your contact number" autoComplete="tel" />
            </label>
            <label>
              Celebration type
              <Select value={event} onValueChange={setEvent}>
                <SelectTrigger className="event-select">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(c => (
                    <SelectItem value={c.name} key={c.name}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
            <label>
              Preferred date
              <input name="Date" type="date" />
            </label>
            <label>
              Number of guests
              <input name="Guests" type="number" min="1" placeholder="Approximate is fine" />
            </label>
            <label>
              City or venue
              <input name="Location" placeholder="Where do you imagine it?" />
            </label>
            <label>
              Approximate budget
              <input name="Budget" placeholder="Optional · e.g. ₹5–10 lakh" />
            </label>
          </div>
          <label>
            Your vision
            <textarea
              name="Vision"
              rows={4}
              required
              placeholder="Tell us about the occasion, your ideas and the details that matter…"
            />
          </label>
          <button className="button dark" type="submit" disabled={busy}>
            Create my event brief <Download size={17} />
          </button>
          {done && (
            <p className="form-success" role="status">
              <Check size={18} />
              Your brief is ready to download. Nothing has been sent.
            </p>
          )}
        </form>
      </section>
      <section className="section contact-steps">
        <Eyebrow>WHAT HAPPENS NEXT</Eyebrow>
        <div className="detail-grid">
          {[
            ['01', 'Prepare your brief', 'Gather the date, location and ideas you would like to explore.'],
            ['02', 'Shape the possibilities', 'Discuss a creative direction, priorities and a realistic scope.'],
            ['03', 'Confirm the details', 'Review the proposal, inclusions and timeline before booking.']
          ].map(([n, t, d]) => (
            <article className="reveal" key={n}>
              <span className="step">{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section planning-tips">
        <div className="reveal">
          <Eyebrow>A GOOD PLACE TO START</Eyebrow>
          <h2>
            Bring an idea.<br /><em>Or a whole moodboard.</em>
          </h2>
        </div>
        <div className="tips">
          <p>
            <span>01</span> Your date and possible alternatives
          </p>
          <p>
            <span>02</span> A guest count and a preferred location
          </p>
          <p>
            <span>03</span> Colours, references and must-have moments
          </p>
          <p>
            <span>04</span> The budget you feel comfortable with
          </p>
        </div>
      </section>
      <FAQ />
      <section className="section small-worlds">
        <Eyebrow>STILL FINDING YOUR INSPIRATION?</Eyebrow>
        <h2>
          Discover what your<br />day <em>could become.</em>
        </h2>
        <Link className="button dark" href="/events">
          Explore the possibilities
        </Link>
      </section>
      <section className="contact-end">
        <Img name="gala" alt="Warmly lit table ready for a celebration" />
        <div>
          <h2>
            Your people.<br />Your moment.<br /><em>Our whole heart.</em>
          </h2>
          <a href="#brief" className="button light">
            Start your brief
          </a>
        </div>
      </section>
    </>
  );
}

function Navbar({
  page,
  menu,
  setMenu,
  scrolled
}: {
  page: 'home' | 'about' | 'events' | 'contact';
  menu: boolean;
  setMenu: (v: boolean) => void;
  scrolled: boolean;
}) {
  const navLinks = [
    { href: '/', label: 'Home', num: '01' },
    { href: '/about', label: 'Our Story', num: '02' },
    { href: '/events', label: 'Experiences', num: '03' },
    { href: '/events#services', label: 'Services', num: '04' },
    { href: '/contact', label: 'Contact', num: '05' }
  ];

  return (
    <header className={`site-navbar-capsule ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="navbar-brand-wrapper">
          <Link href="/" className="navbar-brand-link" aria-label="Maa Uma Events home" onClick={() => setMenu(false)}>
            <img
              src="/brand/logo-dark.svg"
              alt="Maa Uma Events"
              className="navbar-brand-logo"
              width="170"
              height="44"
            />
          </Link>
        </div>

        {/* Center Nav Links */}
        <nav className="navbar-nav-center" aria-label="Primary navigation">
          {navLinks.map((item) => {
            const isActive = (page === 'home' ? '/' : '/' + page) === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`navbar-nav-link ${isActive ? 'is-active' : ''}`}
              >
                <span className="navbar-link-num">{item.num}</span>
                <span className="navbar-link-text">{item.label}</span>
                {isActive && <span className="navbar-active-dot" aria-hidden="true" />}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="navbar-actions-right">
          <a
            href="https://wa.me/919825088990?text=Hi%20Maa%20Uma%20Events,%20I%20would%20like%20to%20plan%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-whatsapp-btn"
            aria-label="Direct WhatsApp inquiry"
            title="Chat with our Atelier on WhatsApp"
          >
            <WhatsAppIcon />
            <span className="whatsapp-label">WhatsApp</span>
          </a>

          <Link href="/contact" className="navbar-cta-btn">
            <Sparkles size={15} />
            <span>Plan an Event</span>
          </Link>

          {/* Mobile Menu Toggle Button with animated lines */}
          <button
            type="button"
            className={`navbar-menu-toggle ${menu ? 'is-open' : ''}`}
            aria-controls="mobile-navigation"
            aria-label={menu ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            <span className="toggle-line line-1" />
            <span className="toggle-line line-2" />
            <span className="toggle-line line-3" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div id="mobile-navigation" className={`navbar-mobile-drawer ${menu ? 'is-open' : ''}`} aria-hidden={!menu}>
        <div className="mobile-drawer-backdrop" onClick={() => setMenu(false)} aria-hidden="true" />
        <div className="mobile-drawer-sheet">
          <div className="mobile-drawer-top">
            <span className="mobile-drawer-eyebrow">✦ MAA UMA ATELIER</span>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMenu(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-drawer-links">
            {[
              { href: '/', label: 'Home', num: '01', desc: 'Curated celebration showcase' },
              { href: '/about', label: 'Our Story', num: '02', desc: 'The devotion & craft behind our work' },
              { href: '/events', label: 'Experiences', num: '03', desc: 'Weddings, galas, concerts & more' },
              { href: '/events#services', label: 'Atelier Services', num: '04', desc: '3D spatial design, audio, décor & SFX' },
              { href: '/contact', label: 'Contact Atelier', num: '05', desc: 'Prepare your bespoke event brief' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenu(false)}
                className="mobile-nav-row"
                aria-current={(page === 'home' ? '/' : '/' + page) === item.href ? 'page' : undefined}
              >
                <div className="mobile-row-left">
                  <span className="mobile-row-num">{item.num}</span>
                  <div>
                    <strong className="mobile-row-title">{item.label}</strong>
                    <span className="mobile-row-desc">{item.desc}</span>
                  </div>
                </div>
                <ArrowRight size={16} className="mobile-row-arrow" />
              </Link>
            ))}
          </nav>

          <div className="mobile-drawer-bottom">
            <div className="mobile-direct-contacts">
              <a href="tel:+919825088990" className="mobile-contact-pill">
                <Phone size={14} /> +91 98250 88990
              </a>
              <a href="mailto:celebrations@maaumaevents.com" className="mobile-contact-pill">
                <Mail size={14} /> Email Atelier
              </a>
              <div className="mobile-contact-loc">
                <MapPin size={14} /> Surat, Gujarat
              </div>
            </div>

            <Link href="/contact" onClick={() => setMenu(false)} className="button citron mobile-cta-full">
              Plan your celebration <Sparkles size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function EventSite({ page }: { page: 'home' | 'about' | 'events' | 'contact' }) {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenu(false);
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);

  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = reduced
      ? null
      : new Lenis({
          autoRaf: true,
          anchors: { offset: -90 },
          duration: 1.15,
          allowNestedScroll: true
        });

    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );

    root.current?.querySelectorAll('.reveal').forEach(x => io.observe(x));

    let frame = 0;
    const scroll = () => {
      if (!frame)
        frame = requestAnimationFrame(() => {
          const y = window.scrollY;
          setScrolled(y > 30);
          document.documentElement.style.setProperty('--scroll', String(y));
          document.documentElement.style.setProperty(
            '--progress',
            (y / (document.documentElement.scrollHeight - innerHeight || 1)) * 100 + '%'
          );
          frame = 0;
        });
    };

    if (!reduced) window.addEventListener('scroll', scroll, { passive: true });

    return () => {
      lenis?.destroy();
      io.disconnect();
      window.removeEventListener('scroll', scroll);
      cancelAnimationFrame(frame);
    };
  }, [page]);

  function tilt(e: React.MouseEvent<HTMLDivElement>) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = (e.target as HTMLElement).closest('.tilt') as HTMLElement;
    if (!el) return;
    const b = el.getBoundingClientRect();
    el.style.setProperty('--rx', (-(e.clientY - b.top - b.height / 2) / b.height) * 9 + 'deg');
    el.style.setProperty('--ry', ((e.clientX - b.left - b.width / 2) / b.width) * 9 + 'deg');
  }

  return (
    <div
      ref={root}
      onMouseMove={tilt}
      onMouseOut={e => {
        const el = (e.target as HTMLElement).closest('.tilt') as HTMLElement;
        if (el && !(e.relatedTarget instanceof Node && el.contains(e.relatedTarget))) {
          el.style.setProperty('--rx', '0deg');
          el.style.setProperty('--ry', '0deg');
        }
      }}
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="read-progress" />

      {/* Restructured Unified Floating Capsule Navbar */}
      <Navbar page={page} menu={menu} setMenu={setMenu} scrolled={scrolled} />

      <main id="main">
        {page === 'home' ? <Home /> : page === 'about' ? <About /> : page === 'events' ? <Events /> : <Contact />}
      </main>

      <Footer />
    </div>
  );
}
