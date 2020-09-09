import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import FindActivity from './FindActivity/FindActivity';
import AddActivity from './AddActivity/AddActivity';
import About from './About/About';
import Contact from './Contact/Contact';
import ActivityContext from './ActivityContext/ActivityContext';
import activities from './store';

class App extends React.Component {
  state = {
    activities: activities
  }
  render() {
    const contextValue = {
      activities: this.state.activities
    }
    return (
      <div className="App">
        <ActivityContext.Provider value={contextValue} >
          <Navbar />
          <main>
            <Route
              exact path='/'
              component={Home}
            />
            <Route
              path='/find'
              component={FindActivity}
            />
            <Route
              path='/add'
              component={AddActivity}
            />
            <Route
              path='/about'
              component={About}
            />
            <Route
              path='/contact'
              component={Contact}
            />
          </main>
          <Footer />
        </ActivityContext.Provider>
      </div>
    );
  }
}

export default App;
