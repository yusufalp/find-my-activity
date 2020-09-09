import React from 'react';
import './AddActivity.css'

class AddActivity extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Add Activitiy</h1>
        </header>
        <section>
          <form action="" method="get">
            <label htmlFor="">Name</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Content</label>
            <textarea type="text" name="" id="" rows="6"/>
            <label htmlFor="">Duration</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Materials</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Age Group</label>
            <select name="" id="">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
            <label htmlFor="">Categories</label>
            <select name="" id="">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
            <button className='add-button' type='submit'>Submit</button>
          </form>
        </section>
      </div>
    )
  }
}

export default AddActivity;