import React from 'react';
import ActivityContext from '../ActivityContext/ActivityContext';
import config from '../config';
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
    let name = e.target.name.value
    let content = e.target.content.value
    const durationEntered = e.target.duration.value
    const ageGroup = e.target.ageGroup.value
    const category = e.target.categories.value
    let duration = `${durationEntered} minutes`
    let materials = e.target.materials.value

    if (materials === "") {
      materials = "No materials needed"
    }

    name = name.trim()
    content = content.trim()

    const url = config.API_ENDPOINT
    fetch(`${url}/api/activities/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        content,
        duration,
        materials,
        ageGroup,
        category
      })
    })
      .then(() => {
        this.context.getData()
        this.props.history.push('/success')
      })
      .catch(err => console.log(err))
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
          <p>* = required fields</p>
          <form method="get" onSubmit={e => this.handleDataSubmit(e)}>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Drawing"
              onChange={e => this.handleNameChange(e.target.value)}
              required />
            <label htmlFor="content">Content*</label>
            <textarea
              type="text"
              name="content"
              id="content"
              rows="6"
              placeholder="Explain in details..."
              onChange={e => this.handleContentChange(e.target.value)}
              required />
            <label htmlFor="duration">Duration* <span>(in minutes, numbers only)</span></label>
            <input
              type="number"
              name="duration"
              id="duration"
              placeholder="45"
              onChange={e => this.handleDurationChange(e.target.value)}
              required />
            <label htmlFor="materials">Materials</label>
            <input
              type="text"
              name="materials"
              id="materials"
              placeholder="Pencils, markers and paper"
              onChange={e => this.handleMaterialsChange(e.target.value)} />
            <label htmlFor="ageGroup">Age Group*</label>
            <select
              name="ageGroup"
              id="ageGroup"
              required>
              <option value="">Select an age group</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </select>
            <label htmlFor="categories">Categories*</label>
            <select
              name="categories"
              id="categories"
              required>
              <option value="">Select a category</option>
              {this.state.categories.map((category, i) =>
                <option key={i}>{category.category}</option>
              )}
            </select>
            <button
              className='add-button'
              type='submit'
              disabled={!(this.state.name && this.state.content)}
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    )
  }
}

export default AddActivity;