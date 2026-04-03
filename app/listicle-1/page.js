'use client';

import { useEffect, useRef } from 'react';

const CTA_URL = 'https://biostacklabs.com/pages/nad-regen-triple';

const SIGNS = [
  {
    title: "You Feel Mentally Slower Than You Used To",
    body: [
      "You used to be sharp. Quick. On it.",
      "Now? It takes longer to think, decide, and respond.",
      "That's not just \"life.\" It's often a drop in your body's ability to produce cellular energy  -  especially in your brain.",
    ],
    callout: "Hold on to that phrase: \"cellular energy.\" We'll revisit it  -  and explain why it's slowing your brain down.",
  },
  {
    title: "Brain Fog Is Becoming Your \"Normal\"",
    body: [
      "You wake up… already foggy.",
      "Coffee helps. A bit. But the clarity never fully returns.",
      "This isn't just fatigue  -  it's your brain struggling to fuel itself efficiently.",
    ],
    callout: null,
  },
  {
    title: "Your Energy Feels Unpredictable",
    body: [
      "Some days you're fine.",
      "Other days you hit a wall by 2pm.",
      "This rollercoaster isn't random. It's tied to how well your cells are producing  -  and recovering  -  energy.",
    ],
    callout: null,
  },
  {
    title: "You Struggle to Stay Focused",
    body: [
      "Notifications distract you more than they used to.",
      "Deep work feels harder. You start things… and don't finish them.",
      "Your brain isn't broken. It's underpowered.",
    ],
    callout: null,
  },
  {
    title: "You Feel \"Burnt Out\" Faster Than Before",
    body: [
      "Same workload. Less resilience.",
      "Being present for loved ones feels hard because your energy is never quite \"topped up.\"",
      "You need more time to recover  -  mentally and physically. That's a signal your body's repair systems are slowing down.",
    ],
    callout: null,
  },
  {
    title: "You Notice Subtle Memory Slips",
    body: [
      "Nothing dramatic.",
      "Just… small things slipping through. Names. Tasks. Words.",
      "These are early signs your brain isn't regenerating as efficiently as it once did.",
    ],
    callout: null,
  },
  {
    title: "You Feel Older Than Your Age",
    body: [
      "Not just physically.",
      "Mentally. Like your edge is fading.",
    ],
    callout: null,
  },
];

const REVIEWS = [
  { file: 'review-01.png', alt: 'Tyler Kallasy  -  Noticing a difference!' },
  { file: 'review-02.png', alt: 'Drew  -  1 year later, I love this stuff!' },
  { file: 'review-03.png', alt: 'Bryan Krahn  -  NAD Regen WORKS' },
  { file: 'review-04.png', alt: 'Smokey  -  NAD Regen is amazing' },
  { file: 'review-05.png', alt: 'Slaterraider  -  Started feeling better after only a few days' },
  { file: 'review-06.png', alt: 'Anonymous  -  NAD REGEN is a winner!' },
];

export default function Listicle1() {
  const progressRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const el = progressRef.current;
      if (!el) return;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
      el.style.width = `${Math.min(pct, 100)}%`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="progress-bar" ref={progressRef} />

      {/* ── Nav ── */}
      <nav className="site-nav">
        <div className="logo">
          <img src="/bsl-logo-dark.png" alt="BioStack Labs" className="logo-img" />
        </div>
        <a href={CTA_URL} className="nav-cta" id="nav-cta-l1">
          Try NAD Regen →
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-tag">NAD Regen · Brain Performance</div>
        <h1 className="fade-up">
          7 Signs Your Brain<br />
          Is <em>Aging Too Fast</em><br />
          (And What To Do About It)
        </h1>
        <p className="hero-sub fade-up-delay-1">
          If you've noticed your focus slipping, energy crashing, or memory
          faltering  -  this isn't just stress. Here's what's really going on.
        </p>
        <div className="trust-bar fade-up-delay-2">
          <span className="trust-item">
            <span className="stars">★★★★★</span>
            <span>4.8 out of 5</span>
          </span>
          <span className="trust-sep" />
          <span className="trust-item">10,000+ High-Performing Customers</span>
          <span className="trust-sep" />
          <span className="trust-item">🛡️ 90-Day Guarantee</span>
          <span className="trust-sep" />
          <span className="trust-item">🚚 Free US Shipping</span>
        </div>
      </section>

      {/* ── Article body ── */}
      <div className="article-body">

        {/* Intro */}
        <section className="intro-section">
          <p>
            You walk into a room and forget why you're there.
            You reread the same sentence three times. Your energy crashes
            mid-afternoon. Your focus just… isn't what it used to be.
          </p>
          <p>
            You brush it off. <em>"Too much work."</em> <em>"Not enough sleep."</em>{' '}
            <em>"Just stress."</em>
          </p>
          <div className="hook-line">But what if it's something deeper?</div>
          <p>
            Because the truth is, for a growing number of driven, high-performing
            people in their 30s, 40s, and 50s  -  these aren't just lifestyle symptoms.
            They're biological signals from the inside out.
          </p>
        </section>

        {/* Signs */}
        <section className="signs-section">
          <span className="section-label">The Warning Signs</span>
          <h2 className="signs-title">⚠️ 7 Signs Your Brain Is Aging Faster Than It Should</h2>

          {SIGNS.map((sign, i) => (
            <div className="sign-card" key={i}>
              <div className="sign-num">0{i + 1}</div>
              <div className="sign-content">
                <h3>⚠️ Sign #{i + 1}: {sign.title}</h3>
                {sign.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {sign.callout && (
                  <div className="sign-callout">
                    <span className="arrow">👉</span>
                    <span>{sign.callout}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

      </div>{/* end article-body */}

      {/* ── Science Section ── */}
      <section className="science-section">
        <div className="science-inner">
          <span className="section-label">The Root Cause</span>
          <h2 className="section-title">So What's <em>Actually</em> Going On?</h2>
          <p style={{ marginTop: '16px' }}>
            Remember when we mentioned "cellular energy"? Here's the biology
            your body has been trying to tell you about.
          </p>
          <p>There's one molecule at the centre of all of this:</p>

          <div className="pullquote" style={{ margin: '28px 0' }}>
            NAD+  -  <em>Nicotinamide Adenine Dinucleotide</em>
          </div>

          <p>It's responsible for:</p>
          <div className="impact-pills">
            {['Cellular Energy Production', 'Brain Function', 'DNA Repair', 'Longevity Processes', 'Healthy Aging'].map(p => (
              <span className="impact-pill" key={p}>{p}</span>
            ))}
          </div>

          {/* NAD decline chart */}
          <div className="nad-chart">
            <div className="nad-chart-title">NAD+ Levels by Decade (% of Peak)</div>
            <div className="nad-bars">
              {[
                { decade: '20s', pct: 100 },
                { decade: '30s', pct: 70 },
                { decade: '40s', pct: 50 },
                { decade: '50s', pct: 35 },
                { decade: '60s', pct: 22 },
              ].map(({ decade, pct }) => (
                <div className="nad-bar-group" key={decade}>
                  <div className="nad-bar-wrap">
                    <div
                      className={`nad-bar ${pct < 60 ? 'dim' : ''}`}
                      style={{ height: `${pct}%` }}
                    >
                      <span className="nad-bar-pct">{pct}%</span>
                    </div>
                  </div>
                  <span className="nad-bar-decade">{decade}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="nad-arrow">👉 <span>By your 30s and 40s, you're running on a fraction of what you had in your 20s.</span></div>
          <div className="nad-arrow">👉 <span>In your 50s and 60s? The decline is aggressive.</span></div>

          <p style={{ marginTop: '20px' }}>
            Low NAD isn't just about "feeling tired." It directly impacts your
            mental clarity, focus, energy, recovery  -  and your long-term brain health.
          </p>
          <div className="nad-arrow">👉 <span>Once it drops… everything feels harder.</span></div>
        </div>
      </section>

      <div className="article-body">

        {/* What high performers do */}
        <section style={{ padding: '56px 0 32px' }}>
          <span className="section-label">The Solution</span>
          <h2 className="section-title">What High Performers Are Doing About It</h2>
          <p style={{ marginTop: '16px' }}>
            Entrepreneurs. Athletes. Biohackers. They're not just "pushing through."
            They're restoring what's missing.
          </p>
          <div className="arrow-point">
            <span className="ap-arrow">👉</span>
            <span>They're replenishing NAD levels. And when NAD goes up…</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: '20px 0 28px' }}>
            {['Energy improves', 'Brain fog lifts', 'Focus sharpens', 'Recovery accelerates'].map(b => (
              <span key={b} style={{
                background: 'var(--cream)',
                border: '1px solid var(--border)',
                padding: '8px 18px',
                borderRadius: '100px',
                fontSize: '15px',
                fontWeight: '600',
                color: 'var(--text-body)',
              }}>{b}</span>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="comparison-section">
          <span className="section-label">Why Most Solutions Fall Short</span>
          <h2 className="section-title">The Problem With Most <em>NAD Interventions</em></h2>
          <div className="comparison-grid">
            <div className="comp-col bad">
              <h4><span>❌</span> What Most People Try</h4>
              <ul className="comp-list">
                <li><span className="icon">❌</span><span><strong>NMN</strong>  -  Works "OK" but doesn't address the root cause of NAD decline</span></li>
                <li><span className="icon">❌</span><span><strong>NAD IVs</strong>  -  $500 per session, 2–3 hours long, makes you feel sick, no lasting benefit</span></li>
                <li><span className="icon">❌</span><span><strong>NAD Injections</strong>  -  Expensive, inconvenient, still don't fix root cause</span></li>
                <li><span className="icon">❌</span><span><strong>More caffeine</strong>  -  Masks the symptom, accelerates the crash</span></li>
                <li><span className="icon">❌</span><span><strong>Random supplements</strong>  -  Not addressing what's actually declining</span></li>
              </ul>
            </div>
            <div className="comp-col good">
              <h4><span>✅</span> NAD Regen by BioStack</h4>
              <ul className="comp-list">
                <li><span className="icon">✅</span><span>Targets the <strong>root cause</strong> of NAD decline  -  not just symptoms</span></li>
                <li><span className="icon">✅</span><span>Powered by <strong>NAD3®</strong>  -  clinically studied, peer-reviewed ingredient</span></li>
                <li><span className="icon">✅</span><span>Designed for <strong>real absorption</strong> and daily consistency</span></li>
                <li><span className="icon">✅</span><span>Supports natural NAD <strong>production, protection, and recycling</strong></span></li>
                <li><span className="icon">✅</span><span>Built for <strong>long-term</strong> brain + energy + longevity performance</span></li>
              </ul>
            </div>
          </div>
          {/* Ingredients image */}
          <div className="ingredients-reveal">
            <img src="/nad-regen-ingredients.png" alt="NAD Regen Supplement Facts" className="ingredients-img" />
            <p className="ingredients-caption">Clinically-dosed. Every ingredient. No proprietary blends hidden from view.</p>
          </div>
          <div className="arrow-point" style={{ marginTop: '24px' }}>
            <span className="ap-arrow">👉</span>
            <span>This isn't a quick hit. It's a system reset.</span>
          </div>
        </section>

      </div>

      {/* ── Timeline ── */}
      <section className="timeline-section">
        <div className="timeline-inner">
          <span className="section-label">What To Expect</span>
          <h2 className="section-title">What Happens When You Take It<br />Consistently Over <em>90 Days</em></h2>
          <p style={{ marginTop: '14px', color: 'var(--text-mid)', fontSize: '16px' }}>
            NAD Regen isn't a "take it once and feel it instantly" solution. It compounds.
          </p>
          <div className="timeline-steps">
            <div className="timeline-step">
              <div className="step-dot"><span className="step-num">1</span></div>
              <div className="step-body">
                <div className="step-when">Weeks 1–3</div>
                <h4>Subtle Shifts Begin</h4>
                <p>Clearer thinking starts to emerge. Energy feels marginally more stable. Your sleep quality may improve. Most users report something feels "different"  -  even if they can't pinpoint exactly what.</p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-dot"><span className="step-num">2</span></div>
              <div className="step-body">
                <div className="step-when">30–60 Days</div>
                <h4>Noticeable Clarity + Energy</h4>
                <p>This is where the compounding effect starts to show. Brain fog becomes less frequent. Focus is sharper and more sustained. Energy doesn't drop off as hard in the afternoon. Less mental fatigue by end of day.</p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-dot"><span className="step-num">3</span></div>
              <div className="step-body">
                <div className="step-when">90 Days</div>
                <h4>Full Compounding Effect 🚀</h4>
                <p>This is where people say: <strong>"I feel like myself again."</strong> Sustained energy. Sharp thinking. Better recovery. And the quiet confidence of knowing you're actively investing in your long-term brain health  -  ahead of the curve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <div className="article-body">
        <section className="reviews-section">
          <div className="reviews-header">
            <span className="section-label">Verified Customer Reviews</span>
            <h2 className="section-title">What People Are Noticing</h2>
          </div>
          <div className="reviews-summary">
            <div className="reviews-score">4.8</div>
            <div className="reviews-meta">
              <div className="reviews-stars">★★★★★</div>
              <div className="reviews-count">Based on 2,400+ verified purchases</div>
            </div>
          </div>
          <div className="reviews-grid">
            {REVIEWS.map((r, i) => (
              <div className="review-img-card" key={i}>
                <img
                  src={`/reviews/${encodeURIComponent(r.file)}`}
                  alt={r.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <div className="who-section">
          <div className="who-col for">
            <h3>✅ This Is For You If…</h3>
            <ul className="who-list">
              {[
                "You're driven, but feel mentally slower",
                "You rely on caffeine just to function",
                "You want long-term brain performance  -  not quick fixes",
                "You care about longevity and staying sharp",
                "You're actively investing in your health for the long term",
              ].map((item, i) => (
                <li key={i}><span className="tick">✔</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="who-col not">
            <h3>❌ This Is NOT For You If…</h3>
            <ul className="who-list">
              {[
                "You want a quick energy buzz",
                "You won't take it consistently",
                "You think brain decline is just \"aging\" you have to accept",
              ].map((item, i) => (
                <li key={i}><span className="cross">✗</span><span>{item}</span></li>
              ))}
            </ul>
            <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              We actively tell people to avoid NAD Regen if you plan on using it
              for 30 days then stopping. Save your money.
            </p>
          </div>
        </div>

        {/* Skeptic section */}
        <div className="skeptic-section">
          <h3>Still Sceptical? Good.</h3>
          <p>
            The longevity space is littered with overhyped products and influencer-backed
            nonsense. We get it. That healthy scepticism has cost legitimate products a fair
            shake  -  and we've earned our reputation the hard way.
          </p>
          <p>
            When we launched NAD Regen 4 years ago, we had no marketing budget.
            Just a product that actually worked. Thousands of people across America
            now start their morning with 2 capsules of NAD Regen  -  because of the
            trust we've built one result at a time.
          </p>
          <p>
            <strong>The simple way to address this:</strong> Try NAD Regen for 90 days.
            You'll get it. There's a reason our repeat purchase rate is so high.
            There's a reason the reviews reference years  -  not weeks  -  of use.
          </p>
        </div>

        {/* Bottom line */}
        <section style={{ padding: '48px 0 16px' }}>
          <span className="section-label">The Bottom Line</span>
          <h2 className="section-title">You Don't Need To Accept <em>Brain Fog.</em></h2>
          <p style={{ marginTop: '16px', fontSize: '18px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '14px' }}>
            You don't need to feel "off." And you definitely don't need to lose your edge.
          </p>
          <p style={{ fontSize: '18px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
            You just need to restore what your body is missing. Because once your cells
            have the energy they need  -  <strong>everything changes.</strong>
          </p>
        </section>
      </div>

      {/* ── Lifestyle Banner ── */}
      <div className="lifestyle-banner">
        <img src="/high-performer.jpg" alt="High performer using NAD Regen" className="lifestyle-img" />
        <div className="lifestyle-overlay">
          <p className="lifestyle-quote">"I feel like myself again."</p>
          <p className="lifestyle-sub">Thousands of people across America start their morning with NAD Regen.</p>
        </div>
      </div>

      {/* ── Guarantee ── */}
      <section className="guarantee-section">
        <div className="guarantee-inner">
          <div className="shield-badge">🛡️</div>
          <h2>90-Day Risk-Free Guarantee</h2>
          <div className="big-text">Use It. Feel It. Or Get 100% Back.</div>
          <p>
            Use NAD Regen for a full 90 days. If you don't feel a meaningful
            difference in your clarity, energy, and resilience  -  get every penny back.
          </p>
          <p>No questions asked. No small print. No hassle.</p>
          <p style={{ marginTop: '16px' }}>
            We stand behind this because we know what it does. And we put our money
            where our mouth is.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Start Today</span>
          <h2>Try NAD Regen<br />for <em>90 Days, Risk Free</em></h2>
          <p>
            If you're serious about sharper thinking, better energy, and
            long-term brain performance  -  this is where you start.
          </p>
          <a href={CTA_URL} className="cta-btn" id="cta-btn-l1-bottom">
            <span>Get NAD Regen  -  Triple Pack</span>
            <span className="btn-arrow">→</span>
          </a>
          <div className="cta-sub">
            <span className="shield">🛡️</span>
            <span>90-Day Money-Back Guarantee &nbsp;·&nbsp; Free US Shipping &nbsp;·&nbsp; Secure Checkout</span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-logo">
          <img src="/bsl-logo-dark.png" alt="BioStack Labs" className="footer-logo-img" />
        </div>
        <p>
          These statements have not been evaluated by the Food and Drug Administration.
          This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
        <p>
          <a href="https://biostacklabs.com/policies/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>
          &nbsp;·&nbsp;
          <a href="https://biostacklabs.com/policies/refund-policy" target="_blank" rel="noopener">Refund Policy</a>
          &nbsp;·&nbsp;
          <a href="https://biostacklabs.com" target="_blank" rel="noopener">biostacklabs.com</a>
        </p>
        <p style={{ marginTop: '8px' }}>© {new Date().getFullYear()} BioStack Labs. All rights reserved.</p>
      </footer>
    </>
  );
}
