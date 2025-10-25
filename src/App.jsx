import { useState } from 'react';
import Home from './pages/Home.jsx';
import TopNav from './components/TopNav.jsx';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="app-shell">
      <TopNav activeCategory={activeCategory} onCategorySelect={setActiveCategory} />
      <Home activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
    </div>
  );
};

export default App;
