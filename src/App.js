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
import config from './config';

class App extends React.Component {
  state = {
    categories: [],
    activities: []
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    const url = config.API_ENDPOINT
    fetch(`${url}/api/categories`)
      .then(res => res.json())
      .then(categories => {
        this.setState({
          categories
        })
        return fetch(`${url}/api/activities`)
      })
      .then(res => res.json())
      .then(activities => {
        this.setState({
          activities
        })
      })
      .catch(err => console.log(err))
  }
  render() {
    const contextValue = {
      categories: this.state.categories,
      activities: this.state.activities,
      getData: this.getData
    }
    return (
      <div className="App">
        <ActivityContext.Provider value={contextValue} >
          <div className="mainpage-header">
          </div>
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
