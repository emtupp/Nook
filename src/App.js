import './App.css';

import Background from './components/Background.js';
import Story from './components/Story.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Story />
      <Contact />
      <Background />
    </div>
  );
}

export default App;
