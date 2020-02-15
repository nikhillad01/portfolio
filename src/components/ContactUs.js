import React, { Component } from "react";
class ContactUs extends React.Component  {
  
  constructor(props) {
    super(props);
    this.state = { name: '',email:"",
    message:"" };
  }
  
  handleChange = (event) => {
    console.log(event.target.name);
    
    this.state[event.target.name] = event.target.value
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state);
    
  }

  handleSubmit=(event)=>{
event.preventDefault()
console.log(this.state);

  }
  render() {
  
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            
          </div>
        </div>
        <div className="center">
        
          {/* <aside className="eigth columns footer-widgets"> */}
            {/* <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                </h4>
              </div> */}

            <form onSubmit={this.handleSubmit}>
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
              {/* <div className=""> */}
              {/* <label> */}
                Name:
                <input
                  name="name" 
                  type="text"
                  required={true}
                  onChange={this.handleChange}
                  // checked={this.state.isGoing}
                  // onChange={this.handleInputChange}
                />
              {/* </label> */}
              {/* </div> */}
              <br />
              {/* <div className=""> */}
              {/* <label> */}
                Email:
                <input
                  name="email"
                  type="email"
                  required={true}
                  // value={this.state.numberOfGuests}
                  onChange={this.handleChange}
                />
              {/* </label> */}
              {/* </div> */}
              <br />
              {/* <div className=""> */}
              {/* <label> */}
                Message:
                <input
                  name="message"
                  type="text"
                  required={true}
                  // value={this.state.numberOfGuests}
                  onChange={this.handleChange}
                />
              {/* </label> */}
              {/* </div> */}
              <br />
              <button type='submit'>Submit</button>
            </form>
          {/* </aside> */}
        </div>
      </section>
    );
  }
}


export default  ContactUs