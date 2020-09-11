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
import data from './store';

class App extends React.Component {
  state = {
    categories: data[0],
    activities: data[1]
  }
  updateData = (newActivity) => {
    const updatedActivities = [...this.state.activities, newActivity]
    this.setState({
      activities: updatedActivities
    })
  }
  render() {
    const contextValue = {
      categories: this.state.categories,
      activities: this.state.activities,
      updateData: this.updateData
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
