import React from 'react';
import ActivityContext from '../ActivityContext/ActivityContext';
import config from '../config';
import './AddActivity.css'

class AddActivity extends React.Component {
  static contextType = ActivityContext;
  state = {
    name: '',
    content: '',
    duration: '',
    materials: '',
    error: null
  }
  handleDataSubmit(e) {
    e.preventDefault();
    let name = this.state.name
    let content = this.state.content
    const durationEntered = this.state.duration
    const agegroup = e.target.agegroup.value
    const category = e.target.categories.value
    let duration = `${durationEntered} minutes`
    let materials = e.target.materials.value

    if (!name || !content) {
      this.setState({
        error: "Name and content are required"
      })
      return
    }

    if (materials === "") {
      materials = "No materials needed"
    }

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
        agegroup,
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
              min="0"
              onChange={e => this.handleDurationChange(e.target.value)}
              required />
            <label htmlFor="materials">Materials</label>
            <input
              type="text"
              name="materials"
              id="materials"
              placeholder="Pencils, markers and paper"
              onChange={e => this.handleMaterialsChange(e.target.value)} />
            <label htmlFor="agegroup">Age Group*</label>
            <select
              name="agegroup"
              id="agegroup"
              required>
              <option value="">Select an age group</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <label htmlFor="categories">Categories*</label>
            <select
              name="categories"
              id="categories"
              required>
              <option value="">Select a category</option>
              {this.context.categories.map((category, i) =>
                <option key={i}>{category.category}</option>
              )}
            </select>
            <p className="required">* = required fields</p>
            <p className="error">{this.state.error}</p>
            <button
              className='add-button'
              type='submit'
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