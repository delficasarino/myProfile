import './App.css';
import './css/flexbox.css';
import './css/general.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Pages from './components/Pages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
