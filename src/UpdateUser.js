import React, { Component } from 'react';
import Button from './Button';

class UpdateUserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    // Due to the way React handles form components, you need to store the value of the form input in state
    // and update it using the onChange property. This is why UpdateUserForm is a class component, rather than a function component
  }

  handleSubmit(event) {
    this.props.submitAction(this.state.value); // This triggers the function we passed down from App.js
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="form-inline mx-auto" style={{ width: '500px'}} onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="github-user">Change GitHub User:</label>
              <input id="github-user" className="form-control mx-2 my-1" type="text" value={this.state.value} onChange={this.handleChange} />
          </div>
          <Button type="submit" class_name="primary" text="Submit" />
        </form>
        <p>
          To fetch data from GitHub, enter a GitHub username above and click Submit. That user's data will then be available in the App component under <code>this.state.user</code>.
        </p>
      </div>
    )
  }
}

export default UpdateUserForm;