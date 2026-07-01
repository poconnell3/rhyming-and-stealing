import './SplashPage.css'

const GRAIN_TEXTURE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n2)'/%3E%3C/svg%3E"

export default function SplashPage() {
  return (
    <main className="splash-viewport">
      <div className="splash-mount">
        <div className="splash-canvas">
          <div
            className="splash-grain"
            style={{ backgroundImage: `url("${GRAIN_TEXTURE}")` }}
          />

          <div className="splash-site-label">RHYMINGANDSTEALING.COM</div>
          <div className="splash-tagline">◆ NO IMITATIONS</div>

          <div className="splash-tape">SIDE A</div>

          <div className="splash-title-wrap">
            <div className="splash-title-block">
              <div className="splash-red-slab" />

              <div className="splash-title-inner">
                <div className="splash-glitch-layer splash-glitch-r">
                  <div className="splash-line splash-line-cream">RHYMING</div>
                  <div className="splash-line splash-line-dark">AND</div>
                  <div className="splash-line splash-line-cream">STEALING</div>
                </div>

                <div className="splash-slice-layer">
                  <div className="splash-line splash-line-cream">RHYMING</div>
                  <div className="splash-line splash-line-dark">AND</div>
                  <div className="splash-line splash-line-cream">STEALING</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
