const NewsletterSignup = () => (
  <section id="newsletter" className="newsletter content-section">
    <span className="card-kicker section-kicker">Briefings</span>
    <h2>Stay Ready</h2>
    <p className="section-lede">
      Get monthly gear rankings, vetted deals, and field test recaps straight to your inbox.
    </p>
    <form
      className="newsletter-form"
      onSubmit={(event) => {
        event.preventDefault();
        // TODO: integrate real signup endpoint
        console.log('Newsletter signup submitted');
        event.currentTarget.reset();
      }}
    >
      <label className="visually-hidden" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        placeholder="you@example.com"
        required
        aria-label="Email address"
      />
      <button type="submit" className="cta">
        Subscribe
      </button>
    </form>
    <p className="disclosure">
      We respect your inbox. Expect one update per month plus urgent preparedness alerts when they
      matter.
    </p>
  </section>
);

export default NewsletterSignup;
