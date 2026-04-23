export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-brand">EJJE<br /><em>Soccer Academy.</em></div>
            <p style={{ color: 'rgba(250,244,232,0.65)', fontSize: 14, maxWidth: 360, lineHeight: 1.65 }}>
              Empowering The Youths Of Today For a Better Tomorrow.<br />
              A 501(c)(3) nonprofit · Free since 2009 · Spring Hill, FL
            </p>
            <p style={{ color: 'rgba(250,244,232,0.5)', fontSize: 13, marginTop: 8 }}>
              <a href="https://www.facebook.com/ejjesoccer" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', marginRight: 12 }}>Facebook</a>
              <a href="https://www.instagram.com/ejjesoccer" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>@ejjesoccer</a>
            </p>
          </div>
          <div>
            <h4>Programs</h4>
            <a href="#programs">Little Kickers</a>
            <a href="#programs">Youth League</a>
            <a href="#programs">Academy Squad</a>
            <a href="#programs">Girls Initiative</a>
            <a href="#programs">Summer Camp</a>
          </div>
          <div>
            <h4>Our story</h4>
            <a href="#mission">Founder&#39;s letter</a>
            <a href="#coaches">Coaches &amp; staff</a>
            <a href="#impact">Kid stories</a>
            <a href="#donors">Sponsors &amp; donors</a>
            <a href="mailto:soccer@ejje.net">Request annual report</a>
          </div>
          <div>
            <h4>Help out</h4>
            <a href="https://www.zeffy.com/donation-form/e6583dcc-fd51-4fee-9e71-19062c76afde" target="_blank" rel="noopener noreferrer">Donate (Zeffy)</a>
            <a href="https://gofund.me/a826a227" target="_blank" rel="noopener noreferrer">GoFundMe — U12 Boys</a>
            <a href="#join">Register a player</a>
            <a href="#join">Volunteer</a>
            <a href="mailto:soccer@ejje.net">Contact / Sponsorship</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 EJJE Soccer Academy · 501(c)(3) nonprofit</span>
          <span>Spring Hill, FL · <a href="mailto:soccer@ejje.net" style={{ color: 'inherit' }}>soccer@ejje.net</a> · <a href="tel:+18133556671" style={{ color: 'inherit' }}>813-355-6671</a></span>
        </div>
      </div>
    </footer>
  )
}
