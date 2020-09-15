import React from 'react';
import ActivityContext from '../ActivityContext/ActivityContext';
import './AddActivity.css'

class AddActivity extends React.Component {
  static contextType = ActivityContext;
  state = {
    categories: this.context.categories,
    activities: this.context.activities,
    name: '',
    content: '',
    duration: '',
    materials: '',
  }
  handleDataSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value
    const content = e.target.content.value
    const duration = e.target.duration.value
    const materials = e.target.materials.value
    const ageGroup = e.target.ageGroup.value
    const category = e.target.categories.value
    const newActivity = {
      name,
      content,
      duration,
      materials,
      ageGroup,
      category
    }
    this.context.updateData(newActivity);
    this.props.history.push('/');
  }
  handleNameChange(value) {
    this.setState({
      name: value.trim()
    })
  }
  handleContentChange(value) {
    this.setState({
      content: value.trim()
    })
  }
  handleDurationChange(value) {
    this.setState({
      duration: value.trim()
    })
  }
  handleMaterialsChange(value) {
    this.setState({
      materials: value.trim()
    })
  }
  render() {
    return (
      <div>
        <header>
          <h2>Add Activity</h2>
          <p>
            In this section, you can share your activity with our community by filling out the 
            form below and let people find it by searching through our list of activities. 
            Thank you in advance for sharing.
          </p>
        </header>
        <section>
          <form method="get" onSubmit={e => this.handleDataSubmit(e)}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={e => this.handleNameChange(e.target.value)} />
            <label htmlFor="content">Content</label>
            <textarea type="text" name="content" id="content" rows="6" onChange={e => this.handleContentChange(e.target.value)} />
            <label htmlFor="duration">Duration</label>
            <input type="text" name="duration" id="duration" onChange={e => this.handleDurationChange(e.target.value)} />
            <label htmlFor="materials">Materials</label>
            <input type="text" name="materials" id="materials" onChange={e => this.handleMaterialsChange(e.target.value)} />
            <label htmlFor="ageGroup">Age Group</label>
            <select name="ageGroup" id="ageGroup" required>
              <option value="">Select an age group</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
            <label htmlFor="categories">Categories</label>
            <select name="categories" id="categories" required>
              <option value="">Select a category</option>
              {this.state.categories.map((category, i) =>
                <option key={i}>{category.category}</option>
              )}
            </select>
            <button className='add-button' type='submit'>Submit</button>
          </form>
        </section>
      </div>
    )
  }
}

export default AddActivity;