const primaryNav = [
  { label: 'Home', href: '#home', key: 'home' },
  { label: 'Gear Rankings', href: '#gear-rankings', key: 'gear' },
  { label: 'Buyers\' Guides', href: '#buyers-guides', key: 'guides' },
  { label: 'Field Tests', href: '#field-tests', key: 'field-tests' },
  { label: 'Blog / News', href: '#blog-news', key: 'blog' },
  { label: 'About / Contact', href: '#about-contact', key: 'about' }
];

const gearCategories = [
  { label: 'All Gear', value: 'all' },
  { label: 'Flashlights', value: 'Flashlights' },
  { label: 'Solar & Power', value: 'Solar & Power' },
  { label: 'Emergency Kits', value: 'Emergency Kits' },
  { label: 'Outdoor Tools', value: 'Outdoor Tools' }
];

const TopNav = ({ activeCategory, onCategorySelect }) => (
  <header className="site-header">
    <div className="site-header__inner">
      <a className="site-brand" href="#home">
        Ready Steady Ranked
      </a>
      <nav className="top-nav" aria-label="Primary navigation">
        <ul>
          {primaryNav.map((item) => (
            <li key={item.key} className="nav-item">
              <a
                className="nav-link"
                href={item.href}
                onClick={
                  item.key === 'gear' || item.key === 'home'
                    ? () => onCategorySelect('all')
                    : undefined
                }
              >
                {item.label}
              </a>
              {item.key === 'gear' ? (
                <ul className="sub-nav" aria-label="Gear Rankings categories">
                  {gearCategories.map((category) => (
                    <li key={category.value}>
                      <button
                        type="button"
                        className={`sub-nav__btn ${
                          activeCategory === category.value ? 'is-active' : ''
                        }`}
                        onClick={() => onCategorySelect(category.value)}
                        aria-pressed={activeCategory === category.value}
                      >
                        {category.label}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default TopNav;
