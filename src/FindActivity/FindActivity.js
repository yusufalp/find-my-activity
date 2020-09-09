import React from 'react';
import ActivityContext from '../ActivityContext/ActivityContext';
import './FindActivity.css';

class FindActivity extends React.Component {
  static contextType = ActivityContext;
  state = {
    results: []
  }

  handleSubmit(e) {
    e.preventDefault();
    const category = e.target.category.value
    const results = this.context.activities.filter(activity =>
      activity.category === category)
    this.setState({
      results: results
    })
  }

  render() {
    const { activities } = this.context
    return (
      <div>
        <header>
          <h2>Find Activity</h2>
        </header>
        <section>
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="">Categories</label>
            <select name="category" id="category" v>
              <option disabled>Select a category</option>
              {activities.map((activity, i) =>
                <option
                  key={i}
                  value={activity.category}
                >
                  {activity.category}
                </option>
              )}
            </select>
            <button
              className="find-button"
              type="submit"
            >Find</button>
          </form>
        </section>
        <hr />
        {
          this.state.results.map((result, i) =>
            <section key={i}>
              <h2>Name: {result.name}</h2>
              <p>Details: {result.content}</p>
              <p>Duration: {result.duration}</p>
              <p>Materials: {result.materials}</p>
            </section>
          )
        }
      </div>
    )
  }
}

export default FindActivity;