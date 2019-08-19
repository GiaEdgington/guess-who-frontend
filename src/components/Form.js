import React from "react";

class Form extends React.Component {

  state={
    username:"",
    password:"",
    currentHomepage: "registration"
  }

  handleUsername = (username) => {
    this.setState({ username: username })
  }

  handlePassword = (password) => {
    this.setState({ password: password })
  }

  handleClick = () => {
    this.setState({ currentHomepage: "login"})
  }

  handleLogin = (e) => {
    e.preventDefault()
    //console.log('test')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(response => response.json())
    .then(console.log)
  }

  render() {

    return(
      <div>
      <form className="formApp" onSubmit={this.handleSubmit}>
      <h3>Register</h3>
            <label>Username:<input className="inputForm" type="text" value={this.state.username} onChange={(e) => this.handleUsername(e.target.value)} style={{ display:"block" }}/></label>
            <label>Password:<input className="inputForm" type="text" value={this.state.password} onChange={(e) => this.handlePassword(e.target.value)} style={{ display:"block"}}/></label>
            {
              this.state.currentHomepage === 'registration'
              ?
            <input type="submit" value="Submit" onClick={this.handleSubmit}/>
              :
            <input type="submit" value="Submit" onClick={this.handleLogin}/>
            }
            <p onClick={this.handleClick}>Or Sign in here</p>
        </form>
        </div>
    )
  }
}

export default Form;
