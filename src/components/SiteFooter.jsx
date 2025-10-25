const SiteFooter = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <div>
        <strong>Ready Steady Ranked</strong>
        <p>Affiliate-supported gear intelligence for preppers and emergency planners.</p>
      </div>
      <nav aria-label="Footer links">
        <ul>
          <li>
            <a href="#about-contact">About</a>
          </li>
          <li>
            <a href="#privacy">Privacy</a>
          </li>
          <li>
            <a href="#disclaimer">Disclaimer</a>
          </li>
        </ul>
      </nav>
    </div>
    <p className="ftc-disclosure" id="disclaimer">
      FTC Disclosure: We may earn commissions when you purchase through links on our site. Gear
      recommendations remain 100% editorially independent.
    </p>
  </footer>
);

export default SiteFooter;
