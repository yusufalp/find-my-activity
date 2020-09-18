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
      results
    })
  }

  render() {
    return (
      <div>
        <header className="find-header">
          <h2>Find Activity</h2>
          <p>
            In this section, you can search activities from the categories listed below and
            click find. The results will be listed below.
          </p>
        </header>
        <section>
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="category">Categories</label>
            <select name="category" id="category" required>
              <option value="">Select a category</option>
              {this.context.categories.map((category, i) =>
                <option
                  key={i}
                  value={category.category}
                >
                  {category.category}
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
              <p>Age Group: {result.agegroup}</p>
            </section>
          )
        }
      </div>
    )
  }
}

export default FindActivity;