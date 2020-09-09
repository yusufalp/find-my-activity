import React from 'react';
import ActivityContext from '../ActivityContext/ActivityContext';
import './FindActivity.css';

class FindActivity extends React.Component {
  static contextType = ActivityContext;
  render() {
    const { activities } = this.context
    return (
      <header>
        <section>
          <form action="">
            <label htmlFor="">Categories</label>
            <select name="" id="">
              {activities.map(activity => 
                <option>{activity.name}</option>
              )}
            </select>
            <button className="find-button" type="submit">Find</button>
          </form>
        </section>
        <hr />
        <section>
          <h2>Card 1</h2>
          <p>First result show here</p>
        </section>
      </header>
    )
  }
}

export default FindActivity;