import { useState } from 'react';
import Home from './pages/Home.jsx';
import TopNav from './components/TopNav.jsx';
import SiteFooter from './components/SiteFooter.jsx';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="app-shell">
      <TopNav activeCategory={activeCategory} onCategorySelect={setActiveCategory} />
      <Home activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
      <SiteFooter />
    </div>
  );
};

export default App;
