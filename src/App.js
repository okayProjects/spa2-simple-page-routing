import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/layouts/Navigation/Navigation';
import Header from './components/layouts/Header/Header';
import Page from './components/layouts/Page/Page';
import Footer from './components/layouts/Footer/Footer';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            {<Header />}
          </header>
          <main>
            <aside>
              {<Navigation />}
            </aside>
            <section className='page'>
              {<Page />}
            </section>
          </main>
          <footer>
            {<Footer />}
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
