'use client';

import { useEffect, useRef } from 'react';

const CTA_URL = 'https://biostacklabs.com/pages/nad-regen-triple';

const SIGNS = [
  {
    title: "You're Thinking About The Future… Differently",
    body: [
      '"Will I still feel like me in 10 years?"',
      '"Will I have the energy to keep up  -  with work, family, life?"',
      '"Will I still be sharp?"',
      "This isn't insecurity. It's awareness. You're starting to realise that how you feel now isn't guaranteed forever.",
    ],
    callout: "This is the transition phase we all experience. Some address it more proactively than others.",
  },
  {
    title: "You Notice Your Recovery Slowing Down",
    body: [
      "Late night? Hard workout? Busy week?",
      "It used to be nothing.",
      "Now? It lingers.",
    ],
    callout: "Your body takes longer to reset  -  and that's one of the earliest signs your cellular repair systems are slowing down.",
  },
  {
    title: "Your Energy Feels Less \"Reliable\"",
    body: [
      "You can still perform. But it takes more effort.",
      "More caffeine. More pushing through.",
      "You're working harder for the same output.",
    ],
    callout: "That's the shift  -  and it's not motivation. It's biology.",
  },
  {
    title: "You're Struggling To Be Fully Present",
    body: [
      "This one hits differently.",
      "You don't just want to 'get by.' You want to be present, energised, engaged.",
      "Not tired. Not distracted. Not running on empty.",
    ],
    callout: "You want to be there  -  fully  -  for the people who matter most.",
  },
  {
    title: "You Feel Burnout Creeping In Faster",
    body: [
      "Same responsibilities. Less capacity.",
      "You feel stretched thinner.",
    ],
    callout: "That's not weakness. That's your system losing resilience.",
  },
  {
    title: "You Start Comparing Yourself To Your Younger Self",
    body: [
      "You remember how sharp you were. How consistent your energy felt. How easy it was to focus.",
      "And now? It feels like you have to work harder… for less.",
    ],
    callout: null,
  },
  {
    title: "You Don't Want To \"Age Like Everyone Else\"",
    body: [
      "You've seen what that looks like. Low energy. Mental decline. Slowing down too early.",
      "And you think: \"That's not going to be me.\"",
    ],
    callout: "But wanting that… and knowing how to avoid it… are two different things.",
  },
];

const REVIEWS_AGING = [
  { file: 'review-07.png', alt: 'Verified customer review' },
  { file: 'review-08.png', alt: 'Verified customer review' },
  { file: 'review-09.png', alt: 'Verified customer review' },
  { file: 'review-10.png', alt: 'Verified customer review' },
  { file: 'review-11.png', alt: 'Verified customer review' },
  { file: 'review-12.png', alt: 'Verified customer review' },
];

export default function Listicle2() {
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
        <a href={CTA_URL} className="nav-cta" id="nav-cta-l2">
          Try NAD Regen →
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-tag">NAD Regen · Longevity &amp; Aging</div>
        <h1 className="fade-up">
          You're Not <em>Old Yet</em>…<br />
          But You Can Feel<br />
          It Coming.
        </h1>
        <p className="hero-sub fade-up-delay-1">
          Here's how to stay sharp, energised, and resilient
          as the years go by  -  without leaving it too late.
        </p>
        <div className="trust-bar fade-up-delay-2">
          <span className="trust-item">
            <span className="stars">★★★★★</span>
            <span>4.8 out of 5</span>
          </span>
          <span className="trust-sep" />
          <span className="trust-item">2,400+ Verified Reviews</span>
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
            You don't feel "old"  -  but you've started noticing things.
          </p>
          <p>
            You don't bounce back like you used to. Your energy isn't as reliable.
            Your focus fades faster. You get tired in ways you can't quite explain.
          </p>
          <p>And in quiet moments, there's a thought you don't say out loud:</p>
          <div className="hook-line">👉 "Is this the start of decline?"</div>
          <p>
            You push it aside. <em>"I'm just busy." "I need better sleep." "It's just stress."</em>
          </p>
          <p>But deep down  -  you know it's more than that.</p>
          <p>
            The hardest part? Now life is busier than ever, with more responsibility
            weighing on your shoulders than at any point before. You can't afford to
            accept this. And you shouldn't have to.
          </p>
        </section>

        {/* Signs */}
        <section className="signs-section">
          <span className="section-label">The Warning Signs</span>
          <h2 className="signs-title">⚠️ 7 Signs You're Entering the Decline Window</h2>

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

      </div>

      {/* ── Science ── */}
      <section className="science-section">
        <div className="science-inner">
          <span className="section-label">The Root Cause</span>
          <h2 className="section-title">🧬 What's <em>Actually</em> Driving This?</h2>

          <p style={{ marginTop: '16px' }}>
            It all comes back to one thing:
          </p>
          <div className="pullquote" style={{ margin: '24px 0', color: 'var(--amber)' }}>
            Cellular Energy  -  and the molecule at its centre:
            <br /><span style={{ color: 'var(--white)', opacity: 0.9 }}>NAD+ (Nicotinamide Adenine Dinucleotide)</span>
          </div>
          <p>NAD+ controls:</p>
          <div className="impact-pills">
            {['Energy Production', 'Brain Performance', 'Cellular Repair', 'Healthy Aging'].map(p => (
              <span className="impact-pill" key={p}>{p}</span>
            ))}
          </div>

          <div className="nad-chart">
            <div className="nad-chart-title">Your NAD+ Levels vs. Age</div>
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

          <p>Your NAD levels decline with age. Not slowly. Significantly.</p>
          <div className="nad-arrow">👉 <span>By your 30s and 40s, you've already lost a large portion of what you had in your 20s.</span></div>

          <p style={{ marginTop: '16px' }}>And as it drops:</p>
          <div className="impact-pills">
            {['Energy becomes inconsistent', 'Recovery slows', 'Focus declines', 'Aging accelerates'].map(p => (
              <span className="impact-pill" key={p} style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}>{p}</span>
            ))}
          </div>

          <p style={{ marginTop: '24px' }}>
            This isn't just about "feeling older." It's about how long you stay sharp,
            how present you are with your family, how much energy you bring each day,
            and how well you age over time.
          </p>
          <div className="nad-arrow">👉 <span>Because once your cellular energy drops… everything becomes harder.</span></div>
        </div>
      </section>

      <div className="article-body">

        {/* Why most get it wrong */}
        <section style={{ padding: '56px 0 32px' }}>
          <span className="section-label">The Mistake Most People Make</span>
          <h2 className="section-title">🚫 Why Most People <em>Get This Wrong</em></h2>
          <p style={{ marginTop: '14px', fontSize: '17px', color: 'var(--text-mid)', marginBottom: '8px' }}>They try to fix it with:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: '12px 0 20px' }}>
            {['More caffeine', 'Better routines', 'Random supplements'].map(b => (
              <span key={b} style={{
                background: '#fdf6f6',
                border: '1px solid #f0d0cc',
                padding: '8px 18px',
                borderRadius: '100px',
                fontSize: '15px',
                fontWeight: '600',
                color: 'var(--red-soft)',
              }}>❌ {b}</span>
            ))}
          </div>
          <div className="arrow-point">
            <span className="ap-arrow">👉</span>
            <span>They're not addressing the root cause of NAD decline  -  which means that gap just keeps getting wider and wider.</span>
          </div>
        </section>

        {/* Comparison */}
        <section className="comparison-section" style={{ paddingTop: '16px' }}>
          <span className="section-label">Smarter NAD Solutions</span>
          <h2 className="section-title">❌ Most NAD Solutions <em>Fall Short</em></h2>
          <p style={{ marginTop: '14px', fontSize: '16px', color: 'var(--text-mid)', marginBottom: '4px' }}>
            6 years ago, NAD was only talked about in biohacker circles. Today, everyday people
            with demanding lives are using NAD to improve energy, age better, and boost longevity.
            The issue? Most NAD supplements are either junk or moderately effective at best.
          </p>
          <div className="comparison-grid">
            <div className="comp-col bad">
              <h4><span>❌</span> Where Others Fall Short</h4>
              <ul className="comp-list">
                <li><span className="icon">❌</span><span>Only provide a <strong>temporary boost</strong>, not lasting change</span></li>
                <li><span className="icon">❌</span><span>Don't prevent <strong>ongoing NAD decline</strong></span></li>
                <li><span className="icon">❌</span><span>Don't support <strong>long-term cellular repair</strong></span></li>
                <li><span className="icon">❌</span><span>NAD IVs &amp; injections: <strong>costly, inconvenient</strong>, no root-cause fix</span></li>
                <li><span className="icon">❌</span><span>Results are often <strong>inconsistent or nonexistent</strong></span></li>
              </ul>
            </div>
            <div className="comp-col good">
              <h4><span>✅</span> NAD Regen by BioStack</h4>
              <ul className="comp-list">
                <li><span className="icon">✅</span><span>Addresses the <strong>root cause</strong> of NAD decline  -  uniquely</span></li>
                <li><span className="icon">✅</span><span>Powered by <strong>NAD3®</strong>  -  clinically studied to produce &amp; protect NAD</span></li>
                <li><span className="icon">✅</span><span>Improves cellular <strong>efficiency</strong> over time, not just acutely</span></li>
                <li><span className="icon">✅</span><span>A long-term <strong>aging strategy</strong>, not a stimulant</span></li>
                <li><span className="icon">✅</span><span>Simple daily capsule  -  <strong>consistent and easy</strong></span></li>
              </ul>
            </div>
          </div>
        </section>

      </div>

      {/* ── Timeline ── */}
      <section className="timeline-section">
        <div className="timeline-inner">
          <span className="section-label">The NAD Regen Journey</span>
          <h2 className="section-title">🔥 What Happens Over Time<br />With <em>NAD Regen</em></h2>
          <p style={{ marginTop: '14px', color: 'var(--text-mid)', fontSize: '16px' }}>
            This is not instant. The impact builds, over time.
          </p>
          <div className="timeline-steps">
            <div className="timeline-step">
              <div className="step-dot"><span className="step-num">1</span></div>
              <div className="step-body">
                <div className="step-when">Weeks 1–3</div>
                <h4>Subtle Improvements Begin</h4>
                <p>Subtle improvements in clarity and energy. Things feel slightly lighter. You may not be able to articulate it yet  -  but something is shifting at the cellular level.</p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-dot"><span className="step-num">2</span></div>
              <div className="step-body">
                <div className="step-when">30–60 Days</div>
                <h4>More Consistent Focus &amp; Resilience</h4>
                <p>More consistent focus and resilience. Energy is more predictable. Recovery feels faster. You're present in ways you haven't been in a while.</p>
              </div>
            </div>
            <div className="timeline-step">
              <div className="step-dot"><span className="step-num">3</span></div>
              <div className="step-body">
                <div className="step-when">90 Days</div>
                <h4>You Feel Like Yourself Again 🚀</h4>
                <p>You feel more like yourself again  -  and more than that, you feel genuinely good about the fact you're now <strong>ahead of the curve.</strong> Not just living longer  -  but living better.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <div className="article-body">
        <section className="reviews-section">
          <div className="reviews-header">
            <span className="section-label">Real People. Real Results.</span>
            <h2 className="section-title">💬 What People Notice</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
            {['More stable energy', 'Better focus', 'Less burnout', 'Clearer thinking', 'Greater day-to-day resilience'].map(b => (
              <span key={b} style={{
                background: 'var(--cream)',
                border: '1px solid var(--border)',
                padding: '8px 18px',
                borderRadius: '100px',
                fontSize: '15px',
                fontWeight: '600',
                color: 'var(--text-body)',
              }}>✓ {b}</span>
            ))}
          </div>
          <div className="reviews-summary">
            <div className="reviews-score">4.8</div>
            <div className="reviews-meta">
              <div className="reviews-stars">★★★★★</div>
              <div className="reviews-count">Based on 2,400+ verified purchases</div>
            </div>
          </div>
          <div className="reviews-grid">
            {REVIEWS_AGING.map((r, i) => (
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
            <h3>👤 Who This Is For</h3>
            <ul className="who-list">
              {[
                "You want to stay sharp as you age",
                "You care about long-term health",
                "You don't want to \"slow down early\"",
                "You want energy you can rely on",
                "You want to be present for your family  -  fully",
              ].map((item, i) => (
                <li key={i}><span className="tick">✔</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="who-col not">
            <h3>🚫 Who This Is NOT For</h3>
            <ul className="who-list">
              {[
                "Looking for a quick boost",
                "Not willing to stay consistent",
                "Accepting decline as inevitable",
              ].map((item, i) => (
                <li key={i}><span className="cross">✗</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skeptic */}
        <div className="skeptic-section">
          <h3>⚠️ Still Sceptical?</h3>
          <p>That's fair. Most products in this space don't deliver. Which is exactly why NAD Regen was built differently.</p>
          <p>
            When we launched 4 years ago, we didn't have huge marketing budgets.
            All we had was a product that really made a difference  -  and we counted on
            that to be our point of differentiation. That strategy worked. Because NAD Regen
            delivers on its promise.
          </p>
          <p>
            Today, thousands of people across America begin their morning with 2 capsules
            of NAD Regen  -  because of the trust we've earned. There is a reason our repeat
            purchase is so high. There is a reason why reviews reference years, not weeks.
          </p>
        </div>

        {/* Why it matters for your future */}
        <section style={{ padding: '48px 0 16px' }}>
          <span className="section-label">The Bigger Picture</span>
          <h2 className="section-title">👨‍👩‍👧‍👦 Why This Matters<br />For Your <em>Future</em></h2>
          <p style={{ marginTop: '14px', fontSize: '18px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '14px' }}>
            This isn't just about you.
          </p>
          <p style={{ fontSize: '18px', color: 'var(--text-mid)', lineHeight: '1.75', marginBottom: '14px' }}>
            It's about being present with your family. Having energy for the moments that matter. Staying sharp as the years go by.
          </p>
          <div className="pullquote">
            Aging is inevitable.<br />
            <em>Decline doesn't have to be.</em>
          </div>
          <p style={{ fontSize: '18px', color: 'var(--text-mid)', lineHeight: '1.75' }}>
            You can stay sharp. Stay energised. Stay resilient. But only if you support
            what your body is losing. Because when your cells have the energy they need  - 
            <strong> you don't just age. You age well.</strong>
          </p>
        </section>
      </div>

      {/* ── Guarantee ── */}
      <section className="guarantee-section">
        <div className="guarantee-inner">
          <div className="shield-badge">🛡️</div>
          <h2>90-Day Risk-Free Guarantee</h2>
          <div className="big-text">Try It. Feel It. Or Get 100% Back.</div>
          <p>
            Use NAD Regen for 90 days, risk free. If you don't feel a difference  -  energy,
            focus, resilience  -  get every penny back, no questions asked.
          </p>
          <p>
            Sadly, most supplements are a complete waste of money. To build real trust,
            we offer a 100% money-back guarantee. We put our money where our mouth is.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="cta-inner">
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Your Starting Point</span>
          <h2>🚀 Start Your<br /><em>90-Day</em> Journey Today</h2>
          <p>
            Not just living longer  -  but living better.
            Energy you can rely on. Focus that holds up. A future you're genuinely excited about.
          </p>
          <a href={CTA_URL} className="cta-btn" id="cta-btn-l2-bottom">
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
