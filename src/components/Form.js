import React from "react";

class Form extends React.Component {

  state={
    username:"",
    password:"",
    currentHomepage: "Registration",
    currentUser: ""
  }

  handleUsername = (username) => {
    this.setState({ username: username })
  }

  handlePassword = (password) => {
    this.setState({ password: password })
  }

  handleClick = () => {
    if (this.state.currentHomepage === "Registration") {
      this.setState({ currentHomepage: "Login" })
    } else {
      this.setState({ currentHomepage: "Registration" })
    }
  }

  handleLogin = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(this.setCurrentUser)
  }

  setCurrentUser = (data) => {
    // console.log('username: ', this.state.username)
    // console.log('password: ', this.state.password)
    // console.log(data)
    // console.log(data.find(user => user.username === this.state.username))
    let user = data.find(user => user.username === this.state.username)
    if (user && this.state.password !== "") {
      this.setState({currentUser: user.username})
    }
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
    console.log(this.state.currentUser)
    return(
      <div>
      <form className="formApp" onSubmit={this.handleSubmit}>
      <h3>{this.state.currentHomepage}</h3>
            <label>Username:<input className="inputForm" type="text" value={this.state.username} onChange={(e) => this.handleUsername(e.target.value)} style={{ display:"block" }}/></label>
            <label>Password:<input className="inputForm" type="password" value={this.state.password} onChange={(e) => this.handlePassword(e.target.value)} style={{ display:"block"}}/></label>
            {
              this.state.currentHomepage === 'Registration'
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
