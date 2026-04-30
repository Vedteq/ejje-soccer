export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-brand">EJJE<br /><em>Incorporated.</em></div>
            <p style={{ color: 'rgba(250,244,232,0.65)', fontSize: 14, maxWidth: 360, lineHeight: 1.65 }}>
              Expanding access to education, mentorship, and community support for underserved children — at home and around the world.<br />
              A 501(c)(3) nonprofit · Spring Hill, FL · Since 2009
            </p>
            <p style={{ color: 'rgba(250,244,232,0.5)', fontSize: 13, marginTop: 8 }}>
              <a href="https://www.facebook.com/ejjesoccer" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', marginRight: 12 }}>Facebook</a>
              <a href="https://www.instagram.com/ejjesoccer" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>@ejjesoccer</a>
            </p>
          </div>
          <div>
            <h4>Programs</h4>
            <a href="#programs">Domestic Education</a>
            <a href="#programs">International Education</a>
            <a href="#programs">Community Support</a>
            <a href="#programs">Youth Empowerment</a>
          </div>
          <div>
            <h4>About</h4>
            <a href="#about">Our mission</a>
            <a href="#impact">Stories of hope</a>
            <a href="#get-involved">Sponsors &amp; partners</a>
            <a href="mailto:soccer@ejje.net">Request annual report</a>
          </div>
          <div>
            <h4>Get involved</h4>
            <a href="https://www.zeffy.com/donation-form/e6583dcc-fd51-4fee-9e71-19062c76afde" target="_blank" rel="noopener noreferrer">Donate (Zeffy)</a>
            <a href="https://gofund.me/a826a227" target="_blank" rel="noopener noreferrer">GoFundMe — U12 Boys</a>
            <a href="#get-involved">Volunteer</a>
            <a href="#get-involved">Sponsor a child</a>
            <a href="mailto:soccer@ejje.net">Contact / Sponsorship</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 EJJE Incorporated · Registered 501(c)(3) nonprofit (formerly EJJE Soccer Academy)</span>
          <span>Spring Hill, FL · <a href="mailto:soccer@ejje.net" style={{ color: 'inherit' }}>soccer@ejje.net</a> · <a href="tel:+18133556671" style={{ color: 'inherit' }}>813-355-6671</a></span>
        </div>
      </div>
    </footer>
  )
}
