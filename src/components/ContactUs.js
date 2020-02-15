import React, { Component } from "react";
class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleChange = event => {
    /**
     * Handles input field change and changes state value
     */
    this.state[event.target.name] = event.target.value;
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    /**
     * Handles form submission
     */
    event.preventDefault();
  };
  render() {
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns"></div>
        </div>
        <div className="center">
          <form onSubmit={this.handleSubmit}>
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
            Name:
            <input
              name="name"
              type="text"
              required={true}
              onChange={this.handleChange}
            />
            <br />
            Email:
            <input
              name="email"
              type="email"
              required={true}
              onChange={this.handleChange}
            />
            Message:
            <input
              name="message"
              type="text"
              required={true}
              onChange={this.handleChange}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactUs;
